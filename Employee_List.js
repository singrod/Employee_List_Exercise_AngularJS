
//created module which is equivalent to 'main' in other languages

var myApp = angular.module("myApp", []);

// created controller to data in view

myApp.controller("myCtrl", function($scope){
	
	//created properties which set the model

	 $scope.employees = [
		{fname: "Michael", lname: "Smith", hireDate: new Date("01/15/1985"), salary: 155500 },
		{fname: "John", lname: "Johnson", hireDate: new Date("03/23/1997"), salary: 157400 },
		{fname: "James", lname: "Williams", hireDate: new Date("11/19/2001"), salary: 65000 },
		{fname: "Robert", lname: "Jones", hireDate: new Date("06/14/2010"), salary: 45000 },
		{fname: "William", lname: "Brown", hireDate: new Date("04/21/1999"), salary: 148000 },
		{fname: "David", lname: "Davis", hireDate: new Date("02/28/2000"), salary: 93500 },
		{fname: "Richard", lname: "Miller", hireDate: new Date("11/09/1990"), salary: 137250 },
		{fname: "Charles", lname: "Wilson", hireDate: new Date("10/04/1998"), salary: 110000 },
		{fname: "Joseph", lname: "Moore", hireDate: new Date("07/23/2003"), salary: 68400 },
		{fname: "Thomas", lname: "Taylor", hireDate: new Date("05/30/2004"), salary: 75250 },
		{fname: "Chris", lname: "Anderson", hireDate: new Date("12/01/2002"), salary: 83500 },
		{fname: "Daniel", lname: "Thomas", hireDate: new Date("08/15/1989"), salary: 100000 },
		{fname: "Paul", lname: "Jackson", hireDate: new Date("05/18/2000"), salary: 51700 },
		{fname: "Mark", lname: "White", hireDate: new Date("04/02/2002"), salary: 85500 },
		{fname: "Donald", lname: "Harris", hireDate: new Date("06/14/2010"), salary: 45000 },
		{fname: "George", lname: "Martin", hireDate: new Date("10/04/1998"), salary: 110000 },
		{fname: "Kenneth", lname: "Thompson", hireDate: new Date("05/18/2000"), salary: 51700 },
		{fname: "Stephen", lname: "Garcia", hireDate: new Date("05/30/2004"), salary: 75250 },
		{fname: "Edward", lname: "Martinez", hireDate: new Date("12/01/2002"), salary: 83500 },
		{fname: "Brian", lname: "Robinson", hireDate: new Date("11/19/2001"), salary: 65000 },
		{fname: "Ronald", lname: "Clark", hireDate: new Date("08/15/1989"), salary: 100000 },
		{fname: "Anthony", lname: "Rodriguez", hireDate: new Date("02/28/2000"), salary: 93500 },
		{fname: "Kevin", lname: "Lewis", hireDate: new Date("05/18/2000"), salary: 51700 },
		{fname: "Mary", lname: "Lee", hireDate: new Date("06/14/2010"), salary: 45000 },
		{fname: "Patricia", lname: "Walker", hireDate: new Date("12/01/2002"), salary: 83500 },
		{fname: "Linda", lname: "Hall", hireDate: new Date("11/09/1990"), salary: 137250 },
		{fname: "Barbara", lname: "Allen", hireDate: new Date("03/23/1997"), salary: 157400 },
		{fname: "Elizabeth", lname: "Young", hireDate: new Date("08/15/1989"), salary: 100000 },
		{fname: "Jennifer", lname: "Hernandez", hireDate: new Date("10/04/1998"), salary: 110000 },
		{fname: "Maria", lname: "King", hireDate: new Date("02/28/2000"), salary: 93500 },
		{fname: "Susan", lname: "Wright", hireDate: new Date("11/19/2001"), salary: 65000 },
		{fname: "Margaret", lname: "Lopez", hireDate: new Date("12/01/2002"), salary: 83500 },
		{fname: "Dorothy", lname: "Hill", hireDate: new Date("05/30/2004"), salary: 75250  },
		{fname: "Lisa", lname: "Scott", hireDate: new Date("05/18/2000"), salary: 51700 },
		{fname: "Nancy", lname: "Green", hireDate: new Date("06/14/2010"), salary: 45000 },
		{fname: "Karen", lname: "Adams", hireDate: new Date("08/15/1989"), salary: 100000 },
		{fname: "Betty", lname: "Baker", hireDate: new Date("03/23/1997"), salary: 157400 },
		{fname: "Helen", lname: "Gonzalez", hireDate: new Date("10/04/1998"), salary: 110000 },
		{fname: "Sandra", lname: "Nelson", hireDate: new Date("11/19/2001"), salary: 65000 },
		{fname: "Donna", lname: "Carter", hireDate: new Date("02/28/2000"), salary: 93500 },
		{fname: "Carol", lname: "Mitchell", hireDate: new Date("05/30/2004"), salary: 75250  }
		];

	$scope.sortColumn = "fname";
	$scope.reverseSort = false;
	$scope.rowLimit = 25;
	
	// added functions to sort data
	
	$scope.sortData = function (column) {		
		$scope.reverseSort = ($scope.sortColumn == column) ?  !$scope.reverseSort : false;
		$scope.sortColumn = column;		
	}
	
	$scope.getSortClass =  function (column){
		if($scope.sortColumn == column) {
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}		
		return " ";
	} 
	
});