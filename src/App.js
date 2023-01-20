import './App.css';
import BoxColor from './Componets/BoxColor/BoxColor';
import Greetings from './Componets/Greetings/Greetings';
import IdCard from './Componets/IdCard/IdCard';
import Random from './Componets/Random/Random';



function App() {
  return (
    <div>
      <IdCard
        lastName='Doe'
        firstNAme='John'
        gender='male'
        height={178}
        //    birth={new Date('1992-07-14')}
        picture='https://randomuser.me/api/portraits/men/44.jpg'
      />

      <IdCard
        lastName='Delores'
        firstNAme='Obrien'
        gender='female'
        height={172}
        //    birth={new Date('1998-05-11')}
        picture='https://randomuser.me/api/portraits/women/44.jpg'
      />
      <hr />
      <hr />

      <Greetings lang="de">Angel</Greetings>
      <Greetings lang="fr">Angel</Greetings>

      <hr />
      <hr />

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr />
      <hr />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>


  )
}

export default App;
