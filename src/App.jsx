import BGHero from "./components/BGHero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App w-[1440px] h-[3094px] mx-auto drop-shadow-2xl">
      <BGHero />
      <Skills />
      <Profile />
      {/* Diğer componentler buraya eklenecek */}
    </div>
  );
}

export default App;
