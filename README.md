# MEAN stack book project

Getting MEAN project "loc8r"

[Heroku deployment](https://getting-mean-book-loc8r.herokuapp.com)

## Misc

### Commands

To start mongodb execute ```sudo mongod --fork --dbpath /var/lib/mongodb  --logpath /var/lib/mongodb/mongodb.log```

To manually insert new document of place ```db.locations.save({name: 'Timespace', address: '125 High Street, Reading RG6 1Ps', rating: 5, facilities: ['Hot drinks', 'Food', 'Coworking zone', 'Regular meetups', 'Lections'], coords: [-0.9690884, 51.455041], openingTimes: [{days: 'Monday - Friday', opening: '7:00am', closing: '10:00pm', closed: false},{ days: 'Saturday', opening: '8:00am', closing: '7:00pm', closed: false}, {days: 'Sunday', closed: true}]})```

To add new review ```db.locations.update({name: 'Timespace'}, {$push: { reviews: { author: 'Jack Rassel', id: ObjectId(), rating: 5, timestamp: new Date("Jul 15, 2018"), reviewText: "What a great place. I can't say enough good things about it."}}})```

### Todos

[ ] In models/location change time format from String to Number of seconds from midnight
