import { useEffect, useState } from "react";
import ServiceCategorySelector from "../components/ServiceCategorySelector";
import ServiceList from "../components/ServiceList";
import TagFilter from "../components/TagFilter";




// get url from.env
const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:4000/api";

function Services() {


  //fetch services data from backend
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URL}/services`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  const [selectedCategory, setSelectedCategory] = useState("photography");
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter services by selected category
  const categoryServices = services.filter(
    (service) => service.category === selectedCategory
  );

  // Get unique tags for current category
  const availableTags = [
    ...new Set(categoryServices.flatMap((service) => service.tags || [])),
  ];

  // Filter services by selected tag if any
  const filteredServices = selectedTag
    ? categoryServices.filter((service) => service.tags?.includes(selectedTag))
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
