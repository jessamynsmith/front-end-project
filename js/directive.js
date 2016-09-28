angular.module('bandDirectives',[])
    .directive('audioElement', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/audio-element.html',
            scope: {
                track: "=track"
            } 
        };
    })
    .directive('eventElement', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/event-element.html',
            scope: {
                bandEvent: "=location"
            }
        }
    })
    .directive('bandMember', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/band-member.html',
            scope: {
                member: "=member"
            }
        }
    });