

document.querySelector('.main-menu-burger').addEventListener('click', ()=> {
    document.querySelector('.main-nav').classList.toggle('show');
});


// var showMenu = (burgerId,navId) => {
//      const burger = document.getElementById(burgerId),
//         nav = document.getElementById(navId)
//     if(burger && nav) {
//         burger.addEventListener('click', () => {
//             nav.classList.burger('show')
//         })
//     }
// }

// showMenu('main-menu-burger', 'main-nav')