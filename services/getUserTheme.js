import cookie from "cookie";

export const getUserTheme = async (context) => {
  const appCookie = cookie.parse(
    (context.req && context.req.headers.cookie) || ""
  );

  if (appCookie.userTheme == "true") {
    return true;
  } else {
    return false;
  }
};
