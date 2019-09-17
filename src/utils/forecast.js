const request = require('request')

//end of URL, lang=en or other countries. In addition, more datas
const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/949f32af6e661d3b921848debae98956/'+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'?units=si&lang=en'

    request({url: url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }else{
            callback(undefined,
                body.daily.data[0].summary
                + ' It is currently ' + body.currently.temperature + ' Celsius.'
                + 'There is a '+ body.currently.precipProbability + '% chance of rain.'
                + 'The highest temperature is ' + body.daily.data[0].temperatureHigh 
                + ' with a low of ' + body.daily.data[0].temperatureLow
                + '. The coordinates are ' + longitude + ' and ' + latitude
            )
        }
    })
}

module.exports = forecast