import "antd/dist/antd.min.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/core";
import RouterView from "./router/router";
import { handelRecursion } from "./router/type";
import "./sass/App.scss";

function App() {


  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {RouterView.map((router, index) => {
            return (
              <Route
                key={index}
                path={router.path}
                element={<router.element />}
              >
                {handelRecursion(router)}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
