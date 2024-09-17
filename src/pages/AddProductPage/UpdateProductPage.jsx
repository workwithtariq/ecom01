import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProductFormField from "./AddProductFormField";
import AddProductFormSelect from "./AddProductFormSelect";
import AddProductButton from "./AddProductButton";
import { useParams, useNavigate } from "react-router-dom"; // Replaced useHistory with useNavigate

const UpdateProductPage = () => {
  const { id } = useParams(); // Fetch product ID from URL params
  const [productType, setProductType] = useState("laptops");
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    processorType: "",
    processorModel: "",
    generation: "",
    displaySize: "",
    displayType: "",
    ramSize: "",
    ramType: "",
    storage: "",
    graphicsCard: "",
    batteryLife: "",
    features: [],
    availability: "In stock",
    description: "",
    ratings: "",
  });

  const apiUrl = `http://localhost:5000/api/${productType}/${id}`;
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  useEffect(() => {
    // Fetch product data by ID when the page loads
    fetchProductById();
  }, [productType]);

  const fetchProductById = async () => {
    try {
      const res = await axios.get(apiUrl);
      setFormData(res.data); // Populate form with existing product data
    } catch (error) {
      console.error("Error fetching product:", error);
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
    // Reset form data when product type changes
    setFormData({
      brand: "",
      model: "",
      price: "",
      processorType: "",
      processorModel: "",
      generation: "",
      displaySize: "",
      displayType: "",
      ramSize: "",
      ramType: "",
      storage: "",
      graphicsCard: "",
      batteryLife: "",
      features: [],
      availability: "In stock",
      description: "",
      ratings: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(apiUrl, formData);
      alert("Product updated successfully!");
      navigate("/products"); // Use navigate to go to product list or another page after update
    } catch (error) {
      console.error("Error updating product:", error);
    }
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
        },
      ],
      phones: [
        {
          id: "displaySize",
          name: "Display Size",
          options: ["5 inch", "6 inch", "7 inch and above"],
        },
        {
          id: "storage",
          name: "Storage",
          options: ["32GB", "64GB", "128GB", "256GB", "1024GB"],
        },
      ],
      gadgets: [
        { id: "batteryLife", name: "Battery Life", options: [] }, // Custom input
        { id: "features", name: "Features", options: [] }, // Custom input
      ],
    };

    return fields[productType].map((field) => {
      return field.options.length > 0 ? (
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
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
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
            <label>
              <input
                type="radio"
                name="availability"
                value="In stock"
                checked={formData.availability === "In stock"}
                onChange={handleChange}
              />
              In stock
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="Out of stock"
                checked={formData.availability === "Out of stock"}
                onChange={handleChange}
              />
              Out of stock
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="Pre-order"
                checked={formData.availability === "Pre-order"}
                onChange={handleChange}
              />
              Pre-order
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="Upcoming"
                checked={formData.availability === "Upcoming"}
                onChange={handleChange}
              />
              Upcoming
            </label>
          </div>
        </div>

        <AddProductButton type="submit" className="mr-2">
          Update Product
        </AddProductButton>
      </form>
    </div>
  );
};

export default UpdateProductPage;
