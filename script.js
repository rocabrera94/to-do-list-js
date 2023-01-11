const input = document.querySelector('input')
const btnMas = document.querySelector('.btn-mas')
const eliminar = document.querySelector('.limpiar-lista')
const ul = document.querySelector('ul')
const vacio = document.querySelector('.vacio')
vacio.classList.add('fuente-vacio')
btnMas.addEventListener('click',(e) => {
    e.preventDefault()
    const texto = input.value
    if (texto !== '') {
        const li = document.createElement('li')
    const p = document.createElement('p')
    p.classList.add('tarea')
    p.textContent = texto
    li.appendChild(p)
    li.appendChild(borrar())
    ul.appendChild(li)
    input.value = ""
    li.addEventListener('click',()=>{

        li.classList.toggle('hecho')
        p.classList.toggle('estilo')
       

    })
    vacio.style.display = 'none'
    }
})

function borrar(){
    const xBtn = document.createElement('button')
    xBtn.textContent = 'X'
    xBtn.setAttribute('id','x-btn')

    xBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement
        ul.removeChild(item); 

        const items = document.querySelectorAll('li');
        if (items.length == 0){
            vacio.style.display = 'block';
        }
    })
    return xBtn;
}

eliminar.addEventListener('click',(e) => {
    e.preventDefault()
    const lists = document.querySelectorAll('.hecho')
    lists.forEach(list => list.remove())
    const items = document.querySelectorAll('li');
        if (items.length == 0){
            vacio.style.display = 'block';
        }
    //vacio.style.display = 'block';
    })
    