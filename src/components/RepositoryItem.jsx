import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useParams } from 'react-router-native';

import useRepositories from '../hooks/useRepositories';

import * as Linking from 'expo-linking';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	mainContainer: {
		marginBottom: 5,
		backgroundColor: 'white',
	},
	generalPadding: {
		padding: 10,
	},
	paddingTopRight: {
		paddingRight: 20,
		paddingTop: 15,
	},
	flexColContainer: {
		display: 'flex',
		flexDirection: 'column',
		paddingVertical: 5,
		backgroundColor: 'white',
		flexWrap: 'nowrap',
	},
	flexColContainer2: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	flexRowContainer: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	flexRowContainer2: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-around',
		marginVertical: 12.5,
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 5,
	},
	language: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 7.5,
	},
	githubBtn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 12.5,
		marginVertical: 10,
		alignSelf: 'center',
		width: '90%',
	},
});

const MainRepoInfo = props => {
	return (
		<View style={styles.flexRowContainer}>
			<View style={styles.generalPadding}>
				<Image
					style={styles.profileImage}
					source={{
						uri: props.ownerAvatarUrl,
					}}
				/>
			</View>
			<View style={styles.paddingTopRight && styles.flexColContainer}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
					style={{
						marginBottom: 3.5,
					}}
				>
					{props.fullName}
				</Text>
				<Text
					color="textSecondary"
					style={{
						marginBottom: 6,
					}}
				>
					{props.description}
				</Text>
				<View style={styles.flexRowContainer}>
					<View style={styles.language}>
						<Text>
							<Text color="textWhite">{props.language}</Text>
						</Text>
					</View>
					<View
						style={{
							backgroundColor: 'white',
						}}
					></View>
				</View>
			</View>
		</View>
	);
};

const MoreRepoInfo = props => {
	return (
		<View style={styles.flexRowContainer2}>
			<View style={styles.flexColContainer2}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
				>
					{props.formatNumber(Number(props.stargazersCount))}
				</Text>
				<Text>Stars</Text>
			</View>
			<View style={styles.flexColContainer2}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
				>
					{props.formatNumber(props.forksCount)}
				</Text>
				<Text>Forks</Text>
			</View>
			<View style={styles.flexColContainer2}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
				>
					{props.formatNumber(props.reviewCount)}
				</Text>
				<Text>Reviews</Text>
			</View>
			<View style={styles.flexColContainer2}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
					style={{ textAlign: 'center' }}
				>
					{props.formatNumber(props.ratingAverage)}
				</Text>
				<Text>Rating</Text>
			</View>
		</View>
	);
};

const GithubBtn = ({ url }) => {
	return (
		<View>
			<View style={styles.githubBtn}>
				<Pressable onPress={() => Linking.openURL(url)}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
						color="textWhite"
					>
						Open in GitHub
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const RepositoryItem = props => {
	let repository;
	if (props.individualRepo) {
		const { id } = useParams();
		const { repositories } = useRepositories();
		const repositoryList = repositories.edges.map(edges => edges.node);
		repository = repositoryList.find(repo => repo.id === id);
	}

	const {
		fullName,
		description,
		language,
		stargazersCount,
		forksCount,
		reviewCount,
		ratingAverage,
		ownerAvatarUrl,
		url,
	} = props.individualRepo ? repository : props.item;

	// Helper that converts a number if it is greater than 1000 to displayed in thousands with the precision of 1 decimal place and with a 'k' suffix.
	const formatNumber = number =>
		number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number.toString();

	return (
		<View
			testID="repositoryItem"
			style={{ backgroundColor: 'white' }}
		>
			<MainRepoInfo
				fullName={fullName}
				description={description}
				language={language}
				ownerAvatarUrl={ownerAvatarUrl}
			></MainRepoInfo>

			<MoreRepoInfo
				stargazersCount={stargazersCount}
				forksCount={forksCount}
				reviewCount={reviewCount}
				ratingAverage={ratingAverage}
				formatNumber={formatNumber}
			></MoreRepoInfo>

			{props.individualRepo && <GithubBtn url={url} />}
		</View>
	);
};

export default RepositoryItem;
