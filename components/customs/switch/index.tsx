import React, { useRef, useEffect, memo } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface propTypes {
  controlDefault: boolean;
  switchCallback: any;
}

const Switch = ({ controlDefault, switchCallback }: propTypes) => {
  const handleCallback = ({ target }: any) => {
    switchCallback(target.checked);
  };

  useEffect(() => {
    if (controlDefault) {
      controlRef.current.checked = controlDefault;
    }
    return () => {};
  }, [controlDefault]);

  const controlRef = useRef<any>(null);

  return (
    <>
      <Form>
        <div className="d-flex">
          <FontAwesomeIcon icon={faSun} className="mt-1 mr-2" />{" "}
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={handleCallback}
            ref={controlRef}
          />{" "}
          <FontAwesomeIcon icon={faMoon} className="mt-1" />
        </div>
      </Form>
    </>
  );
};

export default memo(Switch);
