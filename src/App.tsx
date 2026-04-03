import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SprzedazMieszkania from "./pages/SprzedazMieszkania";
import Testament from "./pages/Testament";
import DarowiznaDomu from "./pages/DarowiznaDomu";
import DzialSpadku from "./pages/DzialSpadku";
import UmowaSpolki from "./pages/UmowaSpolki";
import RozdzielnoMajatkowa from "./pages/RozdzielnoMajatkowa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sprzedaz-mieszkania-notariusz-warszawa" element={<SprzedazMieszkania />} />
          <Route path="/testament-notarialny-warszawa" element={<Testament />} />
          <Route path="/darowizna-nieruchomosci-notariusz-warszawa" element={<DarowiznaDomu />} />
          <Route path="/dzial-spadku-notariusz-warszawa" element={<DzialSpadku />} />
          <Route path="/umowa-spolki-notariusz-warszawa" element={<UmowaSpolki />} />
          <Route path="/rozdzielnosc-majatkowa-notariusz-warszawa" element={<RozdzielnoMajatkowa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
