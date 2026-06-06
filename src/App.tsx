import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageShell } from "./components/PageShell";

const Home = lazy(() => import("./pages/Home"));
const Properties = lazy(() => import("./pages/Properties"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const Neighborhoods = lazy(() => import("./pages/Neighborhoods"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-1 w-24 brass-hairline animate-pulse" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:slug" element={<PropertyDetail />} />
            <Route path="/neighborhoods" element={<Neighborhoods />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </PageShell>
    </BrowserRouter>
  );
}
