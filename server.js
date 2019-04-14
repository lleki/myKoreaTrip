const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

//graphql schema
const schema = buildSchema(`
  type Query{
    article(id: Int!): Article
    articles(topic: String): [Article]
  }
  type Mutation{
    updateArticleTopic(id: Int!, topic: String!): Article
  }
  type Article{
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

var articlesData = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs/"
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/"
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://codingthesmartway.com/courses/understand-javascript/"
  }
];

const getArticle = args => {
  const id = args.id;
  return articlesData.filter(article => {
    return (article.id = id);
  })[0];
};

const getArticles = args => {
  if (args.topic) {
    const topic = args.topic;
    return articlesData.filter(article => (article.topic = topic));
  } else {
    return articlesData;
  }
};

const updateArticleTopic = ({ id, topic }) => {
  articlesData.map(article => {
    if (article.id === id) {
      article.topic = topic;
      return article;
    }
  });
  return articlesData.filter(article => (article.id = id))[0];
};
//root resolver
const root = {
  article: getArticle,
  articles: getArticles,
  updateArticleTopic: updateArticleTopic
};

// create an express server and a graphql endpoint

const app = express();
app.use(
  "/graphql",
  express_graphql({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(4000, () =>
  console.log("express graphql server is running on localhost:4000/graphql")
);
