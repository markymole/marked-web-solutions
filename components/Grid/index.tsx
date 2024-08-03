import React from "react";

const Grid = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
      <div className="grid-lines mx-auto h-full w-full opacity-15"></div>
    </div>
  );
};

export default Grid;
