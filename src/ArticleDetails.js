import React from "react";
import { View, Text, Image, Platform, Button } from "react-native";
import { Link } from "./routing";

import { Box, Title, Subtitle } from "./styledComponents/";
import Card from "./Card";

const ArticleDetails = props => {
  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );
  if (!props.article) {
    return (
      <View>
        {backButton}
        <Text>No Article selected</Text>
      </View>
    );
  }



  const selectedArticle = props.article;
  console.log('selectedaritcle', selectedArticle)
  return (
    <View>
      <Box p={3} width={500} height={400}>
        <Card heading="Title" content={selectedArticle.title} />
        <Image
          style={{ width: 200, height: 200, borderRadius: 5 }}
          source={{ uri: selectedArticle.photoUrl }}
        />


      </Box>
    </View>
  );
};
export default ArticleDetails;


