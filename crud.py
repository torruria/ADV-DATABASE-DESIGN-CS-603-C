from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import pprint

uri = "mongodb+srv://arunraotorruri4:MHN1cxeFLsnBUtvg@cluster0.x8htu4w.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.bank

    # Get reference to 'accounts' collection
    accounts_collection = db.accounts

    # inserting one account
    new_account = {
        "account_holder": "Linus Torvalds",
        "account_id": "MDB829001337",
        "account_type": "checking",
        "balance": 50352434,
        "last_updated": datetime.datetime.utcnow(),
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    # Insert Operation
    result = accounts_collection.insert_one(new_account)

    document_id = result.inserted_id
    pprint.pprint(f"_id of inserted document: {document_id}")

    # Read
   
    # Find all documents
    all_accounts = accounts_collection.find()

    # Print all documents
    print("All Accounts:")
    for account in all_accounts:
       pprint.pprint(account)
 # Update Operation
    # Update one document
    update_criteria = {"account_id": "MDB829001337"}
    update_values = {"$set": {"balance": 60000000}}
    update_result = accounts_collection.update_one(update_criteria, update_values)

    print("Documents matched:", update_result.matched_count)
    print("Documents modified:", update_result.modified_count)

    # Delete Operation
   # Delete Operation
# Delete one document
    delete_criteria = {"account_id": "MDB829001337"}
    deleted_document = accounts_collection.find_one(delete_criteria)  # Get the document before deletion
    delete_result = accounts_collection.delete_one(delete_criteria)

    print("Documents deleted:", delete_result.deleted_count)

    if delete_result.deleted_count == 1:
       print("Deleted Document ID:", deleted_document["_id"])
    else:
       print("Document not found or not deleted")


except Exception as e:
    print(e)
finally:
    client.close()
