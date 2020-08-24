import React, { useState, useContext, useEffect } from "react";
import { GET_USER, USER_POSTS, FOLLOW } from "../../Queries";
import { useQuery, useMutation } from "@apollo/client";
import PostItem from "../post/PostItem";
import { Waypoint } from "react-waypoint";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";
import AuthContext from "../../context/auth/AuthContext";
import AlertContext from "../../context/alert/AlertContext";
import { Link, Redirect } from "react-router-dom";
import Offline from "./Offline";

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
    following: false,
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

  const followIt = () => {
    follow({ variables: { id: match.params.id } }).then(
      ({ data: { followUser } }) => {
        setFollowing({
          ...following,
          following: !following.following,
          followers: followUser.user.followers.edges.length,
        });
      }
    );
  };

  if (!loading) {
    if (following.first) {
      setFollowing({
        first: false,
        following: user_data.isFollowing,
        followers: user_data.userGet.followers.edges.length,
      });
    }
  }

  const { userPost } = data;

  return (
    <div className="main">
      <div className="account-info">
        <div className="account-info-top">
          <span className="username" style={{ display: "block" }}>
            {user_data.userGet.username}
          </span>
        </div>
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
        <div className="info-mini">
          <span className="info">
            Posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#607D8B"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>{" "}
            {user_data.userGet.posts.edges.length}
          </span>
          <span className="info">
            Followers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#607D8B"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>{" "}
            {following.followers}
          </span>
        </div>
      </div>
      <div className="main">
        {userPost.edges.map(({ node }) => (
          <PostItem
            key={`${node.id}k`}
            {...node}
            likes={node.likers.length}
            comments={node.commentSet.length}
            user_id={user_data.userGet.id}
            username={user_data.userGet.username}
          />
        ))}
        <Waypoint
          onEnter={() => {
            more();
          }}
        >
          <div className="spinner">{spin && <Spinner size={40} />}</div>
        </Waypoint>
      </div>
    </div>
  );
};

export default User;
