import { useState } from 'react';
import './App.css';
import AdminTableContainer from './AdminTable/AdminTableContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AdminTableContainer />
    </div>
  );
}

export default App;
