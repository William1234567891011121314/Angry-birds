const body = document.querySelector("body")
const btToggleMenu = body.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const dialog = body.querySelector("dialog")
const btDialog = body.querySelectorAll(".bt-dialog")
const btModal = body.querySelector(".bt-modal")
const h1dialog = dialog.querySelector("h1")
const info = dialog.querySelector("#info")

btModal.addEventListener('click', ev => {
  info.innerHTML=`
  <h1>Seleção de tema</h1>
  <p>Qual tema você gostaria de usar?</p>
  <div class="action">
    <button data-theme="dark">Escuro</button>
    <button data-theme="light">Claro</button> 
  </div>
  `
  dialog.classList.remove("dialog")
  dialog.showModal()
})

btDialog.forEach(
  (bt, index) => bt.addEventListener("click", async ev => {
    const requestpsinfo = await fetch("psinfo.json")
    const psinfo = await requestpsinfo.json()
    info.innerHTML = `
      <h1>Estatísticas</h1>
      <p>Tamanho: ${psinfo[index]["tamanho"]}</p>
      <p>Gênero: ${psinfo[index]["Gênero"]}</p>
      <p>Força: ${psinfo[index]["Força"]}</p>
      <p>Habilidade: ${psinfo[index]["Habilidade"]}</p>
      <div class="action">
          <button data-theme="light">Fechar</button>
      </div>
    `
    dialog.style.top = ev.PageY + "px"
    dialog.classList.add("dialog")
    console.log(ev)
    dialog.show()
  })
)
dialog.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => 
    dialog.close()
  )
)