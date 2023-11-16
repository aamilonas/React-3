import { useState } from "react";
import Display from "./Display";

const Form = (props) => {
  const initialForm = {
    name: "",
    noseColor: "",
    fur: "",
  };

  const errorData = {
    nameError: "",
    noseColorError: "",
    furError: "",
  };

  const [reindeer, setReindeer] = useState(initialForm);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(
      ` nice reindeer hes called ${reindeer.name} with a ${reindeer.noseColor} nose and ${reindeer.fur} fur`
    );
  };

  const formDataHandler = (e) => {};

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            value={reindeer.name}
            onChange={(e) => setReindeer({ ...reindeer, name: e.target.value })}
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Nose Color
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>
              setReindeer({ ...reindeer, noseColor: e.target.value })
            }
          />
        </div>
        <div class="mb-3 form-check">
          <label class="form-control" for="exampleCheck1">
            Fur
          </label>
          <input
            type="text"
            class="form-contol"
            id="exampleCheck1"
            onChange={(e) => setReindeer({ ...reindeer, fur: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <Display
        name={reindeer.name}
        color={reindeer.noseColor}
        fur={reindeer.fur}
      />
    </>
  );
};

export default Form;
