import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history'






const App =() =>{
  return (
    <div className="ui container" >
    
        <Router history={history}>
         <Header />
          <Routes>
            <Route path="/" exact element = { <StreamList /> }  />
            <Route path="/streams/new" exact element = {<StreamCreate />} />
            <Route path="/streams/edit/:id" exact element = {<StreamEdit />} />
            <Route path="/streams/delete" exact element = {<StreamDelete />} />
            <Route path="/streams/show" exact element = {<StreamShow />} />
          </Routes>
       </Router>

    
    </div>
  );
}

export default App;
