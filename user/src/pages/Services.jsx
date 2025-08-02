import React, { useState } from "react";
import { services } from "../data/servicesData";
import ServiceCategorySelector from "../components/ServiceCategorySelector";
import ServiceList from "../components/ServiceList";
import TagFilter from "../components/TagFilter";

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("photography");
  const [selectedTag, setSelectedTag] = useState(null);

  const categoryServices = services[selectedCategory];

  // Get unique tags for current category
  const availableTags = [
    ...new Set(categoryServices.flatMap((service) => service.tags || [])),
  ];

  // Filter services by tag if selected
  const filteredServices = selectedTag
    ? categoryServices.filter((s) => s.tags?.includes(selectedTag))
    : categoryServices;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <ServiceCategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          setSelectedTag(null); // reset tag filter on category change
        }}
      />

      <TagFilter
        tags={availableTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

     <ServiceList
  services={filteredServices}
  selectedCategory={selectedCategory}
  selectedTag={selectedTag}
/>
    </div>
  );
}

export default Services;
