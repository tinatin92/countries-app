import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import ShareBar from "@/components/share-bar/ShareBar";

import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default DefaultLayout
