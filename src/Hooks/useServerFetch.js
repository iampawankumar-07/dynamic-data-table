import { useEffect, useState } from 'react';
import { ProcessFetchUserErrors } from '../Utils/ProcessFetchUserErrors';

export const useServerFetch = ({ currentServerEndpoint, options = {} }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    processApiRequestHandler();
  }, []);

  const processApiRequestHandler = async () => {
    try {
      let response = await fetch(currentServerEndpoint, options);

      if (!response.ok) {
        throw new Error('Unable to fetch the response');
      }

      let result = await response.json();

      if (result) {
        setData(result);
        setFilteredUsers(result);
        setIsLoading(false);
      }
    } catch (err) {
      const responseErr = ProcessFetchUserErrors(err.message);
      setErrorMsg(responseErr);
      setIsLoading(false);
      throw new Error(err);
    }
  };

  return {
    isLoading,
    data,
    errorMsg,
    setData,
    filteredUsers,
    setFilteredUsers,
  };
};
