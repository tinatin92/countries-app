import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import AboutView from "./pages/about/views/about";
import HomeView from "./pages/home/view/home";
import ContactPage from "./pages/contact/views/contact";
import CountrieDetailPage from "./pages/home/view/country-detail";

import { Suspense } from "react";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={
          <Suspense fallback={<p>Here Shoul be home page</p>}>
            <HomeView />

          </Suspense>
        } />
        <Route path="/countriedetail/:id" element={<CountrieDetailPage />}/>
        <Route path="about" element={<AboutView />} />
        <Route path="contact" element={<ContactPage />}/>
      </Route>
    </Routes>
  );
};

export default App;
