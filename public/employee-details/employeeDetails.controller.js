(function () {

    'use strict';

    angular.module('crudDemo')
        .controller('employeeController', EmployeeController);

    EmployeeController.$inject = [
        '$http',
        'employeeDetailsService'
    ];

    function EmployeeController($http, employeeDetailsService) {
      this.employeeList = employeeList;
      this.addData = addData;
      this.deleteData = deleteData;
      this.editData = editData;
      this.updateData = updateData;

      this.employeeList();

      function employeeList() {
        employeeDetailsService.employeeList().then(success.bind(this), reject);
        function success(response) {
          this.employeeDetail = response.data;
        }
        function reject(err) {
          console.log(err);
        }
      }

      function addData() {
        if(this.newEmployee && this.newEmployee.id && this.newEmployee.name) {
          this.error = false;
          employeeDetailsService.addData(this.newEmployee).then(resolve.bind(this),reject);
        }
        else {
          this.error = true;
        }
        function resolve(response) {
          this.employeeList();
          this.newEmployee = {};
        };
        function reject(err) {
          console.log("Error" + err);
        }
      }

      function deleteData(id) {
        if(id){
          employeeDetailsService.deleteData(id).then(success.bind(this), reject);
        }
        function success(response) {
          this.employeeList();
          this.newEmployee = {};
        }
        function reject(err) {
          console.log("Error" + err);
        }
      }

       function editData(id) {
        if(id) {
          employeeDetailsService.getDataById(id).then(success.bind(this), reject);
        }
         function success(response) {
           this.newEmployee = response.data;
         }
         function reject(err) {
           console.log("Error" + err);
         }
       }

      function updateData() {
        if(this.newEmployee && this.newEmployee._id && this.newEmployee.id && this.newEmployee.name) {
        employeeDetailsService.updateData(this.newEmployee._id, this.newEmployee).then(success.bind(this), reject);
        }
        function success(response) {
          this.employeeList();
          this.newEmployee = {};
        }
        function reject(err) {
          console.log("Error" + err);
        }
      }
    }
})();
