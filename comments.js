// Create web server
// 1. Create a web server
// 2. Create a route for '/'
// 3. Create a route for '/comments'
// 4. Create a route for '/comments/:commentId'
// 5. Listen for requests on port 3000

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { id: 1, author: 'John Doe', text: 'Hello, world!' },
  { id: 2, author: 'Jane Doe', text: 'Hi there!' },
  { id: 3, author: 'John Smith', text: 'How are you?' }
];

app.get('/', (req, res) => {
  res.send('Welcome to the comments page!');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:commentId', (req, res) => {
  const commentId = Number(req.params.commentId);
  const comment = comments.find((comment) => comment.id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});