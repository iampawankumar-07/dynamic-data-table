import { FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS } from '../Configurations/apiContracts.server';

export const processServerErrors = (currentErr) => {
  if (currentErr === 'Unable to fetch the response') {
    return FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS.API_ERRORS.GENERAL_ERR;
  } else {
    return FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS.API_ERRORS
      .SERVER_UNAVAILABLE;
  }
};
