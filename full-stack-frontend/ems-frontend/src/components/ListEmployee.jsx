import { useState, useEffect } from 'react';
import { GetEmployeeList, DeleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployee() {
  const [employees, setemployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    GetEmployeeList()
      .then((res) => setemployees(res.data))
      .catch((error) => console.log(error));
  }, []);

  const updateEmployee = (id) => navigator(`/update-employee/${id}`);

  const AddEmployee = () => navigator('/add-employee');

  const removeEmployee = (id) => {
    DeleteEmployee(id)
      .then(() => {
        setemployees(employees.filter(emp => emp.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Employee Directory</h2>
        <button className="btn btn-success shadow" onClick={AddEmployee}>
          <i className="bi bi-plus-circle me-2"></i>Add Employee
        </button>
      </div>

      <div className="card shadow">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm me-2" onClick={() => updateEmployee(employee.id)}>
                        <i className="bi bi-pencil-square me-1"></i>Edit
                      </button>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => removeEmployee(employee.id)}>
                        <i className="bi bi-trash me-1"></i>Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-muted py-4">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEmployee;