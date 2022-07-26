import React from "react";
import useTranslation from "../hooks/useTranslation";

const Button = () => {
  const translate = useTranslation();
  return (
    <button className={"ui button primary"}>
      {translate("submit-button-label")}
    </button>
  );
};

export default Button;
