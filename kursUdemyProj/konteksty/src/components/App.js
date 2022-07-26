import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageSelect from "./LanguageSelect";
import { LanguageContext } from "../contexts/LanguageContext";

const App = () => {
  const [currentLanguage, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <div className="ui container">
        <LanguageSelect />
        <i
          className="flag gb"
          onClick={() =>
            onLanguageChange("english", currentLanguage, setLanguage)
          }
        />
        <i
          className="flag de"
          onClick={() =>
            onLanguageChange("german", currentLanguage, setLanguage)
          }
        />
        <i
          className="flag pl"
          onClick={() =>
            onLanguageChange("polish", currentLanguage, setLanguage)
          }
        />
        <br />
        <UserCreate />
      </div>
    </LanguageContext.Provider>
  );
};

const onLanguageChange = (language, currentLanguage, setLanguage) => {
  if (language !== currentLanguage) {
    setLanguage(language);
  }
};

export default App;
