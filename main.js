const body = document.querySelector("body");
const btToggleMenu = body.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const dialog = body.querySelector("dialog")
const btDialog = body.querySelector(".bt-dialog")
const btModal = body.querySelector(".bt-modal")

btDialog.addEventListener('click', () => dialog.show())
btModal.addEventListener('click', () => dialog.showModal())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => 
    body.style.--
    dialog.close()
  )
)