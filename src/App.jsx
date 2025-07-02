import "./App.css";
import Feature from "./components/Features/Feature";
import Function from "./components/Function/Function";
import Header from "./components/Header/Header";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import TutorialHighlight from "./components/TutorialHighlight/TutorialHighlight";
import Tutorial from "./components/Tutorials/Tutorial";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FAQ from './components/FAQ/FAQ'
const App = () => {
  return (
    <div>
      <Header />
      <Tutorial />
      <Feature />
      <Function />
      <PricingPlans />
      <TutorialHighlight />
      <FAQ />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
