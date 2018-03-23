// invalidating the submit event
const invalidate = () => {
    return false
}
document.getElementById("myForm").addEventListener("submit", invalidate)

// generating HTML elements
const myForm = document.getElementById("myForm")
const myName = document.getElementById("nameArea")
const myGame = document.getElementById("gameArea")
const okButton = document.getElementById("buttonOk")

// positioning HTML elements

const hrBefore = document.createElement("hr")
const labelElement = document.createElement("label")
const hrAfter = document.createElement("hr")

// declaring the function for displayinf the sentence

const displaySentence = () => {

    myForm.appendChild(hrBefore)
    const labelSentence = myForm.appendChild(labelElement)
    myForm.appendChild(hrAfter)
    labelSentence.innerHTML = `Hello ${myName.value}, you\`re playing with ${myGame.value}`
}

// using an event listener on the button Ok
okButton.addEventListener("click",displaySentence)


