# Javascript Einsteigerprogramme

Für die 1. Schularbeit 6ED!

## Ganz einfach:
* [Hallo Welt!](HalloWelt.html): Das traditionell erste Programm in einer Programmiersprache: Nach dem Starten meldet das Programm "Hallo Welt"
* [Anmeldung mit Nickname](anmeldung2.html): Eine Webseite fragt dich zuerst nach deinem Namen und begrüßt dich dann.
* [Aufschrift auf Button ändern](button.html)
* [Farbe mit Button ändern](FarbeButton.html): Mit `document.body.style.backgroundColor="lightgreen";` lässt sich die Hintergrundfarbe der Seite einstellen. Schreibe ein Programm, das auf einer Seite (mit "Hallo bunte Welt") 3 Buttons zum Einstellen von verschiedenen Farben anbietet.
* [Zufallszahl](Zufallszahl): Zufällige Katalognummer zwischen 1 und 16 anzeigen; Start mit Button

## Schon schwieriger:
* [Countdown mit Alerts](Countdown.html)
* [Simple Passwortabfrage](passw0.html): Bevor die eigentliche Webseite startet soll eine Passwortabfrage erfolgen (das Passwort ist momentan immer "1234")
* [Quicktipp](Quicktipp.html)
* [Wertetabelle](WerteTaabH.html): Lass den Browser mit Javascript eine Wertetabelle der Funktion f(x)=x * x von 0 bis 10 in Form einer Tabelle erstellen
* [Kleine Tabelle mit Namen](NameTabelle.html)
* [Schleife mit Liste](SchleifeListe.html)
* [Schleife mit Tabelle](SchleifeTabelle.html)
* [Schleife mit Absätzen](LoopAbsatz.html)

## Ganz schön schwierig:
* [Zahlen raten Spiel](Zahlenspiel0.html)
* [pq-Formel](pqFormelFarbe.html): Programmiere eine Seite, die die pq-Formel für quadratische Gleichungen ausrechnet. Eingabe sind die zwei Zahlen p und q (in Textfeldern), Ausgabe: die Lösungen. Leider gibt es Gleichungen ohne Lösung, wir müssen deshalb zuerst die Diskriminante ausrechnen und daraus die Wurzel (`Math.sqrt` "Square Root") nur dann ziehen, wenn sie größer oder gleich 0 ist. Sonst versucht der Computer die Wurzel aus einer negativen Zahl zu rechnen und das Programm stürzt ab.
* [abc-Formel](abcFormel.html): Wie mit pq-Formel, nur sind diesmal drei Eingabefelder für a, b und c. Die Formel muss man entsprechend anpassen und -- Achtung! -- Klammern setzen: wenn man nicht `.../(2*a)` schreibt, dividiert der Computer durch 2 und multipliziert alles mit a... (alternativ geht auch `.../2/a`)
* [Doppelschleife](DoppelListe.html)
* [Null/Eins-Liste](NullEins.html): Erstelle mit Hilfe von Javascript eine Seite, die eine Tabelle mit 50 Zufallszahlen erzeugt. Bei jeder Zufallszahl, die mit Math.random() erzeugt wurde, trägt man ein 0 ein, wenn die Zufallszahl kleiner als 0,5 ist, und eine 1, wenn sie größer ist. wir erhalten also eine Tabelle mit 50 Nullen oder Einsen.
* [Ziegenproblem](Ziegenproblem.html): Auf dem Bildschirm sind 3 Buttons; beim Laden der Seite sucht der Computer eine Zufallszahl zwischen 1 und 3, d.h. einer der drei Buttons ist ein Glückstreffer. Der User klickt einen Button an und -- gewinnt oder verliert, eine Ziege oder ein Auto
* [Fizzbuzz - noch vereinfacht](fizzbuzz.html)

## Masterstufe
* [Zahlenspiel - erweitert](Zahlenspiel2.html)
* [Fizzbuzz - vollständig](fizzbuzz3.html): Ein Klassiker: erzeuge ein Folge von natürlichen Zahlen 1..n (z.B. n=50) und ersetze jede durch 3 teilbare Zahl durch das Wort "fizz", jede durch 5 teilbare Zahl durch das Wort "buzz". Ist die Zahl durch 3 und durch 5 teilbar (also durch 15), ersetze die Zahl durch "fizzbuzz". In allen anderen Fällen soll die Zahl selbst dastehen. Kann man als Liste oder Tabelle machen, mit Schleife und if-Verzweigung. Teilbarkeit durch 3 schreibt man am besten als =`x%3==0)`, wobei % der Rest bei der Division ist. Alternativ kann man auch `(x/3==parseInt(x/3)` schreiben (also durch 3 dividieren und Kommastellen wegschneiden ist dasselbe Ergebnis wie durch 3 dividieren).
