import React from "react";
import Header from "./components/Header/Header"
import ListUsers from "./components/AllUsers/ListUsers";
import AddUser from "./components/AllUsers/AddUser";

function App() {
  return (
    <div className="App">
      <Header />
      <AddUser/>
      <ListUsers/>
    </div>
  );
}

export default App;
