import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './pages/details';
import Home from './pages/home';
import NotFound from './pages/notFound'
import { Switch, Route } from 'react-router-dom'

function App() {
  const url = new URL(document.location)
  // const Page = url.searchParams.has('id')
  //   ? <Detail id={url.searchParams.get('id')}/>
  //   : <Home />

  return (
    <div className="App">
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
