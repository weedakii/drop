import { db } from '../database';

export const CartTable = () => {
	try {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS `CartMeals` (id INTEGER PRIMARY KEY, name TEXT, desc TEXT, price DECIMAL(10, 2),qty INTEGER, image TEXT);',
				[],
				(_, result) => {
					console.log('MEALS table created successfully');
				},
				(_, error) => {
					console.log('Error creating MEALS table:', error);
				}
			);
		});
	} catch (error) {
		return { error, msg: 'حدث خطأ', success: false };
	}
};
export const dropCartTable = () => {
	try {
		db.transaction((tx) => {
			tx.executeSql(
				'DROP TABLE IF EXISTS CartMeals;',
				[],
				(_, result) => {
					console.log('MEALS table dropped successfully');
				},
				(_, error) => {
					console.log('Error dropping MEALS table:', error);
				}
			);
		});
	} catch (error) {
		console.log(error);
		return { error, msg: 'حدث خطأ', success: false };
	}
};
export const addMealToCart = async ({
	id,
	name,
	disc,
	price,
	qty = 1,
	image,
}) => {
	db.transaction(
		(tx) => {
			// Check if the meal already exists
			tx.executeSql(
				'SELECT id FROM `CartMeals` WHERE id = ?;',
				[id],
				(_, resultSet) => {
					if (resultSet.rows.length > 0) {
						// Meal already exists, do not add
						console.log('تم اضافتها من قبل');
					} else {
						// Meal does not exist, insert it
						tx.executeSql(
							'INSERT INTO `CartMeals` (id, name, desc, price, qty, image) VALUES (?, ?, ?, ?, ?, ?);',
							[id, name, disc, price, qty, image],
							(_, result) => {
								console.log('Added is DONE', result);
							},
							(_, error) => {
								console.log('Added is falsy', error);
							}
						);
					}
				}
			);
		},
		(error) => {
			console.log('Transaction error', error);
		}
	);
};
export const getAllMeals = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM `CartMeals`;',
				[],
				(_, result) => {
					const meals = [];
					for (let i = 0; i < result.rows.length; i++) {
						const meal = result.rows.item(i);
						meals.push(meal);
					}
					resolve(meals);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});
};
export const editQtyMeal = async (mealID, qty) => {
	db.transaction(
		(tx) => {
			if (qty <= 0) {
				// Remove the meal if the quantity is less than or equal to 0
				tx.executeSql(
					'DELETE FROM `CartMeals` WHERE id = ?;',
					[mealID],
					(_, result) => {
						console.log('Meal removed from cart');
					},
					(_, error) => {
						console.log('Failed to remove meal from cart', error);
					}
				);
			} else {
				// Update the quantity of the meal
				tx.executeSql(
					'UPDATE `CartMeals` SET qty = ? WHERE id = ?;',
					[qty, mealID],
					(_, result) => {
						console.log('Quantity updated successfully', result);
					},
					(_, error) => {
						console.log('Failed to update quantity', error);
					}
				);
			}
		},
		(error) => {
			console.log('Transaction error', error);
		}
	);
};
