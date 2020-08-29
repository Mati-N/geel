import React, { useState, lazy } from "react";
import { GET_POSTS } from "../../Queries";
import { useQuery } from "@apollo/client";
import { Waypoint } from "react-waypoint";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";
const Offline = lazy(() => import("./Offline"));
const Posts = lazy(() => import("../post/Posts"));

function Home() {
  const { loading, data, error, fetchMore, refetch } = useQuery(GET_POSTS);
  const [spin, setSpin] = useState(true);

  if (loading || !data || data.edges.length < 1)
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

  if (error) {
    return (
      <>
        <Offline />
        <button className="btn btn-teal" onClick={refetch}>
          Refresh
        </button>
      </>
    );
  }

  const more = () => {
    fetchMore({
      query: GET_POSTS,
      variables: { cursor: data.posts.pageInfo.endCursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setSpin(true);
        if (!previousResult.posts.pageInfo.hasNextPage) {
          setSpin(false);
          return previousResult;
        }
        const newEdges = fetchMoreResult.posts.edges;
        const pageInfo = fetchMoreResult.posts.pageInfo;

        return newEdges.length
          ? {
              posts: {
                __typename: previousResult.posts.__typename,
                edges: [...previousResult.posts.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult;
      },
    });
  };

  return (
    <>
      <div className="main">
        <Posts posts={data.edges} self={false} id={null} />
        <Waypoint onEnter={more}>
          <div className="spinner">{spin && <Spinner size={40} />}</div>
        </Waypoint>
      </div>
    </>
  );
}

export default Home;
