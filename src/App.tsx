import { AboutComponent } from "./components/AboutComponent/AboutComponent";
import { ContactComponent } from "./components/ContactComponent/ContactComponent";
import { Header } from "./components/Header/Header";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import SkillsComponent from "./components/SkillsComponent/SkillsComponent";

function App() {
  return (
    <>
      <Header />
      <HomeComponent />
      <SkillsComponent />
      <AboutComponent />
      <ContactComponent />
    </>
  );
}

export default App;
