import React from 'react';
import { TouchableOpacity,View, StyleSheet, Text } from 'react-native';

const CheckoutBar = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text>CheckoutBar</Text>
		</TouchableOpacity>
	);
};

export default CheckoutBar;


const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 100,
		width: '100%',
		backgroundColor: '#edaa4b',
		elevation: 4,
        padding: 15,
	},

});