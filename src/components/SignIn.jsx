import { View, Pressable } from 'react-native';

import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const initialValues = {
	username: '',
	password: '',
};

const styles = {
	container: {
		display: 'flex',
		padding: 15,
		backgroundColor: 'white',
	},
	textInput: {
		marginTop: 15,
		borderWidth: 1,
		borderColor: 'grey',
		padding: 15,
		borderRadius: 5,
		fontSize: 16,
	},
	submitBtn: {
		marginTop: 15,
		flexGrow: 1,
		backgroundColor: theme.colors.primary,
		padding: 15,
		borderRadius: 5,
	},
	submitText: {
		textAlign: 'center',
	},
};

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<FormikTextInput
				style={styles.textInput}
				name="username"
				placeholder="Username"
			/>
			<FormikTextInput
				style={styles.textInput}
				name="password"
				placeholder="Password"
				secureTextEntry
			/>
			<Pressable
				style={styles.submitBtn}
				onPress={onSubmit}
			>
				<Text
					color="textWhite"
					fontSize="subheading"
					style={styles.submitText}
				>
					Sign In
				</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = values => {
		console.log(values);
	};
	return (
		<>
			{
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
				>
					{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
				</Formik>
			}
		</>
	);
};

export default SignIn;
