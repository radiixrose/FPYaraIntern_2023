import React, { useState } from 'react';
import Form from './Form';
import './TableStyles.css';

function Table() {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    column1: '',
    column2: '',
    column3: '',
  });

  const [tableData, setTableData] = useState([
    {
      input1: 'Column 1, Row 1',
      input2: 'Column 2, Row 1',
      input3: 'Column 3, Row 1',
    },
    {
      input1: 'Column 1, Row 2',
      input2: 'Column 2, Row 2',
      input3: 'Column 3, Row 2',
    },
    {
      input1: 'Column 1, Row 3',
      input2: 'Column 2, Row 3',
      input3: 'Column 3, Row 3',
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveClick = () => {
    const { column1, column2, column3 } = formValues;
    const newData = {
      input1: column1,
      input2: column2,
      input3: column3,
    };
    setTableData([...tableData, newData]);
    setFormValues({
      column1: '',
      column2: '',
      column3: '',
    });
    setShowForm(false);
  };

  return (
    <div className="table-container">
      <div className="table">
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.input1}</td>
                <td>{data.input2}</td>
                <td>{data.input3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm ? (
        <Form
          handleInputChange={handleInputChange}
          handleSaveClick={handleSaveClick}
          setShowForm={setShowForm}
          formValues={formValues}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add New Item</button>
      )}
    </div>
  );
}

export default Table;
