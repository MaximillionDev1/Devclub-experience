import { HeroScene } from './components/hero/HeroScene';
import { JourneySection } from './components/journey/JourneySection';
import { FormationsSection } from './components/formations/FormationsSection';
import { MindsetSection } from './components/mindset/MindsetSection';
import { StudentsSection } from './components/students/StudentsSection';

function App() {
  return (
    <main>
      <HeroScene />
      <JourneySection />
      <FormationsSection />
      <MindsetSection />
      <StudentsSection />
      <section id="empresas" className="institutional-continuation" aria-label="Continuação da experiência">
        <span id="tutores" aria-hidden="true" />
        <p>Novos caminhos continuam daqui.</p>
      </section>
    </main>
  );
}

export default App;
