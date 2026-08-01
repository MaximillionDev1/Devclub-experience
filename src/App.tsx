import { HeroScene } from './components/hero/HeroScene';
import { AboutSection } from './components/about/AboutSection';
import { CompaniesSection } from './components/companies/CompaniesSection';
import { JourneySection } from './components/journey/JourneySection';
import { FormationsSection } from './components/formations/FormationsSection';
import { FinalCtaSection } from './components/final-cta/FinalCtaSection';
import { MindsetSection } from './components/mindset/MindsetSection';
import { StudentsSection } from './components/students/StudentsSection';
import { TutorsSection } from './components/tutors/TutorsSection';

function App() {
  return (
    <main id="top">
      <HeroScene />
      <JourneySection />
      <FormationsSection />
      <MindsetSection />
      <AboutSection />
      <StudentsSection />
      <CompaniesSection />
      <TutorsSection />
      <FinalCtaSection />
    </main>
  );
}

export default App;
