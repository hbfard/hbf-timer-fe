import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import Switch from "../../customs/switch";
import Counter from "../../customs/counter";

const cookieCutter = require("cookie-cutter");

interface propTypes {
  userThemeStatus: boolean;
  userPreviousSecondsSaved: number;
  userMacAddress: string;
  message: string;
  envConfiguration: any;
}

const MainContainer = ({
  userThemeStatus,
  userPreviousSecondsSaved,
  userMacAddress,
  message,
  envConfiguration,
}: propTypes) => {
  const [theme, setTheme] = useState(userThemeStatus ? "dark" : "light");
  const [startTimerStatus, setstartTimerStatus] = useState(false);

  const handleSwitchCallback = useCallback((dataCallback: boolean) => {
    setTheme(dataCallback ? "dark" : "light");
    cookieCutter.set("userTheme", dataCallback.toString());
  }, []);

  const handleButtonStartTimer = (status: boolean) => {
    setstartTimerStatus(!status);
  };

  const handleCounterCallback = async (seconds: number) => {
    const postData = {
      mac: userMacAddress,
      savedSeconds: seconds,
    };

    seconds > 0 &&
      message == "" &&
      (await fetch(
        `${envConfiguration.endPointURL}/${envConfiguration.serviceForUserActivity}/save`,
        {
          method: "post",
          body: JSON.stringify(postData),
          mode: "cors",
          headers: {
            "X-API-KEY": envConfiguration.apiKey,
            "content-type": "application/json; charset=utf-8",
            Accept:
              "application/json, application/xml, text/plain, text/html, *.*",
          },
        }
      ));
  };

  return (
    <section
      className="h-100"
      style={{
        background: `${theme === "light" ? "#E2E2E2" : "#363537"}`,
        color: `${theme === "light" ? "#363537" : "#FAFAFA"}`,
      }}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col">Company Logo</div>
          <div className="col-auto">
            <Switch
              controlDefault={userThemeStatus}
              switchCallback={handleSwitchCallback}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid h-75">
        <div className="row h-50"></div>
        <div className="row">
          <div className="col">
            <div className="row justify-content-center h1">
              <Counter
                intialSeconds={userPreviousSecondsSaved}
                startStatus={startTimerStatus}
              />
            </div>

            <div className="row justify-content-center">
              <button
                className={`btn btn-${theme === "dark" ? "light" : "dark"}`}
                onClick={() => handleButtonStartTimer(startTimerStatus)}>
                <FontAwesomeIcon
                  icon={startTimerStatus ? faStop : faPlay}
                  className="mr-2"
                />{" "}
                <Counter
                  intialSeconds={0}
                  startStatus={startTimerStatus}
                  forceReset={!startTimerStatus}
                  counterCallback={handleCounterCallback}
                />
              </button>
            </div>
            <div className="row justify-content-center mt-5">{message}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
