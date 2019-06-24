import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="p-3">
    <div className="listItem white d-flex justify-content-between bg-white py-2 px-3">
      <div>
        <div className="listItem__status font-weight-bold"> Warning </div>
        <div className="text-black-50" > sdfjsdfjsdfksdflsdf;</div>
      </div>
      <button className="btn btn-link px-0 text-black-50">  Dismiss</button>
    </div>
    </div>
  );
}

export default App;
