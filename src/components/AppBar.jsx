import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		paddingTop: 12.5 + Constants.statusBarHeight,
		padding: 12.5,
		backgroundColor: '#24292e',
		color: 'white',
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Text
				color="textWhite"
				fontSize="subheading"
				fontWeight="bold"
			>
				Repositories
			</Text>
		</View>
	);
};

export default AppBar;
