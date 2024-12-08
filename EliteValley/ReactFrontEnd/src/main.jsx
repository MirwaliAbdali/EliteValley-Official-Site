import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/homepage" element={<PageOne />} />
      <Route path="/codecamp" element={<PageTwo />} />
    </Routes>
  </BrowserRouter>
);
