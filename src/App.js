import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm.js'

function App() {
  return (
      <div>
        <Navigation/>
        <ContactHeader/>
        <ContactForm/>
       
        <main className='main_container'>
          
        </main>
      </div>
      
    
  );
}

export default App;
