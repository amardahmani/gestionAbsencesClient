import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import ListEnseignant from './components/ListEnseignant';
import FaireAppel from './components/FaireAppel';
import AjouterEnseignant from './components/AjouterEnseignant';
import AjouterEtudiant from './components/AjouterEtudiant';
import AjouterModule from './components/AjouterModule';
import ListeAbsence from './components/ListeAbsence';
import NavBar from './components/NavBar';


function App() {
    return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
