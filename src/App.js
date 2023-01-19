import './App.css';
import IdCard from './Componets/IdCard/IdCard';



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

      
    </div>


  )
}

export default App;
