const endPointURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
const serviceForUserActivity = process.env.NEXT_PUBLIC_SERVICE_USER_ACTIVITY;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getEnvConfig = () => {
  const configObj = {
    endPointURL,
    serviceForUserActivity,
    apiKey,
  };

  return configObj;
};
