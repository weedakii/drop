import React, { createContext, useEffect, useState } from 'react';
import { editQtyMeal } from './services/CartsDB';

export const CartContext = createContext();

export default function CartProvider({ children }) {
	const [meals, setMeals] = useState([]);
	const [checkoutInfo, setCheckoutInfo] = useState([]);

	useEffect(() => {
		setCheckoutInfo(meals.reduce((m, x) => m + x.price * x.qty, 0));
	}, [meals]);

	const editQty = (id, qty) => {
		if (qty <= 0) {
			editQtyMeal(id, qty);
			setMeals((prev) => prev.filter((x) => x.id !== id));
			return;
		}
		const newMeals = meals.map((m) => {
			if (m.id === id) {
				let newMeal = { ...m, qty };
				return newMeal;
			}
			return m;
		});
		setMeals(newMeals);
	};
	const cartState = {
		meals,
		setMeals,
		editQty,
		checkoutInfo,
	};

	return (
		<CartContext.Provider value={cartState}>
			{children}
		</CartContext.Provider>
	);
}
