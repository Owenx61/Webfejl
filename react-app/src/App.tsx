import { useState } from "react";
import { Alert } from "./components/alert";
import Form from "./components/form";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar>The title of my Webpage </Navbar>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
