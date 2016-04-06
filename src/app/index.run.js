(function() {
  'use strict';

  angular
    .module('bsInjularDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
