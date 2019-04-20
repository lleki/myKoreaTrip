
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

const Navbar = props => {
  const handlePress = article => {
    props.selectArticle(article);

    props.history.push("/articleDetails");
  };
  return (
    <View>


    </View>
  );
};
export default Navbar;
{/* <FlatList
keyExtractor={article => article.number}
data={articles}
renderItem={({ item }) => (
  <TouchableOpacity onPress={() => handlePress(item)}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
)}
/> */}
