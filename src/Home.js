// src/Home.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import articles from "./articlesStore";
const Home = props => {
  const handlePress = article => {
    props.selectArticle(article);
    props.history.push("/articleDetails");
  };
  return (
    <View>
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
