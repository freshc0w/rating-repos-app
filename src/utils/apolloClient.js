import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
	uri: 'http://10.89.109.167:4000/graphql',
});

const createApolloClient = () => {
	return new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
