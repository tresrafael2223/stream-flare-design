
import { useState } from "react";

const categories = [
  "All",
  "Movies",
  "TV Shows",
  "Music",
  "Games",
  "Software",
  "Books",
  "Anime",
];

interface CategoryFiltersProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoryFilters = ({ 
  onSelectCategory, 
  selectedCategory 
}: CategoryFiltersProps) => {
  return (
    <div className="w-full py-4 overflow-x-auto">
      <div className="flex space-x-2 md:space-x-4 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
