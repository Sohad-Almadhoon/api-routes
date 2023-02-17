import { comments } from "../../../data/comment";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((comment) => comment.id === Number(commentId));
  if (req.method === "GET") res.status(200).json(comment);
  else if (req.method === "DELETE") {
    const deletedComment = comments.find((comment) => comment.id === commentId);
    const index = comments.findIndex((comment) => comment.id === commentId);
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
