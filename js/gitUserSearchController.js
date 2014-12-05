githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
var searchResource = $resource('https://api.github.com/search/users');
    $scope.searchHistory = [];

  $scope.doSearch = function() {
    if ($scope.searchTerm !== ""){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: "5d6ffa56fba974adfd2dc6b86157d542c67256c0",
      });
    };
  };

  $scope.addSearchTerm = function() {
    $scope.searchHistory.push($scope.searchTerm);
  };

  $scope.displayLast = function(searchHistory) {
    return searchHistory[searchHistory.length-1]
  };

  $scope.showUser = function(username) {
      var userResource = $resource('https://api.github.com/users/' + username + '/repos');
      $scope.userRepoResult = userResource.query({
        access_token: "5d6ffa56fba974adfd2dc6b86157d542c67256c0"
      })
    };
});
