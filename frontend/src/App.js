import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ddd', margin: 10, padding: 10, width: 200 }}>
            <img src={product.image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;