const { APP_ID } = require("@angular/core");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type ,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );

  next();
});
app.post("/api/posts",(req,res,next)=>{
  console.log(req.body);
  res.status(200).json({'message':'It worked'});
})

app.use("/api/posts", (req, res, next) => {
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ];
  res.status(200).json(posts);
});


module.exports = app;
