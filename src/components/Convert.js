import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedText(text), 1000);
    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
          }
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    if (debouncedText) translate();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
