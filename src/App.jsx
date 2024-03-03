import "./App.css";
import Header from "./components/Header/Header";
import MuiTable from "./components/MuiTable/MuiTable";
import RestaurantsContainer from "./components/Restaurants/RestaurantsContainer";

function App() {
  return (
    <>
      <Header />
      <MuiTable />
      <RestaurantsContainer />
    </>
  );
}

export default App;
