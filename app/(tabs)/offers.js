import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import OfferSlider from '../../src/components/OfferSlider';
import FixedBtn from '../../src/components/FixedBtn';
import axios from 'axios';
import Offers from '../../src/components/Offers';
import Header from '../../src/components/Header';

const offers = () => {
	const [offers, setoffers] = useState([]);

	useEffect(() => {
		axios.get('https://back.amadagency.net/api/v1/offer').then((res) => {
			setoffers(res.data.data);
		});
	}, []);
	return (
		<SafeAreaView className='flex-1 flex-row bg-white'>
			<ScrollView nestedScrollEnabled={true} bg={'muted.50'} flex={1}>
				<Header />
				<View>
					<OfferSlider />
				</View>
				<View>
					<Offers offers={offers} />
				</View>
			</ScrollView>
			<FixedBtn title='اطلب الآن' />
		</SafeAreaView>
	);
};

export default offers;
