import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

import Text from './Text';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<>
			<AppBar />
			<View style={styles.container}>
				<Text>Rate Repository Application</Text>
				<RepositoryList />
			</View>
		</>
	);
};

export default Main;
