import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [Submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form">
        {Submitted && valid ? (
          <div className="success-message">
            {" "}
            Success! Thank you for registering{" "}
          </div>
        ) : null}
        <input
          onChange={handleFirstNameChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {Submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}

        <input
          onChange={handleLastNameChange}
          values={values.lastName}
          className="form-field"
          placeholder="LastName"
          name="lastName"
        />
        {Submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}

        <input
          onChange={handleEmailChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {Submitted && !values.email ? <span>Please enter a email</span> : null}

        <button onClick={handleSubmit} className="form-field" type="Submit">
          Regsiter
        </button>
      </form>
    </div>
  );
}

export default App;
