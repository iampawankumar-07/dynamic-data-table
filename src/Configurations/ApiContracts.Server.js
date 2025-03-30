export const FETCH_MEMBER_SERVICE_API_CONTRACT_DETAILS = {
  ENDPOINT:
  import.meta.env.VITE_FETCH_MEMBER_SERVICE_API_ENDPOINT,
  OPTIONS: {
    method: 'GET',
  },
  API_ERRORS: {
    GENERAL_ERR: 'Unable to process request. Please try again later!',
    SERVER_UNAVAILABLE: 'Server is down. Please try again later!',
  },
};
