fetch = require('node-fetch')
module.exports = {
    index:(req, res, next) => {
        res.render('index', {
            context: 'MappExpress'
        })
    },
    distances: (req, res, next) => {
       url = 'https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?approaches=curb;curb;curb&access_token=pk.eyJ1IjoiY2hyaXN0aWFuOTQiLCJhIjoiY2pyOGtwamlrMDdlcjQ1bDgyY2d2N3YxYyJ9.L88q8kDAaxr61oEG_HIssg'
       fetch(url)
       .then(res => res.json())
       .then(data => {
           res.send(data)
       })
       .catch(err=> {
           res.send(err)
       })
    },
    proximity: (req, res, next) => {
        res.render('proximity')
    },
    driving: (req, res, next) => {
        res.render('driving')
    },
    data:(req, res, next) => {
        var _ = require('lodash')
        var url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res =>{return res.json()})
        .then(json => {
            var users = json
            filtered= _.filter(users, {
                name: 'Chelsey Dietrich'
            })
            res.send(filtered)
        })
        
    },
    places: (req, res, next) => {
        query = 'manchester'
        apiKey = 'pk.eyJ1IjoiY2hyaXN0aWFuOTQiLCJhIjoiY2pyOGtwamlrMDdlcjQ1bDgyY2d2N3YxYyJ9.L88q8kDAaxr61oEG_HIssg'
        url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+query+'.json?access_token='+apiKey
        fetch(url)
        .then(res => {return res.json()})
        .then(json => {
            // res.send(json)
            res.render('places', {
                places : json,
                context: 'Places',
            })
        })
    }
}