import React, { Suspense } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const Table = React.lazy(() => import("./components/Table/Table"));

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </div>
  );
}

export default App;
