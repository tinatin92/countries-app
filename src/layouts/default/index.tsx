import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ShareBar from "@/components/share-bar/ShareBar";
import Wrapper from "@/components/UI/body-wrapper/Wrapper";

import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <ShareBar />
      <Wrapper>
        <Outlet />
      </Wrapper>

      <Footer />
    </>
  );
};

export default DefaultLayout;
