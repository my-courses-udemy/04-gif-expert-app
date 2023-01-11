import React from "react";

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <h4 key={id}>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
};

// export default GifItem;
