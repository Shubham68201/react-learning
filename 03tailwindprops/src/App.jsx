
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"Shubham",
    age:21
  }

  let newArr=[1,2,3]
  return (
    <>
      <h1 className='text-3xl font-bold underline mb-4'>Tailwind Test</h1>

      <Card username="user1" btnText="click me"/>
      <Card username="user2"/>
    </>
  )
}

export default App
