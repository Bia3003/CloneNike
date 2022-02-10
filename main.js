const listBtnColors = document.querySelectorAll('.colors button')
const imgShoe = document.getElementById('changeShoesByColor')
listBtnColors.forEach(function (btnColor) {
  btnColor.addEventListener('click', function () {
    selectingImg(btnColor)
    changeColorSelected(btnColor)
  })
})

function selectingImg(btnColor) {
  const imgName = `nike_${btnColor.id.toLowerCase()}.png`
  imgShoe.src = `./images/${imgName}`
  changeColorSelected(btnColor)
}

function changeColorSelected(color) {
  console.log(color)
  const buttonsColors = document.querySelectorAll('.colors button')
  buttonsColors.forEach(function (btnColor) {
    if (btnColor.classList.contains('selected')) {
      btnColor.classList.remove('selected')
    }
  })

   color.classList.add('selected')
}

function changeButtonColorByClick(size) {
  const buttonsSizes = document.querySelectorAll('.sizes button')
  buttonsSizes.forEach(function (btnSize) {
    if (btnSize.classList.contains('selectButton')) {
      btnSize.classList.remove('selectButton')
    }
  })

  size.classList.add('selectButton')
}

// Btn Next e Preview
let slider_img = document.querySelector('.pictureImg')

function next(){
  const buttonColorsSelected = document.getElementsByClassName('selected')[0]
  buttonColorsSelected.classList.remove('selected');
  if (!!buttonColorsSelected.nextElementSibling)
    selectingImg(buttonColorsSelected.nextElementSibling);
  else {
    const btnBrown=document.getElementById('brown');
    selectingImg(btnBrown);
  }


}
function prev(){
  const buttonColorsSelected = document.getElementsByClassName('selected')[0]
  buttonColorsSelected.classList.remove('selected');
  if (!!buttonColorsSelected.previousElementSibling)
    selectingImg(buttonColorsSelected.previousElementSibling);
  else {
    const btnWhite=document.getElementById('white');
    selectingImg(btnWhite);
  }
}

function setImg() {
  return slider_img.setAttribute('src', 'images/' + images[i])
}

// MENU - Mobile
const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active') //toggle remove se já tem a classe e adiciona se não tem 
  
})
