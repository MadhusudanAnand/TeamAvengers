import logo from './logo.svg';
import './App.css';
import ListStudents from './components/ListStudents';
import Navigation from './components/Navigation';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
import ListTeamScore from './components/ListTeamScore';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route path="/" exact component={ListStudents}></Route>
          <Route path="/students" component={ListStudents}></Route>
          <Route path="/teams" component={ListTeamScore}></Route>          
          <Route path="/add-students" component={CreateStudent}></Route>
          <Route path="/update-students/:id" component={UpdateStudent}></Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
