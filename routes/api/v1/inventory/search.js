const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_APP_ID);


const index = client.initIndex('search');

function search(req, res) {
    index.addObjects(request.app.locals.db.users, function(err, content){
        if (err){
            console.error(err);
        }
    });
    index.setSettings({
        // Select the attributes you want to search in
        searchableAttributes: [
          'items', 'location'
        ]}, function(err, content){
            console.log(content);
      });
};



module.exports = search;