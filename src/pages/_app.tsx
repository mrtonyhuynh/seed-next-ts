import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../contexts/app/app.provider";
// import { AuthProvider } from "../contexts/auth/auth.provider";
import { LanguageProvider } from "../contexts/language/language.provider";

import { GlobalStyle } from "../assets/styles/global.style";
import { defaultTheme } from "../site-settings/site-theme/default";
import { messages } from "../site-settings/site-translation/messages";

const AppLayout = dynamic(() => import("../layouts/app-layout"));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <LanguageProvider messages={messages}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </LanguageProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
