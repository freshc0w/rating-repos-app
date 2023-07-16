import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import { useAuthStorage } from '../contexts/AuthStorageContext';
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHENTICATE);
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const navigate = useNavigate();

	const signIn = async ({ username, password }) => {
		const result = await mutate({
			variables: {
				credentials: {
					username,
					password,
				},
			},
		});
		console.log('setting access token: ', result.data.authenticate.accessToken);
		await authStorage.setAccessToken(result.data.authenticate.accessToken);
		apolloClient.resetStore();
		navigate('/'); // navigate to the main view
		return result;
	};

	return [signIn, result];
};

export default useSignIn;
