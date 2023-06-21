import { Stack } from "expo-router";
import { I18nManager } from "react-native";

const Layout = () => {
  // Set the RTL direction
  I18nManager.forceRTL(true);

  return (
		<Stack>
			<Stack.Screen
				name='(tabs)'
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
  );
};

export default Layout;
