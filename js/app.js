angular.module('bandApp', ['ngRoute','bandControllers', 'bandDirectives', 'angular-carousel']);
// configure our routes
angular.module('bandApp').config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'HomeController'
        })
        .when('/home', {
            templateUrl : 'templates/home.html',
            controller : 'HomeController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'AboutController'
        })
        // route for the music page
        .when('/music', {
            templateUrl : 'templates/music.html',
            controller  : 'MusicController'
        })
        // route for the upcoming events page
        .when('/upcoming', {
            templateUrl : 'templates/upcoming.html',
            controller  : 'UpcomingController'
        })
        // route for the band availability page
        .when('/availability', {
            templateUrl : 'templates/availability.html',
            controller  : 'AvailabilityController'
        })
        // route for the newsletter page
        .when('/newsletter', {
            templateUrl : 'templates/newsletter.html',
            controller  : 'NewsletterController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'templates/contact.html',
            controller  : 'ContactController'
        })
        .otherwise({redirectTo: '/'}); //if not above path
});