import './App.css';
import Catalogue from './pages/Catalogue';
import PromotionalVideo from './pages/PromotionalVideo';
import StudyReport from './pages/StudyReport';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <HashRouter>
      <ModalProvider>
        <div className="App">
          <Switch>
            <Route path="/study-report">
              <StudyReport />
            </Route>
            <Route path="/promotional-video">
              <PromotionalVideo />
            </Route>
            <Route path="/">
              <Catalogue />
            </Route>
          </Switch>
        </div>
      </ModalProvider>
    </HashRouter>
  );
}

export default App;
