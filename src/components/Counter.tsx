import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import {
  decrement,
  increment,
  // incrementByAmount, unused increment by amount example - f.ex. could increment by 10 or whatever value
  // incrementAsync, unused Async example
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center justify-center pt-5 gap-2">
      <div className="text-xl">Counter Example</div>
      <h2 className="text-2xl">{count}</h2>
      <div className="flex gap-2">
        <button
          className="bg-slate-500 p-1 rounded-lg text-white hover:border-slate-800 hover:border-solid border-2 border-slate-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-slate-500 p-1 rounded-lg text-white hover:border-slate-800 hover:border-solid border-2 border-slate-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
