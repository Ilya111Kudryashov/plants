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
const navBtnLine=document.querySelectorAll('.nav_btn-line');
navBtnLine.forEach(function(menuspan){
    menuspan.addEventListener('click',(e)=>{
        e.stopImmediatePropagation();
        nav.classList.toggle('menu-open');
    })
})

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
    
});
// navList.addEventListener('click',()=>{
//     if('click'!==navList){
//         nav.classList.remove('menu-open');
//     }
// })
navListItems.forEach(function(menuitem){
    menuitem.addEventListener('click', function(e){
        nav.classList.remove('menu-open');
        e.stopImmediatePropagation();
    })
});
//END burger 
//START BLUR
// const tagBTN=document.querySelectorAll('.tag');
// const serviceItems=document.querySelectorAll('.service__items');
// tagBTN.forEach(function(item){
//     item.addEventListener('click', function() {
//         console.log('clicked');
//         let currentBtnBLur=item;
//         let tagId=currentBtnBLur.getAttribute('data-tab');
//         let currentItem=document.querySelector(tagId);
//         console.log(tagId);
//         if(!currentBtnBLur.classList.contains('tag__activ')){
//             tagBTN.forEach(function(item){
//                 item.classList.remove('tag__activ');
//             });
//             serviceItems.forEach(function(item){
//                 item.classList.remove('service__items--activ');
//             })
//             currentBtnBLur.classList.add('tag__activ');
//             currentItem.classList.add('service__items--activ');
//         }
//     });
// });
// НЕРАБОЧИЙ СПОСОБ
// const tagBtn=document.querySelectorAll('.tag');

// tagBtn.forEach(function(item){
//     item.addEventListener('click', function(){
//         console.log('clicked');
//         let currentButton=item;
//         let currentBlurItem=currentButton.getAttribute('data-tab');
//         let tagDataAtribute=document.querySelector(currentBlurItem);
//         console.log(tagDataAtribute);
//         tagBtn.forEach(function(item){
//             item.classList.remove('tag__activ');
//         });
//         currentBlurItem.forEach(function(item){
//             item.classList.remove('service__items--activ');
//         });
//         currentButton.classList.add('tag__activ');
//         currentBlurItem.classList.add('service__items--activ');
//     });
// });

// window.onload = function () {
//     console.log("Heelll0");
//     addTagsClickHendler();
// }
// const addTagsClickHendler = () => {
//     document.querySelector('.sirvice__header--tags').addEventListener('click', (e) => {
//         if (e.target.classList.contains('tag')) {
//             let clickTag = e.target;
//             removeSelectedTags();
//             selectClickedTag(clickTag);
//             if (clickTag.innerText === 'All') {
//                 showAll();
//             } else {
//                 filterBlur(clickTag.innerText);
//             }
//         }
//     });
// }
// const removeSelectedTags = () => {
//     let tags = document.querySelectorAll('.sirvice__header--tags .tag');
//     console.log(tags);
//     tags.forEach(tag => {
//         tag.classList.remove('tag__activ');
//     });
// }
// const selectClickedTag = (clickTag) => {
//     clickTag.classList.add('tag__activ');
// }
// const showAll = () => {

// }
// const filterBlur = (selectedTag) => {
//     let service = document.querySelectorAll('.service__items .service__item');
//     console.log(service);
//     service.forEach(servic=> {
//         servic.classList.add('service__items--activ');
//         service.querySelectorAll('.project__title').forEach(tag => {
//             if (tag.innerText === selectedTag) {
//                 servic.classList.remove('service__items--activ');
//             }
//         })
//     })
// }
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
    // document.querySelector('.dropdown__btn').style.background="#C1E698";
    this.classList.toggle('dropdown__btn--activ');
    // this.classList.remove('dropdown__btn--activ');
});
// выбор элемента из списка,закрытие списка и обновление значения dropdown_btn
dropDownListItems.forEach(function (listitem) {
    listitem.addEventListener('click', function (e) {
        // console.log(listitem);
        e.stopImmediatePropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownList.classList.remove('dropdown__list--visible');
        // dropDownList.classList.remove('dropdown__btn--activ');
        // document.querySelectorAll('.select__item').value=this.dataset.value;
    });
});
// внешний клик для закрытия dropdown
document.addEventListener('click', function (e) {
    console.log('document click');
    if (e.target !== dropDownBtn) {
        // снятие подсветки кнопки
        // dropDownBtn.classList.remove('dropdown__btn--activ');
        // document.querySelector('.dropdown__btn').classList.remove('dropdown__btn--activ'); 
        dropDownList.classList.remove('dropdown__list--visible');
        
        // nav.classList.remove('menu-open');
    }
    if(e.target!==navBtn && e.target!==navList){
        nav.classList.remove('menu-open');
    }
}
// , function(a){
//     if(a.target!==navBtn){
//         nav.classList.remove('menu-open');
//     }
// }
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
    // if(selectArea.style.display==='block'){
    // document.querySelector('.contacts__img').classList.toggle('contacts__img--hiden');}
}



// END DROPDOWN