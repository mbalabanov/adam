# Archive of Digital Art & Media

![ADAM - Archive of Digital Art & Media](documentation/assets/adam-logo.png)

## Beschreibung
In ADAM, dem Archive of Digital Art & Media, können Benutzer nach digitalen Kunstwerken suchen. Auf den Detailseiten finden sie eine Beschreibung des jeweiligen Kunstwerks, sowie Fotos/Screenshots und eingebettete Videos, und falls vorhanden ZIP-Dateien oder Diskimages mit den Originaldateien des Kunstwerks. Zudem finden sich Informationen über die Künstler, die Sammlung der das Kunstwerk angehört, und in welchen Ausstellungen es ausgestellt wurde.

ADAM besteht aus vier Teilen: Einem _API-Server_ mit einer Datenbank und Schnittstellen, um die Daten abzurufen, sowie einer Website mit einem _öffentlichen Bereich,_ in dem Besucher die Informationen über die digitalen Kunstwerke finden, und einem _Redaktionsbereich,_ in dem Redakteure neue Inhalte einpflegen und bearbeiten können, und Administratoren die Rechte verwalten können. Zu guter Letzt gibt es eine _Mobile-App,_ mit der man Einträge erstellen kann, Fotos und Videos hochladen kann.

## Project Timeline

- *Bis 16. Juli 2020:* Konzept, Wireframes, Datenmodell, detaillierter Ablaufplan und Projektplan. API-Server mit Musterdatensätzen auf Heroku. API-Aufrufe funktionieren und liefern Daten zurück.

- *Bis 24. Juli 2020:* Funktionierendes und implementiertes Design des Webfrontends in Angular.

- *Bis 31. Juli 2020:* Öffentlicher Teil des Webfrontends fertiggestellt. Frontend zeigt die vier unterschiedlichen Ansichten, kann über die API Musterdaten abrufen und anzeigen.

- *Bis 28. August 2020:* Redaktionsbereich und Admin-Bereich (nicht-öffentlicher Bereich des Webfrontends) mit Login, Registrierung, neue Einträge erstellen, Einträge bearbeiten, Einträge deaktivieren und reaktivieren, Benutzer deaktivieren und reaktivieren.

- *Bis 4. September 2020:* Redaktionsbereich und Admin-Bereich.

- *Bis 11. September 2020:* Mobile App mit (vorläufig) Einträge erstellen, Fotos aufnehmen und mit einem Eintrag assoziieren.

- *Bis 18. September 2020:* Mobile App mit Login und Upload.

- *Bis 25. September 2020:* Mobile App mit Login und Upload.

## Die Struktur von ADAM

### 1. _API-Server_ auf Heroku unter Verwendung von MongoDB mit Schnittstellen für...

1. *Ansehen/holen* bestehender Einträge (GET)
2. *Erstellen* neuer Einträge (POST)
3. *Bearbeiten* bestehender Einträge (PUT)
4. Es gibt kein Delete, sondern nur ein PUT, um einen *Eintrag als gelöscht* zu markieren

### 2. _Öffentlicher Bereich im Web-Frontend_ und fünf Arten von Ansichten:

1. *Startseite* mit Karussell für Einträge, die von Admins als "besonders interessant" markierte wurden, sowie ein Grid mit acht der chronologisch zuletzt publizierten Einträge, allgemeine Informationen über die Plattform, Suchfunktion und eine Kategorienauswahl, die beide auf die Suchergebnisseite mit Filtermöglichkeiten führt.
    
2. *Suchergebnisseite* auf der die Suchergebnisse gefiltert werden können.
  
3. *Detailseite,* die für die Detailansicht eines Artefakts, eines Künstlers, einer Sammlung, und einer Ausstellung verwendet wird. Das Layout besteht aus einer Beschreibung, eines Fotobereichs, eines Bereichs für ein eingebettetes Video und darunter einer Liste an verwandten Einträgen:
    a. Bei einer _Künstler-Detailseite_ eine Liste der Arbeiten des Künstlers.
    b. Bei einer _Artefakt-Detailseite_ eine Liste der Künstler, die das Kunstwerk erschaffen haben
    c. Bei einer _Künstler-Kollektiv-Seite_ eine Liste der Künstler und der Artefakte.
    d. Bei einer _Detailseite über eine Sammlung_ eine Liste der Einträge der Artefakte, die Teil der Sammlung sind.
    e. Bei einer _Detailseite über eine Ausstellung_ eine Liste der ausgestellten Werke.

4. *Informationsseite,* in der allgemeine Informationen zu einem Thema stehen mit Text und Bildern, z.B. Artikel über Neuigkeiten, aber auch Nutzungsbedingungen und Datenschutzerklärung

5. Seite für den *Login bzw. die Registrierung* über den auth0.com Service

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

## Daten in der DB

Als Datenbank wird MongoDB verwendet, das ein Dokument-basiertes Datenmodell hat.

- *Artifacts:* ID of This Object (Text), Category (Text), Name (Text), Short Description (Text), Long Description (Text), First Appearance (Date), Systems (Array), Tags (Array), Images (Array) [ URL (Text), Name (Text), Description (Text) ], Videos (Array) [ URL (Text), Name (Text) Description (Text) ], Website URLs  (Array) [ Name (Text), URL (Text) ], Assets (Array) [ Name (Text), URL (Text) ], Artist IDs (Array), Team IDs (Array), Collection IDs (Array), Exhibition IDs (Array), Published (Boolean), Published On (Date)
- *Persons:* ID of This Object (Text),Category (Text), Name (Text), Alias (Text), Short Description (Text), Long Description (Text), Active Since (Date), Active Until (Date), Systems (Text), Tags (Array), Images (Array) [ URL (Text), Name (Text), Description (Text) ], Videos  (Array) [URL (Text), Name (Text), Description (Text) ], Artifact IDs (Array), Team IDs (Array), Collection IDs (Array), Exhibition IDs (Array), Published (Boolean), Published On (Date)
- *Teams:* ID of This Object (Text), Category (Text), Name (Text), Alias (Text), Short Description (Text), Long Description (Text), Active Since (Date), Active Until (Date), Systems (Array), Tags (Array), Artifact IDs (Array), Artist IDs (Array), Team IDs (Array), Collection IDs (Array), Exhibition IDs (Array), Published (Boolean), Published On (Date)
- *Collections:* ID of This Object (Text), Category (Text), Name (Text), Alias (Text), Website URL (Text), CuratorIDs (Array), Short Description (Text), Long Description (Text), Start Date (Date), Tags (Array), Images (Array) [ URL (Text), Name (Text), Description (Text) ], Videos (Array) [ URL (Text), Name (Text), Description (Text) ], Artifact IDs (Array), Team IDs (Array), Published (Boolean), Published On (Date)
- *Exhibition:* ID of This Object (Text), Category (Text), Name (Text), Alias (Text), Website URL (Text), CuratorIDs (Array), Short Description (Text), Long Description (Text), Start Date (Date), End Date (Date), Tags (Array), Images (Array) [ URL (Text), Name (Text), Description (Text) ], Videos (Array) [ URL (Text), Name (Text), Description (Text) ], Artifact IDs (Array), Team IDs (Array), Published (Boolean), Published On (Date)
- *Featured:* Featured Objects (Array) [ Featured Object ID (Text), Large Image URL (Text) ]

### Datenmodell

![ADAM - Data Model](documentation/assets/datamodel.png)

### JSON-Beispiel (Artifact)

```
{
    "_id": "a1",
    "category": "demoscene",
    "name": "Little Sound Demo (LSD)",
    "shortDescription": "The second demo by the Exceptions with chiptunes converted from the C64.",
    "longDescription": "The second demo by the Exceptions with chiptunes converted from games on the Commodore 64 that use the fabled SID chip (Sound Interface Device).",
    "firstAppearance": "1987-06-01",
    "systems": [ "Atari ST" ],
    "tags": ["The Exceptions", "SID"],
    "images": [
        {"url": "http://content.pouet.net/files/screenshots/00014/00014033.gif","name": "Screenshot of the Little Sound Demo (LSD)", "description": "The main screen of the Little Sound Demo (LSD) by the Exceptions with a music selection and a scrolling text."} ],
    "videos": [
        {"url": "https://youtu.be/O6Z_eK3EQsE","name": "Video recording of the Little Sound Demo (LSD)", "description": "The main screen of the Little Sound Demo (LSD) by the Exceptions with a music selection and a scrolling text."}],
    "assets": [ {"name": "Native executable", "url": "http://pacidemo.planet-d.net/archives/POV003.ZIP"} ],
    "artistIDs": ["p0", "p1", "p3"],
    "teamIDs": ["t0"],
    "collectionIDs": ["c0"],
    "exhibitionIDs": ["e0"],
    "published": "true",
    "publishedOn": "2020-07-12"
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
- Datatables JS (User Management)
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

## Aktualisierungen
- *13. Juli 2020:* Aktualisiertes Datenmodelldiagramm
- *12. Juli 2020:* Testdaten als JSON-Datei
- *6. Juli 2020:* Erstfassung der Dokumentation 