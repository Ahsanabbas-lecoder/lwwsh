import Hero from '../components/Hero';
import Services from '../components/Services';
import TechnologyStack from '../components/TechnologyStack';
import Testimonials from '../components/Testimonials';
import './styles/pages/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <TechnologyStack />
      <Testimonials />
    </div>
  );
};

export default Home;