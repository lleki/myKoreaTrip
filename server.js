var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');
const cors = require('cors')


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
    photoUrl: String
    description: String
    topic: String
  }
`);

var articlesData = [
  {
    id:1,
    title: "Street Food",
    photoUrl: "food.jpg",
    description:'description goes here',
    topic: "food"
  },
  {
    id: 2,
    title: "Temples and Sakura",
    photoUrl: "scenic.jpg",
    description:'description goes here',
    topic: "scenic"
  },
  {
    id: 3,
    title: "Art Museum Visit",
    photoUrl: "art.jpg",
    description: 'description goes here',
    topic: "art"
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

app.use(cors())
app.use(
  "/graphql",
  express_graphql({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(4000, () =>
  console.log("express graphql server is running on localhost:4000/graphql")
);
