import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { makeStyles } from "@mui/styles";
import MyLibrary from "./pages/MyLibrary";
import EntrepreneurshipPage from './pages/Entrepreneurship'
import BookDetailsPage from "./pages/BookDetails";

let useStyles = makeStyles({
  main: {

  }
})
function Main1() {
  let styles = useStyles()
  return (
    <div className={styles.main}>
      <Router>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/bookdetails" element={<BookDetailsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default Main1;
