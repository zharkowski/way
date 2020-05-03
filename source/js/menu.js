'use strict';
var pageHeaderWrapper = document.querySelector('.page-header__wrapper');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeaderWrapper.classList.remove('page-header__wrapper--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeaderWrapper.classList.contains('page-header__wrapper--closed')) {
    pageHeaderWrapper.classList.remove('page-header__wrapper--closed');
    pageHeaderWrapper.classList.add('page-header__wrapper--opened');
  } else {
    pageHeaderWrapper.classList.add('page-header__wrapper--closed');
    pageHeaderWrapper.classList.remove('page-header__wrapper--opened');
  }
});
