import logo from './profilepic1.jpg';
import './App.css';
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <main className="main">
        <section className="main_section">
         <Info/>
         <About/>
         <Footer/>
        </section>
      </main>
    </div>
  );
}

export default App;
