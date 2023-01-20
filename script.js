const box = document.querySelectorAll('.cont')

window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
    const triggerBot=(window.innerHeight / 5 * 4)
    box.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBot) {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}