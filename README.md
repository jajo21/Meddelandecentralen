# Meddelandecentralen - Oktober 2022

**Twitter-liknande chatt-applikation byggd med .NET 6 och React. Realtidskommunikationen är skapad med SignalR.**

## Instruktioner

**Förbered och starta applikationen**

1. Ladda ner repot från https://github.com/jajo21/Meddelandecentralen.
2. Leta upp valfri terminal och utgå från nerladdad Meddelandecentralen mapp, navigera sedan in i mappen client via terminalen och skriv där: `npm ci` nu laddas alla nödvändiga paket ner som behövs för att kunna köra klienten.
3. När alla paket har laddats klart skriver du i terminalen: `npm start` det här startar både backend-api:et och klientgränssnittet.
4. Normalt ska programmet öppnas i din webbläsare, om det inte gör det, öppna valfri webbläsare och navigera in på http://localhost:5000/.

**Logga in**

1. Logga in genom att skriva valfritt användarnamn.
2. När du är inloggad kan du använda applikationen.

## Kravspecifikation och uppgiftsbeskrivning

Det här är en fortsättning på Chelsea-international-hostel uppgiften, nu ska vi bygga en meddelandecentral för hotellet. Vi har fått en beskrivning av VD:n med olika krav som ska uppfyllas, sedan är det mitt jobb att bygga en lösning.

[Projekt Meddelandecentralen Uppgiftsbeskrivning.pdf](https://github.com/jajo21/Meddelandecentralen/files/10234823/Projekt.Meddelandecentralen.Uppgiftsbeskrivning.pdf)

|Krav|Uppfyllt|Förklaring|
|---|---|---|
|**1** |**Ja**| *Applikationen består av ett server-side API skrivet i C# och ASP.NET Core*|
|**2** |**Ja**| *När två klienter ansluter samtidigt till API:et så har de tillgång till kollaborativa realtidsfunktioner mellan sig*|
|**3** |**Ja**| *Det finns ett grafiskt gränssnitt tillgängligt för applikationen*|
|**4** |**Ja**| *Applikationen möjliggör beställarens önskade funktionalitet enligt vald idé*|
|**5** |**Ja**| *För realtidskommunikation mellan klienterna används websockets*|

## Projektplan

Från uppdragsebeskrivningen: "Applikationen ska vara baserad på en av de fyra idéerna som finns i uppgiftsbeskrivningen." - Jag har bestämt mig för att skapa nummer 3 "Något i stil med twitter, fast bara för de anställda på hotellet - också här är det viktigt att kunna sortera information per rum".

Min tanke är därför att skapa en plattform likt twitter där användare ska kunna skapa inlägg som resten av personalen på hotellet kan ta del av i realtid. Personal ska även kunna kommentera inlägg samt filtrera dessa inlägg efter rum.

Applikationen ska använda ramverket SignalR för realtidskommunikationen mellan klientgränssnittet och server-side API:et. Det grafiska klientgränssnittet kommer att byggas i React och server-side API:et kommer att byggas i ASP.NET Core och C#.

## Lägesrapport

### Klassdiagram över klientgränssnittet

_Skapades och lämnades in under lägesrapporten (tagg lagesrapport)._  
_Vill också förtydliga att de olika färgerna på strecken från contexterna i diagrammet inte har någon betydelse i sig, dessa är endast färgade för att göra det lättare att visuellt tyda diagrammet._  
_(Tryck på bilden för att göra den större)_
<img src="./documentation/Klassdiagram.png" width="100%">

### Kanban via trello

**Bild på det initiala kanban-brädet**  
_Jag har valt att skapa två "att göra" kolumner enbart för att kunna visa alla kort visuellt på en bild._  
_(Tryck på bilden för att göra den större)_
<img src="./documentation/Meddelandecentralen-kanban-planering.png" width="100%">

**Uppdaterad bild över projektets kanban-bräde vid lägesrapporten (tagg lagesrapport)**  
_Kolumnen "Färdiga" har fler kort än vad som är visuellt synligt på bilden, klicka vidare in på länken för att se alla kort._  
_(Tryck på bilden för att göra den större)_
<img src="./documentation/Meddelandecentralen-kanban-uppdaterad.png" width="100%">

**Nuvarande status på kanban-brädet vid inlämning (tagg inlamning)**  
_(Tryck på bilden för att göra den större)_
<img src="./documentation/Meddelandecentralen-kanban-nuvarande.png" width="100%">

### [Länk till kanban-tavlan](https://trello.com/b/SAuwn9pa/meddelandecentralen)

## Syfte - YH-utbildning: Webbutvecklare .NET

- Inlämningsuppgift i kursen Webbapplikationer med realtidskommunikation - Oktober 2022
- Meddelandecentralen: Skapa en Twitter-liknande chatt-applikation byggd med .NET 6 och React. Realtidskommunikationen skapad med hjälp av SignalR.
- Resultat: 100/100 (G)

## Tekniker

- C#
- ASP.NET Core
- SignalR
- WebSockets
- REST-API
- React.js
- Fetch-API
- Parcel
- HTML
- CSS
