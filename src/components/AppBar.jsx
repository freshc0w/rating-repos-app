import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		paddingTop: 12.5 + Constants.statusBarHeight,
		padding: 12.5,
		backgroundColor: '#24292e',
		color: 'white',
	},
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		flexGrow: 1,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.flexContainer} horizontal>
				<Link style={{flexShrink: 0}} to="/">
					<Text
						color="textWhite"
						fontSize="subheading"
						fontWeight="bold"
					>
						Repositories
					</Text>
				</Link>
				<Link style={{flexShrink: 0}} to="/signin">
					<Text
						color="textWhite"
						fontSize="subheading"
						fontWeight="bold"
					>
						Signin
					</Text>
				</Link>
			</ScrollView>
		</View>
	);
};

export default AppBar;
