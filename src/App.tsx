import React from "react";
import './App.css';
import ProductDetail from './containers/ProductDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ProductDetail />
    </React.Fragment>
  );
}

export default App;