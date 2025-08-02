// src/components/TagFilter.jsx
import React from "react";

function TagFilter({ tags, selectedTag, onSelectTag }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <button
        onClick={() => onSelectTag(null)}
        className={`px-4 py-2 rounded-full font-medium transition ${
          selectedTag === null
            ? "bg-yellow-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            selectedTag === tag
              ? "bg-yellow-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
