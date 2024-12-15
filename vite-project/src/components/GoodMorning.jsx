const name = "Jaro";

function getName(name) {
  return <>My name is {name}.</>;
}

function GoodMorning(props) {
  // const { name, message } = props; //by this you can use name and message.
  return (
    <>
      <p>---------------------------------</p>
      <p>{props.message}</p>
      <h4>Good Morning!!{getName(props.name)}</h4>
      <p>Thank you</p>
      <p>---------------------------------</p>
    </>
  );
}
export default GoodMorning;
