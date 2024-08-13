'use strict';

var emailapp = angular.module("emailapp", ["ngSanitize", "ngCkeditor"]);



emailapp.controller('emailCtrl', ['$scope', '$q', '$timeout', function($scope, $q, $timeout) {
$scope.myhide = false;
$scope.myhidec = false;

    $scope.showdiv = function() {
        $scope.myhide = true;
    };
    $scope.hidediv = function() {
        $scope.myhide = false;
    };

    $scope.showcdiv = function() {
        $scope.myhidec = true;
    };
    $scope.hidecdiv = function() {
        $scope.myhidec = false;
    };
    $scope.pgVar = {
        selTab: 'Inbox',
        compose: 0,
        mailObj: {},
        mailArr: [],
        inBox: [{ id: '1', usrName: 'Chinna Babu', time: '3:30pm', subject: 'Design template for mail box Design template for mail box', gender: 'male', msg: ' Using Angular js and material css bind static data from json object', attchmnt: 'su-paperclip', usrImg: 'User_Img/rao.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', usrName: 'T S Suresh', time: '12:30 pm', subject: 'Srinu meet me today', gender: 'male', msg: 'Regarding Suvarna Website Design', attchmnt: '', usrImg: 'User_Img/sing.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', usrName: 'SubbaRao Kolla', time: '11:30am', subject: 'Admission screen Changes', gender: 'male', msg: 'Bhupathi Design Admission screen 3 types', attchmnt: '', usrImg: 'User_Img/male.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', usrName: 'Muni Kumar K', time: '9:30 am', subject: 'Call me Morning', gender: 'male', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],

        sent: [{ id: '1', usrName: 'Ramanujama', time: '3:30pm', subject: 'Remove all Script manager proxy in HIS', gender: 'female', msg: ' Remove all Script manager proxy in HIS', attchmnt: 'su-paperclip', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', usrName: 'Jyothi', time: '12:30 pm', subject: 'Jyothi Where is my charger', gender: 'female', msg: 'Jyothi Where is my charger', attchmnt: '', usrImg: 'User_Img/female.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', usrName: 'Roja Rani', time: '11:30am', subject: 'Did u prepare the excel sheet', gender: 'female', msg: 'Did u prepare the excel sheet Did u prepare the excel sheet', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', usrName: 'Suseela', time: '9:30 am', subject: 'Call me Morning', gender: 'female', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],

        drafts: [{ id: '1', usrName: 'Chinna Babu', time: '3:30pm', subject: 'Design template for mail box Design template for mail box', gender: 'male', msg: ' Using Angular js and material css bind static data from json object', attchmnt: 'su-paperclip', usrImg: 'User_Img/rao.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '2', usrName: 'T S Suresh', time: '12:30 pm', subject: 'Srinu meet me today', gender: 'male', msg: 'Regarding Suvarna Website Design', attchmnt: '', usrImg: 'User_Img/sing.png', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '3', usrName: 'SubbaRao Kolla', time: '11:30am', subject: 'Admission screen Changes', gender: 'male', msg: 'Bhupathi Design Admission screen 3 types', attchmnt: '', usrImg: 'User_Img/male.jpg', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}] },
        { id: '4', usrName: 'Muni Kumar K', time: '9:30 am', subject: 'Call me Morning', gender: 'male', msg: ' regarding Appointment Module', attchmnt: '', usrImg: '', fileAtch: [{ file: '', id: '1' }, { file: '', id: '2'}]}],

        resetActMnuItm: function(IDX, type) {
            var arr = [];
            if (type == 'Inbox')
                arr = angular.copy($scope.pgVar.inBox);
            else if (type == 'Sent')
                arr = angular.copy($scope.pgVar.sent);
            else if (type == 'Drafts')
                arr = angular.copy($scope.pgVar.drafts);
            if (!arr[IDX].active) {
                angular.forEach(arr, function(item) {
                    item.active = false;
                });
                $scope.pgVar.mailObj = arr[IDX];
                arr[IDX].active = true;
                $scope.pgVar.compose = 2;
            }

        }

    };


    $scope.selTabFn = function(id) {

        if (id == 1) {
            $scope.pgVar.compose = 1;
        }
        else {

            if (id == 2) {
                $scope.pgVar.selTab = 'Inbox';
                $scope.pgVar.mailArr = angular.copy($scope.pgVar.inBox)
            }
            if (id == 3) {
                $scope.pgVar.selTab = 'Sent';
                $scope.pgVar.mailArr = angular.copy($scope.pgVar.sent)
            }
            if (id == 4) {
                $scope.pgVar.selTab = 'Drafts';
                $scope.pgVar.mailArr = angular.copy($scope.pgVar.drafts)
            }
        }
    };


    $scope.loaddata = function() {
        for (var i in $scope.pgVar.inBox) {
            if ($scope.pgVar.inBox[i].gender == "female")
                $scope.pgVar.inBox[i].usrImg = (!$scope.pgVar.inBox[i].usrImg || $scope.pgVar.inBox[i].usrImg == '') ? 'User_Img/female.jpg' : $scope.pgVar.inBox[i].usrImg;
            else
                $scope.pgVar.inBox[i].usrImg = (!$scope.pgVar.inBox[i].usrImg || $scope.pgVar.inBox[i].usrImg == '') ? 'User_Img/male.jpg' : $scope.pgVar.inBox[i].usrImg;
        }
        for (var i in $scope.pgVar.drafts) {
            if ($scope.pgVar.drafts[i].gender == "female")
                $scope.pgVar.drafts[i].usrImg = (!$scope.pgVar.drafts[i].usrImg || $scope.pgVar.drafts[i].usrImg == '') ? 'User_Img/female.jpg' : $scope.pgVar.drafts[i].usrImg;
            else
                $scope.pgVar.drafts[i].usrImg = (!$scope.pgVar.drafts[i].usrImg || $scope.pgVar.drafts[i].usrImg == '') ? 'User_Img/male.jpg' : $scope.pgVar.drafts[i].usrImg;
        }
        for (var i in $scope.pgVar.sent) {
            if ($scope.pgVar.sent[i].gender == "female")
                $scope.pgVar.sent[i].usrImg = (!$scope.pgVar.sent[i].usrImg || $scope.pgVar.sent[i].usrImg == '') ? 'User_Img/female.jpg' : $scope.pgVar.sent[i].usrImg;
            else
                $scope.pgVar.sent[i].usrImg = (!$scope.pgVar.sent[i].usrImg || $scope.pgVar.sent[i].usrImg == '') ? 'User_Img/male.jpg' : $scope.pgVar.sent[i].usrImg;
        }

        $scope.selTabFn(2);
    };

    $scope.loaddata();


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
    $scope.newArr = [];
    $scope.arr = '';
    //List Item Events
    //Function To Call on ng-click
    $scope.AssignValueAndHide = function(index) {
        //$scope.searchText = $scope.suggestions[index];
        $scope.newArr.push($scope.suggestions[index]);
        $scope.suggestions = [];
        $scope.searchText = '';
    }
    $scope.removeli = function(indx) {
        $scope.newArr.splice(indx, 1);
    };
    //======================================


    ///

    $scope.roleuser = [


{ id: "rad1", name: "DISPATCH USER" },
{ id: "rad2", name: "Doctor" },
{ id: "rad3", name: "FRONT OFFICE ADMIN" },
{ id: "rad4", name: "Front office Admission" },
{ id: "rad5", name: "Front office Casuality Billing" },
{ id: "rad6", name: "Front office GRE" },
{ id: "rad7", name: "Front Office Receptionist" },
{ id: "rad8", name: "Front office Reports Dispatcher" },
{ id: "rad9", name: "Front office Scheduler" },
{ id: "rad10", name: "Front office Secretary" },
{ id: "rad11", name: "GS EXECUITVE" },
{ id: "rad12", name: "GS TRAINEE EXECUTIVE" },
{ id: "rad13", name: "HR ADMIN" },
{ id: "rad14", name: "HR EXECUTIVE" },
{ id: "rad15", name: "ICU Incharges" },
{ id: "rad16", name: "ICU Shift Incharges" },
{ id: "rad17", name: "Infection control" },
{ id: "rad18", name: "INTERNAL AUDIT" },
{ id: "rad19", name: "IP ADMIN" },
{ id: "rad20", name: "IP EXECUTIVE" },
{ id: "rad21", name: "IP Pharmacy User" },
{ id: "rad22", name: "IP USER PHARMACY" },
{ id: "rad23", name: "IT EXECUTIVE" },
{ id: "rad24", name: "IT ADMIN" },
{ id: "rad25", name: "Lab Administrator" },
{ id: "rad26", name: "Lab Junior Tech" },
{ id: "rad27", name: "Lab Out Source SEC" },
{ id: "rad28", name: "Lab Senior Tech" },
{ id: "rad29", name: "Lab Typist" },
{ id: "rad30", name: "MARKETING ADMIN" }

];


    $scope.categoryuser = [


{ id: "chk1", name: "DISPATCH USER" },
{ id: "chk2", name: "Doctor" },
{ id: "chk3", name: "FRONT OFFICE ADMIN" },
{ id: "chk4", name: "Front office Admission" },
{ id: "chk5", name: "Front office Casuality Billing" },
{ id: "chk6", name: "Front office GRE" },
{ id: "chk7", name: "Front Office Receptionist" },
{ id: "chk8", name: "Front office Reports Dispatcher" },
{ id: "chk9", name: "Front office Scheduler" },
{ id: "chk10", name: "Front office Secretary" },
{ id: "chk11", name: "GS EXECUITVE" },
{ id: "chk12", name: "GS TRAINEE EXECUTIVE" },
{ id: "chk13", name: "HR ADMIN" },
{ id: "chk14", name: "HR EXECUTIVE" },
{ id: "chk15", name: "ICU Incharges" },
{ id: "chk16", name: "ICU Shift Incharges" },
{ id: "chk17", name: "Infection control" },
{ id: "chk18", name: "INTERNAL AUDIT" },
{ id: "chk19", name: "IP ADMIN" },
{ id: "chk20", name: "IP EXECUTIVE" },
{ id: "chk21", name: "IP Pharmacy User" },
{ id: "chk22", name: "IP USER PHARMACY" },
{ id: "chk23", name: "IT EXECUTIVE" },
{ id: "chk24", name: "IT ADMIN" },
{ id: "chk25", name: "Lab Administrator" },
{ id: "chk26", name: "Lab Junior Tech" },
{ id: "chk27", name: "Lab Out Source SEC" },
{ id: "chk28", name: "Lab Senior Tech" },
{ id: "chk29", name: "Lab Typist" },
{ id: "chk30", name: "MARKETING ADMIN" }

];


    ///

} ]);