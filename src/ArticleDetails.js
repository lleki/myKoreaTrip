import React from "react";
import { View, Text, Image, Platform, Button, Share } from "react-native";
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
  if (!props.selectedArticle) {
    return (
      <View>
        {backButton}
        <Text>No Article selected</Text>
      </View>
    );
  }

  const handlePress = () => {
    Share.share({
      message: "Check out my favorite Pokemon!",
      url: props.selectedArticle.photoUrl
    });
  };

  const selectedArticle = props.selectedArticle;
  return (
    <View>
      <Box p={3} width={500} height={400}>
        <Card heading="Title" content={selectedArticle.name} />
        <Image
          style={{ width: 200, height: 200, borderRadius: 5 }}
          source={{ uri: selectedArticle.photoUrl }}
        />

        {Platform.OS !== "web" && (
          <View>
            <Button title="Share" onPress={this.handlePress} />
          </View>
        )}
      </Box>
    </View>
  );
};
export default ArticleDetails;
