/* add the routing controller first
then add the home, about and contact controllers passing
in the title via $scope.title*/
 
angular.module('bandControllers',[])
    .controller('HomeController', function($scope) {
        $scope.title ="Home";
    })
    .controller('AboutController', function($scope) {
        $scope.title ="About the Band";
        $scope.mike = {
            name: "Mike",
            description: "Robert Michael Nesmith (born December 30, 1942) is an American musician, songwriter, actor, producer, novelist, businessman, and philanthropist, best known as a member of the pop rock band the Monkees and co-star of the TV series The Monkees (1966–1968).",
            img: "img/md.jpg"
        };
        $scope.micky = {
            name: "Micky",
            description: "George Michael \"Micky\" Dolenz, Jr. (born March 8, 1945) is an American actor, musician, television director, radio personality and theater director, best known as the drummer and principal lead singer of the 1960s pop/rock band the Monkees.",
            img: "img/mn.jpg"
        };
        $scope.davy = {
            name: "Davy",
            description: "David Thomas \"Davy\" Jones (30 December 1945 – 29 February 2012) was an English singer-songwriter, musician, actor and businessman best known as a member of the band The Monkees, and for starring in the TV series of the same name. ",
            img: "img/dj.jpg"
        };
        $scope.peter = {
            name: "Peter",
            description: "Peter Tork (born Peter Halsten Thorkelson, February 13, 1942) is an American musician and actor, best known as the keyboardist and bass guitarist of the Monkees.",
            img: "img/pt.jpg"
        };
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
