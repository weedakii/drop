import { db } from "../database";

export const cartTable = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS `CartMeals` (id INTEGER PRIMARY KEY, name TEXT, desc TEXT, price DECIMAL(10, 2),qty INTEGER, image TEXT);",
        [],
        (_, result) => {
          console.log("MEALS table created successfully");
        },
        (_, error) => {
          console.log("Error creating MEALS table:", error);
        }
      );
    });
  } catch (error) {
    return { error, msg: "حدث خطأ", success: false };
  }
};
export const orderTable = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS `Order` (id INTEGTEER PRIMARY KEY, orderID Text);",
        [],
        (_, result) => {
          console.log("Order table created successfully");
        },
        (_, error) => {
          console.log("Error creating Order table:", error);
        }
      );
    });
  } catch (error) {
    return { error, msg: "حدث خطأ", success: false };
  }
};

export const dropOrderTable = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS Order;",
        [],
        (_, result) => {
          console.log("Order table dropped successfully");
        },
        (_, error) => {
          console.log("Error dropping Order table:", error);
        }
      );
    });
  } catch (error) {
    console.log(error);
    return { error, msg: "حدث خطأ", success: false };
  }
};
export const dropCartTable = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS CartMeals;",
        [],
        (_, result) => {
          console.log("MEALS table dropped successfully");
        },
        (_, error) => {
          console.log("Error dropping MEALS table:", error);
        }
      );
    });
  } catch (error) {
    console.log(error);
    return { error, msg: "حدث خطأ", success: false };
  }
};
export const addMealToCart = async ({
  id,
  name,
  cat,
  price,
  qty = 1,
  image,
}) => {
  db.transaction(
    (tx) => {
      // Check if the meal already exists
      tx.executeSql(
        "SELECT id FROM `CartMeals` WHERE id = ?;",
        [id],
        (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            // Meal already exists, do not add
            console.log("تم اضافتها من قبل");
          } else {
            // Meal does not exist, insert it
            tx.executeSql(
              "INSERT INTO `CartMeals` (id, name, desc, price, qty, image) VALUES (?, ?, ?, ?, ?, ?);",
              [id, name, cat, price, qty, image],
              (_, result) => {
                console.log("Added is DONE", result);
              },
              (_, error) => {
                console.log("Added is falsy", error);
              }
            );
          }
        }
      );
    },
    (error) => {
      console.log("Transaction error", error);
    }
  );
};
export const getAllMeals = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM `CartMeals`;",
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
          "DELETE FROM `CartMeals` WHERE id = ?;",
          [mealID],
          (_, result) => {
            console.log("Meal removed from cart");
          },
          (_, error) => {
            console.log("Failed to remove meal from cart", error);
          }
        );
      } else {
        // Update the quantity of the meal
        tx.executeSql(
          "UPDATE `CartMeals` SET qty = ? WHERE id = ?;",
          [qty, mealID],
          (_, result) => {
            console.log("Quantity updated successfully", result);
          },
          (_, error) => {
            console.log("Failed to update quantity", error);
          }
        );
      }
    },
    (error) => {
      console.log("Transaction error", error);
    }
  );
};
export const resetCart = async () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "DELETE FROM `CartMeals`;",
        [],
        (_, deleteResult) => {
          console.log("Cart reset", deleteResult);
        },
        (_, deleteError) => {
          console.log("Failed to reset cart", deleteError);
        }
      );
    },
    (error) => {
      console.log("Transaction error", error);
    }
  );
};
export const addNewOrder = async (id) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO `Order` (id) VALUES (?);",
        [id],
        (_, result) => {
          console.log("Added is DONE", result);
        },
        (_, error) => {
          console.log("Added is falsy", error);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};
export const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM `Order`;",
        [],
        (_, result) => {
          const orders = [];
          for (let i = 0; i < result.rows.length; i++) {
            const meal = result.rows.item(i);
            orders.push(meal);
          }
          resolve(orders);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
