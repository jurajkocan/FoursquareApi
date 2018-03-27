## ZADANIE ##
Vedel by nám v prehľadnej tabuľke zobraziť zoznam možností, kam by sme po práci mohli skočiť na pivo? 

### Podmienky a pomôcky pre Foursquare API ###
Aby sme si nemuseli možnosti vymýšľať, využi Foursquare API, ktoré obsahuje takmer aktuálne dáta. Použitú technológiu na spojenie s Foursquare API si môžeš zvoliť sám, 
musíš nám však pridať postup ako si projekt následne rozbeháme. Foursquare API ponúka REST API a prehľadnú dokumentáciu na prístup k endpointom.
V tomto prípade si môžeš otestovať enpoint: https://api.foursquare.com/v2/venues/search?&categoryId=4d4b7105d754a06376d81259&radius=300&client_id=2TC0GHMY3FTKAY5Y3WSXWTYUT3EY0CL11DOTPSD5BELKYDVU&client_secret=ISIT3PFVCZORCQA0J3YGFOJOQ1C3GUZPUDFUKL3LKGRR4O5N&v=20170117&ll=48.168088,17.138037

Nastav endpointy tak, aby obsahovali min. 7 barov/krčiem/zariadení

**Pomôcky**

* &categoryId = ID kategórie zariadení, ktoré hľadáme. Prehľadný strom nájdeš na: https://developer.foursquare.com/categorytree . Vyber niečo z kategórií  Bar, Beerarea, Winery
* &radius = Numerická hodnota vzdialenosti, zadaj medzi cca 300-1000
* &client_id a &client_secret = Na spustenie nového projektu sa musíš na foursquare zaregistrovať a pridať svoju appku na autorizáciu. Môžeš však využiť naše údaje
* &v = verzia vo formáte YYYYMMDD
* &&ll = lat a lng parametre oddenelé čiarkou. Môžeš ich upraviť na nejaké lepšie miesta
* Kompletná dokumentácia = https://developer.foursquare.com/docs/

### Podmienky pre HTML tabuľku ###

* Vytvor HTML tabuľku s nasledujúcimi pravidlami:
* Tabuľka obsahuje hlavičku - <thead> element
* Tabuľka obsahuje telo - <tbody> element
* Tabuľka obsahuje min 7 riadkov rozdelených do 4 stĺpcov
* Názvy sĺpcov sú Názov | Kategória | Adresa | Vzdialenosť
* Telo tabuľky zobrazuje vždy iba 4 riadky. Ostatné riadky sú viditeľné pri scrollovaní.
* Hlavička s názvami riadkov je zafixovaná na vrchu tabuľky, t.j. neukryje sa scrollovaním. 
* Rozmery tabuľky sú ľubovoľné, ale tabuľka musí byť vycentrovaná na stred stránky.

### Inštalácia ###

1. Naklonuj si repozitár
```git clone https://boataround@bitbucket.org/boataround/zadanie.git```

2. Otvor testovaciu branch
```git fetch && git checkout <nazov tvojej branche>```

### Odovzdanie zadania ###

1. Pridaj všetky súbory do gitu
```git add .```

2. Vlož komentár
```git commit -m "<napis svoje meno, priezvisko a e-mail>" ```

3. Odošli
```git push```

## Náhradné zadanie ##

V prípade, že by si mal problémy s technickým riešením projektu. Skús navrhnúť ako by si riešil návrh a architektúru appky/webky, ktorú by Boataround mohol využiť pre svojich 
zákazníkov v okolí Stredozemného mora. Appka/Webka by mala zobrazovať reštauračné zariadenia, hotely a pod. podľa geo údajov v blízkosti užívateľa, alebo v prístavoch jeho trás. 
