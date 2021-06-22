import React from 'react';
import ReactDOM from 'react-dom';
import './common/styles/reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function getPrimitivesAsync () {
  return [1,'1', true, null, undefined, BigInt(5), Symbol()]
}

async function getAwait () {
  const primitives = await getPrimitivesAsync ()
  console.log(primitives)
  return primitives
}



async function delay() {
  const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('test');
    }, 2000);
  });
  const data = await promise1
  console.log(data)
  return data
}

