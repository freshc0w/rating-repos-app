import { Text, View } from 'react-native';

const RepositoryItem = props => {
	const {
		fullName,
		description,
		language,
		stargazers_count,
		forks,
		reviewCount,
		ratingAverage,
	} = props.item;
	return (
		<View>
			<Text>Full name: {fullName}</Text>
			<Text>Description: {description}</Text>
			<Text>Language: {language}</Text>
			<Text>Stars: {stargazers_count}</Text>
			<Text>Forks: {forks}</Text>
			<Text>Reviews: {reviewCount}</Text>
			<Text>Rating: {ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;
