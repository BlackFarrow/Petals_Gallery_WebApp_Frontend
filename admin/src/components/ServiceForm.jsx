import React, { useState, useEffect } from "react";

const categories = ["photography", "videography"];

function ServiceForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setCategory(initialData.category || categories[0]);
      setPrice(initialData.price || "");
      setDescription(initialData.description || "");
      setTags(initialData.tags ? initialData.tags.join(", ") : "");
      setImageUrl(initialData.imageUrl || "");
      setActive(initialData.active ?? true);
    } else {
      setTitle("");
      setCategory(categories[0]);
      setPrice("");
      setDescription("");
      setTags("");
      setImageUrl("");
      setActive(true);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category, price: Number(price), description, tags: tags.split(",").map(tag => tag.trim()), imageUrl, active });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-semibold">{initialData ? "Edit Service" : "Add New Service"}</h3>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="Service name"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-gray-50"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
                  <label className="block font-medium mb-1">Price (LKR)</label>
                  <input
                    required
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded px-3 py-2 bg-gray-50"
                    placeholder="Price in LKR"
                  />        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="Brief service description"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Tags (comma separated)</label>
        <input
          required
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="e.g. weddings, events, portraits"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="https://example.com/image.jpg"
        />
        {imageUrl && <img src={imageUrl} alt="Service Preview" className="mt-4 w-full h-auto rounded-lg shadow-md" />}
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <label className="font-medium">Active</label>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default ServiceForm;
