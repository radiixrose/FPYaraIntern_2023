import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import MainBody from '../components/MainBody';

function Main() {
  const [selectedLink, setSelectedLink] = useState('');

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar setSelectedLink={setSelectedLink} />
        <MainBody selectedLink={selectedLink} />
      </div>
    </div>
  );
}

export default Main;
