import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default LandingPage;
