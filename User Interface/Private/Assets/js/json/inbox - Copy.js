'use strict';

var emailapp = angular.module("emailapp", []);



emailapp.controller('emailCtrl', ['$scope', '$q', '$timeout', function($scope, $q, $timeout) {

    $scope.searchItems = [
		  "ActionScript",
		  "AppleScript",
		  "Asp",
		  "BASIC",
		  "C",
		  "C++",
		  "Clojure",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
	];

    //Sort Array
    $scope.searchItems.sort();
    //Define Suggestions List
    $scope.suggestions = [];
    //Define Selected Suggestion Item
    $scope.selectedIndex = -1;
    $scope.searchText = '';
    //Function To Call On ng-change
    $scope.search = function() {
        $scope.suggestions = [];

        var myMaxSuggestionListLength = 0;
        for (var i = 0; i < $scope.searchItems.length; i++) {
            var searchItemsSmallLetters = angular.lowercase($scope.searchItems[i]);
            var searchTextSmallLetters = angular.lowercase($scope.searchText);
            if (searchItemsSmallLetters.indexOf(searchTextSmallLetters) !== -1) {
                $scope.suggestions.push(searchItemsSmallLetters);
                myMaxSuggestionListLength += 1;
                if (myMaxSuggestionListLength == 5) {
                    break;
                }
            }
        }
    }

    //Keep Track Of Search Text Value During The Selection From The Suggestions List  
    $scope.$watch('selectedIndex', function(val) {
        if (val !== -1) {
            $scope.searchText = $scope.suggestions[$scope.selectedIndex];
        }
    });


    //Text Field Events
    //Function To Call on ng-keydown
    $scope.checkKeyDown = function(event) {
        if (event.keyCode === 40) {//down key, increment selectedIndex
            event.preventDefault();
            if ($scope.selectedIndex + 1 !== $scope.suggestions.length) {
                $scope.selectedIndex++;
            }
        } else if (event.keyCode === 38) { //up key, decrement selectedIndex
            event.preventDefault();
            if ($scope.selectedIndex - 1 !== -1) {
                $scope.selectedIndex--;
            }
        } else if (event.keyCode === 13) { //enter key, empty suggestions array
            event.preventDefault();
            $scope.suggestions = [];
        }
    }
    //Function To Call on ng-keyup
    $scope.checkKeyUp = function(event) {
        if (event.keyCode !== 8 || event.keyCode !== 46) {//delete or backspace
            if ($scope.searchText == "") {
                $scope.suggestions = [];
            }
        }
    }
    //======================================

    //List Item Events
    //Function To Call on ng-click
    $scope.AssignValueAndHide = function(index) {
        $scope.searchText = $scope.suggestions[index];
        $scope.suggestions = [];
    }
    //======================================
    $scope.myhide = false;
    $scope.pgVar = {
        selTabId: 2,
        compose: 0,
        inBox: [{ id: '1', from: 'Chinna Babu', time: '3:30pm', subject: 'Design template for mail box Design template for mail box', gender: 'male', msg: ' Using Angular js and material css bind static data from json object', attchmnt: 'su-paperclip', usrImg: 'User_Img/rao.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', from: 'T S Suresh', time: '12:30 pm', subject: 'Srinu meet me today', gender: 'male', msg: 'Regarding Suvarna Website Design', attchmnt: '', usrImg: 'User_Img/sing.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', from: 'SubbaRao Kolla', time: '11:30am', subject: 'Admission screen Changes', gender: 'male', msg: 'Bhupathi Design Admission screen 3 types', attchmnt: '', usrImg: 'User_Img/male.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', from: 'Muni Kumar K', time: '9:30 am', subject: 'Call me Morning', gender: 'male', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],


        sent: [{ id: '1', to: 'Ramanujama', time: '3:30pm', subject: 'Remove all Script manager proxy in HIS', gender: 'female', msg: ' Remove all Script manager proxy in HIS', attchmnt: 'su-paperclip', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', to: 'Jyothi', time: '12:30 pm', subject: 'Jyothi Where is my charger', gender: 'female', msg: 'Jyothi Where is my charger', attchmnt: '', usrImg: 'User_Img/female.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', to: 'Roja Rani', time: '11:30am', subject: 'Did u prepare the excel sheet', gender: 'female', msg: 'Did u prepare the excel sheet Did u prepare the excel sheet', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', to: 'Suseela', time: '9:30 am', subject: 'Call me Morning', gender: 'female', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],

        drafts: [{ id: '1', to: 'Chinna Babu', time: '3:30pm', subject: 'Design template for mail box Design template for mail box', gender: 'male', msg: ' Using Angular js and material css bind static data from json object', attchmnt: 'su-paperclip', usrImg: 'User_Img/rao.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', to: 'T S Suresh', time: '12:30 pm', subject: 'Srinu meet me today', gender: 'male', msg: 'Regarding Suvarna Website Design', attchmnt: '', usrImg: 'User_Img/sing.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', to: 'SubbaRao Kolla', time: '11:30am', subject: 'Admission screen Changes', gender: 'male', msg: 'Bhupathi Design Admission screen 3 types', attchmnt: '', usrImg: 'User_Img/male.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', to: 'Muni Kumar K', time: '9:30 am', subject: 'Call me Morning', gender: 'male', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],

        resetActMnuItm: function(IDX, type) {
            if (type == 'i') {
                if (!$scope.pgVar.inBox[IDX].active) {
                    angular.forEach($scope.pgVar.inBox, function(item) {
                        item.active = false;
                    });
                    $scope.pgVar.actTab = IDX;
                    $scope.myhide = true;
                    $scope.pgVar.inBox[IDX].active = true;
                    $scope.pgVar.compose = 2;

                }
            }
            if (type == 's') {

                if (!$scope.pgVar.sent[IDX].active) {
                    angular.forEach($scope.pgVar.sent, function(item) {
                        item.active = false;
                    });
                    $scope.pgVar.actTab = IDX;
                    $scope.pgVar.sent[IDX].active = true;
                    $scope.pgVar.compose = 2;
                }
            }

        }




    };




    $scope.selTabFn = function(id) {

        if (id == 1) {
            $scope.pgVar.compose = 1;
        }
        else {
            $scope.pgVar.selTabId = id;
        }
    };


    $scope.loaddata = function() {
        for (var i in $scope.pgVar.inBox) {
            if ($scope.pgVar.inBox[i].gender == "female")
                $scope.pgVar.inBox[i].usrImg = (!$scope.pgVar.inBox[i].usrImg || $scope.pgVar.inBox[i].usrImg == '') ? 'User_Img/female.jpg' : $scope.pgVar.inBox[i].usrImg;
            else
                $scope.pgVar.inBox[i].usrImg = (!$scope.pgVar.inBox[i].usrImg || $scope.pgVar.inBox[i].usrImg == '') ? 'User_Img/male.jpg' : $scope.pgVar.inBox[i].usrImg;
        }
        for (var i in $scope.pgVar.sent) {
            if ($scope.pgVar.sent[i].gender == "female")
                $scope.pgVar.sent[i].usrImg = (!$scope.pgVar.sent[i].usrImg || $scope.pgVar.sent[i].usrImg == '') ? 'User_Img/female.jpg' : $scope.pgVar.sent[i].usrImg;
            else
                $scope.pgVar.sent[i].usrImg = (!$scope.pgVar.sent[i].usrImg || $scope.pgVar.sent[i].usrImg == '') ? 'User_Img/male.jpg' : $scope.pgVar.sent[i].usrImg;
        }
    };

    $scope.loaddata();





} ]);

