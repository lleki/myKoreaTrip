import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Box } from "./styledComponents/";
import Card from "./Card";

const ArticleDetails = props => {
  if (!props.article) {
    return (
      <View>
        <Text>No Articles</Text>
      </View>
    );
  }

  const selectedArticle = props.article;
  const onArticleClick = props.onPress;

  return (
    <TouchableOpacity onPress={() => onArticleClick(selectedArticle.id)}>
      <Box p={3} width={500} height={400}>
        <Card
          heading={selectedArticle.title}
          boxShadow={1}
          content={selectedArticle.description}
          image={selectedArticle.photoUrl}
        />
      </Box>
    </TouchableOpacity>
  );
};
export default ArticleDetails;
