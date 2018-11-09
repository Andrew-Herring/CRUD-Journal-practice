//representation of DOM entries
const htmlEntry = (entry) => {
  return `
  <div>
  <h2>${entry.title}</h2>
  <p>${entry.date}</p>
  <p>${entry.content}</p>
  <p>${entry.mood}</p>
  </div>`
}

export {htmlEntry}