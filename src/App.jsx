import BGHero from "./components/BGHero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App w-[1440px] h-[3094px] mx-auto drop-shadow-lg">
      <BGHero />
      <Skills />
      {/* Diğer componentler buraya eklenecek */}
    </div>
  );
}

export default App;
