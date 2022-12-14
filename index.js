const employee = {
    name: "Caleigh",
    streetAddress: "220 E 60th St",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}