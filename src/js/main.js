'use strict';

const burger = document.querySelector('.js-burger');
const closeIcon = document.querySelector('.js-close');
const menu = document.querySelector('.js-menu');

function handleClick() {
  menu.classList.toggle('hidden');
}

function handleLink() {
  menu.classList.add('hidden');
}

function menuLinks() {
  const clickedLinks = document.querySelectorAll('.js-link');
  for (const link of clickedLinks) {
    link.addEventListener('click', handleLink);
  }
}

burger.addEventListener('click', handleClick);
closeIcon.addEventListener('click', handleClick);
menuLinks();