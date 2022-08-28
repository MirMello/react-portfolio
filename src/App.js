import './App.css';
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='container'>
        <div className='col_1'>
        <About></About>
        <Project></Project>
        </div>
        <div className='col_2'>
          <Contact></Contact>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
