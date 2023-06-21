import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function CartCard({ item }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(0);
	}, []);

	return (
		<View style={styles.mealContainer}>
			{/* Image side */}
			<Image
				source={item.src}
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
					{item.title}
				</Text>
				<Text style={{ textAlign: 'left', color: '#777' }}>
					{item.desc}
				</Text>
				<Text
					style={{
						textAlign: 'left',
						fontSize: 16,
						fontWeight: 'bold',
						color: '#edaa4b',
					}}
				>
					{item.price} <Text>EGP</Text>
				</Text>
			</View>

			{/* right side */}
			<View style={styles.rightContent}>
				<View style={styles.btnGroup}>
					<TouchableOpacity
						style={[styles.btnRight, styles.btn]}
						onPress={() => setCount((c) => c - 1)}
					>
						<FontAwesome name='minus' color='white' />
					</TouchableOpacity>
					<Text style={{ color: '#edaa4b', fontWeight: 'bold' }}>
						{count}
					</Text>
					<TouchableOpacity
						style={[styles.btnLeft, styles.btn]}
						onPress={() => setCount((c) => c + 1)}
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
