import './App.css'
import Button from './components/Button/Button'
import Navigation from './components/Navigation/Navigation'
import StudentCard from './components/StudentCard/StudentCard'

const App = () => {

  return (
    <section>

      <Navigation />

      <h1>Primera web con React</h1>

      <Button text="Contactar" theme="danger" />
      <Button text="Conócenos" theme="warning" />

      <h2>Tarjetas de alumnxs</h2>

      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </section>
  )
}


export default App