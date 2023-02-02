import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
