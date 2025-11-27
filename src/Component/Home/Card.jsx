import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("homes.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.download - a.download);
        setProducts(sorted.slice(0, 6));
      });
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/appdetails/${product.id}`}>
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition cursor-pointer">
              <figure>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>

                <div className="card-actions justify-between mt-4">
                  <button className="btn btn-primary">
                    <img
                      className="w-4 h-4 mr-1"
                      src="/icon-downloads.png"
                      alt="downloads"
                    />
                    {product.download}
                  </button>

                  <button className="btn btn-primary">
                    <img
                      className="w-4 h-4 mr-1"
                      src="/icon-ratings.png"
                      alt="rating"
                    />
                    {product.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
