package com.fullStack.fullStack.Repository;

import com.fullStack.fullStack.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Integer> {


}
