import { useContext, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CartContext } from "../../context";

function CartCard({ item }) {
  const [count, setCount] = useState(1);

  const { editQty } = useContext(CartContext);

  useEffect(() => {
    setCount(item?.qty);
  }, []);

  useEffect(() => {
    editQty(item.id, count);
  }, [count]);

  function addQty() {
    setCount((c) => c + 1);
  }
  function decreaseQty() {
    setCount((c) => c - 1);
  }
  console.log(item);

  return (
    <View style={styles.mealContainer}>
      {/* Image side */}
      <Image
        source={{
          uri: `https://back.amadagency.net/storage/${item?.image}`,
        }}
        alt="image not found"
        style={{
          height: 80,
          width: 80,
          marginHorizontal: 10,
          marginRight: 20,
        }}
        resizeMode="contain"
      />

      {/* Center Side */}
      <View style={styles.centerContent}>
        <Text
          style={{
            textAlign: "left",
            fontWeight: 800,
            color: "#333",
            fontSize: 20,
          }}
        >
          {item?.name}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#777",
            fontWeight: 700,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          {item?.desc}
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 18,
            fontWeight: 800,
            color: "#edaa4b",
          }}
        >
          {item?.price * count} <Text>EGP</Text>
        </Text>
      </View>

      {/* right side */}
      <View style={styles.rightContent}>
        <Text
          style={{
            color: "#333",
            fontWeight: 800,
            marginBottom: 7,
            fontSize: 22,
            textAlign: "center",
            width: "100%",
          }}
        >
          {count}
        </Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.btnRight, styles.btn]}
            onPress={decreaseQty}
          >
            <FontAwesome name="minus" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnLeft, styles.btn]}
            onPress={addQty}
          >
            <FontAwesome name="plus" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartCard;

const styles = StyleSheet.create({
  mealContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 6,
    boxShadow: "2px 4px 10px #bbb",
  },
  centerContent: {
    flex: 1,
    justifyContent: "flex-end",
    textAlign: "center",
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    backgroundColor: "#edaa4b",
    color: "white",
  },
  btnLeft: {
    marginLeft: 3,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  btnRight: {
    marginRight: 3,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
