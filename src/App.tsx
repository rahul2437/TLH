import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="h-main overflow-y-auto">
        <Home />
        <About />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
