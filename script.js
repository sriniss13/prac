
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/home", {
    	templateUrl :"./prac/home/home.html"
    })
    .when("/project", {
        templateUrl : "./prac/project/project.html"
    })

    .when("/qualification", {
    	templateUrl : "./prac/qualification/qualification.html"
    })
    .when("/contactus",{
    	templateUrl : "./prac/contactus/contactus.html"
    })
    .when("/contactme",{
    	templateUrl :"./prac/contactme/contactme.html"
    	
    })
    .when("/hobbies",{
    	templateUrl : "./prac/hobbies/hobbies.hxtml"
    })
    .when("/certification",{
    	templateUrl : "./prac/certification/certification.html"
        
    })
    .when("/Resume",{
    	templateUrl : "./prac/index.html"
    })
    .otherwise({"redirectTo":'/home'})
    $locationProvider.html5Mode(true);
    
});

app.controller("nav",function($scope, $http){

        $http.get("sample.json").then(function(response){
            console.log(response);
           $scope.navbar=response.data.navbar;
           $scope.dropdown=response.data.dropdown;
        }); 
 				

 				
 });


    
 
  
  	
 




     
