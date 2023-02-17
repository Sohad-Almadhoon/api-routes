import React, { useEffect, useState } from "react";

const Comments = () => {
  let [comments, setComments] = useState([]);
  const [comment, addComment] = useState("");
  const loader = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const sumbitHandler = async () => {
    addComment("");
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const deleteHandler = async (commentId) => {
    await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    loader();
  };
  const updateHandler = async (description, id) => {
    // addComment(description);
    comments = comments.map((comment) => {
      if (comment.id === id) {
        comment.description = description;
      }
      return comment;
    });
  };

  return (
    <>
      <input value={comment} onChange={(e) => addComment(e.target.value)} />
      <button onClick={sumbitHandler}>Submit Comment</button>
      <button onClick={loader}>Load Comments</button>
      {comments.map((comment) => {
        if (comment.description) {
          return (
            <div key={comment.id}>
              {comment.description}
              <button
                onClick={() => updateHandler(comment.description, comment.id)}
              >
                UPDATE
              </button>
              <button onClick={() => deleteHandler(comment.id)}>DELETE</button>
            </div>
          );
        }
      })}
    </>
  );
};

export default Comments;
