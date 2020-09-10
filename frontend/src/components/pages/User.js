import React, { useState, useContext, useEffect, lazy } from "react";
import { GET_USER, USER_POSTS, FOLLOW } from "../../Queries";
import { useQuery, useMutation } from "@apollo/client";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";
import AuthContext from "../../context/auth/AuthContext";
import AlertContext from "../../context/alert/AlertContext";
import { Redirect } from "react-router-dom";
const Offline = lazy(() => import("./Offline"));
const Posts = lazy(() => import("../post/Posts"));

const User = ({ match }) => {
  const {
    loading: user_loading,
    data: user_data,
    error: user_error,
  } = useQuery(GET_USER, { variables: { id: match.params.id } });
  const { loading, data, error, fetchMore } = useQuery(USER_POSTS, {
    variables: { id: match.params.id },
  });
  const { Logout, user } = useContext(AuthContext);
  const { removeAlert, setAlert } = useContext(AlertContext);
  const [spin, setSpin] = useState(false);
  const [following, setFollowing] = useState({
    first: true,
    following: null,
    followers: "",
  });
  const [follow] = useMutation(FOLLOW);

  useEffect(() => {
    removeAlert();
  }, []);

  if (user == match.params.id) {
    return <Redirect to="/account" />;
  }

  if (loading || !data || user_loading || !user_data)
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

  if (error || user_error) {
    return <Offline />;
  }

  const more = () => {
    fetchMore({
      query: USER_POSTS,
      variables: {
        cursor: data.userPost.pageInfo.endCursor,
        id: match.params.id,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setSpin(true);
        const newEdges = fetchMoreResult.userPost.edges;
        const pageInfo = fetchMoreResult.userPost.pageInfo;

        if (!previousResult.userPost.pageInfo.hasNextPage) {
          setSpin(false);
          return previousResult;
        }

        return newEdges.length
          ? {
              userPost: {
                __typename: previousResult.userPost.__typename,
                edges: [...previousResult.userPost.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult;
      },
    });
  };

  if (user_data.userGet == null) {
    return <h1>User Does Not Exist</h1>;
  }

  const followIt = () => {
    follow({ variables: { id: match.params.id } }).then(
      ({ data: { followUser } }) => {
        setFollowing({
          ...following,
          following: !following.following,
          followers: followUser.user.followerCount,
        });
      }
    );
  };

  if (!loading) {
    if (following.first) {
      setFollowing({
        first: false,
        following: user_data.isFollowing,
        followers: user_data.userGet.followerCount,
      });
    }
  }

  const { userPost } = data;

  return (
    <>
      <div className="account-info">
        <div className="account-info-top">
          <span className="username" style={{ display: "block" }}>
            {user_data.userGet.username}
          </span>
        </div>

        <div className="info-mini">
          <button className="btn btn-teal" onClick={followIt}>
            {!following.following ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-plus"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(248, 248, 248)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 11h6m-3 -3v6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-minus"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(248, 248, 248)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <line x1="16" y1="11" x2="22" y2="11" />
              </svg>
            )}{" "}
            {following.following ? "Unfollow" : "Follow"}
          </button>
          <span className="info">
            {user_data.userGet.postCount > 0
              ? user_data.userGet.postCount
              : "No"}{" "}
            Post{user_data.userGet.postCount > 1 ? "s" : ""}
          </span>
          <span className="info">
            {following.followers > 0 ? following.followers : "No"} Follower
            {following.followers > 1 ? "s" : ""}
          </span>
        </div>
      </div>
      <Posts
        posts={userPost.edges}
        self={true}
        username={user_data.userGet.username}
        id={match.params.id}
        more={more}
        spin={spin}
      />
    </>
  );
};

export default User;
