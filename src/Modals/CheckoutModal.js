import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
	TextInput,
	Modal,
	TouchableOpacity,
	ToastAndroid,
	Animated,
} from 'react-native';
import { useKeyboard } from 'react-native-hooks';
import { CartContext } from '../../context';
import { FontAwesome } from '@expo/vector-icons';
import { addNewOrder, getAllOrders, resetCart } from '../../services/CartsDB';

const CheckoutModal = ({ modalVisible, closeModal }) => {
	const { meals, setMeals, checkoutInfo } = useContext(CartContext);

	function showToast(msg) {
		ToastAndroid.show(msg, ToastAndroid.SHORT);
	}
	const keyboard = useKeyboard();
	const imgScaleY = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		if (keyboard.isKeyboardShow) {
			Animated.timing(imgScaleY, {
				toValue: -300,
				duration: 1000,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(imgScaleY, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}).start();
		}
	}, [keyboard.isKeyboardShow]);

	const [fullName, setFullName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');

	const handleFormSubmit = () => {
		// Handle form submission here
		if (!fullName) {
			showToast('يجب ادخال الاسم');
			return;
		} else if (!phone) {
			showToast('يجب ادخال الهاتف');
			return;
		} else if (!address) {
			showToast('يجب ادخال العنوان');
			return;
		}
		axios
			.post('https://back.amadagency.net/api/v1/order', {
				products: meals,
				username: fullName,
				address,
				phone,
				totalPrice: checkoutInfo,
			})
			.then((x) => {
				console.log('data', x.data);
				closeModal();
				showToast('تم ارسال طلبكم بنجاح ✔');
				setMeals([]);
				resetCart();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Modal visible={modalVisible} animationType='fade' transparent={true}>
			<View style={styles.modalContainer}>
				<View style={styles.modalBlock}>
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={closeModal}
						className='absolute top-3 left-4 '
					>
						<FontAwesome name='close' size={50} color='white' />
					</TouchableOpacity>
					<View className='flex-1 justify-center p-2'>
						<Animated.View
							style={{
								transform: [{ translateY: imgScaleY }],
								height: 200,
							}}
						>
							<Image
								source={require('../../assets/logo.png')}
								style={{
									height: '100%',
									alignSelf: 'center',
								}}
								resizeMode='contain'
							/>
						</Animated.View>
						<Text className='justify-center py-4 text-5xl font-bold text-white text-center'>
							البيانات
						</Text>
						<TextInput
							cursorColor='#edaa4b'
							placeholderTextColor='#edaa4b'
							className='h-10 border bg-white shadow-xl border-gray-300 text-right rounded mb-4 p-2'
							placeholder='الاسم بالكامل'
							value={fullName}
							onChangeText={(text) => setFullName(text)}
						/>
						<TextInput
							cursorColor='#edaa4b'
							placeholderTextColor='#edaa4b'
							className='h-10 border bg-white border-gray-300 text-right rounded mb-4 p-2'
							placeholder='الهاتف'
							keyboardType='phone-pad'
							value={phone}
							onChangeText={(text) => setPhone(text)}
						/>
						<TextInput
							cursorColor='#edaa4b'
							placeholderTextColor='#edaa4b'
							className='h-10 border bg-white border-gray-300 text-right rounded mb-4 p-2'
							placeholder='العنوان'
							value={address}
							onChangeText={(text) => setAddress(text)}
						/>
						<TouchableOpacity
							activeOpacity={0.8}
							className='w-full bg-gray-100 rounded-md py-2'
							onPress={handleFormSubmit}
						>
							<Text className='text-center font-extrabold text-xl text-[#edaa4b]'>
								إرسال
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default CheckoutModal;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	modalBlock: {
		flex: 1,
		backgroundColor: '#edaa4b',
		width: '100%',
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
