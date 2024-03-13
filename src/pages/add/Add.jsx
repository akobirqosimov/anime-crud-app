import { useState } from "react";
import Input from "../../components/ui/input/Input";
import Styles from "./Add.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [image1, setImage1] = useState("");
  const [title1, setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const [price1, setPrice1] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image1 || !title1 || !description1 || !price1) {
      return setError(true);
    }

    const product = {
      image: image1,
      title: title1,
      description: description1,
      price: price1,
    };

    const { data } = await axios.post(
      "https://express-crud-three.vercel.app/api/products",
      product
    );
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <span>{error ? "Iltimos Barcha Bo'limlarni To'ldiring" : null}</span>
        <Input
          label={"Image Url"}
          state={image1}
          setState={setImage1}
          error={error}
        />
        <Input
          label={"Product Title"}
          state={title1}
          setState={setTitle1}
          error={error}
        />
        <Input
          label={"Product Description"}
          state={description1}
          setState={setDescription1}
          error={error}
        />
        <Input
          label={"Product Price"}
          state={price1}
          setState={setPrice1}
          error={error}
        />
        <button>Create Product</button>
      </form>
    </div>
  );
}

export default Add;
