import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
	seperator: {
		height: 10,
	},
});

export const RepositoryListContainer = ({ repositories }) => {
	const navigate = useNavigate();
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeperator}
			renderItem={({ item }) => {
				return (
					<Pressable
						key={item.id}
						onPress={() => navigate(`/${item.id}`)}
					>
						<RepositoryItem item={item} />
					</Pressable>
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
