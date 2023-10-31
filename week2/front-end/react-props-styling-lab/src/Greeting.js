function Greeting(props) {
  console.log(props);

  return (
    <div>
      <h1> Welcome, {props.name}!</h1>
      <p>{props.message}</p>
      <p>Item 1 : {props.item1}</p>
    </div>
  );
}

export default Greeting;
