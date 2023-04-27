import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, {
        nama_product: name,
        deskripsi: deskripsi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/products/${id}`
    );
    setName(response.data.product.nama_product);
    setDeskripsi(response.data.product.deskripsi);
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="mt-[50px] ml-[5vw] flex flex-col md:ml-[15vw] lg:ml-[20vw] xl:ml-[25vw] 2xl:w-[25vw]">
          <label htmlFor="name" className="font-bold text-[1.5rem]">
            Name
          </label>
          <input
            value={name}
            id="name"
            type="text"
            className="border border-black w-[90vw] mt-[20px] h-[50px] pl-[2vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[50vw]"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="deskripsi" className="font-bold text-[1.5rem]">
            Deskripsi
          </label>
          <input
            value={deskripsi}
            id="deskripsi"
            type="text"
            className="border border-black w-[90vw] mt-[20px] h-[50px] pl-[2vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[50vw]"
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          />
        </div>
        <button className="bg-purple-500 mt-[20px] ml-[5vw] px-[2vw] py-[7px] text-white hover:bg-purple-700 md:ml-[15vw] lg:ml-[20vw] xl:ml-[25vw] 2xl:ml-[25vw]">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
