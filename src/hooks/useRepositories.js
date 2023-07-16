import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	// w/ graphql endpoint
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	const repositories = data?.repositories;

	// w/ rest endpoint
	/**
   import { useState, useEffect } from 'react';
   const [repositories, setRepositories] = useState();
   const [loading, setLoading] = useState(false);
   const fetchRepositories = async () => {
     setLoading(true);
 
     const response = await fetch('http://10.89.109.167:5000/api/repositories');
     const json = await response.json();
 
     setLoading(false);
     setRepositories(json);
   };
 
   useEffect(() => {
     fetchRepositories();
   }, []);
   */

	return { repositories, error, loading };
};

export default useRepositories;
