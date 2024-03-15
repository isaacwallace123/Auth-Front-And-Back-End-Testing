import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home";
import Error from "./routes/error/error";
import Login from "./routes/login/login";

function App() {
  return (
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App
