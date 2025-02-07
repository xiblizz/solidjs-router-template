import { Router, Route } from '@solidjs/router'

import Home from './pages/Home.jsx'

function App() {
  return (
    <Router>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/hello-world'
        component={() => <h1>Hello World!</h1>}
      />
    </Router>
  )
}

export default App
