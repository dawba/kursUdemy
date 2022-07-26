import React from "react";
import useTranslation from "../hooks/useTranslation";

const LanguageSelect = () => {
  const translate = useTranslation();

  return <div>{translate("lang-label")}</div>;
};

export default LanguageSelect;
