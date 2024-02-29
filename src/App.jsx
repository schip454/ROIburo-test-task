import Breadcrumbs from './components/Breadcrubs/Breadcrumbs';
import MapSection from './components/MapSection/MapSection';
import RequisitesSection from './components/RequisitesSection/RequisitesSection';
import TeamSection from './components/TeamSection/TeamSeaction';
import './scss/main.scss';

function App() {
  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className="main-title">Контакты</h1>
      <MapSection />
      <TeamSection />
      <RequisitesSection />
    </div>
  );
}

export default App;
