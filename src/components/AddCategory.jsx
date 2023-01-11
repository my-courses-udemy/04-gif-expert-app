import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const onInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      // setCategories((categories) => [value, ...categories]);
      onNewCategory(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};

// export default AddCategory;
