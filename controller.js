const bp = require( 'body-parser' );
const fs = require( 'fs' );

let allData = {};
let artifacts = [];
let persons = [];
let teams = [];
let collections = [];
let exhibitions = [];
let featured = [];
let instructiontext = ``;

function instructions(request, response) {
    response.send(instructiontext);
}

function loadData() {

    fs.readFile('data/archivedata.json', 'utf8', function(err, contents) {

        allData = JSON.parse(contents);

        artifacts = allData.artifacts;
        persons = allData.persons;
        teams = allData.teams;
        collections = allData.collections;
        exhibitions = allData.exhibitions;
        featured = allData.featured;
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
    var checkId = parseInt(itemId);
    var maxId = eval(dataType).length;

    if (checkId >= maxId) {
        response.send(itemId + ' not a valid ID.');
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.send(dataType[itemId]);
    };
};

function deleteItem(request, response) {
    var requestURL = request.url.split('/');
    var dataType = eval(requestURL[1]);
    var deleteId = request.params.id;
    var checkId = parseInt(deleteId);
    var maxId = eval(dataType).length;

    if (checkId >= maxId) {
        response.send(deleteId + ' not a valid ID.');
    } else {
        dataType[deleteId].published = "false";
        response.send(deleteId + ' marked as deleted.');
    };
};

function editArtifact(request, response) {
    var today = new Date();
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = artifacts.length;

    if(editId == 'new'){
        editId = maxId;

        var newArtifact = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            firstAppearance: request.body.firstAppearance,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            assets: request.body.assets,
            artistIDs: request.body.artistIDs,
            teamIDs: request.body.teamIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: true,
            createdOn: today,
            lastChangeOn: today
        };
        artifacts.push(newArtifact);
        response.send('Artifact ' + editId + ' successfully created.');
    } else if (checkId < maxId) {
        var changedArtifact = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            firstAppearance: request.body.firstAppearance,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            assets: request.body.assets,
            artistIDs: request.body.artistIDs,
            teamIDs: request.body.teamIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };

        artifacts[editId] = changedArtifact;
        response.send('Artifact ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid Artifact-ID.');
    }
};

function editPerson(request, response) {
    var today = new Date();
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = persons.length;

    if(editId == 'new'){
        editId = maxId;

        var newPerson = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            activeSince: request.body.activeSince,
            activeUntil: request.body.activeUntil,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: true,
            createdOn: today,
            lastChangeOn: today
        };

        persons.push(newPerson);
        response.send('Person ' + editId + ' successfully created.');
    } else if (checkId < maxId){
        var changedPerson = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            activeSince: request.body.activeSince,
            activeUntil: request.body.activeUntil,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };

        persons[editId] = changedPerson;
        response.send('Person ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid Person-ID.');
    }
};

function editTeam(request, response) {
    var today = new Date();
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = teams.length;

    if(editId == 'new'){
        editId = maxId;

        var newTeam = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            activeSince: request.body.activeSince,
            activeUntil: request.body.activeUntil,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            artistIDs: request.body.artistIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: today,
            lastChangeOn: today
        };

        teams.push(newTeam);
        response.send('Team ' + editId + ' successfully created.');
    } else if (checkId < maxId){
        var changedTeam = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            activeSince: request.body.activeSince,
            activeUntil: request.body.activeUntil,
            systems: request.body.systems,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            artistIDs: request.body.artistIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };
        teams[editId] = changedTeam;
        response.send('Team ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid Team-ID.');
    }
};

function editCollection(request, response) {
    var today = new Date();
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = collections.length;

    if(editId == 'new'){
        editId = maxId;

        var newCollection = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            url: request.body.url,
            curatorIDs: request.body.curatorIDs,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            startDate: request.body.startDate,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };

        collections.push(newCollection);
        response.send('Collection ' + editId + ' successfully created.');
    } else if (checkId < maxId){
        var changedCollection = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            url: request.body.url,
            curatorIDs: request.body.curatorIDs,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            startDate: request.body.startDate,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            exhibitionIDs: request.body.exhibitionIDs,
            published: request.body.published,
            createdOn: today,
            lastChangeOn: today
        };
        collections[editId] = changedCollection;
        response.send('Collection ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid Collection-ID.');
    }
};

function editExhibition(request, response) {
    var today = new Date();
    var editId = request.params.id;
    var checkId = parseInt(editId);
    var maxId = exhibitions.length;

    if(editId == 'new'){
        editId = maxId;

        var newExhibition = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            url: request.body.url,
            curatorIDs: request.body.curatorIDs,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            startDate: request.body.startDate,
            endDate: request.body.endDate,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            published: request.body.published,
            createdOn: request.body.createdOn,
            lastChangeOn: today
        };

        exhibitions.push(newExhibition);
        response.send('Exhibition ' + editId + ' successfully created.');
    } else if (checkId < maxId){
        var changedExhibition = {
            _id: editId,
            category: request.body.category,
            name: request.body.name,
            alias: request.body.alias,
            url: request.body.url,
            curatorIDs: request.body.curatorIDs,
            shortDescription: request.body.shortDescription,
            longDescription: request.body.longDescription,
            startDate: request.body.startDate,
            endDate: request.body.endDate,
            tags: request.body.tags,
            images: request.body.images,
            videos: request.body.videos,
            websiteURLs: request.body.websiteURLs,
            teamIDs: request.body.teamIDs,
            artifactIDs: request.body.artifactIDs,
            collectionIDs: request.body.collectionIDs,
            published: request.body.published,
            createdOn: today,
            lastChangeOn: today
        };
        exhibitions[editId] = changedExhibition;
        response.send('Exhibition ' + editId + ' successfully changed.');
    } else {
        response.send('Not a valid Exhibition-ID.');
    }
};

function editFeatured(request, response) {
    var editId = request.params.id;
    var checkId = parseInt(editId);

    if (checkId < exhibitions.length){
        var changedFeatured = {
            _id: editId,
            category: request.body.category,
        };
        featured[editId] = changedExhibition;
        response.send('Featured ' + editId + ' item successfully changed.');
    } else {
        response.send('Not a valid ID for a featured item.');
    }
};

module.exports = {
    loadData,
    instructions,
    getItems,
    getItem,
    deleteItem,
    editArtifact,
    editPerson,
    editTeam,
    editCollection,
    editExhibition,
    editFeatured
};
