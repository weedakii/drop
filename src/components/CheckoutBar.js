import React, { useContext, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { CartContext } from '../../context';
import  CheckoutModal from '../Modals/CheckoutModal'

const CheckoutBar = () => {
	const { checkoutInfo } = useContext(CartContext);
	const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};
	return (
		<View style={styles.container}>
			<Text className='text-white font-bold text-xl'>
				Total Price: {checkoutInfo} EGP
			</Text>
			<TouchableOpacity
				className='py-3 px-6 rounded-xl bg-white '
				onPress={openModal}
			>
				<Text className='text-xl text-[#edaa4b] font-bold'>
					Order Now
				</Text>
			</TouchableOpacity>
			<CheckoutModal
				modalVisible={modalVisible}
				closeModal={closeModal}
			/>
		</View>
	);
};

export default CheckoutBar;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row-reverse',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 100,
		width: '100%',
		backgroundColor: '#edaa4b',
		elevation: 4,
		padding: 20,
	},
});
