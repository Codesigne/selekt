import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="p-3">
      <div className="listItem white d-flex justify-content-between bg-white py-2 px-3 shadow-sm my-2">
        <div className="listItem__body text-left d-flex flex-column justify-content-between ">
          <div className="listItem__status font-weight-bold"> Warning </div>
          <div className="text-black-50 listItem__msg" > sdfjsdfjssfgsdgsgsgsgsgsdgsdgsgdfksdflsdf;</div>
        </div>
        <button className="btn btn-link px-0 text-black-50">  Dismiss</button>
      </div>
      <div className="listItem white d-flex justify-content-between bg-white py-2 px-3 shadow-sm my-2">
        <div className="text-left d-flex flex-column justify-content-between ">
          <div className="listItem__status font-weight-bold"> Warning </div>
          <div className="text-black-50 listItem__msg" > sdfjsdfjsdfksdflsdf;</div>
        </div>
        <button className="btn btn-link px-0 text-black-50">  Dismiss</button>
      </div>
    </div>

  );
}

export default App;
