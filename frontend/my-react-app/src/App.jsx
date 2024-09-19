import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './components/Form';
import { Data } from './components/Data';

function App() {
  const [refreshData, setRefreshData] = useState(false);

  // Function to toggle the refresh state when the form is submitted
  const handleFormSubmit = () => {
    setRefreshData((prevState) => !prevState);
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flexBasis: '40%' }}>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
        <div style={{ flexBasis: '60%' }}>
          <Data refreshData={refreshData} />
        </div>
      </div>
    </>
  );
}

export default App;
