import SuperMarket from "./SuperMarket";

const products = [
  {
    name: "Apple",
    description: "An Apple a day, keeps the docotr away",
    price: "Rs 140/Kg",
  },
  {
    name: "Orange",
    description: "Twq Orange a day, keeps the docotr away",
    price: "Rs 120/Kg",
  },
  {
    name: "Mango",
    description: "Half Mango a day, keeps the docotr away",
    price: "Rs 110/Kg",
  },
];

function GoodEvening({ obj }) {
  return (
    <>
      <p>---------------------------------</p>
      <p>{obj.message}</p>
      <h4>Good Evening!!{obj.name}</h4>
      <p>Thigs available in store:</p>

      <div>
        {products.map((product) => (
          <SuperMarket key={product.name} product={product} />
        ))}
      </div>
      <p>Thank you</p>
      <p>---------------------------------</p>
    </>
  );
}
export default GoodEvening;
