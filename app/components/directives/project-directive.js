angular.module('projectDirective', [])

  .directive('projectAddBar', function () {
    return {
      restrict: 'E',
      transclude: true,
      controller: 'PublishController',
      controllerAs: 'pubCtrl',
      scope: true,
      templateUrl: 'components/partials/project-add-bar.html',
      replace: true
    }
  })