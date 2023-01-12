function $(sel) {
    return document.querySelector(sel)
} 
  let btn = $(".btn")
  btn.style.padding = '10px'
  btn.style.margin = '10px auto'


btn.addEventListener('click' , (e)=>{
     btn.style.border = 'none'
     btn.style.background = 'red'
     btn.style.color = 'white'
     btn.style.padding = '10px'

     console.log('ooke');
     btn.setAttribute('disabled' , 'true')
     setTimeout(() => {
        btn.removeAttribute('disabled' , 'false')

     }, 5000);
 })