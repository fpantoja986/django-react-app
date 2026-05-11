import { useEffect, useState } from 'react'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })

  }, [])

  return (
    <div style={{ padding: '20px' }}>

      <h1>Lista Productos 🚀</h1>

      {
        products.map(product => (

          <div
            key={product.id}
            style={{
              border: '1px solid gray',
              padding: '10px',
              marginBottom: '10px'
            }}
          >

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <strong>${product.price}</strong>

          </div>

        ))
      }

    </div>
  )
}

export default App