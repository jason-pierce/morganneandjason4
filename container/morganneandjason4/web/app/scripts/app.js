(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {


    var toolbarBottom = document.querySelector('core-toolbar div.bottom'),
        headerTitle = document.querySelector('core-toolbar div.top'),
        navIcon = document.querySelector('#navicon'),
        mquery = document.querySelector('#mquery'),
        contentSmall = document.querySelector('#content-small'),
        contentLarge = document.querySelector('#content-large');
    mquery.addEventListener('core-media-change', function() {
      toolbarBottom.hidden = mquery.queryMatches;
      navIcon.hidden = !mquery.queryMatches;
      headerTitle.hidden = !mquery.queryMatches;
      contentSmall.hidden = !mquery.queryMatches;
      contentLarge.hidden = mquery.queryMatches;
    });
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
