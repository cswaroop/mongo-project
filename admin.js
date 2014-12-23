// These are mongo administration commands

var collections = ['posts', 'comments', 'authors'];

for (var i in collections) {
  print(db.blog[collections[i]]);
}
