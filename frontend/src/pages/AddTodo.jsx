import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();

  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products/", {
        nama_product: name,
        deskripsi: deskripsi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={saveTodo}>
        <div className="mt-[50px] ml-[5vw] flex flex-col md:ml-[15vw] lg:ml-[20vw] xl:ml-[25vw] 2xl:w-[25vw]">
          <label htmlFor="name" className="font-bold text-[1.5rem]">
            Name
          </label>
          <input
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
            id="deskripsi"
            type="text"
            className="border border-black w-[90vw] mt-[20px] h-[50px] pl-[2vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[50vw]"
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          />
        </div>
        <button className="bg-purple-500 mt-[20px] ml-[5vw] px-[2vw] py-[7px] text-white hover:bg-purple-700 md:ml-[15vw] lg:ml-[20vw] xl:ml-[25vw] 2xl:ml-[25vw]">
          Add to storage
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
