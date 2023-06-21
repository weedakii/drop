import { Tabs, useNavigation } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { I18nManager, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export default () => {
	const navigation = useNavigation();
	I18nManager.forceRTL(true);
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#e86917',
				tabBarLabelStyle: {
					fontSize: 15,
					fontWeight: '700',
					paddingBottom: 6,
				},
				tabBarStyle: { height: 55 },
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='home' size={20} color={color} />
					),
					tabBarLabel: 'الرئيسية',
				}}
			/>
			<Tabs.Screen
				name='offers'
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='percent' size={20} color={color} />
					),
					tabBarLabel: 'العروض',
				}}
			/>
			<Tabs.Screen
				name='cart'
				options={{
					headerShown: true,
					headerStyle: {
						backgroundColor: '#edaa4b',
						elevation: 4,
						shadowColor: 'rgba(0, 0, 0, 0.25)',
						shadowOpacity: 1,
					},
					headerRight: () => (
						<TouchableOpacity activeOpacity={0.4}>
							<FontAwesome
								name='chevron-left'
								size={24}
								color='white'
								style={{ marginRight: 20 }}
								onPress={() => {
									navigation.goBack();
								}}
								
							/>
						</TouchableOpacity>
					),
					headerTitle: () => (
						<View style={{ alignItems: 'center' }}>
							<Text
								style={{
									marginTop: 5,
									fontWeight: 'bold',
									fontSize: 20,
									color: 'white',
								}}
							>
								عربة التسوق
							</Text>
						</View>
					),
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name='shopping-cart'
							size={20}
							color={color}
						/>
					),
					tabBarLabel: 'التسوق',
				}}
			/>
		</Tabs>
	);
};
