AOS.init();

const $menu = document.getElementById('menu')
const $dropdown = document.getElementById ('dropdown')

$dropdown.addEventListener('click', function(){
    if (menuToggle === false){
        $menu.style.display = 'block'
        menuToggle = true}

        else if (menuToggle === true){
            $menu.style.display = 'none'
            menuToggle = false
        }
})

