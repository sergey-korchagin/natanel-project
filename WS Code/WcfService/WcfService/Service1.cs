using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

using DataBase;

namespace WcfService
{
    public class Service1 : IService1
    {
        public void EnrollEmployee(Employee s)
        {
            EmployeeDatabase sd = new EmployeeDatabase();
            sd.AddEmployee(s.EmployeeName);
        }

        public Employee[] GetEnrolledEmployee()
        {
           EmployeeDatabase sd = new EmployeeDatabase();
            List<string> employeeList = sd.GetEmployeeList();
            Employee[] employeeArray = new Employee[employeeList.Count];
            for (int i = 0; i < employeeList.Count; i++)
            {
                Employee s = new Employee();
                s.EmployeeName = employeeList[i];
                employeeArray[i] = s;
            }
            return employeeArray;
        }
    }
}
