import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router.jsx'
import './index.css'

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>    

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from 'react-redux';
import store from "./store/store"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <App />

    </PersistGate>
  </Provider>

)
