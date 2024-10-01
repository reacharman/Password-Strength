const password = document.getElementById('password')
const message = document.getElementById('message')
const strength = document.getElementById('strength')

password.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        event.preventDefault()
    }
})

const isOnlyWhitespace = (input) => /^\s*$/.test(input)

password.addEventListener('input', function () {
    if (password.value.length === 0 || isOnlyWhitespace(password.value)) {
        message.style.display = 'none'
        password.style.borderColor = 'white'
        return
    }

    message.style.display = 'block'

    if (password.value.length < 4) {
        strength.innerHTML = 'ᴡᴇᴀᴋ'
        password.style.borderColor = 'red'
        message.style.color = 'red'
    } else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = 'ᴍᴇᴅɪᴜᴍ'
        password.style.borderColor = 'yellow'
        message.style.color = 'yellow'
    } else if (password.value.length >= 8) {
        strength.innerHTML = 'ꜱᴛʀᴏɴɢ'
        password.style.borderColor = 'green'
        message.style.color = 'green'
    }
})
