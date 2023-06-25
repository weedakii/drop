import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

function ImageSlider() {
	return (
		<View style={styles.container}>
			<Swiper
				autoplay
				autoplayDirection={true}
				directionalLockEnabled={true}
				dot={
					<View
						style={{
							backgroundColor: '#ccc',
							width: 10,
							height: 8,
							borderRadius: 4,
							marginLeft: 3,
							marginRight: 3,
							elevation: 1,
							marginTop: 3,
							marginBottom: -3,
						}}
					/>
				}
				activeDot={
					<View
						style={{
							backgroundColor: '#edaa4b',
							elevation: 3,
							width: 20,
							height: 8,
							borderRadius: 4,
							marginLeft: 3,
							marginRight: 3,
							marginTop: 3,
							marginBottom: -3,
						}}
					/>
				}
			>
				<View style={styles.slide}>
					<Image
						source={require('../../assets/slider/1.jpg')}
						style={styles.image}
						resizeMode='cover'
					/>
				</View>
				<View style={styles.slide}>
					<Image
						source={require('../../assets/slider/2.jpg')}
						style={styles.image}
						resizeMode='cover'
					/>
				</View>
				<View style={styles.slide}>
					<Image
						source={require('../../assets/slider/3.jpg')}
						style={styles.image}
						resizeMode='cover'
					/>
				</View>
				<View style={styles.slide}>
					<Image
						source={require('../../assets/slider/4.jpg')}
						style={styles.image}
						resizeMode='cover'
					/>
				</View>
			</Swiper>
		</View>
	);
}

export default ImageSlider;

const styles = StyleSheet.create({
	container: {
		height: 200,
		width: '100%',
		marginVertical: 15,
	},
	slide: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		marginHorizontal: 15,
		borderRadius: 12,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
});
