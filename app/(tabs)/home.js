import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Meals from '../../src/components/Meals';
import Categories from '../../src/components/Categories';
import OfferSlider from '../../src/components/OfferSlider';
import FixedBtn from '../../src/components/FixedBtn';
import axios from 'axios';
import Header from '../../src/components/Header';
import { CartTable, dropCartTable } from '../../services/CartsDB';

const home = () => {
	const [categories, setcategories] = useState([]);
	const [meals, setmeals] = useState([]);

	useEffect(() => {
		axios.get('https://back.amadagency.net/api/v1/cat').then((res) => {
			setcategories(res.data.data);
		});
		axios.get('https://back.amadagency.net/api/v1/meal').then((res) => {
			setmeals(res.data.data);
		});
		CartTable();
		// dropCartTable()
	}, []);
	return (
		<SafeAreaView className='flex-1 flex-row bg-white'>
			<ScrollView nestedScrollEnabled={true} bg={'muted.50'} flex={1}>
				<Header />
				<View>
					<OfferSlider />
				</View>

				<View>
					<Categories
						categories={categories}
						setcategories={() => setcategories()}
						meals={meals}
						setmeals={setmeals}
					/>
				</View>

				<View>
					<Meals meals={meals} />
				</View>
			</ScrollView>
			<FixedBtn title='اطلب الآن' />
		</SafeAreaView>
	);
};

export default home;
