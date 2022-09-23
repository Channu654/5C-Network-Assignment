import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Follower from './Follower';
import Home from './Home';
import RepoDetails from './RepoDetails';

const Rounting = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repodetail' element={<RepoDetails />} />
        <Route path='/followers' element={<Follower />} />
      </Routes>
    </div>
  );
};

export default Rounting;
