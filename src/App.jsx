import React from "react";
import Home from "./pages/home";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Home />
      <Footer />
    </div>
  );
};

export default App;
