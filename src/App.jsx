import Deserts from "./components/Desserts";
import Cart from "./components/Cart";

function App() {
  return (
    <main className="max-w-7xl mx-auto flex  md:justify-between p-3 px-2 md:p-7 md:py-[3rem] flex-col md:flex-row items-start">
      <Deserts />
      <Cart />
    </main>
  );
}

export default App;
