const btn1 = document.getElementById('btn1')
const featuresDropdown = document.getElementById('featuresDropdown')

const down = document.getElementById('down')
const up = document.getElementById('up')

btn1.addEventListener('click', () => {
    const ashows = featuresDropdown.classList.toggle('show')
    if (ashows) {
        down.style.display = 'none';
        up.style.display = 'inline';
    } else {
        down.style.display = 'inline';
        up.style.display = 'none';
    }


})

const btn2 = document.getElementById('btn2')
const featuresDropdown2 = document.getElementById('featuresDropdown2')
const down2 = document.getElementById('down2')
const up2 = document.getElementById('up2')
btn2.addEventListener('click', () => {
    const isShowns = featuresDropdown2.classList.toggle('show')

    if (isShowns) {
        down2.style.display = 'none';
        up2.style.display = 'inline';
    } else {
        down2.style.display = 'inline';
        up2.style.display = 'none';
    }


})






const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay')
const sidebar = document.querySelector('.sidebar');

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)


function toggleMenu() {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show')
}