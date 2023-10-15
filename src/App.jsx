import {useState} from "react"
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>

      <h1 className='text-4xl font-semibold'>Total Coffee: {loadedCoffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
        {
         loadedCoffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
         ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
