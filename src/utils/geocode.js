const request = require('request')

//end of URL, limit can be deleted
const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFjb2RlciIsImEiOiJjazBnYXhldWowNXFuM2Nybm5ydzZhY3ZvIn0.5mj-CxibAAR5V393Eap9lQ&limit=1'

    request({url: geoUrl, json: true}, (error, response, body) => {
        if(error) {
            //callback('url statusCode:', response && response.statusCode)
            callback('unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            //callback('url statusCode:', response && response.statusCode)
            callback('unable to find location. Try another search', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode