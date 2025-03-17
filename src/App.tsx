
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import { I18nProvider } from "./i18n/I18nContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <I18nProvider>
          <CookieConsentProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <>
                    <Helmet>
                      <title>SPENDLESS - Smart Budget Management</title>
                      <meta name="description" content="Take control of your finances with SPENDLESS. Track expenses, import from multiple sources, and get AI-powered insights to help you save more." />
                      <link rel="canonical" href="https://spendless.com" />
                    </Helmet>
                    <Index />
                  </>
                } />
                <Route path="/terms" element={
                  <>
                    <Helmet>
                      <title>Terms of Service - SPENDLESS</title>
                      <meta name="description" content="Read SPENDLESS Terms of Service to understand the terms and conditions of using our service." />
                      <link rel="canonical" href="https://spendless.com/terms" />
                    </Helmet>
                    <TermsOfService />
                  </>
                } />
                <Route path="/privacy" element={
                  <>
                    <Helmet>
                      <title>Privacy Policy - SPENDLESS</title>
                      <meta name="description" content="Learn about SPENDLESS Privacy Policy and how we protect your data." />
                      <link rel="canonical" href="https://spendless.com/privacy" />
                    </Helmet>
                    <PrivacyPolicy />
                  </>
                } />
                <Route path="/faq" element={
                  <>
                    <Helmet>
                      <title>FAQ - SPENDLESS</title>
                      <meta name="description" content="Frequently Asked Questions about SPENDLESS budget management app." />
                      <link rel="canonical" href="https://spendless.com/faq" />
                    </Helmet>
                    <Faq />
                  </>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={
                  <>
                    <Helmet>
                      <title>Page Not Found - SPENDLESS</title>
                      <meta name="description" content="The page you are looking for does not exist." />
                      <meta name="robots" content="noindex, nofollow" />
                    </Helmet>
                    <NotFound />
                  </>
                } />
              </Routes>
            </BrowserRouter>
          </CookieConsentProvider>
        </I18nProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
