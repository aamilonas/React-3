const Dropdown = (props) => {
  const onChangeHandler = (e) => {
    alert(`nice choice ${e.target.value}`);
  };

  return (
    <select onChange={onChangeHandler} name="" id="">
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </select>
  );
};
export default Dropdown;
