const app = angular.module("pokedex", []);


app.controller("buscador",function($scope, $http){
	
	$scope.boton = "Obtener datos";
	
	$scope.buscar = function () {
		if ($scope.nombre == undefined) {
			$scope.mensaje ="Debe ingresar un nombre";
			return;
		} else {
			$scope.mensaje = false;
		}

		$scope.boton = "Buscando ...";
		let nombre = $scope.nombre;
		//hacemos una consulta con $http get
		$http ({
			method: "GET",
			url:  "https://pokeapi.co/api/v2/pokemon/" + nombre
		}).then(function success(response) {
			console.log("Correcto",response);

			$scope.tipo = response.data.types[0].type.name;
			$scope.altura = response.data.height;
			$scope.imagen = response.data.sprites.front_default;

			$scope.boton = "Obtener datos";
		}, function error(response) {
			console.log("Hay algo mal",response)
		})
	}
});