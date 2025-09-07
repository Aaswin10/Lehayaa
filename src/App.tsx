
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewArrivals from "./pages/NewArrivals";
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Lookbook from "./pages/Lookbook";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lookbook" element={<Lookbook />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
