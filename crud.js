///// Create, Read, Update, Upsert, Delete, ListAll

// Single insert; 

// _id is added automatically and is indexed and cannot be updatable
// Max doc size is 16MB
// UTF-8
db.foo.insert({"name" : "John"});
db.foo.find();

// Batch Insert; with a custom _id; 

// limited to max 48MB per batch 
// results in partial updates till point of error; This is not a transaction
db.foo.batchInsert([{'_id' : 0}, {'_id' : 1}, {'_id' : 3}])
db.foo.find();

db.foo.batchInsert([{'_id' : 0}, {'_id' : 1}, {'_id' : 0}]);
db.foo.find();

// You can write a nice little function to group commands; its regular Javascript shell

var timeForMillionInserts = function() {
  var start = (new Date()).getTime();
  // Insert a million records
  for (var i = 0; i < 1000000; i++) {
    db.foo.insert({'foo' : 'bar', 'baz' : i, 'z' : 10 - i})
  }
  var finish = (new Date()).getTime();
  return (finish-start)
}
timeForMillionInserts();

// Delete or Drop

db.foo.remove();
db.findOne(); // make sure remove finishes before continuing

// Drop All !!!
db.foo.drop()

// Update

// How about a full replacement type of update?

joe = db.people.findOne({"name" : "joe", "age" : 20});
db.people.update({'_id' : ObjectId('1')}, joe);

// atomic increment as update
db.analytics.update({"url" : "www.example.com"},
                    {"$inc" : {"pageviews" : 1}})


// Upsert

// if no upsert facility
blog = db.analytics.findOne({url : '/blog'})
if (blog) {
  blog.pageviews++;
  db.analytics.save(blog);
} else {
  db.analytics.save({url : '/blog', pageviews : 1})
}

// with upsert
db.analytics.update({'url' : '/blog'}, {'$inc' : {'pageviews' : 1}}, true)


// Select

db.users.findOne

