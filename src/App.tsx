import "antd/dist/antd.min.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/core";
import { blogData } from "./modules/utils/DataGenerate";
import RouterView from "./router/router";
import { handelRecursion } from "./router/type";
import "./sass/index.scss";
function App() {
  console.table(blogData);

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
