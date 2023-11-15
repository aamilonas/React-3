import { useState } from "react";

const Angelo = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <label>Angelo</label>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
      </div>
      <div>
        <p>{value}</p>
      </div>
    </>
  );
};

export default Angelo;
