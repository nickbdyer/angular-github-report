githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
var searchResource = $resource('https://api.github.com/search/users');
  $scope.doSearch = function() {
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: "5d6ffa56fba974adfd2dc6b86157d542c67256c0",
    });
  };
});