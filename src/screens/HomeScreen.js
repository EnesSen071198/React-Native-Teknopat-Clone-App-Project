import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import data from "../data/Data.json"; // Dosyayı içe aktar

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
        )}
        scrollEnabled={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  post: {
    marginBottom: 20
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5
  },
  description: {
    fontSize: 14,
    color: "gray"
  },
  category: {
    fontSize: 12,
    color: "blue",
    marginTop: 5
  }
});

export default HomeScreen;
