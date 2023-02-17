import React from "react";
import { comments } from "../../data/comment";

const comment = ({ comment }) => {
  if (!comment) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>
        {comment.id} - {comment.description}
      </h1>
    </div>
  );
};

export default comment;
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  // const response = await fetch(`http://localhost:3000/api/comments/${params.commentId}`);
  // const data = await response.json();
  const comment = comments.find((comment) => comment.id === +params.commentId);
  return {
    props: {
      comment,
    },
  };
};
