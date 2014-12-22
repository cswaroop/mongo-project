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
## Questions
* Does MongoDB do distributed MapReduce with in the cluster?
