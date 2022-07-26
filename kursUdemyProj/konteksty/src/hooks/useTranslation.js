import { useCallback, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import en from "../translations/en.json";
import de from "../translations/de.json";
import pl from "../translations/pl.json";

const options = new Map([
  ["english", en],
  ["german", de],
  ["polish", pl],
]);

export default function useTranslation() {
  const language = useContext(LanguageContext);

  return useCallback(
    (key) => {
      const translation =
        typeof language === "string" ? options.get(language) : en;

      return translation[key];
    },
    [language]
  );
}
