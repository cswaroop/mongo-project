###mongo-project

Explore MongoDB!

## About
MongoDB is a NoSQL database that gives flexibility of data model through `Document`.  Other databases providing such flexibility include redis (through Key-Value, Sorted Map), Cassandra (through its flexible number of columns), CouchDB (through its document just like MongoDB, Neo4J (through its graph), Datomic (through its Entity-Key-Value-Transaction-Time tuple)

MongoDB is a CP (CAP Theorem) system with `inplace` updates as opposed to `append` only updates.

MongoDB is a high-Write (Operational) data store and has a reasonably good aggregate framework (Analytics) for operational analytics.

* MongoDB has automaic sharding
* MongoDB has first-class replication
* MongoDB has weak security (compared to what you find in enter-pricy database features such as LDAP integration, row-level security though RBAC etc.).  Ofcourse they say just build a firewall and let it be access through an app with build-your-own RBAC.
* Mongo supports secondary indexes.  Afterall `_id` is not sufficient access path.
* Mongo is written in c/c++, if you believe databases shouldn' be written on JVM suffering GC breaks.
## Questions
* Does MongoDB do distributed MapReduce with in the cluster?

## Mongo Commands
* `mongod --dbpath C:\data` to start server
* `mongo --nodb` to start a client without connecting default db on localhost

## Mongo Internals
* Mongo stores JSON as [BSON](http://www.bsonspec.org)
* Mongo preallocates to ensure consistency. For development time you can run server wih `--noprealloc`
* Mongo uses Memory-Mapped Storage engine.  Its the OS which does flushing to disk.  It makes makes MongoDB memory hungry too
