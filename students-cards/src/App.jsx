import './App.css'
import Navigation from './components/Navigation/Navigation'
import StudentCard from './components/StudentCard/StudentCard'
import TitleHeader from './components/TitleHeader/TitleHeader'

import ReactPlayer from 'react-player'

function App() {
  return (

    <>
      <Navigation />


      {/* Children */}
      <TitleHeader>
        <h2>Listado de estudiantes</h2>
        <p>Revisa su estado y detalles</p>
      </TitleHeader>

      <hr />

      <StudentCard
        firstName={"Germán"}
        lastName={"Álvarez"}
        age={33}
        city={'Madrid'}
        details={{ bootcamp: 'Web Dev', date: 'May 2022' }}
        image={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14070.png&w=350&h=254"}
      />

      <StudentCard
        firstName={"Lucy"}
        lastName={"Sanchez"}
        age={23}
        city={'Gijón'}
        details={{ bootcamp: 'UX', date: 'May 2022' }}
        image={"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"}
      />


      <StudentCard
        firstName={"John"}
        lastName={"Doe"}
        age={33}
        debt={2500}
        city={'Las Palmas'}
        details={{ bootcamp: 'Web Dev', date: 'May 2022' }}
        image={"https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg"}
      />


      <StudentCard
        firstName={"Lisa"}
        lastName={"Whateverr"}
        age={33}
        city={'Las Palmas'}
        details={{ bootcamp: 'Data', date: 'May 2022' }}
        image={"https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?fit=1200%2C900&ssl=1"}
      />

      <h2>Y ahora un vídeo de karina</h2>

      <ReactPlayer
        url={'https://www.youtube.com/watch?v=o63ZWpbohEY&ab_channel=GrandiosasVEVO'}
        playing={true}
        muted={true}
      />

    </>
  )
}

export default App;
