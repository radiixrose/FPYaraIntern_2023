import React from 'react';
import Form from './Form/Form';
import Table from './Table/Table';

//function's purpose: to show 'form' or 'table' based on the clicked link in the sidebar
//the problem is: i dont know where to put this file??
function MainBody({ selectedLink }) {
  return (
    <>
      {selectedLink === 'form' ? (
        <Form />
      ) : selectedLink === 'table' ? (
        <Table />
      ) : (
        <h2 style={{ padding: '50px' }}>Select a menu</h2>
      )}
    </>
  );
}

export default MainBody;
