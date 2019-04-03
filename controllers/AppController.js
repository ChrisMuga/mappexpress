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
        var _ = require('lodash');
        var users = [
            { 'user': 'barney',  'age': 36, 'active': true },
            { 'user': 'fred',    'age': 40, 'active': false },
            { 'user': 'pebbles', 'age': 1,  'active': true }
          ];
           
         x= _.filter(users, {
             active: true
         });
         res.send(x)
    }
}