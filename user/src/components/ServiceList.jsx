// src/components/ServiceList.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";

function ServiceList({ services, selectedCategory, selectedTag }) {
  if (!services.length) {
    return <p className="text-center text-gray-500">No services available.</p>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${selectedCategory}-${selectedTag || "all"}`} // ✅ triggers on category OR tag change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ServiceList;
