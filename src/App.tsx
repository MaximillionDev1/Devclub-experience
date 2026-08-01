import { HeroScene } from './components/hero/HeroScene';
import { AboutSection } from './components/about/AboutSection';
import { CompaniesSection } from './components/companies/CompaniesSection';
import { JourneySection } from './components/journey/JourneySection';
import { FormationsSection } from './components/formations/FormationsSection';
import { MindsetSection } from './components/mindset/MindsetSection';
import { StudentsSection } from './components/students/StudentsSection';
import { TutorsSection } from './components/tutors/TutorsSection';

function App() {
  return (
    <main>
      <HeroScene />
      <JourneySection />
      <FormationsSection />
      <MindsetSection />
      <AboutSection />
      <StudentsSection />
      <CompaniesSection />
      <TutorsSection />
      <section className="institutional-continuation" aria-label="Continuação da experiência">
        <p>Novos caminhos continuam daqui.</p>
      </section>
    </main>
  );
}

export default App;
