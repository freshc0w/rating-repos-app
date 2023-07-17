import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
	seperator: {
		height: 10,
	},
});

export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeperator}
			renderItem={({ item }) => {
				return (
					<RepositoryItem
						key={item.id}
						item={item}
					/>
				);
			}}
		/>
	);
};

const RepositoryList = () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

const ItemSeperator = () => <View style={styles.seperator} />;

export default RepositoryList;
