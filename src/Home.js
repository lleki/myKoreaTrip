// src/Home.js
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import articles from "./articlesStore";
const Home = props => {
  const handlePress = article => {
    props.selectArticle(article);

    props.history.push("/articleDetails");
  };
  return (
    <View>
      <Image
        style={{ width: 500, height: 500, borderRadius: 5 }}
        source={require("./images/korea-cover.jpg")}
      />
      <FlatList
        keyExtractor={article => article.number}
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Home;
