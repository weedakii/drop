import { View, FlatList, Image, Text } from "react-native";

const Offers = ({ offers }) => {
  const renderMeal = ({ item }) => (
    <View
      className="bg-slate-50 p-3 mx-5 mb-4 rounded-lg"
      style={{ elevation: 6 }}
    >
      <Image
        source={{ uri: `https://back.amadagency.net/storage/${item.image}` }}
        className="w-full h-56 rounded-md"
      />
      <View className="flex-col flex-1 mt-1">
        <Text className="text-xl text-left font-extrabold whitespace-pre-wrap w-full ">
          {item.name}
        </Text>
        <Text className="text-orange-600 font-bold text-lg self-end mt-2">
          {item.price} EGP
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={offers}
      renderItem={renderMeal}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
    />
  );
};

export default Offers;
