function replace_string(e) {
  e.value = e.value.replace(/[^0-9.]/g, '')
}
/* follow up function to open and close page it block on click and add animation  */
function followUpPage(popupId, openButtonsSelector, closeButtonId) {
  const popup = document.getElementById(popupId)
  const form = popup.querySelector('#myForm')
  const body = document.body
  const openFormButtons = document.querySelectorAll(openButtonsSelector)
  const closeFormButton = document.getElementById(closeButtonId)
  const shadowPopUp = document.querySelectorAll('.close-pop')
  function openForm() {
    document.documentElement.scrollTop = 0
    popup.style.display = 'grid'
    body.style.overflow = 'hidden'
    form.animate(
      [
        { transform: 'scale(0.5)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 },
      ],
      {
        duration: 500,
        easing: 'ease-out',
      }
    )
  }

  function closeForm() {
    form.animate(
      [
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0.5)', opacity: 0 },
      ],
      {
        duration: 500,
        easing: 'ease-out',
      }
    ).onfinish = () => {
      popup.style.display = 'none'
      body.style.overflowX = 'hidden'
    }
  }

  function handleInputChange(
    input,
    fileNameClass,
    fileSizeClass,
    labelSelector
  ) {
    const inputFile = document.querySelector(`.${input}`)
    const fileNameField = document.querySelector(`.${fileNameClass}`)
    const fileSizeField = document.querySelector(`.${fileSizeClass}`)
    const fileIcon = document.querySelector(`${labelSelector} i`)

    inputFile.addEventListener('change', function () {
      fileIcon.style.color = '#A0B63B'
      const uploadedFileName = inputFile.files[0].name
      fileNameField.textContent = uploadedFileName
      const uploadedFileSize =
        Math.floor(inputFile.files[0].size / 1024) + 'kb' + ' . ' + getDateNow()
      fileSizeField.textContent = uploadedFileSize
    })
  }

  function initialize() {
    openFormButtons.forEach((button) => {
      button.addEventListener('click', openForm)
    })

    closeFormButton.addEventListener('click', closeForm)

    shadowPopUp.forEach((element) => {
      element.addEventListener('click', closeForm)
    })

    handleInputChange(
      'follow_upload',
      'file-name-follow',
      'file-size-follow',
      '.upload-label2'
    )

    handleInputChange(
      'contact_upload',
      'file-name-contact',
      'file-size-contact',
      '.upload-label1'
    )
  }
  initialize()
}
followUpPage('pop-follow', '.follow', 'closeForm')
followUpPage('pop-ContactUs', '#contact', 'closeFormContact')
/* function return date now by formate dd / mm/ yy */
function getDateNow() {
  const today = new Date()
  const yyyy = today.getFullYear()
  let mm = today.getMonth() + 1 // Months start at 0!
  let dd = today.getDate()
  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm
  const formattedToday = dd + '/' + mm + '/' + yyyy
  return formattedToday
}

function responsiveHamburgerButton() {
  const hamburgerButton = document.querySelector('.hamburger')
  const responsiveNavbar = document.querySelector('.responsive-navbar')

  hamburgerButton.addEventListener('click', () => {
    if (responsiveNavbar.classList.contains('flex')) {
      hamburgerButton.classList.toggle('active')
      responsiveNavbar.classList.toggle('active')
      setTimeout(() => {
        responsiveNavbar.classList.toggle('flex')
      }, 300)
    } else {
      hamburgerButton.classList.toggle('active')
      responsiveNavbar.classList.toggle('flex')
      setTimeout(() => {
        responsiveNavbar.classList.toggle('active')
      }, 100)
    }
  })
}

responsiveHamburgerButton()
