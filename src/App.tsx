import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/membresias" component={Home} />
          <Route path="/precios" component={Home} />
          <Route>404 - Página no encontrada</Route>
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App