import { FontAwesome } from '@expo/vector-icons';
import {
	View,
	Image,
	Text,
	StyleSheet,
	Modal,
	TouchableOpacity,
} from 'react-native';

const MealModal = ({ selectedMeal, modalVisible, closeModal }) => {
	return (
		<Modal
			visible={modalVisible}
			animationType='fade'
			transparent={true}
		>
			<TouchableOpacity
				activeOpacity={0.7}
				style={{
					backgroundColor: 'rgba(0,0,0,0.2)',
					paddingBottom: 200,
					flex: 1,
					
				}}
				onPress={closeModal}
			></TouchableOpacity>
			<View style={styles.modalContainer}>
				{selectedMeal && (
					<View style={styles.modalBlock}>
						<Image
							source={{
								uri: `https://back.amadagency.net/storage/${selectedMeal.image}`,
							}}
							style={styles.modalImg}
						/>
						<Text style={styles.modalName}>
							{selectedMeal.name}
						</Text>
						<Text style={styles.modalDescription}>
							{selectedMeal.desc || 'here is description text'}
						</Text>
						<View style={{ alignItems: 'center' }}>
							<Text style={styles.modalPrice}>
								{selectedMeal.price} EGP
							</Text>
						</View>
						<TouchableOpacity
							title='Add To Cart'
							activeOpacity={0.8}
							style={[styles.customBtn, styles.addBtn]}
							onPress={closeModal}
						>
							<Text
								style={{
									color: '#edaa4b',
									fontWeight: 'bold',
									fontSize: 20,
								}}
							>
								Add To Cart
							</Text>
							<FontAwesome
								name='cart-plus'
								size={26}
								color='#edaa4b'
							/>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</Modal>
	);
};

export default MealModal;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	modalBlock: {
		backgroundColor: '#edaa4b',
		width: '100%',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		padding: 30,
		elevation: 15,
	},
	modalImg: {
		width: 200,
		height: 200,
		marginTop: -100,
		marginBottom: 10,
		alignSelf: 'center',
	},
	modalName: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
		color: 'white',
	},
	modalDescription: {
		fontSize: 16,
		marginBottom: 10,
		color: '#eee',
	},
	modalPrice: {
		fontWeight: 'bold',
		fontSize: 22,
		color: 'white',
		borderRadius: 12,
		padding: 10,
		marginBottom: 25,
	},
	customBtn: {
		width: '100%',
		borderRadius: 40,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 15,
	},
	addBtn: {
		backgroundColor: 'white',
	},
});
