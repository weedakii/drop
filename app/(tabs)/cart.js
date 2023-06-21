import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import CartCard from '../../src/components/CartCard';
import CheckoutBar from '../../src/components/CheckoutBar';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import CheckoutModal from '../../src/Modals/CheckoutModal';

const info = [];
const cart = () => {
	const [selectedMeal, setSelectedMeal] = useState(); // State for selected meal
	const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
	const navigation = useNavigation();


	useEffect(()=>{
		setSelectedMeal(info)
	},[])

	const handleMealSelection = (info) => {
		setSelectedMeal(info);
		setModalVisible(true);
	};

	const closeModal = () => {
		setSelectedMeal(null);
		setModalVisible(false);
	};
	return (
		<View style={styles.container}>
			{/* <Header /> */}
			{/* {meals.map((meal)=><View key={()=>meal.id.toString()}><Text>{meal.title}</Text></View>)} */}
			{info.length ? (
				<>
					<FlatList
						data={info}
						contentContainerStyle={{ paddingBottom: 105 }}
						renderItem={({ item }) => <CartCard item={item} />}
						keyExtractor={(item) => item.id.toString()}
					/>
					<CheckoutBar />
				</>
			) : (
				<View style={{ flex: 1 }}>
					<Text style={styles.notFoundMeals}>لا يوجد طلبات</Text>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<FontAwesome
							name='home'
							color='#edaa4b'
							size={60}
							style={{ textAlign: 'center' }}
						/>
					</TouchableOpacity>
					<View onPress={() => navigation.navigate('checkout')}>
						<Text onPress={handleMealSelection}>
							alskdjfadslkf
						</Text>
					</View>
				</View>
			)}
			<CheckoutModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				selectedMeal={selectedMeal}
			/>
		</View>
	);
};
export default cart;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	notFoundMeals: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		paddingTop: 30,
		color: '#edaa4b',
	},
});
