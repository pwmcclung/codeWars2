function findEmployeesRole(name) {
  
    for (let i = 0; i < employees.length; i++){
      if (name=== employees[i].firstName + " " + employees[i].lastName){
       return employees[i].role
      }
      }
    return "Does not work here!"
     
  }