import { useState } from "react";
import Display from "./Display";
import DisplayList from "./DisplayList";

const Form = (props) => {
  const initialForm = {
    name: "",
    noseColor: "",
    fur: "",
  };

  const [reindeerList, setReindeerList] = useState([]);

  const [reindeer, setReindeer] = useState(initialForm);

  const [errors, setErrors] = useState([]);

  const onChangeHandler = (e) => {
    setReindeer({ ...reindeer, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const errorList = [];

    if (reindeer.name.length < 3) {
      errorList.push("Name must be at least 3 characters");
    }
    if (reindeer.noseColor.length < 3) {
      errorList.push("Nose color must be at least 3 characters");
    }
    if (reindeer.fur.length < 3) {
      errorList.push("Fur must be at least 3 characters");
    }

    if (errorList.length > 0) {
      setErrors(errorList);
    } else {
      setReindeerList([...reindeerList, reindeer]);
      setReindeer(initialForm);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center flex-column">
        <form onSubmit={onSubmitHandler}>
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
          <div className="col-5">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                name="name"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={reindeer.name}
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Nose Color
              </label>
              <input
                name="noseColor"
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={reindeer.noseColor}
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3 form-check">
              <label for="exampleCheck1" class="form-check-label">
                Fur
              </label>
              <input
                name="fur"
                type="text"
                class="form-contol"
                id="exampleCheck1"
                value={reindeer.fur}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <Display
          name={reindeer.name}
          color={reindeer.noseColor}
          fur={reindeer.fur}
        />
        <DisplayList list={reindeerList} />
      </div>
    </>
  );
};

export default Form;
