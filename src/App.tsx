import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const DefaultLayout = lazy(() => import("./layouts/default"));
const AboutView = lazy(() => import("./pages/about/views/about"));
const HomeView = lazy(() => import("./pages/home/view/home"));
const ContactPage = lazy(() => import("./pages/contact/views/contact"));
const CountrieDetailPage = lazy(
  () => import("./pages/home/view/country-detail"),
);

const App: React.FC = () => {
  return (
    <Routes>

      
      <Route
        path="/:lang"
        element={
          <Suspense fallback={<p>Loading layout...</p>}>
            <DefaultLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<p>Loading home page...</p>}>
              <HomeView />
            </Suspense>
          }
        />

        <Route
          path="countriedetail/:id"
          element={
            <Suspense fallback={<p>Loading country detail...</p>}>
              <CountrieDetailPage />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<p>Loading about page...</p>}>
              <AboutView />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<p>Loading contact page...</p>}>
              <ContactPage />
            </Suspense>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/ka/" />} />
    </Routes>
  );
};

export default App;
