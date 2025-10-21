import './App.css'
import Greetings from './components/Greetings'
import Counter from './components/Counter'
import Userreducer from './components/Userreducer'

function App() {
const students_obj = [
  {
    Name:"Alexio",
    Age:"20",
    Roll_no:"2305005",
    Class:"TYBCA"
  },
{
    Name:"Arjun",
    Age:"24",
    Roll_no:"2305008",
    Class:"TYBCA"
  },
  {
    Name:"Austin",
    Age:"22",
    Roll_no:"2305009",
    Class:"TYBCA"
  },
  

]
const list = []
for (const key of students_obj) {
  list.push(<Greetings name={key.Name}/>)
  list.push(<Greetings name={key.Age}/>)
  list.push(<Greetings name={key.Roll_no}/>)
  list.push(<Greetings name={key.Class}/>)
  list.push(<br></br>)

  }


  return <>

<Greetings />
<Counter />  

<Userreducer />


  </>
}

export default App
