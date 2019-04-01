import React from "react";
import { View, Text, Image, Platform, Button, Share } from "react-native";
import { Link } from "./routing";

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
      <View>
        <View>
          <Text>{`#${selectedArticle.number}`}</Text>
        </View>
        <View>
          <Text>{`Name: ${selectedArticle.name}`}</Text>
        </View>
        <View>
          <Text>{`Type: ${selectedArticle.type}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: selectedArticle.photoUrl }}
          />
        </View>
        {Platform.OS !== "web" && (
          <View>
            <Button title="Share" onPress={this.handlePress} />
          </View>
        )}
      </View>
    </View>
  );
};
export default ArticleDetails;
