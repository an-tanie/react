import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Category from './components/Category'

function App() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [timerId, setTimerId] = useState(null)
  const [category, setCategory] = useState([])

  useEffect(() => {
    clearTimeout(timerId)
    setTimerId(
      setTimeout(()=>{
        fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then((res)=>res.json())
        .then((res)=>setProducts(res.products));
      },1000)
    )
  },[searchValue])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(res => setCategory(res));
  },[])

  return (
    <>
      <div className='searchbox'>
      <input type="search" className='search' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
      </div>
      <div className='categories'>
        {category.map((c) => (
          <Category key={c.id} category={c.name}/>
        ))}
      </div>

      <section className='box'>
        {products.map((e) => (
            <Card key={e.id} image={e.images[0]} title={e.title} price={e.price}/>
          ))}
      </section>
      
    </>
  )
}

export default App
