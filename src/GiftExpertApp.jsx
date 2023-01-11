import { useState } from "react";
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["cats"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "valorant"]);
    if (categories.includes(newCategory)) return;
    setCategories((values) => [newCategory, ...values]);
  };

  return (
    <>
      {/* title */}
      <h1>Hello world</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        // onNewCategory={(event) => onAddCategory(event)}
        onNewCategory={onAddCategory}
      />

      {/* items */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;
