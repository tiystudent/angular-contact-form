angular.module('basic.controllers', [])
.controller('FormCtrl', function($scope) {
	$scope.data = {
		name: '',
		email: '',
		website: '',
		message: ''
	};
	$scope.error = {
		name: '',
		email: '',
		website: '',
		message: ''
	};
	$scope.page = 'form';

	$scope.submit = function(data) {
		for(var i in $scope.error) {
			$scope.error[i] = '';
		}

		if(!data.name) {
			$scope.error.name = 'Name cannot be left empty';
		}

		if(!data.email) {
			$scope.error.email = 'Email cannot be left empty';
		}
		else if(data.email.indexOf('@') < 0) {
			$scope.error.email = 'Email must contain an \'@\'';
		}

		if(!data.website) {
			$scope.error.website = 'Website cannot be left empty';
		}
		else if(data.website.substr(0, 7).toLowerCase() !== 'http://') {
			$scope.error.website = 'Website must start with http://';
		}

		if(!data.message) {
			$scope.error.message = 'Message cannot be left empty';
		}

		var hasError = false;
		for(var i in $scope.error) {
			if($scope.error[i]) {
				hasError = true;
				break;
			}
		}

		if(!hasError) {
			$scope.page = 'success';
		}
	};
});