import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersonDetails from "./components/PersonDetails";

const App = () => (
  <BrowserRouter>
    <PersonDetails />
  </BrowserRouter>
);

export default App;
