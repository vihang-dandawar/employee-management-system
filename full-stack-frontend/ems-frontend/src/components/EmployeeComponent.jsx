import React, { useEffect, useState } from 'react';
import { CreateEmployee, GetEmployee, updateEmployee } from '../services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';

function EmployeeComponent() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [errors, seterrors] = useState({ firstName: '', lastName: '', email: '' });
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      GetEmployee(id).then((res) => {
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
        setemail(res.data.email);
      }).catch((err) => console.log(err));
    }
  }, [id]);

  const validateForm = () => {
    const errorCopy = { ...errors };
    let valid = true;

    if (!firstName.trim()) {
      errorCopy.firstName = 'First Name is Required';
      valid = false;
    } else errorCopy.firstName = '';

    if (!lastName.trim()) {
      errorCopy.lastName = 'Last Name is Required';
      valid = false;
    } else errorCopy.lastName = '';

    if (!email.trim()) {
      errorCopy.email = 'Email is Required';
      valid = false;
    } else errorCopy.email = '';

    seterrors(errorCopy);
    return valid;
  };

  const saveorUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };

    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee).then(() => navigator('/')).catch((err) => console.log(err));
      } else {
        CreateEmployee(employee).then(() => navigator('/')).catch((err) => console.log(err));
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4 text-primary">{id ? 'Update Employee' : 'Add Employee'}</h3>
              <form>
                <div className="form-group mb-3">
                  <label><strong>First Name</strong></label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    placeholder="Enter First Name"
                  />
                  <div className="invalid-feedback">{errors.firstName}</div>
                </div>

                <div className="form-group mb-3">
                  <label><strong>Last Name</strong></label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    placeholder="Enter Last Name"
                  />
                  <div className="invalid-feedback">{errors.lastName}</div>
                </div>

                <div className="form-group mb-4">
                  <label><strong>Email</strong></label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                <button type="submit" className="btn btn-success w-100" onClick={saveorUpdateEmployee}>
                  {id ? 'Update' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
