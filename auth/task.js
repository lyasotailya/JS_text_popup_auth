let request = new XMLHttpRequest()

let login = document.getElementsByName('login')[0]
let password = document.getElementsByName('password')[0]
let button = document.querySelector('.btn')
let welcome = document.querySelector(".welcome")
let user_id = document.querySelector('span')

button.onclick = function() {
    if (login.value && password.value) {
        let formData = new FormData(document.getElementById('signin__form'))
        request.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth', true)

        request.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200) {
                let responseJSON = JSON.parse(request.response)

                //console.log(responseJSON['user_id'])
                if (responseJSON['success'] == false) {
                    alert('Неверный логин или пароль!')
                } else {
                    formsChangeAuth(responseJSON['user_id'])
                    localStorage.setItem('user', JSON.stringify(responseJSON.user_id))
                    console.log(login.value)
                }
            }
        })

        request.send(formData)

        for (var key of formData.keys()) {
            formData.delete(key)
        }

        document.querySelector("#signin").classList.toggle('signin_active')
        welcome.classList.toggle('welcome_active')
        user_id.textContent = localStorage.user
        //console.log(localStorage[authString])

    } else {
        alert('Введите имя и пароль пожалуйста!')

        for (var key of formData.keys()) {
            formData.delete(key)
        }
    }
    return false
}




