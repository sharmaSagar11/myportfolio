import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <a
  href="https://wa.me/+918800928538"
  target="_blank"
  className="overflow-x-hidden fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
>
  WhatsApp
</a>
    </BrowserRouter>
  );
}

export default App;