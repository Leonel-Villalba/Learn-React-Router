import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
      {tacos.map(taco => (
        <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
      ))}
      </ul>
    </div>
  )
}

const TacoDetails = () => {
  const { name } = useParams()

  return(
    <h1>Detalles del taco {name}</h1>
  )
}

const Tacos = () => {
  const { name } = useParams()
  return(
    <div>
      <h1>Tacos</h1>
      {name}
      <Link to="detalles">Ir a los detalles</Link>
      <Outlet></Outlet>
    </div>
  )
}

function App() {

  return (
    <div>
      <header>
        <h1>Hola Leonel</h1>
        <nav>
          <ul>
            <li><Link to="/search-page">Search Page</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-page" element={<SearchPage />}></Route>
        <Route path="/tacos/:name" element={<Tacos />}>
          <Route path="detalles" element={<TacoDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App
