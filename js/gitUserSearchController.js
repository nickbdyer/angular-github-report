githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
var searchResource = $resource('https://api.github.com/search/users');
    $scope.searchHistory = [];
  $scope.doSearch = function() {
    if ($scope.searchTerm !== ""){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: "b624fc0bf66d85a3f4ee12eac6de04987630678e"
    });
   }; 
  };

  $scope.addSearchTerm = function() {
    $scope.searchHistory.push($scope.searchTerm);
  };

  $scope.displayLast = function(searchHistory) {
    return searchHistory[searchHistory.length-1]
  };

});