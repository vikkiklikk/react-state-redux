import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/header";
import ToDoSection from "./components/ToDo";

function App() {
  return (
    <div className="flex-col ml-[45vh] mr-[45vh] min-h-dvh rounded-lg bg-slate-300">
      <Header />
      <Counter />
      <ToDoSection />
    </div>
  );
}

export default App;
