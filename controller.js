const bp = require( 'body-parser' );
const fs = require( 'fs' );

let allData = {};
let featured = [];
let news = [];
let instructiontext = ``;

function instructions(request, response) {
    response.send(instructiontext);
}

function loadData() {

    fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {
        allData = JSON.parse(contents);
        artifacts = allData.artifacts;
        persons = allData.persons;
        events = allData.events;
    });

    fs.readFile('data/featured.json', 'utf8', function(err, contents) {
        var tempData = JSON.parse(contents);
        featured = tempData;

    });

    fs.readFile('data/newsdata.json', 'utf8', function(err, contents) {
        var tempData = JSON.parse(contents);
        news = tempData;
    });

    fs.readFile('data/compliance.json', 'utf8', function(err, contents) {
        var tempData = JSON.parse(contents);
        compliance = tempData;
    });

    fs.readFile('data/instructions.html', 'utf8', function(err, contents) {
        instructiontext = contents;
    });

};

function getAll(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(allData);
};

function getItems(request, response) {
    var tempURL = request.url.split('/');
    var requestURL = eval(tempURL[1]);
    response.setHeader('Content-Type', 'application/json');
    response.send(eval(requestURL));
};

function getItem(request, response) {
    var requestURL = request.url.split('/');
    var dataType = eval(requestURL[1]);
    var itemId = request.params.id;
    var singleItem = dataType.content.find(dataType => dataType.id === itemId);
    if(singleItem) {
        response.setHeader('Content-Type', 'application/json');
        response.send(singleItem);        
    } else {
        response.send(itemId + ' is not a valid ID for ' + requestURL + '.');
    }
};

function getNewsItem(request, response) {
    var itemId = request.params.id;
    var newsItems = Object.values(news.content);
    var singleItem = newsItems.find(newsItems => newsItems.id === itemId);
    if(singleItem) {
        response.setHeader('Content-Type', 'application/json');
        response.send(singleItem);        
    } else {
        response.send(itemId + ' is not a valid ID for news.');
    }
};

function deleteItem(request, response) {
    var requestURL = request.url.split('/');
    var dataType = eval(requestURL[1]);
    var deleteId = request.params.id;
    var checkId = parseInt(deleteId);
    var maxId = dataType.content.length;
    if (checkId >= maxId) {
        response.send(deleteId + ' not a valid ID.');
    } else {
        dataType.content[deleteId].published = "false";
        response.send(deleteId + ' marked as deleted.');
    };
};

function editItem(request, response) {
    var requestURL = request.url.split('/');
    var dataType = eval(requestURL[1]);
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = dataType.content.length;
    var today = new Date();

    if(editId == 'new') {
        editId = maxId;

        var newItem = {
            id: editId,
            name: request.body.name,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            date: request.body.firstAppearance,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            assets: request.body.assets,
            artifactIDs: request.body.artifactIDs,
            personIDs: request.body.personIDs,
            eventsIDs: request.body.eventIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };

        dataType.content.push(newItem);
        // Die Daten sollte hier gespeichert werden.
        response.send('Item ' + dataType.name + ' ' + editId + ' successfully created.');
    } else if (checkId < maxId) {
        var changedItem = {
            id: editId,
            name: request.body.name,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            date: request.body.firstAppearance,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            assets: request.body.assets,
            artifactIDs: request.body.artifactIDs,
            personIDs: request.body.personIDs,
            eventsIDs: request.body.eventIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };
        dataType.content[editId] = changedItem;
        // Die Daten sollte hier gespeichert werden.
        response.send('Item ' + dataType.name + ' ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid ' + dataType.name + '-ID.');
    }
};

function editFeatured(request, response) {
    var editId = request.params.id;
    var checkId = parseInt(editId);

    if (checkId < exhibitions.length){
        var changedFeatured = {
            id: editId,
            image: request.body.image,
            title: request.body.title,
            description: request.body.description,
            link: request.body.link,
        };
        featured[editId] = changedFeatured;
        // Die Daten sollte hier gespeichert werden.
        response.send('Featured ' + editId + ' item successfully changed.');
    } else {
        response.send('Not a valid ID for a featured item.');
    }
};

function editNews(request, response) {
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = news.length;

    if(editId == 'new') {
        editId = maxId;
        var newNewsitem = {
            id: editId,
            title: request.body.title,
            urlAddress: request.body.urlAddress,
            image: request.body.image,
            largeimage: request.body.largeimage,
            shortdescription: request.body.description,
            articletext: request.body.articletext,
        };
        news.push(newNewsitem);
        // Die Daten sollte hier gespeichert werden.
        response.send('News item ' + editId + ' successfully created.');
    } else if (checkId < news.length){
        var changedNewsitem = {
            id: editId,
            title: request.body.title,
            urlAddress: request.bsody.urlAddress,
            image: request.body.image,
            largeimage: request.body.largeimage,
            shortdescription: request.body.description,
            articletext: request.body.articletext,
        };
        news[editId] = changedNewsitem;
        // Die Daten sollte hier gespeichert werden.
        response.send('News item ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid ID for a news item.');
    }
};

module.exports = {
    loadData,
    instructions,
    getAll,
    getItems,
    getItem,
    deleteItem,
    editItem,
    editFeatured,
    editNews,
    getNewsItem
};
