angular.module('directives', [])

.directive('topBar', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'components/partials/topbar.html',
    replace: true
  };
})