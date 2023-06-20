import { Text, View } from 'react-native';

const Header = () => {
	return (
		<View className='flex-1 flex-col pt-10 px-5'>
			<View>
				<View className='flex-row mt-2'>
					<Text className='text-2xl'>أجدد عروض </Text>
					<Text className='text-orange-700 text-2xl font-bold'>
						دروب
					</Text>
				</View>
				<Text className='text-xl text-slate-400 mt-2'>
					مستني ايه اطلب دلوقتي
				</Text>
			</View>
		</View>
	);
};

export default Header;
