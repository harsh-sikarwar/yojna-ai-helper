import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";
import AIChatWidget from "@/components/AIChatWidget";
import Index from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import SchemesPage from "./pages/SchemesPage";
import SchemeDetailsPage from "./pages/SchemeDetailsPage";
import DocumentsPage from "./pages/DocumentsPage";
import ApplicationPage from "./pages/ApplicationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/scheme/:id" element={<SchemeDetailsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIChatWidget />
          <BottomNav />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
