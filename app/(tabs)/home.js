import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Meals from "../../src/components/Meals";
import Categories from "../../src/components/Categories";
import OfferSlider from "../../src/components/OfferSlider";
import FixedBtn from "../../src/components/FixedBtn";
import axios from "axios";

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
  }, []);
  return (
    <SafeAreaView className="flex-1 flex-row bg-white">
      <ScrollView nestedScrollEnabled={true} bg={"muted.50"} flex={1}>
        <View className="flex-1 flex-col pt-10 px-5">
          <View>
            <View className="flex-row mt-2">
              <Text className="text-2xl">مرحبا بك في </Text>
              <Text className="text-orange-700 text-2xl font-bold">دروب</Text>
            </View>
            <Text className="text-xl text-slate-400 mt-2">
              مستني ايه اطلب دلوقتي
            </Text>
            {/* <View className="flex-row mt-5">
              <View className="flex-1 flex-row gap-x-2 items-center p-2 bg-slate-200 rounded">
                <FontAwesome name="search" size={22} color="#444" />
                <TextInput
                  className="text-lg flex-1"
                  placeholder="ابحث عن طعامك المفضل"
                />
              </View>
            </View> */}
          </View>
        </View>
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
        <View>
          <Meals meals={meals} />
        </View>
      </ScrollView>
      <FixedBtn title="اطلب الآن" />
    </SafeAreaView>
  );
};

export default home;
