import { TouchableOpacity, Text, StyleSheet, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function PinnedButton({ title }) {
  const phoneNumber = "01019661605";
  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleCall}>
      <Text style={styles.buttonText}>{title}</Text>
      <MaterialIcons name="call" size={20} color={"white"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    elevation: 5,
    backgroundColor: "#edaa4b",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default PinnedButton;
