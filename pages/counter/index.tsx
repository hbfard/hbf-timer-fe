import React from "react";
import { GetServerSideProps } from "next";
import getmac from "getmac";

import MainContainer from "../../components/pages/counter/MainContainer";

import { getUserTheme } from "../../services/getUserTheme";
import { getUserSecondsWithMac } from "../../services/getUserSecondsWithMac";
import { getEnvConfig } from "../../services/getEnvConfig";

const Index = (props: any) => {
  return (
    <>
      <MainContainer
        userThemeStatus={props.userThemeStatus}
        userPreviousSecondsSaved={props.userPreviousSecondsSaved}
        userMacAddress={props.userMacAddress}
        message={props.message}
        envConfiguration={props.envConfiguration}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userThemeStatus = await getUserTheme(context);

  const userMacAddress = getmac();
  const [userPreviousSecondsSaved, message] = await getUserSecondsWithMac(
    userMacAddress
  );

  const envConfiguration = getEnvConfig();

  return {
    props: {
      userThemeStatus,
      userPreviousSecondsSaved,
      userMacAddress,
      message,
      envConfiguration,
    },
  };
};

export default Index;
