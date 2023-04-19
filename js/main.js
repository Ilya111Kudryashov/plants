// полифил для метода forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
//START burger

const navBtn=document.querySelector('.nav_btn');
const nav=document.querySelector('.nav');
const navList=document.querySelector('.menu__list');
const navListItems=navList.querySelectorAll('.menu__item');
navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});
navListItems.forEach(function(menuitem){
    menuitem.addEventListener('click', function(e){
        nav.classList.remove('menu-open');
    })
});
//END burger 

//START BLUR
tagBTN.forEach(function(item){

const filterButtons = document.querySelectorAll('.tag');
const services = document.querySelectorAll('.service__item');

let currentButton = null;

filterButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (currentButton === btn) {
			return;
		}
		if (currentButton) {
			currentButton.classList.remove('tag__activ');
			currentButton.setAttribute('aria-selected', false);
		}
        console.log(btn);
		btn.classList.add('tag__activ');
		btn.setAttribute('aria-selected', true);
		services.forEach((service) => {
			if (service.dataset.tag === btn.dataset.target) {
				service.classList.remove('service__item--activ');
			} else {
				service.classList.add('service__item--activ');
			}
		});
		currentButton = btn;
	});
});
// END BLUR

// START ACCORDION
const accordionItemTitle = document.querySelectorAll('.accordion__item--title');

accordionItemTitle.forEach(accordionItemTitle => {
    accordionItemTitle.addEventListener('click', event => {
        // условие для открытия только текущего(одного) аккордиона
        const currentlyActivaccordionItemTitle = document.querySelector('.accordion__item--title.activ');
        if (currentlyActivaccordionItemTitle && currentlyActivaccordionItemTitle !== accordionItemTitle) {
            currentlyActivaccordionItemTitle.classList.toggle('activ');
            currentlyActivaccordionItemTitle.nextElementSibling.style.maxHeight = 0;
            currentlyActivaccordionItemTitle.parentElement.style.background = "#EDF2EC";
        }

        accordionItemTitle.classList.toggle('activ');
        const accordionItemBody = accordionItemTitle.nextElementSibling;
        const accordionItem = accordionItemTitle.parentElement;
        if (accordionItemTitle.classList.contains('activ')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            accordionItem.style.background = "#D6E7D2";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
            accordionItem.style.background = "#EDF2EC";
        }
    });
});
// END ACCORDION

// START DROPDOWN
const dropDownBtn = document.querySelector('.dropdown__btn');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list--item');
const selectArea = document.querySelectorAll('.select__item');
// клик по кнопке. открытие/закрытие выпадющего списка
dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.toggle('dropdown__btn--activ');
});
// выбор элемента из списка,закрытие списка и обновление значения dropdown_btn
dropDownListItems.forEach(function (listitem) {
    listitem.addEventListener('click', function (e) {
        // console.log(listitem);
        e.stopImmediatePropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownList.classList.remove('dropdown__list--visible');
    });
});
// внешний клик для закрытия dropdown
document.addEventListener('click', function (e) {
    console.log('document click');
    if (e.target !== dropDownBtn) {
        dropDownList.classList.remove('dropdown__list--visible');
    }
  }
)

// обработка события нажатия на Tab or Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Tab') {
        dropDownBtn.classList.remove('dropdown__btn--activ');
        dropDownList.classList.remove('dropdown__list--visible');
    }
})


let currentSelect;
function chpok(id) {
    if (currentSelect) {
        document.getElementById(currentSelect).classList.remove('select__item--activ');
    }
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    elem.classList.toggle('select__item--activ');
    currentSelect = id;
}

// END DROPDOWN
