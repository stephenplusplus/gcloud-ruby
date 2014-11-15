var search_data = {"index":{"searchIndex":["gcloud","datastore","dataset","entity","key","list","query","transaction","[]()","[]=()","allocate_ids()","ancestor()","commit()","complete?()","cursor()","dataset()","dataset_id()","delete()","delete()","devserver()","filter()","find()","find_all()","group_by()","incomplete?()","kind()","limit()","lookup()","new()","new()","new()","new()","offset()","order()","path()","projection()","properties()","reset!()","rollback()","run()","run_query()","save()","save()","select()","start()","start()","transaction()","where()","changelog","contributing","readme"],"longSearchIndex":["gcloud","gcloud::datastore","gcloud::datastore::dataset","gcloud::datastore::entity","gcloud::datastore::key","gcloud::datastore::list","gcloud::datastore::query","gcloud::datastore::transaction","gcloud::datastore::entity#[]()","gcloud::datastore::entity#[]=()","gcloud::datastore::dataset#allocate_ids()","gcloud::datastore::query#ancestor()","gcloud::datastore::transaction#commit()","gcloud::datastore::key#complete?()","gcloud::datastore::query#cursor()","gcloud::datastore::dataset()","gcloud::datastore::dataset#dataset_id()","gcloud::datastore::dataset#delete()","gcloud::datastore::transaction#delete()","gcloud::datastore::devserver()","gcloud::datastore::query#filter()","gcloud::datastore::dataset#find()","gcloud::datastore::dataset#find_all()","gcloud::datastore::query#group_by()","gcloud::datastore::key#incomplete?()","gcloud::datastore::query#kind()","gcloud::datastore::query#limit()","gcloud::datastore::dataset#lookup()","gcloud::datastore::entity::new()","gcloud::datastore::key::new()","gcloud::datastore::list::new()","gcloud::datastore::query::new()","gcloud::datastore::query#offset()","gcloud::datastore::query#order()","gcloud::datastore::key#path()","gcloud::datastore::query#projection()","gcloud::datastore::entity#properties()","gcloud::datastore::transaction#reset!()","gcloud::datastore::transaction#rollback()","gcloud::datastore::dataset#run()","gcloud::datastore::dataset#run_query()","gcloud::datastore::dataset#save()","gcloud::datastore::transaction#save()","gcloud::datastore::query#select()","gcloud::datastore::query#start()","gcloud::datastore::transaction#start()","gcloud::datastore::dataset#transaction()","gcloud::datastore::query#where()","","",""],"info":[["Gcloud","","Gcloud.html","","<p>Copyright 2014 Google Inc. All rights reserved.\n<p>Licensed under the Apache License, Version 2.0 (the “License”); …\n"],["Gcloud::Datastore","","Gcloud/Datastore.html","","<p>Google Cloud Datastore\n\n<pre>dataset = Gcloud::Datastore.dataset &quot;my-todo-project&quot;,\n                        ...</pre>\n"],["Gcloud::Datastore::Dataset","","Gcloud/Datastore/Dataset.html","","<p>Datastore Entity\n<p>See Gcloud::Datastore.dataset\n"],["Gcloud::Datastore::Entity","","Gcloud/Datastore/Entity.html","","<p>Datastore Entity\n<p>Represents the Datastore record. Every Datastore record has an identifying\nkey, and a …\n"],["Gcloud::Datastore::Key","","Gcloud/Datastore/Key.html","","<p>Datastore Key\n<p>Every Datastore record has an identifying key, which includes the\nrecord&#39;s entity kind …\n"],["Gcloud::Datastore::List","","Gcloud/Datastore/List.html","","<p>List is a special case Array with cursor.\n\n<pre>entities = Gcloud::Datastore::List.new [entity1, entity2, entity3] ...</pre>\n"],["Gcloud::Datastore::Query","","Gcloud/Datastore/Query.html","","<p>Datastore Query\n<p>Represents a query to be made against the datastore.\n\n<pre>query = Gcloud::Datastore::Query.new ...</pre>\n"],["Gcloud::Datastore::Transaction","","Gcloud/Datastore/Transaction.html","","<p>Special Connection instance for running transactions.\n<p>See Gcloud::Datastore::Dataset.transaction\n"],["[]","Gcloud::Datastore::Entity","Gcloud/Datastore/Entity.html#method-i-5B-5D","(prop_name)",""],["[]=","Gcloud::Datastore::Entity","Gcloud/Datastore/Entity.html#method-i-5B-5D-3D","(prop_name, prop_value)",""],["allocate_ids","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-allocate_ids","(incomplete_key, count = 1)","<p>Generate IDs for a Key before creating an entity.\n\n<pre>conn = Gcloud::Datastore.connection\nempty_key = Gcloud::Datastore::Key.new ...</pre>\n"],["ancestor","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-ancestor","(parent)","<p>Add a filter for entities that inherit from a key.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;). ...</pre>\n"],["commit","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-commit","()",""],["complete?","Gcloud::Datastore::Key","Gcloud/Datastore/Key.html#method-i-complete-3F","()","<p>Determines if the key is complete. A complete key has either an id or a\nname.\n"],["cursor","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-cursor","(cursor)",""],["dataset","Gcloud::Datastore","Gcloud/Datastore.html#method-c-dataset","(project = ENV[\"DATASTORE_PROJECT\"], keyfile = ENV[\"DATASTORE_KEYFILE\"])","<p>Create a new Dataset\n\n<pre>entity = Gcloud::Datastore::Entity.new\nentity.key = Gcloud::Datastore::Key.new &quot;Task&quot; ...</pre>\n"],["dataset_id","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-dataset_id","()",""],["delete","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-delete","(*entities)",""],["delete","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-delete","(*entities)",""],["devserver","Gcloud::Datastore","Gcloud/Datastore.html#method-c-devserver","(project = ENV[\"DEVSERVER_PROJECT\"], host = ENV[\"DEVSERVER_HOST\"])","<p>Special dataset for connecting to a Local Development Server.\n\n<pre>dataset = Gcloud::Datastore.dataset &quot;my-todo-project&quot;, ...</pre>\n"],["filter","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-filter","(name, operator, value)",""],["find","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-find","(key_or_kind, id_or_name = nil)",""],["find_all","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-find_all","(*keys)",""],["group_by","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-group_by","(*names)","<p>Group results by a list of properties.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;).\n  group_by(&quot;completed&quot;) ...</pre>\n"],["incomplete?","Gcloud::Datastore::Key","Gcloud/Datastore/Key.html#method-i-incomplete-3F","()","<p>Determines if the key is incomplete. An incomplete key has neither an id\nnor a name.\n"],["kind","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-kind","(*kinds)","<p>Add the kind of entities to query.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind &quot;Task&quot;\n\nall_tasks = ...</pre>\n"],["limit","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-limit","(num)","<p>Set a limit on the number of results to be returned.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;). ...</pre>\n"],["lookup","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-lookup","(*keys)",""],["new","Gcloud::Datastore::Entity","Gcloud/Datastore/Entity.html#method-c-new","()",""],["new","Gcloud::Datastore::Key","Gcloud/Datastore/Key.html#method-c-new","(kind = nil, id_or_name = nil)",""],["new","Gcloud::Datastore::List","Gcloud/Datastore/List.html#method-c-new","(arr = [], cursor = nil)",""],["new","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-c-new","()","<p>Returns a new query object.\n\n<pre>query = Gcloud::Datastore::Query.new</pre>\n"],["offset","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-offset","(num)","<p>Set an offset for the results to be returned.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;). ...</pre>\n"],["order","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-order","(name, direction = :asc)","<p>Sort the results by a property name. By default, an ascending sort order\nwill be used. To sort in descending …\n"],["path","Gcloud::Datastore::Key","Gcloud/Datastore/Key.html#method-i-path","()","<p>A representation of the Key&#39;s path as an array of arrays. Each inner\narray contains two values, the …\n"],["projection","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-projection","(*names)",""],["properties","Gcloud::Datastore::Entity","Gcloud/Datastore/Entity.html#method-i-properties","()",""],["reset!","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-reset-21","()","<p>Reset the transaction. Transaction#start must be called afterwards.\n"],["rollback","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-rollback","()",""],["run","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-run","(query)",""],["run_query","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-run_query","(query)",""],["save","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-save","(*entities)",""],["save","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-save","(*entities)",""],["select","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-select","(*names)","<p>Retrieve only select properties from the matched entities.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;). ...</pre>\n"],["start","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-start","(cursor)","<p>Set the cursor to start the results at.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;).\n  limit(10). ...</pre>\n"],["start","Gcloud::Datastore::Transaction","Gcloud/Datastore/Transaction.html#method-i-start","()",""],["transaction","Gcloud::Datastore::Dataset","Gcloud/Datastore/Dataset.html#method-i-transaction","()","<p>Runs the given block in a database transaction. If no block is given the\ntransaction object is returned. …\n"],["where","Gcloud::Datastore::Query","Gcloud/Datastore/Query.html#method-i-where","(name, operator, value)","<p>Add a property filter to the query.\n\n<pre>query = Gcloud::Datastore::Query.new\nquery.kind(&quot;Task&quot;).\n  where(&quot;completed&quot;, ...</pre>\n"],["CHANGELOG","","CHANGELOG_md.html","","<p>ACTIVE DEVELOPMENT\n"],["CONTRIBUTING","","CONTRIBUTING_md.html","","<p>Contributing to Gcloud\n<p><strong>Sign one of the contributor license agreements below.</strong>\n<p>Fork the repo, develop and …\n"],["README","","README_md.html","","<p>gcloud\n<p>Ruby API Client library for Google Cloud\n<p>This client supports the following Google Cloud Platform …\n"]]}}