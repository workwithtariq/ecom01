import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProductFormField from "./AddProductFormField";
import AddProductFormSelect from "./AddProductFormSelect";
import AddProductButton from "./AddProductButton";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState("laptops");
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    displaySize: "",
    chipset: "",
    ram: "",
    rom: "",
    battery: "",
    features: [],
    availability: "In stock",
    description: "",
    ratings: "",
  });

  const apiUrl = `http://localhost:5000/api/${productType}`;
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [productType]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(apiUrl);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
    setFormData({
      brand: "",
      model: "",
      price: "",
      displaySize: "",
      chipset: "",
      ram: "",
      rom: "",
      battery: "",
      features: [],
      availability: "In stock",
      description: "",
      ratings: "",
    });
  };

  const handleSubmit = async (e) => {
    console.log(apiUrl);
    console.log(formData);
    e.preventDefault();
    try {
      await axios.post(apiUrl, formData);
      setFormData({
        brand: "",
        model: "",
        price: "",
        displaySize: "",
        chipset: "",
        ram: "",
        rom: "",
        battery: "",
        features: [],
        availability: "In stock",
        description: "",
        ratings: "",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/updateproduct/${id}`);
  };

  const renderProductSpecificFields = () => {
    const fields = {
      laptops: [
        {
          id: "brand",
          name: "Brand",
          options: ["Asus", "HP", "Dell", "Lenovo", "Apple", "Xiaomi"],
        },
        {
          id: "series",
          name: "Series",
          options: ["Consumer", "Business", "Gaming", "Premium"],
        },
        {
          id: "processorType",
          name: "Processor Type",
          options: ["Intel", "AMD", "Apple", "Snapdragon"],
        },
        {
          id: "processorModel",
          name: "Processor Model",
          options: [
            "i3",
            "i5",
            "i7",
            "i9",
            "Ryzen 3",
            "Ryzen 5",
            "Ryzen 7",
            "Ryzen 9",
            "Apple M1",
            "M2",
            "M3",
          ],
        },
        {
          id: "generation",
          name: "Generation",
          options: [
            "10th gen",
            "11th gen",
            "12th gen",
            "13th gen",
            "Ryzen 3000",
            "4000",
            "5000",
            "6000",
          ],
        },
        {
          id: "displaySize",
          name: "Display Size",
          options: ["11 inch", "14 inch", "15 inch", "17 inch"],
        },
        {
          id: "displayType",
          name: "Display Type",
          options: ["LED", "OLED", "AMOLED"],
        },
        {
          id: "ramSize",
          name: "RAM Size",
          options: ["4GB", "8GB", "16GB", "32GB"],
        },
        { id: "ramType", name: "RAM Type", options: ["DDR3", "DDR4", "DDR5"] },
        {
          id: "storage",
          name: "Storage",
          options: ["256GB SSD", "512GB SSD", "1TB SSD", "1TB HDD"],
        },
        {
          id: "graphicsCard",
          name: "Graphics Card",
          options: ["Integrated", "NVIDIA", "AMD"],
        }, // Custom input
      ],
      phones: [
        {
          id: "brand",
          name: "Brand",
          options: ["Xiaomi", "Oppo", "Vivo", "Realme", "OnePlus"],
        },
        {
          id: "displaySize",
          name: "Display Size",
          options: ["5 inch", "6 inch", "7 inch and above"],
        },
        {
          id: "chipset",
          name: "Chipset",
          options: [
            "Bionic",
            "Snapdragon",
            "Mediatek",
            "Exynos",
            "Unisoc",
            "Kirin",
          ],
        },
        {
          id: "ram",
          name: "RAM",
          options: ["4GB", "6GB", "8GB", "12GB", "16GB"],
        },
        {
          id: "rom",
          name: "Storage (ROM)",
          options: ["32GB", "64GB", "128GB", "256GB", "1024GB"],
        },
        {
          id: "battery",
          name: "Battery",
          options: ["4000mAh", "5000mAh", "6000mAh"],
        },
        {
          id: "features",
          name: "Features",
          options: ["Dual SIM", "Fast Charging", "eSIM Support", "Waterproof"],
        },
      ],
      gadgets: [
        {
          id: "category",
          name: "Category",
          options: ["Smart Watch", "Earbuds", "Neckband", "Power Bank"],
        },
        {
          id: "brand",
          name: "Brand",
          options: ["Xiaomi", "Samsung", "Motorola", "Orimo", "Baseus"],
        },
        {
          id: "features",
          name: "Features",
          options: [
            "Waterproof",
            "Noise Cancellation",
            "Wireless Charging",
            "Bluetooth 5.0",
            "Heart Rate Monitor",
          ],
        },
        {
          id: "batteryLife",
          name: "Battery Life",
          placeholder: "Battery Life (e.g., 24 hours)",
        },
      ],
    };

    return fields[productType].map((field) =>
      field.options?.length > 0 ? (
        <AddProductFormSelect
          key={field.id}
          id={field.id}
          name={field.id}
          value={formData[field.id]}
          options={field.options}
          onChange={handleChange}
          required
        />
      ) : (
        <AddProductFormField
          key={field.id}
          id={field.id}
          name={field.id}
          value={formData[field.id]}
          placeholder={field.name}
          onChange={handleChange}
        />
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <AddProductFormSelect
          id="productType"
          name="Product Type"
          value={productType}
          options={["laptops", "phones", "gadgets"]}
          onChange={handleProductTypeChange}
        />

        <AddProductFormField
          id="model"
          name="model"
          value={formData.model}
          placeholder="Model"
          onChange={handleChange}
          required
        />
        <AddProductFormField
          id="price"
          name="price"
          type="number"
          value={formData.price}
          placeholder="Price"
          onChange={handleChange}
          required
        />

        {renderProductSpecificFields()}

        <AddProductFormField
          id="description"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <AddProductFormField
          id="ratings"
          name="ratings"
          type="number"
          value={formData.ratings}
          placeholder="Ratings"
          onChange={handleChange}
        />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Availability
          </label>
          <div className="flex gap-4">
            {["In stock", "Out of stock", "Pre-order", "Upcoming"].map(
              (status) => (
                <label key={status}>
                  <input
                    type="radio"
                    name="availability"
                    value={status}
                    checked={formData.availability === status}
                    onChange={handleChange}
                  />
                  {status}
                </label>
              )
            )}
          </div>
        </div>

        <AddProductButton type="submit" className="mr-2">
          Add Product
        </AddProductButton>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-bold">{product.model}</h3>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price}</p>
              <AddProductButton onClick={() => handleDelete(product._id)}>
                Delete
              </AddProductButton>
              <AddProductButton onClick={() => handleUpdate(product._id)}>
                Update
              </AddProductButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProductPage;
