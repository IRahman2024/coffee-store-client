import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Headers from './components/Headers';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <Headers></Headers>
      <h1 className='text-6xl text-center'>Total Coffees: {coffees.length}</h1>
      <br />
      <br />
      <div className='flex gap-2 justify-center'>
        <button className='btn btn-primary'><Link to={'/login'}>login</Link></button>
        <button className='btn btn-primary'><Link to={'/signup'}>signUp</Link></button>
      </div>

      <div className='grid md:grid-cols-2'>
        {
          coffees.map((coffee, idx) => <CoffeeCard
            key={idx}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
