function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains('light')) {
    // Change the image profile
    img.setAttribute('src', './image/avatar-light.png')
  } else {
   // Don't change the image profile
   img.setAttribute("src", "./image/avatar.png")
  }

}