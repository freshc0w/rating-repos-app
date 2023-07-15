import { StyleSheet, View, Image } from 'react-native';

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
});

const RepositoryItem = props => {
	const {
		fullName,
		description,
		language,
		stargazersCount,
		forksCount,
		reviewCount,
		ratingAverage,
		ownerAvatarUrl,
	} = props.item;

	// Helper that converts a number if it is greater than 1000 to displayed in thousands with the precision of 1 decimal place and with a 'k' suffix.
	const formatNumber = number =>
		number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number.toString();

	return (
		<View style={{ backgroundColor: 'white' }}>
			<View style={styles.flexRowContainer}>
				<View style={styles.generalPadding}>
					<Image
						style={styles.profileImage}
						source={{ uri: ownerAvatarUrl }}
					/>
				</View>
				<View style={styles.paddingTopRight && styles.flexColContainer}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
						style={{ marginBottom: 3.5 }}
					>
						{fullName}
					</Text>
					<Text
						color="textSecondary"
						style={{ marginBottom: 6 }}
					>
						{description}
					</Text>
					<View style={styles.flexRowContainer}>
						<View style={styles.language}>
							<Text>
								<Text color="textWhite">{language}</Text>
							</Text>
						</View>
						<View style={{ backgroundColor: 'white' }}></View>
					</View>
				</View>
			</View>

			<View style={styles.flexRowContainer2}>
				<View style={styles.flexColContainer2}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
					>
						{formatNumber(Number(stargazersCount))}
					</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.flexColContainer2}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
					>
						{formatNumber(forksCount)}
					</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.flexColContainer2}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
					>
						{formatNumber(reviewCount)}
					</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.flexColContainer2}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
					>
						{formatNumber(ratingAverage)}
					</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
