import React, { useState } from 'react';
import './FormStyles.css';

function Form() {
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
  });

  const handleCancelClick = () => {
    setFormValues({
      input1: '',
      input2: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [submittedValues, setSubmittedValues] = useState([]);

  const handleSaveClick = () => {
    setSubmittedValues([...submittedValues, formValues]);
    handleCancelClick();
  };

  return (
    <div className="form-container">
      <h2>Form</h2>
      <div className="inputs">
        <div className="input">
          <label>Input 1</label>
          <input
            type="text"
            name="input1"
            value={formValues.input1}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <label>Input 2</label>
          <input
            type="number"
            name="input2"
            value={formValues.input2}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="buttons">
        <div className="button">
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
        <div className="button">
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        {submittedValues.map((values, index) => (
          <div key={index}>
            <p>Input 1: {values.input1}</p>
            <p>Input 2: {values.input2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
