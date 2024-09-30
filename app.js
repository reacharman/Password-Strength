const password = document.getElementById('password')
const message = document.getElementById('message')
const strength = document.getElementById('strength')

password.addEventListener('input', function () {
    if (password.value.length > 0) {
        message.style.display = 'block'
    }
    else {
        message.style.display = 'none'
    }
    if (password.value.length < 4) {
        strength.innerHTML = 'ᴡᴇᴀᴋ'
        password.style.borderColor = 'red'
        message.style.color = 'red'
    }
    else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = 'ᴍᴇᴅɪᴜᴍ'
        password.style.borderColor = 'yellow'
        message.style.color = 'yellow'
    }
    else if (password.value.length >= 8) {
        strength.innerHTML = 'ꜱᴛʀᴏɴɢ'
        password.style.borderColor = 'green'
        message.style.color = 'green'
    }
})