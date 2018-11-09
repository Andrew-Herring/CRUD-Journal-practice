import {dataManager} from "./dataManager"
import {formManager} from "./formManager"
import {domRender} from "./domRender"

const saveJournal = () => {
  document.querySelector("#saveBtn").addEventListener("click", () => {
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value
    const date = document.querySelector("#date").value
    const mood = document.querySelector("#mood").value
    if (!title || !content || !date || !mood) {
      alert("Fill out ALL the boxes before submiting ya filthy animal")
    } else {
      document.querySelector("#output").innerHTML = ""
      const entry = {
        title: title,
        content: content,
        date: date,
        mood: mood
      }
      dataManager.saveEntry(entry).then(() => {
        formManager.clearForm()
        domRender()
      })
    }
  })
}

export {saveJournal}