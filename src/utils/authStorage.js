import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
	constructor(namespace = 'auth') {
		this.namespace = namespace;
	}

	// get, set, and remove methods for the token
	getAccessToken = async () => {
		const token = await AsyncStorage.getItem(`${this.namespace}:token`);
		return token ? JSON.parse(token) : [];
	};

	setAccessToken = async accessToken => {
		await AsyncStorage.setItem(
			`${this.namespace}:token`,
			JSON.stringify(accessToken)
		);
	};

	removeAccessToken = async () => {
		await AsyncStorage.removeItem(`${this.namespace}:token`);
	};
}

export default AuthStorage;
