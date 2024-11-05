import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  const pageComponents = {
    about: <About />,
    portfolio: <Portfolio />,
    resume: <Resume />,
    blog: <Blog />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white p-4">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        <div className="flex-1 bg-[#131313] rounded-3xl p-8">
          {pageComponents[activePage]}
        </div>
      </main>
    </div>
  );
};

export default App;
