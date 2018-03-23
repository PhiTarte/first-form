// invalidating the submit event
const invalidate = () => {
    return false
}
document.getElementById("myForm").addEventListener("submit", invalidate)

const myForm = document.getElementById("myForm")
const myName = document.getElementById("nameArea")
const myGame = document.getElementById("gameArea")
const okButton = document.getElementById("buttonOk")

const hrBefore = document.createElement("hr")
const labelElement = document.createElement("label")
const hrAfter = document.createElement("hr")

const displaySentence = () => {

    myForm.appendChild(hrBefore)
    const labelSentence = myForm.appendChild(labelElement)
    myForm.appendChild(hrAfter)
    labelSentence.innerHTML = `Hello ${myName.value}, you\`re playing with ${myGame.value}`
}

okButton.addEventListener("click",displaySentence)


