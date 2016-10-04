import express from "express";

const app = express();

app.get("/api/posts/:type", (req, res) => {
  const options = {
    limit: 10,
    offset: 0,
    ...req.query
  };

  const { type } = req.params;

  const posts = Array.from({length: options.limit}, (v, k) => {
    const j = k + parseInt(options.offset);
    return {
      id: j,
      title: `${type} Post ${j}`,
      body: `This is ${type} post ${j}`
    };
  });

  res.json(posts);
});

const port = 3009;

app.listen(
  port,
  () => console.log(`Express listening on port ${port}`)
);
