import { useState } from 'react';
import {
	FlatList,
	Image,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import MealModal from '../Modals/MealModal';

const Meals = ({ meals }) => {
	const [selectedMeal, setSelectedMeal] = useState(null); // State for selected meal
	const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
	
	const renderMeal = ({ item }) => (
		<TouchableOpacity
			style={styles.container}
			onPress={() => handleMealSelection(item)}
		>
			<Image
				source={{
					uri: `https://back.amadagency.net/storage/${item.image}`,
				}}
				style={styles.img}
				className='scale-125 rounded-full'
			/>
			<Text className='text-slate-400 text-left mb-1 text-base -mt-1'>
				{item.cat}
			</Text>
			<Text style={styles.name}>{item.name}</Text>
			<Text className='text-slate-600 font-bold text-lg'>
				{item.price} EGP
			</Text>
		</TouchableOpacity>
	);

	const handleMealSelection = (meal) => {
		setSelectedMeal(meal);
		setModalVisible(true);
	};

	const closeModal = () => {
		setSelectedMeal(null);
		setModalVisible(false);
	};

	return (
		<ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
			<FlatList
				data={meals}
				renderItem={renderMeal}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
			/>
			<MealModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				selectedMeal={selectedMeal}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		margin: 10,
		backgroundColor: 'white',
		borderRadius: 8,
		elevation: 3,
		marginTop: 60,
		paddingHorizontal: 20,
		paddingBottom: 10,
	},
	scrollContainer: {
		flex: 1,
		alignItems: 'center',
	},
	img: {
		width: 100,
		height: 100,
		top: -30,
		alignSelf: 'center',
	},
	name: {
		textAlign: 'left',
		fontSize: 20,
		fontWeight: '900',
		marginBottom: 5,
		color: '#ed8a48',
	},
	price: {
		fontSize: 14,
		color: '#777',
		paddingBottom: 6,
	},
});

export default Meals;
