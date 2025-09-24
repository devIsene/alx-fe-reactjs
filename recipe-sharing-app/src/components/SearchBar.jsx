import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="border px-3 py-2 rounded w-full mb-4"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
