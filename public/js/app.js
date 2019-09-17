const weatherForm = document.querySelector('.weatherForm')
const weatherInput = document.querySelector('.weatherInput')
const weatherError = document.querySelector('.weatherError')
const weatherInfo = document.querySelector('.weatherInfo')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    weatherError.textContent = 'Loading...'
    weatherInfo.textContent = ''
    
    const location = weatherInput.value

    if(location == '' || location == null) {

        alert('type any location')
        weatherInput.focus()
        return

    } else {

        fetch('/weather?address='+location).then( (response) => {
            response.json().then( (data) => {
                if (data.error) {

                    weatherError.textContent = data.error

                } else {

                    weatherError.textContent = data.location
                    weatherInfo.textContent = data.forecastData

                }
            })
        })

    }

    

})