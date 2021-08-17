const endPointURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
const serviceForUserActivity = process.env.NEXT_PUBLIC_SERVICE_USER_ACTIVITY;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getUserSecondsWithMac = async (mac) => {
  try {
    const request = await fetch(
      `${endPointURL}/${serviceForUserActivity}/get-items/${mac}`,
      {
        mode: "cors",
        headers: {
          "X-API-KEY": apiKey,
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    );
    const result = await request.json();

    return [result.savedSeconds, ""];
  } catch {
    return [0, "No Backend Connection Available!"];
  }
};
