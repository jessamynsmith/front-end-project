/* add the routing controller first
then add the home, about and contact controllers passing
in the title via $scope.title*/
 
angular.module('bandControllers',[])
    .controller('HomeController', function($scope) {
        $scope.title ="Home";
    })
    .controller('AboutController', function($scope) {
        $scope.title ="About the Band";
    })
    .controller('MusicController', function($scope) {
        $scope.title ="Music";
        $scope.clarksville = {
            name: "Clarksville",
            audio: "audio/Clarksville.mp3"
        };
        $scope.daydream = {
            name: "Daydream Believer",
            audio: "audio/DaydreamBeliever.mp3"
        };
        $scope.believer = {
            name: "I'm a believer",
            audio: "audio/ImABeliever.mp3"
        };
        $scope.stepping = {
            name: "Stepping Stone",
            audio: "audio/SteppingStone.mp3"
        }
    })
    .controller('UpcomingController', function($scope) {
        $scope.title ="Upcoming Events";
        $scope.dublin = {
            date: "Sunday 27th November",
            venue: "3 Arena",
            tickets: "http://3arena.ie/"
        };
        $scope.belfast = {
            date: "Tuesday 29th November",
            venue: "SSE Arena",
            tickets: "http://www.ssearenabelfast.com/whats-on"
        };
    })
    .controller('AvailabilityController', function($scope) {
        $scope.title ="Check Availability";
    })
    
    .controller('NewsletterController', function($scope) {
        $scope.title ="Newsletter";
        $scope.recipient = {};
        $scope.wasSubmitted = false;

        $scope.submitNewsletter = function(form) {
            if (myForm.$valid) {
                $scope.submitted = true;
                // continue with form processing
            } else {
                alert("form is invalid")
            }

            $scope.wasSubmitted = true; 
        }
    })
    .controller('ContactController', function($scope) {
        $scope.title ="Get in Touch";
    });
