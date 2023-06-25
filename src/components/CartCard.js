import { useContext, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CartContext } from '../../context';

function CartCard({ item }) {
	const [count, setCount] = useState(1);

	const { editQty } = useContext(CartContext);

	useEffect(() => {
		setCount(item?.qty);
	}, []);

	useEffect(() => {
		editQty(item.id, count);
	}, [count]);

	function addQty() {
		setCount((c) => c + 1);
	}
	function decreaseQty() {
		setCount((c) => c - 1);
	}

	return (
		<View style={styles.mealContainer}>
			{/* Image side */}
			<Image
				source={{
					uri: `https://back.amadagency.net/storage/${item?.image}`,
				}}
				alt='image not found'
				style={{
					height: '100%',
					width: 100,
				}}
				resizeMode='contain'
			/>

			{/* Center Side */}
			<View style={styles.centerContent}>
				<Text
					style={{
						textAlign: 'left',
						fontWeight: 'bold',
						color: '#edaa4b',
						fontSize: 20,
					}}
				>
					{item?.name}
				</Text>
				<Text style={{ textAlign: 'left', color: '#777' }}>
					{item?.disc}
				</Text>
				<Text
					style={{
						textAlign: 'left',
						fontSize: 16,
						fontWeight: 'bold',
						color: '#edaa4b',
					}}
				>
					{item?.price * count} <Text>EGP</Text>
				</Text>
			</View>

			{/* right side */}
			<View style={styles.rightContent}>
				<View style={styles.btnGroup}>
					<TouchableOpacity
						style={[styles.btnRight, styles.btn]}
						onPress={decreaseQty}
					>
						<FontAwesome name='minus' color='white' />
					</TouchableOpacity>
					<Text style={{ color: '#edaa4b', fontWeight: 'bold' }}>
						{count}
					</Text>
					<TouchableOpacity
						style={[styles.btnLeft, styles.btn]}
						onPress={addQty}
					>
						<FontAwesome name='plus' color='white' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default CartCard;

const styles = StyleSheet.create({
	mealContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
	},
	centerContent: {
		flex: 1,
		marginRight: 30,
		justifyContent: 'flex-end',
		textAlign: 'center',
	},
	rightContent: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 10,
	},
	btnGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
	},
	btn: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 0,
		backgroundColor: '#edaa4b',
		color: 'white',
	},
	btnLeft: {
		marginLeft: 3,
		borderTopRightRadius: 30,
		borderBottomRightRadius: 30,
	},
	btnRight: {
		marginRight: 3,
		borderTopLeftRadius: 30,
		borderBottomLeftRadius: 30,
	},
});
