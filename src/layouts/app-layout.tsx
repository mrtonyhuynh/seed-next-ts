import React from "react";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
// import { useAppState } from "../contexts/app/app.provider";

//example footer and header  should be there
//import Footer from "./footer";
//import Header from "./header/header";

// example mobile header
// const MobileHeader = dynamic(() => import("./header/mobile-header"), {
//   ssr: false,
// });

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  // const { pathname } = useRouter();
  // const isHomePage = pathname === "/";

  return (
    <>
      {/* <Header/> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;