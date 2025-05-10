package com.fullStack.fullStack.service.Impl;

import com.fullStack.fullStack.Mapper.EmployeeMapper;
import com.fullStack.fullStack.Repository.EmployeeRepo;
import com.fullStack.fullStack.dto.EmployeeDTO;
import com.fullStack.fullStack.entity.Employee;
import com.fullStack.fullStack.exception.ResourceNotFoundException;
import com.fullStack.fullStack.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public EmployeeDTO CreateEmployee(EmployeeDTO employeedto)
    {
        Employee employee= EmployeeMapper.maptoEmployee(employeedto);
        Employee savedEmployee=employeeRepo.save(employee);
         return EmployeeMapper.maptoEmployeeDTO(savedEmployee);


    }

    @Override
    public EmployeeDTO GetEmployeeById(int EmployeeId)
    {

        Employee foundEmployee=employeeRepo.findById(EmployeeId).orElseThrow(()->
             new ResourceNotFoundException("Employee not found with ID:"+ EmployeeId)
        );
        return EmployeeMapper.maptoEmployeeDTO(foundEmployee);
    }

    @Override
    public List<EmployeeDTO> GetAllEmployees() {

        List<Employee> employee=employeeRepo.findAll();

       return employee.stream().map((Eachemployee)->
                EmployeeMapper.maptoEmployeeDTO(Eachemployee)).
                collect(Collectors.toList());


    }

    @Override
    public EmployeeDTO UpdateEmployee(int EmployeeID, EmployeeDTO updatedEmployee) {
        Employee foundEmployee=employeeRepo.findById(EmployeeID).orElseThrow(()->
                new ResourceNotFoundException("Employee not found with ID:"+ EmployeeID)
        );


        foundEmployee.setEmail(updatedEmployee.getEmail());
        foundEmployee.setFirstName(updatedEmployee.getFirstName());
        foundEmployee.setLastName(updatedEmployee.getLastName());

        employeeRepo.save(foundEmployee);

        return EmployeeMapper.maptoEmployeeDTO(foundEmployee);


    }

    @Override
    public void DeleteEmployee(int EmployeeID) {


        Employee foundEmployee=employeeRepo.findById(EmployeeID).orElseThrow(()->
                new ResourceNotFoundException("Employee not found with ID:"+ EmployeeID)
        );


            employeeRepo.deleteById(EmployeeID);


    }


}
