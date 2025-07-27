# Uppgift: Dynamiska webbplatser

Detta repository innehåller en webbplats som byggts med hjälp av Node.js och Parcel. Uppgiften fokuserar på att skapa två olika typer av diagram som visualiserar antagningsstatistik samt en karta med en sökfunktion, med hjälp av externa APIer.

## Funktioner

- **Automatisering:** Automatisk byggprocess och publicering via GitHub och Netlify.
- **SASS som CSS-preprocessor:** Webbplatsens design är byggd helt i SASS med användning av variabler, nesting, mixins, `@extend`, color functions samt `@if/else`-satser.
- **Partial-struktur:** SCSS-koden är uppdelad i flera partials för t.ex. layout, komponenter, variabler och reset, som sedan importeras i `main.scss`.
- **Dark/light mode:** Webbplatsen växlar färgschema automatiskt baserat på användarens systeminställningar med hjälp av `prefers-color-scheme`.
- **Användarinteraktion** Webbplatsen innehåller animeringar som aktiveras genom användarens interaktioner med hjälp av `transition`, `transform`och `@keyframes`.
- **Dynamiskt innehåll:** Stapel- och cirkeldiagram skapas med Chart.js och data hämtas via Fetch API från en extern JSON-fil.
- **Interaktiv karta:** Användaren kan söka efter platser via ett formulär, som visas på en karta med markör via OpenStreetMap och Nominatim API.
- **JSDoc-dokumentation:** JavaScript-koden är dokumenterad med JSDoc och dokumentationen är genererad och publicerad.

## Utvecklare 

- **Namn:** Evelina Olsson 
- **StudentID:** evol2401
