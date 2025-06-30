package com.fullStack.fullStack.Mapper;

import com.fullStack.fullStack.dto.EmployeeDTO;
import com.fullStack.fullStack.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO maptoEmployeeDTO(Employee employee)
    {
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()

        );
    }



    public static Employee maptoEmployee(EmployeeDTO employeedto)
    {
        return new Employee(
                employeedto.getId(),
                employeedto.getFirstName(),
                employeedto.getLastName(),
                employeedto.getEmail()

        );
    }
}
