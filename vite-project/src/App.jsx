import GoodMorning from "./components/GoodMorning";
import GoodEvening from "./components/GoodEvening";
import GoodNight from "./components/GoodNight";

function App() {
  const obj = { name: "Jaro", message: "How are you?" };

  const names = ["Jaro", "Education", "IITM"];
  return (
    <div className="App">
      Lets Start !!!
      <GoodMorning name="Joseph" message="Wassap?" />
      <GoodEvening obj={obj} />
      <GoodNight names={names} />
    </div>
  );
}

export default App;
