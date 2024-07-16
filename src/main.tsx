import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-slate-400 min-h-[100vh]">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
