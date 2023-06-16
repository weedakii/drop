import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const Meals = ({ meals }) => {
  const renderMeal = ({ item }) => (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://back.amadagency.net/storage/${item.image}` }}
        style={styles.img}
        className="scale-125 rounded-full"
      />
      <Text className="text-slate-400 text-left mb-1 text-base -mt-1">
        {item.cat}
      </Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text className="text-slate-600 font-bold text-lg">{item.price} EGP</Text>
    </View>
  );

  return (
    <FlatList
      data={meals}
      renderItem={renderMeal}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    marginTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    top: -30,
    alignSelf: "center",
  },
  name: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 5,
    color: "#ed8a48",
  },
  price: {
    fontSize: 14,
    color: "#777",
    paddingBottom: 6,
  },
});

export default Meals;
