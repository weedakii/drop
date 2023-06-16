import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Meals from "../../src/components/Meals";
import Categories from "../../src/components/Categories";
import OfferSlider from "../../src/components/OfferSlider";
import FixedBtn from "../../src/components/FixedBtn";
import axios from "axios";
import Offers from "../../src/components/Offers";

const offers = () => {
  const [offers, setoffers] = useState([]);

  useEffect(() => {
    axios.get("https://back.amadagency.net/api/v1/offer").then((res) => {
      setoffers(res.data.data);
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 flex-row bg-white">
      <ScrollView nestedScrollEnabled={true} bg={"muted.50"} flex={1}>
        <View className="flex-1 flex-col pt-10 px-5">
          <View>
            <View className="flex-row mt-2">
              <Text className="text-2xl">أجدد عروض </Text>
              <Text className="text-orange-700 text-2xl font-bold">دروب</Text>
            </View>
            <Text className="text-xl text-slate-400 mt-2">
              مستني ايه اطلب دلوقتي
            </Text>
          </View>
        </View>
        <View>
          <OfferSlider />
        </View>

        <View>
          <Offers offers={offers} />
        </View>
      </ScrollView>
      <FixedBtn title="اطلب الآن" />
    </SafeAreaView>
  );
};

export default offers;
