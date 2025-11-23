'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.offsetWidth / 2 - 10 - spider.offsetWidth / 2;
const height = wall.offsetHeight / 2 - 10 - spider.offsetHeight / 2;

wall.style.position = 'relative';
spider.style.left = width + 'px';
spider.style.top = height + 'px';
