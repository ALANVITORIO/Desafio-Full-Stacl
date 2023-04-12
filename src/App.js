// App.js
import React from 'react';
import AddressInput from './components/AddressInput';
import FileUpload from './components/FileUpload';
import AddressList from './components/AddressList';

const App = () => {
  const [updateKey, setUpdateKey] = React.useState(0);

  const handleNewAddress = () => {
    setUpdateKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <h1>Geo Coding Service</h1>
      <div>
        <h2>Formulário</h2>
        <AddressInput onNewAddress={handleNewAddress} />
      </div>
      <div>
        <h2>Upload de Arquivo</h2>
        <p>Selecione um arquivo para fazer o Download</p>
        <p>Arquivo:</p>
        <FileUpload />
      </div>
      <div>
        <h2>Endereços cadastrados</h2>
        <AddressList updateKey={updateKey} />
      </div>
    </div>
  );
};

export default App;
