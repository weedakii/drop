import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const Categories = ({ categories, setcategories, setmeals, meals }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });

  const handleCategoryPress = (cat) => {
    setActiveCategory(cat.id);
    if (cat.name === "All") {
      axios.get("https://back.amadagency.net/api/v1/meal").then((res) => {
        setmeals(res.data.data);
      });
    } else {
      axios.get("https://back.amadagency.net/api/v1/meal").then((res) => {
        setmeals(() => {
          return res.data.data.filter((m) => m.cat === cat.name);
        });
      });
    }
  };

  return (
    <ScrollView
      horizontal
      directionalLockEnabled={true}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={scrollToEnd}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity
        style={[
          styles.button,
          0 === activeCategory ? styles.activeButton : null,
          { paddingLeft: 20 },
        ]}
        onPress={() => handleCategoryPress({ id: 0, name: "All" })}
      >
        <Text
          style={[
            styles.buttonText,
            0 === activeCategory ? styles.activeButtonText : null,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>
      {categories.map((c, index) => (
        <TouchableOpacity
          key={c.id}
          style={[
            styles.button,
            c.id === activeCategory ? styles.activeButton : null,
          ]}
          onPress={() => handleCategoryPress(c)}
        >
          {c?.image && (
            <Image
              className="w-10 h-10 rounded-full bg-slate-50 mr-3 scale-110"
              source={{ uri: `https://back.amadagency.net/storage/${c.image}` }}
            />
          )}
          <Text
            style={[
              styles.buttonText,
              c.id === activeCategory ? styles.activeButtonText : null,
            ]}
          >
            {c.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#bbb",
    borderRadius: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingRight: 20,
    marginRight: 10,
    marginVertical: 3,
    elevation: 2,
    flexDirection: "row",
    rowGap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  activeButton: {
    backgroundColor: "#edaa4b",
    elevation: 8,
  },
  activeButtonText: {
    color: "white", // Customize the active button text color
  },
});

export default Categories;
