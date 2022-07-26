import React from "react";
import useTranslation from "../hooks/useTranslation";

const Field = () => {
  const translate = useTranslation();
  return (
    <div>
      <label>{translate("field-label")}</label>
      <input />
    </div>
  );
};

export default Field;
