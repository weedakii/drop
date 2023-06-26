import { useRef } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { View, FlatList, Image, Text } from "react-native";

const Offers = ({ offers }) => {
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });

  const renderMeal = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: `https://back.amadagency.net/storage/${item.image}`,
        }}
        style={styles.cardImg}
        // resizeMode="contain"
      />
      <View style={styles.cardCon}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price} EGP</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      horizontal
      directionalLockEnabled={true}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={scrollToEnd}
      contentContainerStyle={styles.container}
    >
      <FlatList
        data={offers}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
  card: {
    marginTop: 10,
    backgroundColor: "#f6f6f6",
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 20,
    shadowColor: "#333",
    elevation: 10,
    boxShadow: "2px 5px 15px #999",
  },
  cardImg: {
    height: 224,
    borderRadius: 20,
  },
  cardCon: {
    flexDirection: "column",
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: "#e86917",
    marginTop: 10,
  },
});
