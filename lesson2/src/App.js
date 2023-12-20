import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <button onClick={handleOpen}>Открыть</button>
      {show && <Modal handleOpen={handleOpen}>
        </Modal>
      }
    </div>
  );
}


export default App;
