import {formManager} from "./formManager"
import {domRender} from "./domRender"
import {saveJournal} from "./saveJournal"



const journal = () => {
  document.querySelector("#input").innerHTML = formManager.htmlForm()
  domRender()
  saveJournal()
}

export {journal}