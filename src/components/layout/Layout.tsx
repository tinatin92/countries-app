import { PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";

const Layout :React.FC <PropsWithChildren> = ({children}) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        
        </>
    )
}

export default Layout