import React, { useEffect, useState } from "react";

import { IntlProvider } from "react-intl";
// import { InjectRTL } from 'assets/styles/global.style';
import Cookie from "js-cookie";
import { isRTL, isLocale } from "./language.utils";
import { StyleSheetManager } from "styled-components";
import RTLPlugin from "stylis-plugin-rtl";

const LanguageContext = React.createContext({} as any);

export const LanguageProvider = ({ children, messages }) => {

    // Mặc định ban đầu là English
  const [locale, setLocale] = useState("en");

  // Thay đổi ngôn ngữ, set cookie lưu locale
  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set("locale", newLocale);
  };

  // Hook Effect, phụ thuộc vào state:locale
  useEffect(() => {
    const localSetting = Cookie.get("locale");

    // Nếu trước đó coolie có lưu locale hợp lệ thì set locale đó vào state
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }

  }, [locale]);


  let isRtl = isRTL(locale);

  /**
   * Bọc LanguageContext.Provider bên ngoài
   */
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