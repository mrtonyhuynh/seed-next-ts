import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { AuthProvider } from "../contexts/auth/auth.provider";

import '../styles/globals.css'

const AppLayout = dynamic(() => import("../layouts/app-layout"));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <AppLayout>
        <Component {...pageProps} />
    </AppLayout>
    </AuthProvider>
  )
}

export default MyApp
