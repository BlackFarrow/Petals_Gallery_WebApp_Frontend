import React, { useState, useEffect } from "react";

const categories = ["Weddings", "Events", "Products", "Portraits", "Others"];

function ServiceForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState(initialData?.name || "");
  const [category, setCategory] = useState(initialData?.category || categories[0]);
  const [price, setPrice] = useState(initialData?.price || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");
  const [active, setActive] = useState(initialData?.active ?? true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, price: Number(price), description, imageUrl, active });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md">
      <h3 className="text-xl font-semibold">{initialData ? "Edit Service" : "Add New Service"}</h3>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Service name"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Price (USD)</label>
        <input
          required
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Price in USD"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full border rounded px-3 py-2"
          placeholder="Brief service description"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex items-center space-x-3">
        <label className="font-medium">Active</label>
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
          className="form-checkbox"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {initialData ? "Update" : "Add"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ServiceForm;
