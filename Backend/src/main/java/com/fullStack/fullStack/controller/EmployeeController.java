package com.fullStack.fullStack.controller;


import com.fullStack.fullStack.dto.EmployeeDTO;
import com.fullStack.fullStack.service.Impl.EmployeeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/api/employees")
@RestController
public class EmployeeController {
    @Autowired
    EmployeeServiceImpl employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDTO> CreateEmployee(@RequestBody EmployeeDTO employeeDTO) {
        EmployeeDTO savedEmployee = employeeService.CreateEmployee(employeeDTO);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    //getEmployee by id

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> GetEmployee(@PathVariable("id") int EmployeeId) {
        EmployeeDTO foundEmployee = employeeService.GetEmployeeById(EmployeeId);
        return ResponseEntity.ok(foundEmployee);

    }


    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployee()
    {
        List<EmployeeDTO> employees=employeeService.GetAllEmployees();
        return ResponseEntity.ok(employees);
    }


    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") int EmployeeID,
                                                      @RequestBody EmployeeDTO updatedEmployee)
    {
       EmployeeDTO employee=  employeeService.UpdateEmployee(EmployeeID, updatedEmployee);
       return ResponseEntity.ok(employee);
    }



    @DeleteMapping("{id}")
    public ResponseEntity<String> DeleteEmployee( @PathVariable("id") int EmployeeId)
    {
        employeeService.DeleteEmployee(EmployeeId);
        return ResponseEntity.ok("Employee Deleted Successfully !");
    }

}