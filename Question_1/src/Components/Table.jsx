import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([
    {
      "employeeId": "EMP001",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1-202-555-0143",
      "dateOfBirth": "1990-05-15",
      "gender": "Male",
      "jobTitle": "Software Engineer",
      "department": "IT",
      "dateOfJoining": "2018-06-01",
      "salary": 75000,
      "status": "Active",
      "address": {
        "street": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zipCode": "94101",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP002",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "phone": "+1-202-555-0176",
      "dateOfBirth": "1985-09-10",
      "gender": "Female",
      "jobTitle": "HR Manager",
      "department": "Human Resources",
      "dateOfJoining": "2016-01-10",
      "salary": 68000,
      "status": "Active",
      "address": {
        "street": "456 Market St",
        "city": "Los Angeles",
        "state": "CA",
        "zipCode": "90001",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP003",
      "firstName": "Robert",
      "lastName": "Brown",
      "email": "robert.brown@example.com",
      "phone": "+1-202-555-0199",
      "dateOfBirth": "1988-03-22",
      "gender": "Male",
      "jobTitle": "Software Engineer",
      "department": "IT",
      "dateOfJoining": "2019-09-15",
      "salary": 78000,
      "status": "Active",
      "address": {
        "street": "789 Pine St",
        "city": "Seattle",
        "state": "WA",
        "zipCode": "98101",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP004",
      "firstName": "Emily",
      "lastName": "Clark",
      "email": "emily.clark@example.com",
      "phone": "+1-202-555-0125",
      "dateOfBirth": "1992-11-07",
      "gender": "Female",
      "jobTitle": "Data Scientist",
      "department": "IT",
      "dateOfJoining": "2021-02-10",
      "salary": 90000,
      "status": "Active",
      "address": {
        "street": "321 Oak St",
        "city": "Austin",
        "state": "TX",
        "zipCode": "73301",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP005",
      "firstName": "Michael",
      "lastName": "Lee",
      "email": "michael.lee@example.com",
      "phone": "+1-202-555-0136",
      "dateOfBirth": "1979-01-25",
      "gender": "Male",
      "jobTitle": "Finance Manager",
      "department": "Finance",
      "dateOfJoining": "2012-07-01",
      "salary": 98000,
      "status": "Active",
      "address": {
        "street": "654 Elm St",
        "city": "Chicago",
        "state": "IL",
        "zipCode": "60601",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP006",
      "firstName": "Sophia",
      "lastName": "Turner",
      "email": "sophia.turner@example.com",
      "phone": "+1-202-555-0188",
      "dateOfBirth": "1993-06-30",
      "gender": "Female",
      "jobTitle": "UX Designer",
      "department": "Design",
      "dateOfJoining": "2020-11-20",
      "salary": 70000,
      "status": "Active",
      "address": {
        "street": "987 Birch St",
        "city": "Portland",
        "state": "OR",
        "zipCode": "97201",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP007",
      "firstName": "Daniel",
      "lastName": "Martinez",
      "email": "daniel.martinez@example.com",
      "phone": "+1-202-555-0155",
      "dateOfBirth": "1983-08-18",
      "gender": "Male",
      "jobTitle": "DevOps Engineer",
      "department": "IT",
      "dateOfJoining": "2017-05-05",
      "salary": 85000,
      "status": "Active",
      "address": {
        "street": "741 Cedar St",
        "city": "Denver",
        "state": "CO",
        "zipCode": "80201",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP008",
      "firstName": "Ava",
      "lastName": "Lopez",
      "email": "ava.lopez@example.com",
      "phone": "+1-202-555-0111",
      "dateOfBirth": "1995-10-12",
      "gender": "Female",
      "jobTitle": "Software Engineer",
      "department": "IT",
      "dateOfJoining": "2022-01-01",
      "salary": 82000,
      "status": "Active",
      "address": {
        "street": "222 Palm St",
        "city": "Phoenix",
        "state": "AZ",
        "zipCode": "85001",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP009",
      "firstName": "William",
      "lastName": "Nguyen",
      "email": "william.nguyen@example.com",
      "phone": "+1-202-555-0190",
      "dateOfBirth": "1986-04-05",
      "gender": "Male",
      "jobTitle": "Systems Administrator",
      "department": "IT",
      "dateOfJoining": "2014-03-12",
      "salary": 78000,
      "status": "Active",
      "address": {
        "street": "901 Maple Ave",
        "city": "Las Vegas",
        "state": "NV",
        "zipCode": "88901",
        "country": "USA"
      }
    },
    {
      "employeeId": "EMP010",
      "firstName": "Olivia",
      "lastName": "Patel",
      "email": "olivia.patel@example.com",
      "phone": "+1-202-555-0172",
      "dateOfBirth": "1991-12-20",
      "gender": "Female",
      "jobTitle": "HR Manager",
      "department": "Human Resources",
      "dateOfJoining": "2018-08-08",
      "salary": 70000,
      "status": "Active",
      "address": {
        "street": "105 Walnut St",
        "city": "Atlanta",
        "state": "GA",
        "zipCode": "30301",
        "country": "USA"
      }
    }
  ]);

  const [userData, setUserData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [editRowId, setEditRowId] = useState(null); // Track the row being edited
  const [editFormData, setEditFormData] = useState({}); // Store the editable form data

  const deleteEmployee = (employee) => {
    const updatedData = userData.filter(
      (emp) => emp.employeeId !== employee.employeeId
    );
    setUserData(updatedData);
  };

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredData = data.filter((employee) =>
      Object.values(employee)
        .concat(Object.values(employee.address))
        .some((field) => field.toString().toLowerCase().includes(value))
    );
    setUserData(filteredData);
  };

  const handleEditClick = (employee) => {
    setEditRowId(employee.employeeId); // Set the row to edit mode
    setEditFormData({ ...employee, ...employee.address }); // Pre-fill the form with employee data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedData = userData.map((employee) =>
      employee.employeeId === editRowId
        ? {
            ...employee,
            ...editFormData,
            address: {
              street: editFormData.street,
              city: editFormData.city,
              state: editFormData.state,
              zipCode: editFormData.zipCode,
              country: editFormData.country,
            },
          }
        : employee
    );
    setUserData(updatedData);
    setEditRowId(null); // Exit edit mode
    setEditFormData({});
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>ZipCode</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editFormData.firstName || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.firstName
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editFormData.lastName || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.lastName
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="phone"
                    value={editFormData.phone || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.phone
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={editFormData.dateOfBirth || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.dateOfBirth
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="gender"
                    value={editFormData.gender || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.gender
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="jobTitle"
                    value={editFormData.jobTitle || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.jobTitle
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="department"
                    value={editFormData.department || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.department
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="date"
                    name="dateOfJoining"
                    value={editFormData.dateOfJoining || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.dateOfJoining
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="number"
                    name="salary"
                    value={editFormData.salary || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.salary
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="status"
                    value={editFormData.status || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.status
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="street"
                    value={editFormData.street || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.address.street
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="city"
                    value={editFormData.city || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.address.city
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="state"
                    value={editFormData.state || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.address.state
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="zipCode"
                    value={editFormData.zipCode || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.address.zipCode
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <input
                    type="text"
                    name="country"
                    value={editFormData.country || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.address.country
                )}
              </td>
              <td>
                {editRowId === employee.employeeId ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(employee)}>Edit</button>
                )}
                <button onClick={() => deleteEmployee(employee)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;