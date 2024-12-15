const name = "Jaro";

function getName(name) {
  return <>My name is {name}.</>;
}

function GoodNight({ names }) {
  return (
    <>
      <p>---------------------------------</p>
      {/* <p>{obj.message}</p> */}
      <h4>Good Evening!! Everyone.</h4>
      <h4>
        Expecialy :
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}{" "}
        </ul>
      </h4>
      <p>Thank you</p>
      <p>---------------------------------</p>
    </>
  );
}
export default GoodNight;
