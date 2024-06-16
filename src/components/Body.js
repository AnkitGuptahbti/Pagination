import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const Body = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const pdtPerPage = 10;
  // const totalPages = Math.ceil(products.length / pdtPerPage);
  const totalPages = 10;

  const fetchProduct = async () => {
    // const data = await fetch("https://dummyjson.com/products?limit=100");
    const data = await fetch(
      `https://dummyjson.com/products?limit=${pdtPerPage}&skip=${
        page * pdtPerPage - pdtPerPage
      }`
    );
    const json = await data.json();
    setProducts(json.products);
  };
  const selectPageHandler = (i) => {
    setPage(i);
  };
  useEffect(() => {
    fetchProduct();
  }, [page]);
  return (
    <div className="body">
      {products.length > 0 && (
        <div className="products">
          {products
            // .slice(page * pdtPerPage - pdtPerPage, page * pdtPerPage)
            .map((item) => (
              <Card key={item.id} item={item} />
            ))}
        </div>
      )}
      <div className="pagination">
        {page > 1 && (
          <span onClick={() => setPage((page) => page - 1)}>⬅️</span>
        )}
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            onClick={() => selectPageHandler(i + 1)}
            className={page === i + 1 ? "page__selected" : "pqr"}
          >
            {i + 1}
          </span>
        ))}
        {page < totalPages && (
          <span onClick={() => setPage((page) => page + 1)}>➡️</span>
        )}
      </div>
    </div>
  );
};

export default Body;
