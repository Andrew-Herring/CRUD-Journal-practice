import {dataManager} from "./dataManager"
import {htmlEntry} from "./htmlEntry"

const dom = (entry) => {
  document.querySelector("#output").innerHTML += entry
}

const domRender = () => {
  dataManager.getEntries()
  .then(entries => {
    entries.forEach(entry => {
      const entryHtml = htmlEntry(entry)
      dom(entryHtml)
    })
  })
}

export {domRender}