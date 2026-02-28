import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Canned from "./pages/Canned";
import Dates from "./pages/Dates";
import Juices from "./pages/Juices";
import Markets from "./pages/Markets";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/fruits" element={<Fruits />} />
              <Route path="/products/vegetables" element={<Vegetables />} />
              <Route path="/products/canned" element={<Canned />} />
              <Route path="/products/dates" element={<Dates />} />
              <Route path="/products/juices" element={<Juices />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
