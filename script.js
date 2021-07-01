const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    fill.addEventListener('dragover', dragOver)
fill.addEventListener('dragenter', drageEnter)
fill.addEventListener('dragleave', dragLeave)
fill.addEventListener('dragdrop', dragDrop)
}
  
function dragStart(){
    this.className += 'hold'
    setTimeout(() => this.className = 'invisible',0)
}
function dragEnd(){
    this.className = 'fill'
    
}
function dragOver(e){
   e.preventDefault()  
}
function drageEnter(e){
    e.preventDefault()
}
function dragLeave(){
    console.log('drag leave')
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}