(function () {
    'use strict';
    angular.module('crudDemo')
           .service('employeeDetailsService', employeeDetailsService);

   employeeDetailsService.$inject = [
            '$http'
          ];


    function employeeDetailsService($http) {

      this.employeeList = employeeList;
      this.addData = addData;
      this.deleteData = deleteData;
      this.getDataById = getDataById;
      this.updateData = updateData;

      function employeeList() {
        return $http({
          method: 'GET',
          url: '/details'
        });
      }

      function addData(newEmployeeDetails) {
        return $http({
            method: 'POST',
            url: '/addDetails',
            data: newEmployeeDetails,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
          });
        }

        function deleteData(id) {
          return $http({
            method: 'DELETE',
            url: '/deleteDetail' + id
          })
        }

        function getDataById(id) {
          return $http({
            method: 'GET',
            url: '/details' + id
          });
        }

        function updateData(id, newEmployeeDetails) {
          return $http({
            method: 'PUT',
            url: '/updateDetails' + id,
            data: newEmployeeDetails,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
          });
        }
    }
})();
