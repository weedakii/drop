import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Meals from "../../src/components/Meals";
import Categories from "../../src/components/Categories";
import OfferSlider from "../../src/components/OfferSlider";
import FixedBtn from "../../src/components/FixedBtn";
import axios from "axios";
import Header from "../../src/components/Header";
import {
  cartTable,
  dropCartTable,
  orderTable,
  dropOrderTable,
} from "../../services/CartsDB";

const home = () => {
  const [categories, setcategories] = useState([]);
  const [meals, setmeals] = useState([]);

  useEffect(() => {
    axios.get("https://back.amadagency.net/api/v1/cat").then((res) => {
      setcategories(res.data.data);
    });
    axios.get("https://back.amadagency.net/api/v1/meal").then((res) => {
      setmeals(res.data.data);
    });
    cartTable();
    orderTable();
    // dropCartTable()
  }, []);
  return (
    <>
      <SafeAreaView className="flex-1 flex-row bg-white">
        <ScrollView
          className="flex-1"
          nestedScrollEnabled={true}
          bg={"muted.50"}
          flex={1}
        >
          <Header />
          <View>
            <OfferSlider />
          </View>

          <View>
            <Categories
              categories={categories}
              setcategories={() => setcategories()}
              meals={meals}
              setmeals={setmeals}
            />
          </View>

          <View>
            <Meals meals={meals} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <FixedBtn title="اطلب الآن" />
    </>
  );
};

export default home;
