import React from "react";

const Matkul = () => {
  const handleFocus = () => {
    alert("Working");
  };
  return (
    <div
      className="w-20 h-20 bg-amber-200 hover:cursor-pointer"
      onClick={handleFocus}
    ></div>
  );
};

export default Matkul;
