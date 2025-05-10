import ContactForm from "./components/ContactForm";
import CustomerTestimonials from "./components/CustomerTestinomials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>    
  );
}
