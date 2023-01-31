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
import ListEtudiants from './components/ListEtudiants';
import NavBar from './components/NavBar';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import AuthService from './services/auth.service';
import EventBus from "./common/EventBus";
import Home from './pages/Home';


function App() {

    const navigate = useNavigate();

    const [user,setUser] = useState(undefined);
    const [admin,setAdmin] = useState(false);
    const [enseignant,setEnseignant] = useState(false);
    const [etudiant,setEtudiant] = useState(false);

    useEffect(() => {
      const user = AuthService.getCurrentUser();
      
      if (user) {
        setUser(user);
        setEtudiant(user.roles.includes("ROLE_ETUDIANTS"));
        setAdmin(user.roles.includes("ROLE_ADMIN"));
        setEnseignant(user.roles.includes("ROLE_ENSEIGNANT"));
      }
  
      EventBus.on("logout", () => {
        logOut();
      });


  
      return () => {
        EventBus.remove("logout");
      };
    }, []);

    const logOut = () => {
      AuthService.logout();
      setEtudiant(false);
      setAdmin(false);
      setEnseignant(false);
    };

    return (
    <div className="App">

      
      
      

      <div className="container mt-3">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile'/> 
        <Route path='/enseignants' element={<ListEnseignant />} />
        <Route path='/etudiants' element={<ListEtudiants />} />
        <Route path='/seances/faireAppel' element={<FaireAppel />} />
        <Route path="/enseignants/ajouter" element={<AjouterEnseignant />} />
        <Route path="/etudiants/ajouter" element={<AjouterEtudiant />}/>
        <Route path='/modules/ajouter' element={<AjouterModule />} />
        <Route path='/modules' />
      </Routes>
      </div>
    </div>
  );
}

export default App;
