# MEAN stack book project

Getting MEAN project "loc8r"

[Heroku deployment](https://getting-mean-book-loc8r.herokuapp.com)

## Misc

### Commands

#### Mongo Shell

To start mongodb execute `sudo mongod --fork --dbpath /var/lib/mongodb  --logpath /var/lib/mongodb/mongodb.log`

To manually insert new document of place `db.locations.save({name: 'Timespace', address: '125 High Street, Reading RG6 1Ps', rating: 5, facilities: ['Hot drinks', 'Food', 'Coworking zone', 'Regular meetups', 'Lections'], coords: [-0.9690884, 51.455041], openingTimes: [{days: 'Monday - Friday', opening: '7:00am', closing: '10:00pm', closed: false},{ days: 'Saturday', opening: '8:00am', closing: '7:00pm', closed: false}, {days: 'Sunday', closed: true}]})`

To add new review `db.locations.update({name: 'Timespace'}, {$push: { reviews: { author: 'Jack Rassel', id: ObjectId(), rating: 5, timestamp: new Date("Jul 15, 2018"), reviewText: "What a great place. I can't say enough good things about it."}}})`

#### Heroku config

Firstly `heroku login`

Then `heroku config:set MONGOLAB_URI=mongodb://<user>:<password>@ds161520.mlab.com:61520/loc8r-db```

To get that URI use ```heroku config:get MONGOLAB_URI`

##### DB dump

To create ddb dump create folder `mkdir -p ~/tmp/mongodump``` then start db and ```mongodump -h localhost:27017 -d loc8r-db -o ~/tmp/mongodump`

To restore that dump into db use `mongorestore -h ds161520.mlab.com:61520 -d loc8r-db -u <user> -p <password> ~/tmp/mongodump`

To connect to remote db use `mongo ds161520.mlab.com:61520/loc8r-db -u <username> -p <password>`

## Todos

- [ ] In models/location change time format from String to Number of seconds from midnight
