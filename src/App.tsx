import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import JobsPage from "./pages/JobsPage";
import ProductsPage from "./pages/ProductsPage";
import EnterpriseSecurityPage from "./pages/Offerings/EnterpriseSecurityPage";
import AutomotiveCyberSecurityPage from "./pages/Offerings/AutomotiveCyberSecurityPage";
import VirtualCisoPage from "./pages/Offerings/VirtualCisoPage";
import AuditComplianceTrainingPage from "./pages/Offerings/Audit-Compliance-TrainingPage";
import VAPTServicesPage from "./pages/Offerings/VAPT-ServicesPage";
import ErrorPage from "./pages/Error";
import ScrollToTopButton from "./components/Common/ScrollToTopButton ";
import OutcomeDrivenMetrics from "./pages/Offerings/Outcome-Driven-Metrics";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUsPage />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUsPage />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobsPage />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path="/enterprise-security"
          element={
            <Layout>
              <EnterpriseSecurityPage />
            </Layout>
          }
        />
        <Route
          path="/automotive-cyber-security"
          element={
            <Layout>
              <AutomotiveCyberSecurityPage />
            </Layout>
          }
        />
        <Route
          path="/virtual-ciso"
          element={
            <Layout>
              <VirtualCisoPage />
            </Layout>
          }
        />
        <Route
          path="/audit-compliance-training"
          element={
            <Layout>
              <AuditComplianceTrainingPage />
            </Layout>
          }
        />
        <Route
          path="/vapt-services"
          element={
            <Layout>
              <VAPTServicesPage />
            </Layout>
          }
        />
        <Route
          path="/outcome-driven-metrics-odm"
          element={
            <Layout>
              <OutcomeDrivenMetrics />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
