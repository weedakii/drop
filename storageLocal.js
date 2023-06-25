// import {AsyncStorage} from '@react-native-async-storage/async-storage';
// import { v4 as uuidv4 } from 'uuid';

// const cart = [{ id: 1, qty: 3 }];
// const orders = [{ date: '', id: '', status: 'done' }];

// // |||||||||||||||||||||||  CREATE JSON OBJECT AT INIIAL  |||||||||||||||||||||||||
// export const createJsonObj = async () => {
// 	try {
// 		const cartData = await AsyncStorage.getItem('cartInfo');
// 		const ordersData = await AsyncStorage.getItem('ordersInfo');
// 		if (!cartData) {
// 			await AsyncStorage.setItem('cartInfo', JSON.stringify(cart));
// 			console.log('Data saved successfully', ', createJsonObj');
// 		} else {
// 			console.log('Data saved rejected its not first time to save');
// 			return;
// 		}
// 		if (!ordersData) {
// 			await AsyncStorage.setItem('ordersInfo', JSON.stringify(orders));
// 			console.log('Data saved successfully', ', createJsonObj');
// 		}
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
// export const getCartStorage = async () => {
// 	try {
// 		const cartData = await AsyncStorage.getItem('cartInfo');
// 		return cartData;
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
// // |||||||||||||||||||||||  ADD NEW MEAL  |||||||||||||||||||||||||
// export const addMealStorage = async (item) => {
// 	try {
// 		const cartData = await AsyncStorage.getItem('cartInfo');
// 		await AsyncStorage.setItem(
// 			'cartInfo',
// 			JSON.stringify([...cartData, item])
// 		);
// 		console.log('Data saved successfully', ', addMyCart');
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
// // |||||||||||||||||||||||  CREATE NEW CART  |||||||||||||||||||||||||
// export const resetMyCart = async () => {
// 	try {
// 		await AsyncStorage.setItem(
// 			'cartInfo',
// 			JSON.stringify({ id: uuidv4(), meals: [] })
// 		);
// 		console.log('Data saved successfully', ', resetMyCart');
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
// // |||||||||||||||||||||||  EDIT QTY FOR MEAL  |||||||||||||||||||||||||
// export const editQtyMeal = async (mealID, qty) => {
// 	try {
// 		const myData = await AsyncStorage.getItem('cartInfo');
// 		const newMeals = myData.meals.map((m) => {
// 			if (m.id === mealID) {
// 				let newMeal = { ...m, qty };
// 				return newMeal;
// 			}
// 			return m;
// 		});

// 		await AsyncStorage.setItem(
// 			'cartInfo',
// 			JSON.stringify({ id: myData.id, meals: newMeals })
// 		);
// 		console.log('Data saved successfully', ', editQtyMeal');
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
// // |||||||||||||||||||||||  REMOVE MEAL FROM CART  |||||||||||||||||||||||||
// export const removeMealFromCart = async (mealID) => {
// 	try {
// 		const myData = await AsyncStorage.getItem('cartInfo');
// 		await AsyncStorage.setItem(
// 			'cartInfo',
// 			JSON.stringify({
// 				orders: myData.orders,
// 				cart: {
// 					id: myData.cart.id,
// 					meals: myData.cart.meals.filter((m) => m.id != mealID),
// 				},
// 			})
// 		);
// 		console.log('Data saved successfully', ', removeMealFromCart');
// 	} catch (error) {
// 		console.log('Error saving data:', error);
// 	}
// };
