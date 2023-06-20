import {
	ScrollView,
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Image,
} from 'react-native';

const meals = [
	{id: 1, name: 'meal 1', image: 'url'},
	{id: 2, name: 'meal 2', image: 'url'},
	{id: 3, name: 'meal 3', image: 'url'},
	{id: 4, name: 'meal 4', image: 'url'},
]
const cart = () => {

	const Item = ({ item })=>{
		<View >
			<Image></Image>
			<View>
				<Text>Title</Text>
				<Text>desc</Text>
				<Text>price</Text>
			</View>
			<View>
				<Text>count Num</Text>
				<View>
					<TouchableOpacity>+</TouchableOpacity>
					<TouchableOpacity>-</TouchableOpacity>
				</View>
			</View>
		</View>
	}

	return (
		<SafeAreaView className='flex-1 flex-row bg-white'>
			<ScrollView nestedScrollEnabled={true} bg={'muted.50'} flex={1}>
				{/* <Header /> */}
				<FlatList
					style={{ flex: 1 }}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 50 }}
					data={meals}
					keyExtractor={(item)=> item.id.toString()}
					renderItem={({ item }) => <Item item={item}/>}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default cart;
