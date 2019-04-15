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
        query = 'Toronto'
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
    },

    // directions
    directions: (req, res, next)=> {
        //simulates nairobi to mombasa drive
        // modes - driving | diving-traffic
        mapboxAccessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuOTQiLCJhIjoiY2pyOGtwamlrMDdlcjQ1bDgyY2d2N3YxYyJ9.L88q8kDAaxr61oEG_HIssg'
        from = '36.834583,-1.362863'
        to = '39.669571,-4.036878'
        url = `https://api.mapbox.com/directions/v5/mapbox/driving/${from};${to}.json?access_token=${mapboxAccessToken}`
        fetch(url)
        .then(data => data.json())
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    },

    // geocoding
    geocoding: (req, res, next) => {
        query = 'total kangundo'
        url = `https://nominatim.openstreetmap.org/search?q=${query}&addressdetails=1&format=json&countrycodes=ke`
        fetch(url)
        .then(data => data.json())
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send({
                msg: 'something went wrong',
                err: err,
            })
        })
    },

    // reverse geocoding
    reveseGeocoding: (req, res, next) => {
        // -1.2916937,36.7981071
    },

    simpleRequest:(req, res, next) => {
        mapboxAccessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuOTQiLCJhIjoiY2pyOGtwamlrMDdlcjQ1bDgyY2d2N3YxYyJ9.L88q8kDAaxr61oEG_HIssg'
        from = '36.834583,-1.362863'
        to = '39.669571,-4.036878'
        url = `https://api.mapbox.com/directions/v5/mapbox/driving/${from};${to}.json?access_token=${mapboxAccessToken}`
        var rp = require('request-promise');
        var options = {
            uri: url,
            qs: {
                access_token: mapboxAccessToken // -> uri + '?access_token=xxxxx%20xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };
         
        rp(options)
            .then(users =>{
                res.send(users)
            })
            .catch(err => {
                // API call failed...
                res.send(err)
            });
    },

    snap: (req, res, next) => {
        mapboxAccessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuOTQiLCJhIjoiY2pyOGtwamlrMDdlcjQ1bDgyY2d2N3YxYyJ9.L88q8kDAaxr61oEG_HIssg'
        url = `https://api.mapbox.com/matching/v5/mapbox/driving/-117.17282,32.71204;-117.17288,32.71225;-117.17293,32.71244;-117.17292,32.71256;-117.17298,32.712603;-117.17314,32.71259;-117.17334,32.71254?access_token=${mapboxAccessToken}`
        fetch(url)
        .then(data => data.json())
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(data)
        })
    }
}