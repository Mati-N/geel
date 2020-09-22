import React, { useState, useEffect, useRef, lazy } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LIKED, LIKE, CREATE_COMMENT, GET_POST } from "../../Queries";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Liked = lazy(() => import("../SVG/Like.svg"));
const Heart = lazy(() => import("../SVG/Heart.svg"));
const Comments = lazy(() => import("../SVG/Comments.svg"));

const PostItem = ({
  text,
  title,
  username,
  id,
  likeCount,
  createdAt,
  user_id,
  commentCount,
  show_comment,
}) => {
  const initialState = {
    done: false,
    likes: likeCount,
    hasMore: false,
    height: "32vh",
    loading: true,
    comments: commentCount,
    expand: false,
  };
  const [liked] = useLazyQuery(LIKED, {
    variables: { post_id: id },
    onCompleted: (data) => {
      setState({ ...state, liked: data.liked });
    },
  });

  const [hovered, setHovered] = useState(false);
  const [comment, setComment] = useState("");
  const self = useRef(null);

  const [likePost] = useMutation(LIKE);
  const [addComment] = useMutation(CREATE_COMMENT);
  const [state, setState] = useState(initialState);

  const expandText = useSpring({
    to: {
      height: state.expand ? `${self.current.scrollHeight}px` : "230px",
    },
    from: {
      height: !state.expand ? "230px" : `${self.current.scrollHeight}px`,
    },
    duration: "0.9s",
  });

  useEffect(() => {
    liked();
    const hasMore = self.current.scrollHeight > self.current.clientHeight;
    if (hasMore) {
      self.current.style.maxHeight = "none";
      self.current.style.height = "230px";
    }
    setState({
      ...state,
      hasMore,
      loading: false,
    });
  }, []);

  const timeSince = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
      const flr = Math.floor(interval);
      return Math.floor(interval) + (flr === 1 ? " year" : " years");
    }

    interval = seconds / 2592000;
    if (interval > 1) {
      const flr = Math.floor(interval);
      return flr + (flr === 1 ? " month" : " months");
    }

    interval = seconds / 86400;
    if (interval > 1) {
      const flr = Math.floor(interval);
      return Math.floor(flr) + (flr === 1 ? " day" : " days");
    }

    interval = seconds / 3600;
    if (interval > 1) {
      const flr = Math.floor(interval);
      return flr + (flr === 1 ? " hour" : " hours");
    }

    interval = seconds / 60;
    if (interval > 1) {
      const flr = Math.floor(interval);
      return flr + (flr == 1 ? " minute" : " minutes");
    }
    return "Seconds";
  };

  const like = () => {
    likePost({ variables: { post_id: id } })
      .catch((error) => console.log(error))
      .then(({ data: { likePost } }) => {
        setState({
          ...state,
          liked: !state.liked,
          likes: likePost.post.likeCount,
        });
      });
  };
  const add_comment = (e) => {
    e.preventDefault();
    addComment({
      variables: { id, comment },
      update: (cache, { data }) => {
        if (cache) {
          let { postComments } = cache.readQuery({
            query: GET_POST,
            variables: { id },
          });
          console.log(postComments);
          if (postComments) {
            const newData = {
              ...postComments,
              edges: [
                {
                  __typename: "CommentNodeConnection",
                  node: data.createComment.comment,
                },
                ...postComments.edges,
              ],
            };
            cache.writeQuery({
              query: GET_POST,
              variables: { id },
              data: {
                postComments: newData,
              },
            });
          }
        }
      },
    });
  };

  return (
    <div className="post card">
      <div className="post-top card-top">
        <div className="post-info-top">
          <Link to={`/user/${user_id}`} className="post-user">
            {" "}
            {username}{" "}
          </Link>
          <small className="post-time">
            {timeSince(new Date(createdAt))} ago{" "}
          </small>
        </div>
        <h5 className="post-title">{title}</h5>
      </div>
      <animated.pre
        ref={self}
        className={`post-text`}
        style={state.hasMore ? expandText : {}}
      >
        {text}
        {state.hasMore && (
          <button
            className="more"
            onClick={() => {
              setState({ ...state, expand: !state.expand });
            }}
          >
            {state.expand ? "less" : "more"}
          </button>
        )}
      </animated.pre>
      {!state.loading && (
        <>
          <div className="info-bottom">
            <span
              className="like"
              onClick={() => {
                like();
              }}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              onMouseLeave={() => setHovered(false)}
            >
              {!hovered ? (
                state.liked ? (
                  <Liked className="like-icon" />
                ) : (
                  <Heart className="like-icon" />
                )
              ) : !state.liked ? (
                <Liked className="like-icon" />
              ) : (
                <Heart className="like-icon" />
              )}
              {state.likes > 0 && state.likes}
            </span>
            <span className="like">
              <Link to={`/post/${id}`} className="like-icon">
                <Comments />
              </Link>
              {state.comments > 0 && state.comments}
            </span>
          </div>

          {show_comment && (
            <span className="comment-form">
              <form onSubmit={add_comment} className="form-group comment-form">
                <input
                  className="form-control"
                  type="text"
                  id="comment"
                  name="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button className="btn btn-teal" type="submit" id="btn">
                  Comment
                </button>
              </form>
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default PostItem;
