import { useState, useEffect } from "react";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setAllProducts(data.products);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="pt-20 grid grid-cols-4 gap-6 px-6">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center bg-white shadow-md rounded-xl p-4"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <p className="mt-3 text-lg font-semibold">{product.title}</p>
          <p className="text-black-500 text-sm">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;