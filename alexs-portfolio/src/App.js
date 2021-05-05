import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import MyCodingJourney from "./components/MyCodingJourney";
import MyWork from "./components/MyWork";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div>
      <WelcomePage />
      <MyCodingJourney />
      <AboutMe />
      <MyWork />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
