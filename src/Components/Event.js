function Event() {
  function check() {
    alert("hello react event");
  }
  function help() {
    alert("To learn React use https://reactjs.org");
    alert("TReact and ReactDOM works together");
    alert("Babel helps in writing JSX");
  }

  function name(e) {
    alert("hello" + " " + e.target.innerText);
  }

  let fruits = [
    { id: "apple", value: "🍎 apple" },
    { id: "orange", value: "🍊 orange" },
    { id: "grape", value: "🍇 grape" },
    { id: "pear", value: "🍐 pear" },
  ];

  let fruit = (value) => {
    alert(value);
  };

  return (
    <>
      <button onClick={check}>click me</button>
      <button onClick={help}>How can I help you?</button>
      <button onClick={(e) => name(e)}>Arya</button>
      <button onClick={(e) => name(e)}>john</button>
      <button onClick={(e) => name(e)}>Bran</button>
      {fruits.map((e) => (
        <button onClick={() => fruit(e.value)} key={e.id}>
          {e.value}
        </button>
      ))}
    </>
  );
}

export default Event;
