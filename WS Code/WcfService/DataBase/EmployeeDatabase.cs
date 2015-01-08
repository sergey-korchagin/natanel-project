using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class EmployeeDatabase
    {

        private static List<string> EmployeeData = new List<string>();

        public void AddEmployee(string employeeName)
        {
            EmployeeData.Add(employeeName);
        }

        public List<string> GetEmployeeList()
        {
            return EmployeeData;
        }

    }
}
