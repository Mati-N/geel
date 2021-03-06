import React, { useState, useEffect, lazy } from "react";
import { SELF_POSTS, SELF_USER } from "../../Queries";
import { useQuery } from "@apollo/client";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authAtom, alertAtom } from "../../atoms";
const Posts = lazy(() => import("../post/Posts"));
const AccountInfo = lazy(() => import("../layout/AccountInfo"));

const Account = () => {
  const {
    loading: user_loading,
    data: user_data,
    error: user_error,
  } = useQuery(SELF_USER, {
    pollInterval: 3000,
  });
  const { loading, data, error, fetchMore, refetch } = useQuery(SELF_POSTS);
  const { user } = useRecoilValue(authAtom);
  const removeAlert = useResetRecoilState(alertAtom);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    removeAlert();
  }, []);

  if (loading || !data || user_loading)
    return (
      <div className="spinner">
        <Spinner
          size={50}
          style={{
            margin: "auto",
          }}
        />
      </div>
    );

  if (error || user_error) return `${error}`;

  const more = () => {
    fetchMore({
      query: SELF_POSTS,
      variables: { cursor: data.selfPost.pageInfo.endCursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setSpin(true);
        const newEdges = fetchMoreResult.selfPost.edges;
        const pageInfo = fetchMoreResult.selfPost.pageInfo;

        if (!previousResult.selfPost.pageInfo.hasNextPage) {
          setSpin(false);
          return previousResult;
        }

        return newEdges.length
          ? {
              selfPost: {
                __typename: previousResult.selfPost.__typename,
                edges: [...previousResult.selfPost.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult;
      },
    });
  };

  const { selfPost: post } = data;
  return (
    <>
      <AccountInfo user_data={user_data} />
      <Posts
        posts={post.edges}
        self={true}
        id={user}
        username="You"
        more={more}
        spin={spin}
        refetch={refetch}
        imagePath={user_data.selfUser.imagePath}
      />
    </>
  );
};

export default Account;
