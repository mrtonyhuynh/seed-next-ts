import React, { useEffect, useState } from "react";

import { IntlProvider } from "react-intl";
// import { InjectRTL } from 'assets/styles/global.style';
import Cookie from "js-cookie";
import { isRTL, isLocale } from "./language.utils";
import { StyleSheetManager } from "styled-components";
import RTLPlugin from "stylis-plugin-rtl";

const LanguageContext = React.createContext({} as any);

export const LanguageProvider = ({ children, messages }) => {
  const [locale, setLocale] = useState("en");
  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set("locale", newLocale);
  };
  useEffect(() => {
    const localSetting = Cookie.get("locale");
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, isRtl }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StyleSheetManager stylisPlugins={isRtl ? [RTLPlugin] : []}>
          {children}
        </StyleSheetManager>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLocale = () => React.useContext(LanguageContext);