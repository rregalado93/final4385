/**
 * calendarDemoApp - 0.9.0
 */
var calendarDemoApp = angular.module('App');

calendarDemoApp.controller('CalendarController',
    function($scope, $compile, $timeout, uiCalendarConfig, $firebaseArray) {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        console.log(d);
        console.log(m);
        console.log(y);




        $scope.eventSource = {};

        /*var ref = firebase.database().ref().child("Schedule");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.events = $firebaseArray(ref);*/

        $scope.events = [{
            title: 'Algorithim Fever',
            mealType: "breakfast",
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2)
        }, {
            id: 999,
            title: 'Jackson State Presentation',
            mealType: "breakfast",
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false
        }, {
            id: 999,
            title: 'Life after PhP',
            mealType: "breakfast",
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false
        }, {
            title: 'NationNode is on Your Side',
            mealType: "breakfast",
            start: new Date(y, m, d + 1, 18, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false
        }, {
            title: 'Click for Google',
            mealType: "breakfast",
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://google.com/'
        }];

        $scope.alertOnEventClick = function(date, jsEvent, view) {
            $scope.alertMessage = (date.title);
        };

        $scope.extraEventSignature = function(event) {
            return "" + event.title;
        }

        /* Change View */
        $scope.changeView = function(view, calendar) {
            uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        };
        /* Change View */
        $scope.renderCalendar = function(calendar) {
            $timeout(function() {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            });
        };
        /* Render Tooltip */
        /* $scope.eventRender = function(event, element, view) {
             element.attr({
                 'tooltip': event.titles,
                 'tooltip-append-to-body': true
             });
             $compile(element)($scope);
         };*/
        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                /*                eventRender: $scope.eventRender*/
            }
        };

        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource];
    });
/* EOF */
