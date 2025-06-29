package com.fullStack.fullStack.service;

import com.fullStack.fullStack.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    public  EmployeeDTO CreateEmployee(EmployeeDTO employeedto);
    public EmployeeDTO GetEmployeeById(int EmployeeId);
    public List<EmployeeDTO> GetAllEmployees();
    public EmployeeDTO UpdateEmployee(int EmployeeID,EmployeeDTO updatedEmployee);

    public void DeleteEmployee(int EmployeeID);

}



