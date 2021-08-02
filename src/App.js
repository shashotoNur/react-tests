import { Switch, Route } from "react-router-dom";

import Banner from './components/Banner/Banner';
import TodoPage from './pages/Todo/Todo';
import Followers from './pages/Followers/Followers';

const App = () =>
    {
      return (
        <>
          <Banner />
    
          <Switch>
            <Route strict exact path="/" component={ TodoPage }/>
            <Route strict exact path="/followers" component={ Followers }/>
          </Switch>
        </>
      );
    };

export default App;
