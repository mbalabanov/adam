# Archive of Digital Art & Media

![ADAM - Archive of Digital Art & Media](documentation/assets/adam-logo.png)

## Beschreibung
In ADAM, dem Archive of Digital Art & Media auf [demoarchive.art](http://demoarchive.art/), können Benutzer nach digitalen Kunstwerken suchen. Auf den Detailseiten finden sie eine Beschreibung des jeweiligen Kunstwerks, sowie Fotos/Screenshots und eingebettete Videos, und falls vorhanden ZIP-Dateien oder Diskimages mit den Originaldateien des Kunstwerks. Zudem finden sich Informationen über die Künstler, und bei welchen Events ihre Werke ausgestellt wurden.

Dieses Projekt dient nur zu Übungszwecken und wurde vom "Archive of Digital Art" (ADA) der Donau Universität Krems inspiriert. Im Gegensatz zu ADA der Donau Uni verwendet ADAM zeitgemäße Technologien wie NodeJS, Angular und Heroku.

ADAM besteht aus vier Teilen: Einem _API-Server_ auf [adam-interface.herokuapp.com](https://adam-interface.herokuapp.com) mit einer Datenbank und Schnittstellen, um die Daten abzurufen, sowie einer Website mit einem _öffentlichen Bereich_ auf [demoarchive.art](http://demoarchive.art/), in dem Besucher die Informationen über die digitalen Kunstwerke finden, und einem _Redaktionsbereich,_ in dem Redakteure neue Inhalte einpflegen und bearbeiten können, und Administratoren die Rechte verwalten können. Zu guter Letzt gibt es eine _Mobile-App,_ mit der man Einträge erstellen kann, Fotos und Videos hochladen kann.

## Aktualisierungen
- *7. August 2020:* Öffentliches Web-Frontend bezieht nun sämtliche Daten von der API (allerdings treten noch Fehler in der Console auf und einige Routes funktionieren noch nicht richtig).
- *6. August 2020:* Erweitertes Angular-Frontend, konsolodiertes Datenmodell und angepasste API.
- *31. Juli 2020:* Erste Fassung des Web-Frontends auf [demoarchive.art](http://demoarchive.art/) fertiggestellt (allerdings noch ohne API-Anbindung).
- *30. Juli 2020:* Erste Fassung der API auf [adam-interface.herokuapp.com](https://adam-interface.herokuapp.com) fertiggestellt.
- *24. Juli 2020:* Erster unvollständiger Versuch, mit der API und dem Webfrontend (noch ohne Angular) zu Versuchszwecken.
- *15. Juli 2020:* Mobile App Wireframes hinzugefügt, API aktualisiert, GET-API-Aufrufe bereit, Domain demoarchive.art registriert.
- *13. Juli 2020:* Datenmodelldiagramm, Sitemap und Wireframes aktualisiert
- *12. Juli 2020:* Testdaten als JSON-Datei
- *8. Juli 2020:* Erstfassung der Dokumentation 

## Die Struktur von ADAM

### 1. _API-Server_ auf Heroku unter Verwendung von MongoDB mit Schnittstellen für...

- Ansehen/holen bestehender Einträge (GET)
    - /artifacts
    - /artifacts/:id
    - /persons
    - /persons/:id
    - /events
    - /events/:id
    - /news
    - /news/:id
    - /featured

- Erstellen neuer Einträge (POST)

- Bearbeiten bestehender Einträge (PUT)

- Einträge auf unveröffentlicht/gelöscht setzen (DELETE)

Für mehr Details zur API siehe Dokumentation weiter unten.

### 2. _Öffentlicher Bereich im Web-Frontend_ und fünf Arten von Ansichten:

![ADAM - Data Model](documentation/assets/sitemap-public.png)

1. *Startseite* mit Karussell für Einträge, die von Admins als "besonders interessant" markierte wurden, sowie ein Grid mit acht der chronologisch zuletzt publizierten Einträge, allgemeine Informationen über die Plattform, Suchfunktion und eine Kategorienauswahl, die beide auf die Suchergebnisseite mit Filtermöglichkeiten führt.
    
2. *Suchergebnisseite* auf der die Suchergebnisse gefiltert werden können.
  
3. *Detailseite,* die für die Detailansicht eines Artefakts, eines Künstlers und eines Events verwendet wird. Das Layout besteht aus einer Beschreibung, eines Fotobereichs, eines Bereichs für ein eingebettetes Video und darunter einer Liste an verwandten Einträgen:
    a. Bei einer _Künstler-Detailseite_ eine Liste der Arbeiten des Künstlers.
    b. Bei einer _Artefakt-Detailseite_ eine Liste der Künstler, die das Kunstwerk erschaffen haben
    e. Bei einer _Detailseite über ein Event_ eine Liste der ausgestellten Werke.

4. *Informationsseite,* in der allgemeine Informationen zu einem Thema stehen mit Text und Bildern, z.B. Artikel über Neuigkeiten, aber auch Nutzungsbedingungen und Datenschutzerklärung

5. Seite für den *Login bzw. die Registrierung* über den auth0.com Service

6. Diverse statische Seiten über die allgemeine Bedienung des Kunstarchivs (z.B. "About", "Contact", sowie die Complaince-Seiten).

### Wireframes Besucheransicht

![ADAM - Wireframes](documentation/assets/adam-wireframes-v0_5.png)

### 3. *Nicht-öffentlicher Bereich* im selben Web-Frontend mit...

1. _Admin-Bereich,_ um Benutzer zu verwalten (deaktivieren und reaktivieren), und um Einträge zu publizieren, auf "interessant" zu stellen (für das Karussel auf der Startseite), sowie um sie auf nicht-veröffentlicht zu setzen.
2. _Redaktionsansicht_ in der Benutzer mit Editor-Rechten bestehende Einträge bearbeiten können (Edit-Funktion wird nur nach dem Einloggen sichtbar) sowie neue Einträge erstellen können (Funktion für einen neuen Eintrag ist auch erst nach dem Einloggen sichtbar).

### Wireframes Redaktionsansicht

![ADAM - Data Model](documentation/assets/create-object.png)

### 4. *Mobile App* (Optional)

1. Ansicht aller in der Mobile App vorbereiteter Einträge
    
2. Neuen Eintrag auf dem mobilen Gerät erstellen für Artefakt, Künstler, Künstlerkollektiv, Sammlung, Ausstellung.
    
3. Fotos und Videos auswählen
    
4. Einloggen
    
5. Eintrag mit Fotos und Video URLs hochladen

### Mobile App Wireframes
![Mobile App](documentation/assets/mobile-app-wireframes.png)

## Daten in der DB

Als Datenbank wird MongoDB verwendet, das ein Dokument-basiertes Datenmodell hat.

- *Artifacts, Persons, Events:* id (integer), name (string), aliases (array of strings), shortdescription (string), longdescription (string), dates (array of dates), tags (array), images (array with id, url, name and description for each object), videos (array with id, url, name and description for each object), websiteURLs (array with id, name and url for each object), assets (array mit id, name and url for each object), artifactIDs (array), personIDs (array), eventIDs (array), published (boolean), createdOn (date), lastChangeOn (date)
- *News:* id (integer), title (string), urlAddress (string), image (string), largeimage (string), shortdescription (string), articletext (string), published (boolean)
- *Featured:* id (integer), image (string), title (string), description (string), link (string)

### Datenmodell

![ADAM - Data Model](documentation/assets/datamodel.png)

### JSON-Beispiel (Artifact)

```
{
    "id": "0",
    "name": "Lorem Ipsum ",
    "aliases": [],
    "shortdescription": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    "longdescription": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
    "dates": ["1987-03-01"],
    "tags": ["Pharetra Tortor","Commodo"],
    "images": [
        {
            "id": "0",
            "url": "assets/img/artifacts/artifacts1.jpg",
            "name": "Venenatis Cursus Nullam",
            "description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            "id": "1",
            "url": "assets/img/collections/collections1.jpg",
            "name": "Sed diam nonumy eirmod tempor",
            "description": "Labore et dolore magna aliquyam erat, sed diam voluptua."
        }
    ],
    "videos": [
        {
            "id": "0",
            "url": "https://youtu.be/Ecx5cmnW-bo",
            "name": "Consetetur sadipscing",
            "description": "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        }
    ],
    "websiteURLs": [
        {
            "id": "0",
            "name": "Medien Art Net",
            "url": "http://www.medienkunstnetz.de/mediaartnet/"
        }
    ],
    "assets": [
        {
            "id": "0",
            "name": "Native executable",
            "url": "http://pacidemo.planet-d.net/archives/POV003.ZIP"
        }
    ],
    "artifactIDs": [],
    "personIDs": [
        "0",
        "1",
        "2"
    ],
    "eventIDs": [
        "0"
    ],
    "published": "true",
    "createdOn": "2020-07-10",
    "lastChangeOn": "2020-07-12"
}
```

## Benutzerrollen

1. *Admin:* Kann Einträge erstellen, bearbeiten und auf nicht-öffentlich stellen, sowie andere Benutzer deaktivieren, reaktivieren und ihre Rolle ändern
2. *Editor:* Kann Einträge erstellen und bearbeiten

## Technologien

*Webfrontend:*
- Angular (Funktionalität)
- Bootstrap (Design)
- jQuery (Allgemein)
- Datatables JS (Benutzertabellen und Artikellisten)
- Lunr JS (Suche)

*Registrierung und Usermanagement:*
- auth0.com (Login, Registrierung, Benutzerprofil)

*API Server:*
- Node JS
- Express
- MongoDB
- Heroku (Hosting)

*Mobile App:*
- Node JS
- Cordova
- Onsen UI

## API-Dokumentation

Die API ist verfügbar unter https://adam-interface.herokuapp.com

#### GET (Root):
- _/_ Anleitung

#### GET (mit all als Parameter):
- _/all_ Alle Daten

#### GET (OHNE einer ID):
- _/artifacts_ Alle artifacts (Kunstwerke).
- _/persons_ Alle persons (Künstler, Kuratoren).
- _/events_ Alle Events (Ausstellungen, Vernisagen, Performances).
- _/news_ Die News-Artikel und ihre Inhalte.
- _/featured_ Die vier auf der Startseite ausgewiesenen Einträge.

#### GET (MIT einer ID):
- _/artifacts/id_ Ein einzelnes Artifact (Kunstwerk).
- _/persons/id_ Eine einzelne Person (Künstler, Kuratoren).
- _/events/id_ Ein einzelner Event (Ausstellung, Vernisage, Performance).
- _/news_ Ein einzelner News-Artikel und seine Inhalte.
- _/featured/id_ Einen der drei auf der Startseite ausgewiesenen Beiträge.

#### DELETE (MIT einer ID):
- _/artifacts/id_ Ein einzelnes Artifact (Kunstwerk) auf unveröffentlicht setzen.
- _/persons/id_ Eine einzelne Person (Künstler, Kuratoren) auf unveröffentlicht setzen.
- _/events/id_ Einen einzelnen Event (Ausstellung, Vernisage, Performance) auf unveröffentlicht setzen.
- _/news/id_ Einen einzelnen News-Artikel auf unveröffentlicht setzen.

_Bitte beachten Sie, dass auf der Startseite ausgewiesenen Beiträge (featured items) nicht auf unveröffentlicht gesetzt werden können._

#### PUT (MIT einer ID):
- _/artifacts/id_ Ein einzelnes Artifact (Kunstwerk) bearbeiten.
- _/persons/id_ Eine einzelne Person (Künstler, Kuratoren) bearbeiten.
- _/events/id_ Einen einzelnen Event (Ausstellung, Vernisage, Performance) bearbeiten.
- _/news/id_ Einen einzelnen News-Artikel bearbeiten.
- _/featured/id_ Einen einzelnen Featured-Item bearbeiten.

#### POST (MIT der Parameter new):
- _/artifacts/new_ Ein einzelnes Artifact (Kunstwerk) erstellen.
- _/persons/new_ Eine einzelne Person (Künstler, Kuratoren) erstellen.
- _/events/new_ Einen einzelnen Event (Ausstellung, Vernisage, Performance) erstellen.
- _/news/new_ Einen einzelnen News-Artikel erstellen.

_Bitte beachten Sie, dass kein neuer auf der Startseite ausgewiesenen Beitrag (featured item) erstellt werden sollte. Auf der Startseite sollten möglichst nur vier Beiträge ausgewiesen sein._

## Project Timeline

- *Bis 16. Juli 2020:* Konzept, Wireframes, Datenmodell, detaillierter Ablaufplan und Projektplan. API-Server mit Musterdatensätzen auf Heroku. API-Aufrufe funktionieren und liefern Daten zurück.

- *Bis 24. Juli 2020:* Funktionierendes und implementiertes Design des Webfrontends in Angular.

- *Bis 31. Juli 2020:* Öffentlicher Teil des Web-Frontends fertiggestellt. Frontend zeigt die vier unterschiedlichen Ansichten, kann über die API Musterdaten abrufen und anzeigen.

- *Bis 28. August 2020:* Redaktionsbereich und Admin-Bereich (nicht-öffentlicher Bereich des Webfrontends) mit Login, Registrierung, neue Einträge erstellen, Einträge bearbeiten, Einträge deaktivieren und reaktivieren, Benutzer deaktivieren und reaktivieren.

- *Bis 4. September 2020:* Redaktionsbereich und Admin-Bereich.

- *Bis 11. September 2020:* Mobile App mit (vorläufig) Einträge erstellen, Fotos aufnehmen und mit einem Eintrag assoziieren.

- *Bis 18. September 2020:* Mobile App mit Login und Upload.

- *Bis 25. September 2020:* Mobile App mit Login und Upload.
