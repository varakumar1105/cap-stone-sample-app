import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePersonForm from "./components/CreatePersonForm";
import PersonDetails from "./components/PersonDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreatePersonForm />} />
      <Route path="/person/:id/" element={<PersonDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
