import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { I18nManager } from "react-native";

export default () => {
  I18nManager.forceRTL(true);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#e86917",
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "700",
          paddingBottom: 6,
        },
        tabBarStyle: { height: 55 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
          tabBarLabel: "الرئيسية",
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="percent" size={20} color={color} />
          ),
          tabBarLabel: "العروض",
        }}
      />
    </Tabs>
  );
};
