import { useState } from "react";

const DisplayList = (props) => {
  const { list } = props;

  return list
    .filter((item, i) => item.noseColor.toLowerCase() === "black")
    .map((item, i) => (
      <p>
        {item.name} the {item.noseColor} nosed reindeer. with {item.fur} fur
      </p>
    ));
};

export default DisplayList;
