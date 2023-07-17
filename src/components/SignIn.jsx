import { View, Pressable } from 'react-native';

import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import { Formik } from 'formik';
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(1, 'Username mist be at least 1 character long')
		.required('Username is required'),
	password: yup
		.string()
		.min(1, 'Password must be at least 1 character long')
		.required('Password is required'),
});
export 
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
	const [signIn] = useSignIn();
	
	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			{
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
				</Formik>
			}
		</>
	);
};

export default SignIn;
