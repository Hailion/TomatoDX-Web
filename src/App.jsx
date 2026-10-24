import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import KeyFeatures from './components/KeyFeatures';
import Languages from './components/Languages';
import Navbar from './components/Navbar';
import Collaborators from './components/Collaborators';
import LegalNotice from './components/LegalNotice';
import Team from './components/Team';
import Technology from './components/Technology';
import UserAgreement from './components/UserAgreement';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <KeyFeatures />
      <Technology />
      <Collaborators />
      <Impact />
      <Team />
      <Languages />
      <FAQ />
      <Contact />
      <Footer />
      {/* Hidden by default, can be linked from footer */}
      <div style={{ display: 'none' }}>
        <LegalNotice />
        <UserAgreement />
      </div>
    </div>
  );
}

export default App;
