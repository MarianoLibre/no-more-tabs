const root = document.getElementById("root")

const test = document.createElement("p")
test.innerText = "This is some more shit."
test.setAttribute("class", "some-shit")
root.appendChild(test)

const more = document.createElement("pre")
more.className = "more-shit"
more.innerText = "I fucking love BASH!"
root.appendChild(more)

