import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import AboutView from "./pages/about/views/about";
import HomeView from "./pages/home/view/home";

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
        <Route path="about" element={<AboutView />} />
      </Route>
    </Routes>
  );
};

export default App;
