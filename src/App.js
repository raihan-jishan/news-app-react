// class base componnet use for intire prject
import React, { useState }  from "react";
import "./App.css";
import Nav from "./components/Nav";
import News from "./components/News-Files/News";
// import top loading bar from node modules
import LoadingBar from "react-top-loading-bar";
// import stafs from ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import User from "./Account/User";
export default function App() {
  // initialize api key
  // initialize a default pageSize
 const pageSize = 5;
  // state
 
  const [progress , setProgress] = useState(0);
  // set Progress func
 
   
    return (
      <div>
        {/*  wrapping every things with react router dom */}
        <Router>
          <Nav />
          {/*  Loading bar */}
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
          <Routes>
            {/*  On route */}
            <Route
              path="/"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              exact
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            {/*  user account setting */}
            <Route 
            path="setting/user/valid-user-uru4qw3e4"
           
            element={<User/>}
/>
          </Routes>

          {/*  footer */}
          <Footer />
        </Router>
        {/*  end over thre */}
      </div>
    );
  }
 
