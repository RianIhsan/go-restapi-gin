import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products/");
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid place-items-center mt-[10vh] md:mt-[7vh] lg:mt-[7vh] xl:mt-[7vh] 2xl:mt-[7vh]">
        <img
          src={logo}
          alt="logo"
          className="w-[20vw] md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[7vw]"
        />
        <h1 className="font-bold text-[2rem] mt-[3vh] font-Merriweather md:text-[1.7rem]">
          Gudang{" "}
          <span className="text-[1rem] md:text-[1.3rem] text-slate-500">
            powered backend by
          </span>{" "}
          <span className="text-[text3rem] md:text-[2.2rem] text-blue-500">
            Go
          </span>
        </h1>
      </div>
      <div className="grid place-items-center mt-[5vh]">
        <div className="border border-slate-500 w-[70vw] h-[50vh] md:w-[60vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw]">
          <div className="mt-[3vh] flex justify-end mr-[5vw] md:mr-[3vw]">
            <Link
              to="/add"
              className="px-[2vw] py-[1vh] duration-100 bg-blue-500 text-white hover:bg-blue-700 md:px-[1vw]"
            >
              Add
            </Link>
          </div>
          <div className="flex flex-col items-center overflow-y-auto h-[30vh] gap-5">
            {products.map((products) => (
              <div
                key={products.id}
                className="flex flex-wrap items-center justify-between px-3 py-2 hover:border-slate-500 hover:border  w-11/12 border border-white"
              >
                <p className="flex-1">
                  <span className="font-bold">name : </span>
                  {products.nama_product}
                </p>
                <p className="flex-1">
                  <span className="font-bold">deskripsi : </span>{" "}
                  {products.deskripsi}
                </p>
                <div>
                  <Link
                    to={`edit/${products.id}`}
                    className="bg-blue-500 hover:bg-blue-700 px-2 py-1 text-white mr-2"
                    onClick={() => handleEditTodo(products.id)}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 px-2 py-1 text-white"
                    onClick={() => deleteTodo(products.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
