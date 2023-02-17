import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json(comments);
  else if (req.method === "POST") {
    const comment = req.body.comment;
    comments.push({
      id: Date.now(),
      description: comment,
    });
    res.status(201).json(comment);
  } 
}
