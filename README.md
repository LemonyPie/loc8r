# MEAN stack book project

Getting MEAN project "loc8r"

[Heroku deployment](https://getting-mean-book-loc8r.herokuapp.com)

## Misc

### Commands

#### Mongo Shell

To start mongodb execute `sudo mongod --fork --dbpath /var/lib/mongodb  --logpath /var/lib/mongodb/mongodb.log`

To manually insert new document of place `db.locations.save({name: 'Baker\'s', address: '21 Down Street', rating: 4, facilities: ['Hot drinks', 'Food'], coords: [-0.8992033, 51.4379902], openingTimes: [{days: 'Monday - Friday', opening: '9:00am', closing: '11:00pm', closed: false},{ days: 'Saturday', opening: '8:00am', closing: '7:00pm', closed: false}, {days: 'Sunday', closed: true}]})`

To add new review `db.locations.update({name: 'Timespace'}, {$push: { reviews: { author: 'Jack Rassel', _id: ObjectId(), rating: 5, timestamp: new Date("Jul 15, 2018"), reviewText: "What a great place. I can't say enough good things about it."}}})`

To remove a review `db.locations.update({name: "Timespace"}, {$pull: {reviews: {_id: ObjectId("5b2c92ed6ec02f4f7d1a9212")}}})`
To remove all author's reviews `db.locations.update({name: "Timespace"}, {$pull: {reviews: {author: "Jack Rassel"}}}, {multi: true})`

#### Heroku config

Firstly `heroku login`

Then `heroku config:set MONGOLAB_URI=mongodb://<user>:<password>@ds161520.mlab.com:61520/loc8r-db```

To get that URI use ```heroku config:get MONGOLAB_URI`

##### DB dump

To create ddb dump create folder `mkdir -p ~/tmp/mongodump` then start db and `mongodump -h localhost:27017 -d loc8r-db -o ~/tmp/mongodump`

To restore that dump into db use `mongorestore -h ds161520.mlab.com:61520 -d loc8r-db -u <user> -p <password> mongodump/loc8r-db`

To connect to remote db use `mongo ds161520.mlab.com:61520/loc8r-db -u <username> -p <password>`

#### DB for dev and prod

Set different dbs for dev and prod using NODE_ENV `heroku config:set NODE_ENV=production` and check of it's ok `heroku config:get NODE_ENV`

## Todos

- [ ] In models/location change time format from String to Number of seconds from midnight
- [ ] In locations.js get maxDistance from address (book page 236)
