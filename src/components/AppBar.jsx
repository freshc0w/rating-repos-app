import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';
import { useAuthStorage } from '../contexts/AuthStorageContext';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { useApolloClient } from '@apollo/client';

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

const AppBarComponent = ({ path, text, onPress }) => (
	<Link
		style={{ flexShrink: 0 }}
		to={path}
		onPress={onPress}
	>
		<Text
			color="textWhite"
			fontSize="subheading"
			fontWeight="bold"
		>
			{text}
		</Text>
	</Link>
);

const AppBar = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const { data } = useQuery(GET_ME);

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	// null if no user is logged in.
	const me = data?.me;

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.flexContainer}
				horizontal
			>
				<AppBarComponent
					path="/"
					text="Repositories"
				/>

				{me ? (
					<AppBarComponent
						path="/"
						text="Sign Out"
						onPress={signOut}
					/>
				) : (
					<AppBarComponent
						path="/signin"
						text="Sign In"
					/>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
