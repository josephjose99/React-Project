function SuperMarket({ product }) {
  return (
    <div key={product.name}>
      <p>---------------------------------</p>
      <h4>Product name :{product.name}</h4>
      <p>Description :{product.description}</p>
      <p>Price :{product.price}</p>
      <p>---------------------------------</p>
    </div>
  );
}
export default SuperMarket;
