import React from "react";
import { View, Text } from "react-native";

import { Box } from "./styledComponents/";
import Card from "./Card";

const ArticleDetails = props => {
  if (!props.article) {
    return (
      <View>
        <Text>No Article selected</Text>
      </View>
    );
  }

  const selectedArticle = props.article;

  return (
    <Box p={3} width={500} height={400}>
      <Card
        heading={selectedArticle.title}
        boxShadow={1}
        content={selectedArticle.description}
        image={selectedArticle.photoUrl}
      />
    </Box>
  );
};
export default ArticleDetails;
