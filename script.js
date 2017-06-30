
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/home", {
    	templateUrl :"./home/home.html"
    })
    .when("/project", {
        templateUrl : "project/project.html"
    })

    .when("/qualification", {
    	templateUrl : "qualification/qualification.html"
    })
    .when("/contactus",{
    	templateUrl : "contactus/contactus.html"
    })
    .when("/contactme",{
    	templateUrl :"contactme/contactme.html"
    	
    })
    .when("/hobbies",{
    	templateUrl : "hobbies/hobbies.hxtml"
    })
    .when("/certification",{
    	templateUrl : "certification/certification.html"
        
    })
    .when("/Resume",{
    	templateUrl : "/index.html"
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


    
 
  
  	
 




     
