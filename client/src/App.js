import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';
import { Blogs } from './components/Blogs';
import { EditBlog } from './components/EditBlogs';
import { CreateBlog } from './components/CreateBlog';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
     <Route path="/" exact component={Blogs} />
     <Route path="/edit/id" component={EditBlog} />
     <Route path="/create" component={CreateBlog} /> 
    </div>
    </Router>
  );
}

export default App;
