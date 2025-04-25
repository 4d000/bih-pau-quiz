const questions = [
    {
        question: "Za donošenje uputstva o sprovođenju kancelarijskog poslovanja u organima uprave RS ovlašten je:",
        options: ["Ministar pravde", "Premijer Vlade", "Ministar uprave i lokalne samouprave"],
        correctAnswerIndex: 2
    },
    {
        question: "Probni rad namještenika F BiH traje:",
        options: ["6 mjeseci", "3 mjeseca", "12 mjeseci"],
        correctAnswerIndex: 1
    },
    {
        question: "Generalni sekretar Vlade RS odgovara:",
        options: ["Vladi RS", "Predsjedniku Vlade RS", "Predsjedniku Vlade i Vladi RS"],
        correctAnswerIndex: 2
    },
    {
        question: "Predsjedanje Vijeća EU rotira se svakih:",
        options: ["6 mjeseci", "12 mjeseci", "4 mjeseca"],
        correctAnswerIndex: 0
    },
    {
        question: "Po zahtjevu za odgodu izvršenja upravnog akta do donošenja sudske odluke odlučuje:",
        options: [
            "Organ nadležan za provođenje izvršenja upravnog akta",
            "Nadležni sud kome je tužba podnesena",
            "Organ nadležan za provođenje izvršenja ili nadležni sud"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Probni rad državnog službenika F BiH traje:",
        options: ["6 mjeseci", "3 mjeseca", "12 mjeseci"],
        correctAnswerIndex: 0
    },
    {
        question: "Poslodavac koji zapošljava više od 30 radnika,a koji u periodu od naredna tri mjeseca ima namjeru da zbog ekonomskih,tehničkih razloga otkaže ugovor o radu najmanje petorici radnika dužan je u skladu sa Zakonom o radu F BiH da se:",
        options: [
            "Konsultira sa Vladom F BiH",
            "Udruženjem poslodavca",
            "Vijećem zaposlenika i sindikata"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Organ koji je riješio stvar u drugom stupnju,po pravilu svoje rješenje sa spisima predmeta šalje prvostupanjskom organu koji je dužan da rješenje dostavi stranci u roku:",
        options: ["3 dana", "5 dana", "8 dana"],
        correctAnswerIndex: 1
    },
    {
        question: "Poslove organa uprave u Federaciji BiH ne obavlja:",
        options: [
            "Federalno tužilaštvo",
            "Federalna ministarstva",
            "Upravne organizacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Republička uprava za inspekcijske poslove RS:",
        options: [
            "Samostalna republička uprava",
            "Samostalna republička upravna organizacija",
            "Uprava u sastavu Ministarstva pravde"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu u opštem upravnom postupku RS propisano je da,ako posljednji dan roka za obavljanje radnji u postupku pada u neradni dan:",
        options: [
            "Rok ističe istekom tog dana",
            "Rok se produžava za jedan dan",
            "Rok ističe istekom prvog narednog dana"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Posebni zakonodavni postupak,koji je definiran Ugovorom iz Lisabona podrazumijeva sljedeće bivše postupke:",
        options: [
            "Postupak proširenja",
            "Postupak tajnih pregovora",
            "Postupak pristanka i savjetovanja"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Svaki kanton može prenijeti svoja ovlašćenja na:",
        options: [
            "Na općinu i grad na svojoj teritoriji ili na federalnu vlast",
            "Na kancelariju za izdavanje pečata",
            "Na nepoznate entitestke entiteta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt je:",
        options: [
            "Brčko Distrikt je adiministrativna jedinica lokalne samouprave koja je pod suverenitetom BiH:",
            "Brčko Distrikt nije pod suverenitetom BiH,već je pod zajedničkom nadležnošću BiH i entiteta RS i FBiH",
            "Brčko Distrikt nije jedinstvena administrativna jedinica lokalne samouprave,već je entitet unutar BiH sa specifičnim upravnim statusom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li se produžiti probni rad državnog službenika?",
        options: [
            "Može,ako to odluči rukovodilac institucije na obrazložen zahtjev državnog službenika i to na period od još šest mjeseci",
            "Probni rad državnog službenika se ne može produžiti",
            "Produženje probnog rada državnog službenika se automatski na isti period kao i prvobitni probni rad"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Osnovni dijelovi akta su?",
        options: [
            "Zaglavlje,predmet,naziv i adresa primaoca,sadržaj akta,naziv funkcije osobe ovlaštene za potpisivanje akta,otisak pečata",
            "Zaglavlje,predmet,datum,sadržaj akta,naziv funkcije osobe ovlaštene za potpisivanje akta,otisak pečata",
            "Zaglavlje,predmet,naziv i adresa primaoca,sadržaj akta,datum,broj telefona,potpisivanje akta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Samo jedna zemlja iz regije nije imala zadovoljavajuću ocjenu iz studije izvodivosti u prvom pokušaju.To je?",
        options: ["Crna Gora", "Makedonija", "Albanija"],
        correctAnswerIndex: 2
    },
    {
        question: "Visinu dodatka na osnovnu platu za prekovremeni i noćni rad zaposlenika koji su budžetski korisnici određuje:",
        options: [
            "Lokalna uprava",
            "Vijeće ministara BiH",
            "Sindikat"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vanjski državni dug nastao u skladu sa međunarodnim sporazumom?",
        options: [
            "Ne podrazumijeva dugove BiH nastale u periodu od 02.04 do 14.12.1995 godine,a država nema nikakvu odgovornost za otplatu tog duga",
            "Vanjski državni dug nastao u skladu sa međunarodnim sporazumom ne podrazumijeva dugove koji su proizašli iz izvanrednih okolnosti ili vanrednih političkih događaja",
            "Vanjski državni dug nastao u skladu s međunarodnim sporazumom podrazumijeva isključivo dugove koji su nastali prije stupanja na snagu sporazuma"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Agencija za nadzor nad tržištem BiH je?",
        options: [
            "Neprofitna organizacija",
            "Privatna korporacija",
            "Samostalna upravna organizacija"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Za lakše povrede službene dužnosti može se izreći sljedeća disciplinska kazna?",
        options: [
            "Isključenje iz sindikata",
            "Suspendiranje s posla",
            "Pismena opomena i pismeni ukor"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Kvorum Doma naroda PS BiH čini?",
        options: [
            "Devet članova,pod uslovom da su prisutna tri bošnjačka,tri srpska i tri hrvatska delegata",
            "Petnaest članova,bez obzira na nacionalnu pripadnost delegata",
            "Devet članova,bez obzira na nacionalnu pripadnost delegata"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Državni fond?",
        options: [
            "Nezavisna organizacija koja upravlja financijama države",
            "Fond koji se koristi za potrebe obrazovanja i zdravstva",
            "Dio institucionalne strukture DIS-a i kanal za protok finansijskih sredstava iz EU"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Koji od sljedećih uslova nije opšti uslov za postavljenje državnog službenika?",
        options: [
            "Osoba koja nije državljanin BiH",
            "Da je regulisao vojnu obavezu u skladu sa zakonom",
            "Osoba koja nije starija od 16 godina"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Policija Brčko Distrikta ima?",
        options: [
            "Šefa i tri zamjenika",
            "Šefa i jednog zamjenika",
            "Šefa i dva zamjenika"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Rimski ugovor iz 1957 su se sastojali od?",
        options: [
            "Ugovora za osnivanje Evropske obrazovne zajednice i Ugovora za osnivanje Evropske zajednice za atomsku energiju",
            "Ugovora o osnivanju Europske ekonomske zajednice i Ugovora o osnivanju Europske zajednice za atomsku energiju",
            "Ugovora za osnivanje Europske trgovačke zajednice i Ugovora o osnivanju Evropske zajednice za atomsku energiju"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Unapređenje rukovodećeg državnog službenika na više radno mjesto vrši se?",
        options: [
            "Putem eksternog konkursa",
            "Isključivo putem javnog konkursa",
            "Putem internog konkursa"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Šta je to EURO?",
        options: [
            "To je jedinstvena valuta koju je 1.januara 1999 godine prihvatilo 11 zemalja članica EU (Austrija,,Belgija,Finska,Francuska,Irska,Italija,Luksemburg,Nizozemska,Njemačka,Portugal i Španjolska) s krajnim ciljem potpunog ukidanja nacionalne valute"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnog službenika sa liste uspješnih kandidata,i uz prethodno pribavljeno mišljenje ADS FBiH postavlja?",
        options: [
            "Rukovodilac organa državne službe",
            "Predsjednik Komisije",
            "Komisija za izbor kandidata"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodilac samostalne uprave i samostalne ustanove za svoj rad i upravljanje odgovara?",
        options: ["Parlamentu", "Predsjedniku", "Vladi FBiH"],
        correctAnswerIndex: 2
    },
    {
        question: "Prenos nadležnosti na državni nivo vršio se:",
        options: [
            "Donošenjem akta",
            "Donošenjem zakona",
            "Rješenjem"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kako su se zvale prve tri zajednice europskih država?",
        options: [
            "Savez europskih država,Europska zajednica i Europska federacija",
            "Europska zajednica za ugljen i čelik,Europska ekonomska zajednica i Euratom",
            "Europska federacija,Europska unija i Europska konfederacija"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Postupak kada se svi akti i prilozi koji se odnose na isti predmet stavljaju u omot predmeta na koji se odnose se zove?",
        options: ["Skupljanje", "Pripajanje", "Združivanje"],
        correctAnswerIndex: 2
    },
    {
        question: "PS BiH ima:",
        options: ["tri doma", "dva doma", "četiri doma"],
        correctAnswerIndex: 1
    },
    {
        question: "Politički kriterij za članstvo u EU,Kriterij iz Kopenhagena podrazumijeva:",
        options: [
            "Ekonomska stabilnost i rast,demokratija,vladavina prava",
            "Stabilnost,demokratija,tehnološki napredak i inovacije,ekonomski razvoj",
            "Stabilnost,institucija koje osiguravaju demokratiju,vladavinu prava,poštivanje ljudskih prava i zaštitu manjina."
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ugovor o radu u institucijama BiH može zaključiti?",
        options: [
            "Lice koje je navršilo 18 godina života",
            "Osoba koja nije državljanin BIH",
            "Osoba koja nije starija od 16 godina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Direktor federalne uprave u sastavu ministarstva odgovoran je?",
        options: [
            "Parlamentu Federacije",
            "Federalnom ministru i Vladi Federacije BiH",
            "Predsjedniku Federacije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Da li se disciplinski postupak suspendira u slučaju preventivne suspenzije državnog službenika?",
        options: [
            "Discplinski postupak se suspendira sve dok se ne donese odluka discplinske komisije",
            "Disciplinski postupak se suspendira sve dok se ne donese pravomoćna presuda nadležnog suda",
            "Disciplinski postupak se suspendira"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Poslovno uslovljen redovan otkaz zasniva se na?",
        options: [
            "Na prestanku potrebe za radom zbog nezadovoljavajućeg rada",
            "Na prestanku potrebe za radom zbog socioloških razloga",
            "Na prestanku potrebe za radom radnika zbog ekonomskih,tehničkih ili organizacijskih razloga"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Evidencija u omot za predmete i akte vodi se?",
        options: [
            "Samo na unutrašnjoj strani potpisa",
            "Samo na prednjoj strani omota",
            "Na prednjoj i unutrašnjoj strani omota"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Pečat se po pravilu stavlja?",
        options: [
            "S lijeve strane potpisa rukovodioca institucije",
            "S desne strane potpisa rukovodioca institucije",
            "Iznad potpisa rukovodioca institucije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Potvrda o prijemu se izdaje?",
        options: [
            "automatski,bez obzira na zahtjev stranke",
            "na zahtjev stranke koja neposredno predaje akt ili kada se radi o podnesku po kome se rješava u upravnom postupku",
            "samo ako je podnesak fizički predat u upravnoj zgradi"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Po Ustavu RS,RS je:",
        options: [
            "Prema ustavu RS,RS je federacija koja se sastoji od više autonomnih regija",
            "Jedinstvena,nedeljiva i neotuđiva",
            "Prema Ustavu RS,RS je neovisna država"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vladu Brčko Distrikt čine:",
        options: [
            "Gradonačelnik,zamjenik gradonačelnika,glavni koordinator Vlade i šefovi odjeljenja",
            "Gradonačelnik i šefovi odjeljenja",
            "Gradonačelnik,predsjedavajući skupštine,zamjenik gradonačelnika,glavni koordinator Vlade i šefovi odjejeljenja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Originalnu presudu,odnosno rješenje u upravnom sporu potpisuje?",
        options: [
            "Ministar nadležan za upravne poslove",
            "Samo zapisničar",
            "Predsjednik vijeća i zapisničar"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Imenovanje na mjesto savjetnika se može preinačiti u položaj državnog službenika sa sigurnošću uživanja položaja prema Zakonu o državnoj službi F BiH?",
        options: ["DA", "Ne može", "U određenim slučajevima"],
        correctAnswerIndex: 1
    },
    {
        question: "Ime jedinice Distrikta u BiH?-",
        options: [
            "Brčko Distrikta BiH",
            "Distrikt Brčko",
            "Brčko Distrikt"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po tekstu Ustava,u nadležnosti institucija BiH ne spada:",
        options: [
            "Politika i regulisanje pitanja imigracije,izbjeglica i azila",
            "Kontrola vazdušnog saobraćaja",
            "Odbrana"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ako predmetu koji je stavljen u arhivu treba radi združivanja priključiti akte primljene poslije njegovog arhiviranja,taj predmet izdaje i nakon združivanja vraća u arhivu?",
        options: [
            "Može uz revers ali nije obavezno",
            "Bez reversa",
            "Isključivo sa reversom"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U Aneksu Ustava FBiH,kao instrumenti za zaštitu ljudskih prava,utvrđeni su:",
        options: [
            "24 međunarodna dokumenta",
            "20 međunarodna dokumenta",
            "22 međunarodna dokumenta"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Listu kategorija registraturskog materijala s rokovima čuvanja donosi?",
        options: [
            "Komisija za nadzor",
            "Agencija za državnu službu",
            "Rukovodilac organa uprave ili službe za upravu"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Kada rješenje nije doneseno u propisanom roku stranka može?",
        options: [
            "Izjaviti žalbu nadležnom organu kao da je njen zahtjev prihvaćen",
            "Izjaviti žalbu nadležnom organu kao da je njen zahtjev odbijen",
            "Izjaviti žalbu nadležnom organu kao da je njen zahtjev odložen"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Lokalnu samoupravu RS čine?",
        options: [
            "Općine i udruženja",
            "Gradovi i općine",
            "Regije i gradovi"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kome državni službenik može izjaviti žalbu?",
        options: [
            "Protiv rješenja državni službenik ima pravo u roku od 15 dana prijema rješenja izjaviti žalbu Odboru državne službe za žalbe",
            "30 dana",
            "8 dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko članiva broji Centralna izborna Komisija?",
        options: ["9 članova", "8 članova", "7 članova"],
        correctAnswerIndex: 2
    },
    {
        question: "Predsjednik Federacije?",
        options: [
            "ima izvršnu funkciju ali nije šef federalne izvršne vlasti",
            "predstavlja i zastupa federaciju i šef je federalne izvršne vlasti",
            "nema izvršnu funkciju već samo simboličnu ulogu predstavljanja Federacije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Da li rukovodeći državni službenik može biti na odsustvu iz državne službe?",
        options: [
            "Ne može",
            "Može",
            "Ne može bez odobrenja rukovodioca institucije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organ uprave BiH donosi opće akte iz svoje nadležnsoti i to:",
        options: [
            "Pravilnike,uputstva,instrukcije i naredbe",
            "Zakone,instrukcije i pravilnik",
            "Uputstva i pravilnike"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada FBiH može odlučivati ako sjednici prisustvuje:",
        options: [
            "Više od polovice članova Vlade",
            "Oba zamjenika Premijera,Predjsendika i više od polovice članova Vlade",
            "Oba zamjenika i manje od polovice članova Vlade"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluku o pokretanju postupka da se općini dodjeli status grada donosi:",
        options: [
            "Vlada RS",
            "Načelnik opštine",
            "Skupština općine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Vlada F BiH donosi odluke:",
        options: [
            "Većinom glasova prisutnih sjednici",
            "Nadpolovićnom većinom,koja uključuje većinu članova svakog konstitutivnog naroda",
            "U pravilu nadpolovičnom većinom a za predlaganje amanadmana na ustav Federacije dvotrećinskom većinom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu u upavnom postupku BiH rokove koji nisu određeni zakonom ili drugim propisom određuje?",
        options: [
            "službena osoba koja vodi postupak s obzirom na okolnosti slučaja",
            "rukovodilac organa koji vodi postupak na prijedlog stranaka u postupku",
            "nadležno resorno ministarstvo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada stranka ili njen zakonski zastupnik u toku postupka promjene svoje prebivalište ili stan a o tome ne obavjeste organ te se ne može utvrditi gdje se nalaze,dostavljanje se smatra izvršenim:",
        options: [
            "protekom 8 dana od dana pribijanja pismena na oglasnoj ploči organa",
            "protekom 15 dana od dana pribijanja pismena na oglasnoj ploči organa",
            "protekom 30 dana"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U postupku administrativnog izvršenja:",
        options: [
            "može se izjaviti samo žalba kojom se pobija pravilnost rješenja koje se izvršava,",
            "može se izjaviti žalba koja se odnosi samo na izvršenje",
            "može se izjaviti žalba koja se odnosi i na izvršenje i na pravilnost rješenja koje se izvršava"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Rok za podnošenje tužbe je:",
        options: ["15 dana", "30 dana", "60 dana"],
        correctAnswerIndex: 1
    },
    {
        question: "Stvarna nadležnost za rješavanje u upravnom postupku određuje se:",
        options: [
            "isključivo propisima kojima se uređuje određena upravna oblast",
            "isključivo propisima kojima se određuje nadležnost pojedinog organa",
            "propisima kojima se uređuje određena upravna oblast ili propisima kojima se određuje nadležnost pojedinog organa"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema Zakonu o upravnim sporovima u Federaciji BiH pravobranilac može pokrenuti upravni spor:",
        options: [
            "U svim slučajevima kada je u pitanju državna imovina",
            "U slučajevima kada to od njega traži Vlada F BiH ili Vlada kantona",
            "Kada je konačnim upravnim aktom povrijeđen zakon na štetu Federacije,Kantona,Grada ili Općine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Sudstvo Distrikta je nezavisno,a čine ga:",
        options: [
            "Osnovni sud i sud Brčko Distrikta",
            "Osnovni sud i Apelacioni sud",
            "Općinski sud i sud za prekršaje Brčko Distrikta BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Predsjedništvo BiH imenuje predsjedavajućeg Vijeća ministara BiH,koji preuzima dužnosti:",
        options: [
            "Nakon odobrenja imenovanja od PS BiH",
            "Po odobrenju imenovanja od Predstavničkog doma PS BiH",
            "Danom obavljivanja u službenom glasniku BiH 70.Prema Ustavu BiH,entitet:"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema Ustavu BiH,entitet:",
        options: [
            "Može sklapati sporazume sa državama i međunarodnim organizacijama uz saglasnost PS BiH,koja može zakonom predvidjeti da za određene vrste sporazuma takva saglasnost nije potrebna",
            "Može sklapati sporazume sa državama i međunarodnim organizacijama u okviru svojih nadležnosti",
            "Ne može sklapati sporazume"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Lica sa dvojnim državljanstvom mogu glasati u Bih samo:",
        options: [
            "ako ne glasaju u drugoj državi čije državljanstvo imaju",
            "ako je BiH država njihovog prebivališta",
            "Ako to odobri PS BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Šta sadrži zahtjev za članstvo u EU?",
        options: [
            "To je forma zvaničnog pisma koje potpisuje najviši izvršni organ,predsjednik ili premijer,u kojem zemlja izražava spremnost da poštuje i promoviše vrijednosti na kojim se temelji EU",
            "To je sporazum potpisan između zemlje kandidata za članstvo i Evropske komisije o ispunjavanju kriterija koji su definisani kao Kopenhaski i Madridski kriteriji",
            "Paket pisanih akata o izvršenim obavezama i procedurama koje su neophodne za pristupanje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako je utemeljeno djelovanje Evropske unije?",
        options: [
            "Na ugovorima koje su odobrile sve članice EU",
            "Na zakonima koje su odobrile sve članice EU",
            "Na jedinstvenom stavu koji su odobrile sve članice EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prvo Europsko partnerstvo s BIH odnosno dokument kojim se određuje ključni prioriteti države u procesu pristupanja EU,Vijeće EU usvojilo je:",
        options: ["2004", "2003", "2005"],
        correctAnswerIndex: 0
    },
    {
        question: "Prvo istupanje iz EEZ dogodilo se 23.2.1982 istupanjem:",
        options: ["Farskih otoka", "Islanda", "Grenlanda"],
        correctAnswerIndex: 2
    },
    {
        question: "U primarno zakonodavstvo EU ne ubrajamo:",
        options: [
            "Ugovor iz Pariza",
            "Direktive EU",
            "Povelja Eu o temeljnim pravima"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kako se zove međuvladina mreža osnovana 1985 godine s ciljem jačanja europske konkurentnosti kroz podršku poduzetništvu,istraživačkim centrima i sveučilištima,u kojoj Bih od 2009 godine ima status nacionalne kontakt tačke?",
        options: ["Eureka", "Eurosystem", "Europe of Citiziens"],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovor o osnivanju Europske zajednice za ugalj i čelik potpisan je 18.4.1951 u:",
        options: ["Parizu", "Rimu", "Berlinu"],
        correctAnswerIndex: 0
    },
    {
        question: "Otpremanje pošte u organima uprave i službama za upravu u FBIH vrši se:",
        options: [
            "Putem knjige za optremu pošte putem kurira i putem knjige za otpremu pošte putem poštanske službe",
            "Isključivo putem knjige za otpremu pošte putem poštanske službe",
            "Isključivo putem knjige za otpremu pošte putem kurira"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Osnovna evidencija o aktima i predmetima u organima uprave u RS vodi se po sistemu:",
        options: [
            "Fascikla i jedinstvenih klasifikacijskih oznaka",
            "Kartoteke i jedinstvenih klasifikacijskih oznaka ili putem elektronske pošte",
            "Jedinstvenih klasifikacijskih oznaka i elektronske obrade"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Termin prilog u okviru kancelarijskog poslovanja F BiH ima sljedeće značenje:",
        options: [
            "Prilog je samo fizički predmet koji se prilaže uz akt radi dopunjavanja,objašnjavanja ili dokazivanja sadržaja akta",
            "Prilog je samo pisani sastav koji se prilaže uz akt radi dopunjavanja.....",
            "Prilog je pisani sastav ( dokument,tabela,grafikon,crtež) ili fizički predmet koji se prilaže uz akt radi dopunjavanja,objašnjenja ili dokazivanja sadržaja akta"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Tko potpisuje potvrdu o prijemu podneska stranke koja lično predaje podnesak i zahtjeva izdavanje potvrde?",
        options: [
            "Službenik koji je podnesak primio uz stavljanje otiska pečata organa,odnosno službe",
            "Šef pisarnice",
            "Rukovodilac organa uprave ili službe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Otisak prijemnog štambilja po pravilu se stavlja:",
        options: [
            "U gornjem desnom uglu prve stranice akta",
            "U lijevom gornjem uglu prve stranice akta",
            "Bilo na kom slobodnom dijelu prve stranice akta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jedinstvene klasifikacijske oznake predmeta i akta F BiH obilježene brojevima:",
        options: ["01 do 30", "01 do 49", "01 do 75"],
        correctAnswerIndex: 1
    },
    {
        question: "Otprema računa i drugih financijskih akata nadležnim organima i službama vrši se:",
        options: [
            "Preko interne dostavne knjige",
            "Putem knjige za otpremu pošte",
            "Putem knjige za otpremu računa"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Da li državnom službeniku u skladu sa Zakonom o državnoj službi F BiH prestaje radni odnos u organu državne službe zbog dvije uzastopno negativne ocjene rada:",
        options: [
            "Da",
            "Da,ako je ocjenjivanje provela ADS F BiH",
            "Ne"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se može pokrenuti upravni spor protiv prvostepenog upravnog akta?",
        options: [
            "Kada drugostepeni organ odbije da rješava po žalbi na upravni akt donesen u prvostepenom postupku",
            "Ako zakonom nije dozvoljena žalba na taj akt u upravnom postupku",
            "Kada je upravni akt donesen od nenadležnog organa"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ukoliko organ na traženje suda ne dostavi spis predmeta odgovorna osoba u osobu podliježe:",
        options: [
            "Prekšajnoj odgovornosti",
            "Disciplinskoj odgovornosti",
            "Kaznenoj odgovornosti"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema Zakonu o upravnom postupku BIH rokovi za preduzimanje određenih upravnih radnji određuju se:",
        options: [
            "Dane,sedmice,mjesece i godine",
            "Dane i mjesece",
            "Dane,mjesece i godine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema odredbama Zakona o upravnim sporovima RS,upravni spor se pokreće:",
        options: ["Zahtjevom", "Tužbom", "Žalbom"],
        correctAnswerIndex: 1
    },
    {
        question: "O izuzeću gradonačelnika odnosno općinskog načelnika u rješavanju u upravnim stvarima odlučuje:",
        options: [
            "Najviši sud Kantona",
            "Predsjedatelj gradskog vijeća",
            "Gradsko odnosno općinsko vijeće"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Upravni postupak se smatra pokrenutim:",
        options: [
            "podnošenjem zahtjeva stranke",
            "zakazivanjem javne rasprave",
            "poduzimanje bilo koje radnje vezane za postupak"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Zakonom o upravnim sporovima F BiH propisano je da pravo pokretanja upravnog spora ima:",
        options: [
            "Samo pojedinac",
            "Samo pravno lice",
            "Pojedinac ili pravno lice koji su učestvovali u upravnom postupku radi zaštite svojih prava ili pravnih interesa (zainteresovano lice)"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prvi Evropski ugovor:",
        options: [
            "Sklopljen u Strazburu i osnovao je EU",
            "Sklopljen u Rimu i osnovao je Eu",
            "Sklopljen u Parizu i osnovao je Evropsku zajednicu ugljena i nafte"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Acquis communutauire,skraćeno acquis,naziva se i nasljeđem zajednice i znači:",
        options: [
            "Skup prava i obaveza koja sve zemlje članice obavezuje i povezuje unutar EU",
            "Skup pravila koja zemlja kandidat mora prihvatiti i uskladiti svoje zakonodavstvo sa acquis",
            "Skup pravila koja se odnose na zemlje izvan EU"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko zvjezdica ima na zastavi EU?",
        options: ["25", "12", "15"],
        correctAnswerIndex: 1
    },
    {
        question: "Zemlje članice procesa Stabilizacije i pridruživanja iz regiona jugoistočne Evrope su:",
        options: [
            "Bih,Hrvatska,Srbija i Crna Gora",
            "BiH,Hrvatska,Srbija i Crna Gora,Makedonija",
            "BiH,Hrvatska,Srbija i Crna Gora,Albanija,Makedonija"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "BiH je postala članica Vijeća Evrope:",
        options: ["1999", "1992", "2002"],
        correctAnswerIndex: 2
    },
    {
        question: "Bijela knjiga je:",
        options: [
            "Dokument kojeg je sačinila Evropska komisija kao dio strategije za pripremu zemalja kandidata srednje i istočne Evrope za integraciju na unutarnje tržište",
            "Dokument koji sadrži pravila rada Evropskog parlamenta",
            "Dokument koji sadrži pravila rada Evropske komisije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija je lansirala proces stabilizacije i pridruživanja:",
        options: ["1999", "1995", "2002"],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam Evropske unije uveden je ugovorm koji je potpisan:",
        options: [
            "U Parizu 15.maja,1991 godine",
            "U Masstrichtu,7.februara 1992 godine",
            "U Londonu,10 marta 1991"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koja od navedenih nije institucija Vijeća Evrope iz Strazbura:",
        options: [
            "Evropski sud pravde",
            "Parlamentarna skupština",
            "Komitet ministara",
            "Kongres loklanih i regionalnih vlasti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bijela knjiga od posebnog interesa za BiH nosi naziv:",
        options: [
            "Put ka održivom razvoju",
            "Pripreme pridruženih zemalja CEI Evrope za integraciju u unutarnje tržište EU",
            "BIH put do unutarnjeg tržišta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Provedba CARDS programa vrši se u skladu sa:",
        options: [
            "Odlukama Vijeća ministara i entiteskih vlada",
            "Standardima i procedurama Evropske komisije",
            "Programom rada Vijeća ministara BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Evropski parlament:",
        options: [
            "Nema nikakvu ulogu u zakonodavnom procesu",
            "Za razliku od Evropske komisije ima zadatak da štiti interese evropskih regija",
            "Ima značajnu ulogu u zakonodavnom procesu u Europskoj uniji"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Proces stabilizacije i pridruživanja vezuje se za:",
        options: [
            "Sve zemlje kandidata za članstvo u EU",
            "Zemlje koje su do sastanka u Beču 2000 godine predale zahtjev za prijem u članstvo u Eu",
            "Zemlje Zapadnog Balkana"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Jedinstveno tržište EU je formalno profunkcioniralo:",
        options: ["1995", "1992", "2002"],
        correctAnswerIndex: 1
    },
    {
        question: "Predstavnici u Europski parlament:",
        options: [
            "Iz vladajućih parlamentarnih stranaka zemalja članica",
            "Iz Parlamenta članica EU",
            "Na direktnim izborima za EU Parlament"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Trenutna struktura EU je nastala:",
        options: ["1993", "1949", "1958"],
        correctAnswerIndex: 0
    },
    {
        question: "Primarni izvori Evropskog prava:",
        options: [
            "Presude suda prava",
            "Ugovori na kojima se temelji današnja struktura EU",
            "Nacionalni ustavi"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Pregovori o sporazumu o stabilizaciji i pridruživanju će započeti:",
        options: [
            "Sredinom 2005",
            "Već su započeli",
            "Čim BiH demonstrira značajan pogres u 16 prioritenih područja naznačenih u Studiji o izvodljivosti"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Bijela knjiga sadrži:",
        options: [
            "22 od 31 poglavlja sadržanih u acquis communatarem",
            "13 poglavlja",
            "72 poglavlja propisanih u acquis"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropsko Vijeće:",
        options: [
            "Institucija Vijeća Evrope",
            "Nije institucija Evropske Unije",
            "Sastanak 15 šefova države ili vlada Evropske unije i predsjednika Evropske komisije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Sjedište Vijeća Evrope je u:",
        options: ["Strazburu", "Briselu", "Berlinu"],
        correctAnswerIndex: 0
    },
    {
        question: "CARDS je:",
        options: [
            "Program tehničke pomoći namijenjen od strane Evropske unije za obnovu i razvoj i stabilizaciju,namijenje Albaniji,BiH,SR Jugoslaviji,Hrvatskoj i Makedoniji",
            "Program tehničke pomoći od strane EU za obnovu putne infrastrukture u BiH",
            "Program tehničke pomoći za izgradnju mostova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska unija je:",
        options: [
            "Sui generis struktura ni država ni međunarodna organizacija",
            "Skup međunarodnih europskih organizacija",
            "Konfederacija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gdje se održavaju sastanci Evropskog vijeća?",
        options: [
            "U zemlji koji trenutno predsjedava Europskom unijom",
            "Brisel",
            "Strazbur"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EU je proces saradnje i integracije koji je započelo šest evropskih zemalja:",
        options: [
            "EU je proces saradnje i integracije 1951 započelo šest zemalja Belgija,Njemačka,Francuska,Italija,Nizozemska,Luksemburg .",
            "1961",
            "1951 na vojnom planu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Studij izvodivosti izrađuje:",
        options: [
            "Evropska komisija",
            "Vlada zemlje kandidata",
            "Predstavnici EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za koordinaciju CARDS programa u BiH zadužena je:",
        options: [
            "Direkcija za evropske integracije",
            "Predsjedništvo BiH",
            "Ministarstvo pravde BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kriterij za članstvo u EU podrazumijevaju:",
        options: [
            "Zaštitu ljudskih prava",
            "Političke kriterije",
            "Političke,ekonomske i pravne kriterije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Šta je Ekonomska i monetarna unija?",
        options: [
            "To je proces u kojem zemlje članice EU usklađuju svoje ekonomske i monetarne politike,s krajnim ciljem usvajanja jedinstvene valute EURa",
            "To je skup zemalja kandidata za prihvatanje jedinstvene valute",
            "To je skup evropskih zemalja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U institucije Europske unije ne spada:",
        options: [
            "Evropski sud pravde",
            "Evropski sud za zaštitu ljudskih prava",
            "Evropski parlament"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kriterij za članstvo su:",
        options: [
            "Dopunjeni u Madridu 1995. u pogledu institucionalnih kapaciteta države",
            "Nisu nikada dopunjavani",
            "Dopunjeni u Solunu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bijela knjiga je:",
        options: [
            "Dokument kojeg izrađuje Evropska komisija nastao kao rezultat diskusije o određenoj problematici i daje preporuke za tu oblast",
            "Dokument koji inicira diskusije",
            "Dokument sačinjen isključivo za BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Trenutna struktura Evropske unije se sastoji:",
        options: ["Tri stuba", "Nijedno od navedenog", "Četiri stuba"],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski parlament je institucija Europske unije i njegovi članovi se biraju direktnim izborima.",
        options: ["Tačno", "Netačno"],
        correctAnswerIndex: 0
    },
    {
        question: "Vijeće Europe je:",
        options: [
            "Sastanak šefova",
            "Međunarodna organizacija koja je osnovna funkcija zaštita ljudskih prava",
            "Nadnacionalna organizacija"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Evropski ustav:",
        options: ["Solun 2003", "Pariz 1951", "U pripremi je"],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlje članice Pakta stabilnosti iz regiona jugoistočne Evrope su:",
        options: [
            "BiH,Hrvatska,Srbija i Crna Gora,Albanija,Makedonija,Bugarska,Rumunija,Slovenija,Grčka",
            "BiH,Hrvatska,Srbija",
            "Bih,Crna Gora,Albanija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Politički kriterij za članstvo u EU podrazumijevaju:",
        options: [
            "Da je zemlja članica Vijeća Evrope",
            "Postoji politička stabilnost u zemlji",
            "Postojanje demokracije,vladavine prava te poštivanje ljudskih prava i prava manjina"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Osnovni cilj vanjske politike EU je:",
        options: [
            "Proaktivno djelovanje na globalnom nivou",
            "Osigurati sigurnost,stabilnost,demokratiju i poštivanje ljudskih prava",
            "Promovirati stabilnost između evropskih građana i naroda"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ukoliko je ugovorom o radu određen probni rad prema Zakonu o radu ne može trajati duže od:",
        options: ["6 mjeseci", "3 mjeseca", "9 mjeseci"],
        correctAnswerIndex: 0
    },
    {
        question: "Da li žena može koristiti porođajno odsustvo u trajanju kraćem od 12 mjeseci u skladu sa zakonom o radu u institucijama Bih?",
        options: [
            "Da,ali ne kraće od 42 dana poslije porođaja",
            "Ne može",
            "Da,a li ne kraće od 40 dana poslije porođaja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Inspekcijski pregled u organima uprave u RS obuhvaća:",
        options: [
            "Neposredan uvid inspektora u opće akte",
            "Neposredan uvid inspektora u pojedinačne akte",
            "Neposredan uvid inspektora u opće i pojedinačne akte,uslove i način rada subjekata nadzora u pogledu pridržavanja propisa"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Građanin EU označava:",
        options: [
            "Lice koje ima državljanstvo zemlje kandidata za ulazak u Eu",
            "Lice koje ima državljanstvo jedne od zemalja članice EU",
            "Lice koje ima Eu državljanstvo"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prijedlog za izglasavanje nepovjerenja Vladi Rs može podnijeti:",
        options: [
            "Nadpolovična većina narodnih poslanika",
            "Najmanje 30 narodnih poslanika",
            "Najmanje 20 narodnih poslanika"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Pod kojim datumom će se zavesti akti koji se iz opravdanih razloga nisu mogli zavesti istog dana kad su primljeni:",
        options: [
            "Pod datumom dana primitka ili dana zavođenja akta",
            "Pod datumom dana zavođenja akta",
            "Pod datumom kada su akti primljeni a nisu mogli biti zavedeni"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Kancelarijsko poslovanje u organima uprave RS vodi se po sljedećim načelima:",
        options: [
            "Načelo jednoboraznosti,obveznosti,urednosti,ekonomičnosti,racionalnosti",
            "Načelo budnosti,sveoubhvatnosti",
            "Načelo obaveznosti,sveouhvatnosti,urednosti,ekonomičnosti,jedinstvenosti,točnsoti,eskepditivnosti,racionalnosti i čuvanju vitalne dokumentacije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema Zakonu o upravnom postupku rješenje je konačno?",
        options: [
            "Kad se protiv rješenja ne može izjaviti žalba",
            "Kad se protiv rješenja ne može izjaviti žalba niti pokrenuti upravni spor",
            "Kada se ne može pokrenuti upravni spor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Invalidska penzija u slučaju invalidnosti prouzrokovane bolešću ili povredom van rada u FBiH,ne može biti veća od:",
        options: ["75", "85", "80"],
        correctAnswerIndex: 0
    },
    {
        question: "Ko osniva Odbor državne službe za žalbe F BiH?",
        options: [
            "Vlada F BiH",
            "ADS F Bih",
            "Parlament F BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je organ uprave samostalan u vođenju upravnog postupka i donošenju rješenja?",
        options: [
            "Da, s tim što mora tražiti konsultacije od organa izvršne vlasti",
            "Da, u potpunosti",
            "Da,u okviru ovlasti datih Zakonom,drugim propisom i općim aktom"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Madridski kriterij su:",
        options: [
            "Osovni kriterij za članstvo koji se odnose na pravni kriterij",
            "Dodatni kriterij za članstvo EU s kriterijima iz Kopenhagena",
            "Ne predstavlja kriterij za članstvo"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Guvernera Centralne banke BiH nakon prvog mandata imenuje",
        options: [
            "Predsjedništvo BiH na prijedlog Vijeća ministara i uz saglasnot PS BiH",
            "PS BiH na prijedlog Predsjedništva BiH",
            "Predsjedništvo BiH imenuje Upravni odbor koji bira guevernera između svojih članova"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Službenik za rješavanje predmeta i akata dužan je sve riješene predmete i akte vratiti pisarnici:",
        options: [
            "Putem interne dostavne knjige",
            "Nije dužan vratiti predmete pisarnici",
            "Neposredno bez interne dostavne knjige"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Do kada se čuva rezervna lista uspješnih kandidata-Zakon o državnoj službi F BiH:",
        options: [
            "Do isteka probnog rada postavljenoga državnog službenika",
            "Do isteka žalbenog roka",
            "Godinu dana od dana postavljenja državnog službenika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po zahtjevu za odgodu izvršenja upravnog akta do donošenja sudske odluke odlučuje:",
        options: [
            "Nadležni sud kome je tužba podnesena",
            "Organ nadležan za provođenje izvršenja ili nadležni sud",
            "Organ nadležan za provođenje izvršenja upravnog akta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Članove Evropske komisije čine:",
        options: [
            "Predsjednici Vlada država članica",
            "Povjerenici iz država članica",
            "Ministri vanjskih poslova država članica"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Drugostepeni predmet upravnog postupka ulaže se u omot označen žutom bojom.",
        options: ["Tačno", "Netačno"],
        correctAnswerIndex: 0
    },
    {
        question: "Za pisarnicu treba osigurati prostoriju koja se po pravila nalazi blizu:",
        options: [
            "Ulaza u zgradu odnosno na mjestu koje je pristupačno za dolazak stranke",
            "Rukovodioca organa uprave",
            "Na bilo kojem mjestu koje je prostorno pogodno za pisarnicu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakonodavnu vlast u RS po Ustavu:",
        options: [
            "Vrši narodna skupština i dom naroda",
            "Vrši narodna skupština",
            "Vrše narodna skupština i vijeće naroda"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Inspekcijske poslove,osim poslova upravne inspekcije,na teritoriji FBiH obavlja:",
        options: [
            "Federalni upravni inspektorat u okviru Federalnog ministarstva pravde",
            "Financijska policija u saradnji sa upravnom inspekcijom",
            "Federalna uprava za inspekcijske poslove"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pristup informacijama u smislu Zakona o slobodi pristupa informacijama u F BiH podrazumijeva:",
        options: [
            "Pravo svakog pravnog i fizičkog lica pristupa informacijama koje su pod kontrolom javnog organa i obavezu javnog organa da tu informaciju saopći ukoliko pravo pristupa nije ograničeno zakonom",
            "Pravo svakog fizičkog lica pristupa informacijama",
            "Pravo svakog pravnog lica da pristupa informacijama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je donio uredbu o kancelarijskom poslovanju republičkih organa uprave RS?",
        options: [
            "Ministarstvo uprave i lokalne samouprave RS",
            "Vlada Rs",
            "Narodna skupština RS"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U Zakonu o upravnom postupku Brčko Distrikta BiH propisano je da se eventualni sukob nadležnsoti entiteta i Distrikts može riješiti?",
        options: [
            "Odlukom PS BiH",
            "Odlukom Vijeća ministara",
            "Sporazumom Distrikta sa entitetima"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U kojim slučajevima organi vlasti u FBiH imaju u Upravnom postupku prava i dužnosti stranke?",
        options: [
            "Kada to posebnom odlukom zatraži Vlada Federacije,odnosno Vlada kantona",
            "Kada su to zakonom ovlašteni da zastupaju javne interese",
            "Uvijek kada ocijene da je to potrebno"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kojim aktom u organima uprave i službama za upravu u FBiH se određuju organizacione jedinice,odnosno radna mjesta kojima se pošta dostavlja na rad ?",
        options: ["Zakonom", "Odlukom", "Rješenjem"],
        correctAnswerIndex: 2
    },
    {
        question: "Ministri ili zamjenici ministara u Vijeću ministara BiH prije rasprave na sjednici Vijeća ministara BiH sva pitanja iz svoje nadležnosti obvezno prethodno raspravljanju na sjednici:",
        options: [
            "Nadležne komisije",
            "Nadležnog komiteta",
            "Nadležnog odbora"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Drugo proširenje EEZ dogodilo se 1.1.1981. pristupanjem:",
        options: [
            "Španjolske i Portugala",
            "Grčke",
            "Austrije,Švedske i Finske"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Istočno partnerstvo EAP je inicijativa koja uključuje EU i šest istočnoevropskih partnera u cilju izgradnje demokracije,prosperiteta,stabilnosti i suradnje.Koja od navedenih država nije djelom ove inicijative?",
        options: ["Azerbejdžan", "Armenije", "Turska"],
        correctAnswerIndex: 2
    },
    {
        question: "U skladu sa Zakonom o državnoj službi u FBiH ,državni službenik ima pravo:",
        options: [
            "Da,obavlja samostalnu djelatnost",
            "Da osnuje ili da se učlani u sindikat ili profesionalno udruženje",
            "Da bude član upravnih i drugih odbora političkih stranaka"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Mogu li se pojedina pitanja za određenu upravnu oblast u FBiH urediti drugačije nego što su uređene Zakonom o upravnom postupku FBiH?",
        options: [
            "Mogu izuzetno,posebnim Federalnim zakonom ali ne protivno načelima Zakona o upravnom postupku",
            "Ne mogu",
            "Mogu o pitanjima iz isključive nadležnosti kantona,kantonalnim Zakonom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski sud za ljudska prava ima broj sudija:",
        options: [
            "30 sudija",
            "Jednak broju visokih strana ugovornica",
            "Kako odredi PS Vijeća Evrope"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "EU princip kojim se nastoji osigurati da se odluke donose što je moguće bliže građaninu naziva se:",
        options: [
            "Princip proporcionalnosti",
            "Princip ravnopravnosti",
            "Princip supsidijarnosti"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U skladu sa Zakonom o radu FBiH,kada zaposlenik otkazuje ugovor o radu,otkazni rok ne može biti kraći od:",
        options: ["15 dana", "7 dana", "30 dana"],
        correctAnswerIndex: 1
    },
    {
        question: "U Zakonu o upravnim sporovima RS propisano je da se upravni spor:",
        options: [
            "Može voditi samo protiv akta donesenog u prvom stepenu",
            "Može voditi protiv konačnog upravnog akta",
            "Ne može voditi protiv konačnog upravnog akta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Institucija EU mogu donijeti pet vrsta akata koje spadaju u sljedeće kategorije:",
        options: [
            "Pravno obavezujući i neobavezujući akti",
            "Samo neobavezujući akti",
            "Samo obavezujući akti koji su usaglašeni sa aktima zemalja članica"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EU princip kojim se nastoji osigurati da se odluke donose što je moguće bliže građaninu naziva se:",
        options: [
            "Princip ravnopravnosti",
            "Princip supsdijarnosti",
            "Prinicip proporcionalnosti"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kako glasi kratica međuvladine organizacije koju su 1960. na inicijativu UK uspostavile Austrija,Danska,Norveška,Portugal,Švedska i UK s ciljem promicanja slobodne trgovine i ekonomske integracije kroz međuvladinu suradnju bez integriranja?",
        options: ["EFTA", "ECB", "CEFTA"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja zemlja je finansijski podržala Marsalov plan iz 1947 godine da pomogne obnovu i rekonstrukciju zemalja Zapadne Europe?",
        options: ["Rusija", "SAD", "Belgija"],
        correctAnswerIndex: 1
    },
    {
        question: "Termin predmet u okviru kancelarijskog poslovanja u organima uprave ima sljedeće značenje:",
        options: [
            "Predmet je svaki pisani akt u kancelarijskom poslovanju",
            "Predmet je skup svih akata i priloga koji se odnose na isto pitanje ili zadatak i čini posebnu samostalnu cjelinu",
            "Predmet je ma koji pisani akt koji se odlaže u arhivu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Je li nadležni organ dužan prevoditi informacije sa jednoga na drugi službeni jezik u BiH?",
        options: [
            "Ovisi o odluci rukovoditelja javnog organa",
            "Nije dužan",
            "Dužan je u svakom slučaju ako tako zahtjeva podnositelj zahtjeva"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Amandmani na kojima se mijenja i dopunjuje Ustav BiH donosi se:",
        options: [
            "Odlukom PS kojim se potvršuje na referendumu",
            "Odluka Parlamentarna skupštine koja kuljučuje dvotrećinsku većinu prisutnih i koji su glasali u Predstavničkom domu",
            "Odlukom PS koja uključuje dvotrećinsku većinu prisutnih i koji su glasali u svakom domu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Uloga glavnog kordinatora procesa europskih integracija na nivou države i između državnih institucija i entiteta nadležna je:",
        options: [
            "Direkcija Evropske unije u BiH",
            "Vlada svakog entiteta za svoji dio obaveza",
            "Direkcija za europske integracije Vijeća ministara BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Samostalne upravne organizacije BiH odgovorne su:",
        options: [
            "Predsjedništvu BiH i Vijeću Ministara Bih",
            "Vijeću ministara Bih",
            "PS BiH i Vijeću ministara"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sve nadležne institucije u BiH su se obavezale da će sarađivati sa Međunarodnim krivičnim tribunalom za bivšu Jugoslaviju:",
        options: [
            "Prijemom BiH u Vijeću Evrope",
            "Ustavom BiH",
            "Potpisivanjem memoranduma o razumijevanju"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Upravni spor se može voditi:",
        options: [
            "konačnog upravnog akta",
            "pravomoćnog upravnog akta",
            "svakog akta uprave"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Sjedište općine utvrđuje se :",
        options: [
            "Statutom općine u skladu sa zakonom",
            "Zakonom",
            "Odlukom skupštine općine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Dani kada se ne radi i državni praznici?",
        options: [
            "Odlažu početak ali ne i tok rokova",
            "Ne sprečavaju početak i tok rokova",
            "Produžavaju rok za onoliko dana ne radi i državni praznik"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koji su uslovi za starosnu penziju u skladu sa Zakonom o penzijskom i invalidskom osiguranju FBiH?",
        options: [
            "65 godina života i najmanje 26 godina penzijskog staža",
            "65 godina života i najmanje 16 godina staža osiguranja",
            "65 godina života i najmanje 15 godina staža osiguranja,odnosno 20 godina penzijskog staža ili kada navrši 40 godina staža bez obzira na godine života"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema zakonu u upravnim sporovima odgovor na tužbu daje se u roku koji odredi sud koji ne može biti duži od :",
        options: ["20 dana", "30 dana", "60 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Delegate u Domu naroda bira:",
        options: [
            "Birači na izborima neposredno sa lista kandidata",
            "Kantonalna skupština iz reda svojih članova",
            "Predsjednik Federacije BiH uz saglasnost potpredsjednika Federacije BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ministar odbrane ima:",
        options: [
            "jednog zamjenika",
            "dva zamjenika",
            "tri zamjenika,po jednog iz svakog konstitutivnog naroda"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Državljanstvo Brčko Distrikta BiH po Statutu:",
        options: [
            "Stanovnici Distrikta imaju državljanstvo BiH i nemaju pravo na entitetsko",
            "Stanovnici Distrikta mogu biti državljani entiteta i BiH i imaju pravo da izaberu i promijene svoje entitetsko državljanstvo",
            "Stanovnici Distrikta imaju državljanstvo BiH i državljanstvo Distrikta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U skladu sa zakonom o radu FBiH ugovor o radu na određeno vrijeme ne može se zaključiti:",
        options: [
            "Na period duži od šest mjeseci",
            "Duži od 36 mjeseci",
            "Duži od 24 mjeseca"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema izbornom zakonu BiH dio članova Komisije za izbor i imenovanje Centralne izborne komisije ne imenuje:",
        options: [
            "Direktor Agencije za državnu službu BiH",
            "Administrativna komisija PS BiH",
            "Predsjednik Visokog sudskog i tužilačkog vijeća BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Postoji državljanstvo BiH i državljanstvo svakog entiteta pod uslovom da su svi:",
        options: [
            "Državljani bilo kojeg entiteta samim tim su državljani BiH",
            "Državljani republike BiH po sili zakona državljana BiH",
            "Državljani BiH samim tim državljani bilo kojeg entiteta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kriterij po kojima se vrši razvrstavanje predemta i akata u organima državne službe FBiH:",
        options: [
            "Sadržaj materija koje se u predmetu ili aktu obrađuje",
            "Datum prispjeća predmeta i akta",
            "Povjerljiva i strogo povjerljiva priroda predmeta ili akta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Interni premještaj u skladu sa Zakonom o državnoj službi u FBiH sa radnog mjesta državnog službenika na slično radno mjesto u istoj instituciji može biti:",
        options: [
            "Dobrovoljan,uz saglasnot državnog službenika koji se premješta,a izuzetno i nametnut ako postoje objektivno utvrđene i neodložne potrebe službenika",
            "Dobrovoljan i ni u kom slučaju nametnu",
            "Nametnut državnom službeniku prema potrebama državne službe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U osnivačke ugovore EU ne spada:",
        options: [
            "Povelja o temeljnim pravima Eu 2007",
            "Ugovor o osnivanju Europske zajednice za atomsku energiju 1957",
            "Ugovor o osnivanju Europske zajednice za ugljen i čelik 1951"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravo zakonodavne inicijative na nivou EU u nadležnosti je:",
        options: [
            "Europske komisije",
            "Vijeća Europske unije",
            "Europski parlament"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Da li probnom radu podliježu pripravnici u državnoj službi u FBiH:",
        options: [
            "DA",
            "Samo uz odgovarajuće rješenje rukovodioca organa državne slućbe",
            "Ne"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Zahtjev za vanredno preispitivanje sudske odluke podnosi se:",
        options: [
            "Kantonalnom sudu",
            "Vrhovnom sudu F BiH",
            "Vrhovnom sudu FBiH ili kantonalnom sudu"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "O skraćenju radnog vremena zaposlenika koji rade na radnim mjestima sa posebnim uslovima rada odlučuje:",
        options: [
            "Poslodavac",
            "Ministar nadležan za poslove rada",
            "Vlada"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Republička direkcija za promet naoružanja i vojne opreme je:",
        options: [
            "Samostalna republička upravna organizacija",
            "Upravna organizacija u sastavu ministarstva trgovine i turizma",
            "Upravna organizacija u sastavu Ministarstva energetike i rudarstva"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Zakon o upravnom postupku FBiH propisano je da ako se rješenje objavi usmeno ono se:",
        options: [
            "Mora izdati napismeno",
            "Ne mora izdati napismeno",
            "Izdaje napismeno ako to odluči rukovodilac organa"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zavođenje akata u odgovarajuću knjigu evidencije u organima uprave i službama za upravu u FBiH:",
        options: [
            "Vrši se najkasnije dva dana po njihovom prispjeću",
            "Vrši se istog dana i pod istim datumom pod koji su akti primljeni",
            "Vrši se dan po njihovom prispijeću"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U skladu sa zakonom o državnoj službi FBiH državni službenik ostvaruje pravo na otpremninu:",
        options: [
            "Ako izgubi državljanstvo BiH",
            "Ako se proglasi prekobrojnim",
            "Dobrovoljno istupi iz državne službe"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koji predmet i akti se odlažu u arhivu organa uprave:",
        options: [
            "Predmeti i akti u kojima je postupak u potpunosti okončan riješeni predmeti i akti",
            "Predmeti koje odredi šef pisarnice",
            "Predmeti koje odredi rukovodilac"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovođenje federalnim ministarstvima,federalnim upravama i federalnim upravnim organizacijama vrši se na način predviđen:",
        options: [
            "Zakon o organizaciji organa uprave u Federaciji BiH",
            "Zakonom o federalnim ministarstvima i drugim tijelima federalne uprave organa uprave",
            "Zakonom o državnoj službi u Federaciji BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sva novčana potraživanja iz radnog odnosa u skladu sa Zakonom o radu FBiH zastarijevaju u roku od:",
        options: ["2 godine od dana nastanka obaveze", "12 mjeseci od dana nastanka obaveze", "3 godine od dana nastanka obaveze"],
        correctAnswerIndex: 0
    },
    {
        question: "Zakoni i odluke svih vlasti Brčko Distrikta BiH moraju biti:",
        options: [
            "U skladu sa važećim zakonima i odlukama institucija BiH",
            "U skladu sa zakonima i odlukama RS",
            "U skladu sa zakonima i odlukama F BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Grb i zastava Brčko Distrikta su:",
        options: [
            "Grb i zastava BiH",
            "Specifičan grb i zastava Brčko Distrikta",
            "Grb i zastava F BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šefa policije Brčko Distrikta imenuje:",
        options: [
            "Predsjednik Skupštine Distrikta",
            "Gradonačelnik bez saglasnosti Skupštine na osnovu kriterija",
            "Gradonačelnik uz saglasnost Skupštine na osnovu kriterija i stručnosti i preporuke nezavisnog odbora za izbor kandidata osnovanog u skladu sa zakonom"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Da li kandidati za gradonačelnika moraju biti iz reda članova Skupštine?",
        options: [
            "DA",
            "Ne",
            "Moraju biti iz reda članova Vlade Distrikta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt ima pečat:",
        options: [
            "Kvadratnog oblika sa tekstom Brčko Distrikt na bosanskom jeziku",
            "Okruglog oblika s tekstom BiH,Brčko Distrikt BiH i ispisan latinicnim i cirilicnim pismom",
            "Okruglog oblika s tekstom BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vlast u Brčko Distriktu se dijeli na:",
        options: [
            "Zakonodavnu,izvršnu i nadzornu",
            "Zakonodavnu,izvršnu i sudsku",
            "Zakonodavnu,izvršnu i administrativnu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Pravni položaj Brčko Distrikta BiH uređen je:",
        options: [
            "Zakonom o Brčko Distriktu BiH",
            "Ustavom BiH",
            "Statutom Brčko distrikta BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Sporove u vezi za zaštitom utvrđenog statusa i ovlaštenja Brčko Distrikta BiH između distrikta i entiteta i između Distrikta i BiH rješava:",
        options: [
            "Predsjedništvo Bih",
            "Visoki predstavnik za BiH",
            "Ustavni sud BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Gradonačelnik ne može imati više od:",
        options: [
            "4 savjetnika",
            "Šest savjetnika",
            "Pet"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Zakoni Distrikta,odluke,rezolucije Skupštine Distrikta u skladu sa Statutom objavljuju se:",
        options: [
            "U službenom glasniku BiH",
            "U službenom glasilu Brčko Distrikta",
            "Na zvaničnoj web stranici Brčko distrikta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koji jezici i pisma se upotrebljavaju za sve službene svrhe u Brčko Distriktu BiH?",
        options: [
            "Bosanski,hrvatski i srpski,te latinično i cirilicno pismo su u ravnopravnoj upotrebi za sve službene svrhe",
            "Samo bosanski i hrvatski jezik i latinicnim pismom",
            "Bosanski jezik s latinicnim pismom i srpsi s cirilicnim pismom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Skupština Brčko distrikta se saziva:",
        options: [
            "Najmanje tri puta mjesecno",
            "Najmanje dva puta mjesecno",
            "Najmanje jednom mjesecno"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Za sprovođenje zakona u Brčko Distriktu BiH i pravilno rukovođenje i upravljanje Distriktom odgovaran je:",
        options: [
            "Visoki predstavnik za Brčko Distrikt",
            "Gradonačelnik",
            "Predsjednik Skupštine"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sjednicom Vlade Brčko Distrikta BiH predsjedava:",
        options: [
            "Glavni koordinator Vlade",
            "Gradonačelnik",
            "Zamjenik gradonačelnika"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Skupština Brčko Distrikta se sastoji od:",
        options: [
            "25 poslanika od kojih četiri predstavljaju nacionalne manjine",
            "31 poslanika od kojih dva predstavljaju nacionalne manjine u Distriktu",
            "33 poslanika"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Teritorij Brčko Distrikta BiH je u svojini:",
        options: [
            "Federacije BiH",
            "Stanovništva Brčko Distrikta BiH",
            "Vlade Brčko distrikta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prijedlog proračuna budžeta Brčko Distrikta BiH Skupštini podnosi:",
        options: [
            "Gradonačelnik u ime Vlade Distrikta",
            "Predsjednik Skupštine Distrikta",
            "Savjet ministara Distrikta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Proračun budžeta Brčko Distrikta usvaja:",
        options: [
            "Skupština najmanje 30 dana prije isteka svake fiskalne godine",
            "Skupština najmanje 60 dana prije isteka svake fiskalne godine",
            "Vlada Distrikta najmanje 30 dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koji način Skupština donosi Odluke?",
        options: [
            "Donosi odluke tropetinskom većinom glasova zastupnika koji su prisutni i glasaju",
            "Donosi odluke većinom glasova svih zastupnika",
            "Donosi odluke dvotrećinskom većinom glasova zastupnika koji su prisutni i glasaju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Teritorij Brčko distrikta Bih obuhvata cjelokupni teritorij općine Brčko u granicama od:",
        options: [
            "1 maja 1999 godine",
            "7 decembra 1999 godine",
            "1 januara 1999 godine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ko može sazvati sjednicu Skupštine?",
        options: [
            "Glavni koordinator Vlade",
            "Gradonačelnik Brčko distrikta",
            "Predsjednik Skupštine ili na pismeni zahtjev pet zastupnika,onoliko često koliko je neophodno za vršenje funkcije Skupštine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Gradonačelnik je odgovaran za pravilno rukovođenje i upravljanje Distriktom:",
        options: [
            "Skupštini Distrikta Brčko",
            "Vladi F BiH",
            "Predjsedništvu BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko distrikt predstavlja:",
        options: [
            "Gradonačelnik",
            "Premijer",
            "Predsjednik skupštine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kandidata za mjesto gradonačelnika može nominovati:",
        options: [
            "Samo predsjednik Skupštine",
            "Svaki građanin Brčko Distrikta",
            "Svaki zastupnik skupštine Brčko distrikta BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U ovlasti Distrikta spada:",
        options: [
            "Pravosuđe i služba pravne pomoći,finansije Distrikts,carinska uprava dok obrana ne spada u ovlasti Distrikta",
            "Samo carinska uprava i pravosuđe",
            "Finansije i odbrana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li stanovnici Distrikta imaju pravo izbora ili promjene svog državljanstva?",
        options: [
            "Da,imaju",
            "Ne",
            "Samo u posebnim slučajevima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Javnu upravu Brčko Distrikta čine:",
        options: [
            "Odjeljenja Vlade Distrikta,kancelarija geadonačelnika,direkcija za finansije Distrikta i ostali organi",
            "Odjeljenja Vlade Distrikta,kancelarija gradonačelnika,direkcija za finansije Distrikta,kancelarija za upravljanje javnom imovinom,kancelarija kordinatora za Brčko Distrikt pri Vijeću ministara BiH i ostali organi uprave kada je to zakonom predviđeno",
            "Samo kancelarija gradonačelnika i direkcija za finansije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Gradonačelnika Distrikta bira:",
        options: [
            "Predsjedništvo Bih",
            "Skupština",
            "Gradonačelnik prethodne administracije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sudije,tužioce Brčko Distrikta imenuje i razrješava:",
        options: [
            "Savjet ministara Bih",
            "Skupština",
            "Visoko sudsko i tužilaćko vijeće"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Pravo predlaganja zakona u Brčko Distriktu BiH ima:",
        options: [
            "Samo članovi Vlade Distrikta",
            "Samo predsjednik",
            "Svaki zastupnik.gradonačelnik u ime Vlade Brčko distrikta Bih i pravosudno povjerenstvo komisija"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema izbornom zakonu BiH, za člana izborne komisije ili biračkog odbora ne može biti imenovano lice koje je:",
        options: [
            "Državni službenik",
            "Član političke stranke ili koalicije",
            "Član najvišeg izvršno političkog organa političke stranke ili koalicije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema Ustavu Federacije, poslanici u Predstavničkom domu biraju se demokratskim putem:",
        options: [
            "Od strane kantonalnih skupština iz reda svojih poslanika",
            "Na neposrednim izborima tajnim glasanjem na teritoriji cijele Federacije",
            "Od strane općinskih vijeća"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Postupak pred Ustavnim sudom BiH reguliše:",
        options: [
            "Parlamentarna skupština BiH, zakonom o postupku pred Ustavnim sudom",
            "Sud, koji većinom glasova svih članova usvaja svoja pravila o radu",
            "Poslovnikom koji usvaja većinom glasova svih članova Sud, a odobrava Predsjedništvo"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ustavom Federacije nije zagarantovano pravo svih osoba na teritoriji Federacije na:",
        options: [
            "Zdrav i siguran okoliš",
            "Prehranu",
            "Utočište"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik ili jedan od potpredsjednika Federacije može biti smijenjen odlukom Ustavnog suda Federacije ukoliko:",
        options: [
            "Prekrši zakletvu ili iz drugih razloga nedostojan te funkcije",
            "Nalazi u pritvoru",
            "Stranka koja ga je predložila prestane učestvovati u vršenju izvršne vlasti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Ustavu Federacije turizam je u:",
        options: [
            "Nadležnosti kantona",
            "Nadležnosti federalne vlasti i kantona",
            "Isključive nadležnosti Federacije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ustavni sud BiH sastoji se od:",
        options: [
            "Deset",
            "Devet",
            "Sedam"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Tko imenuje Vladu Federacije?",
        options: [
            "Premijer predsjednik Vlade Federacije",
            "Predsjednik Federacije uz saglasnost oba potpredsjednika Federacije nakon konzulacija sa Premijerom predsjednikom Vlade Federacije ili kandidatom za tu dužnost",
            "Parlament Federacije"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Isplata penzija-mirovina stečenih na području Federacije BiH ostvaruje se putem:",
        options: [
            "Federalnog zavoda za PIO MIO",
            "Republickog fonda za PIO",
            "Federalnog ministarstva rada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Upravne organizacije osnivaju se za obavljanje:",
        options: [
            "Upravnih poslova",
            "Stručnih i sa njima povezanih upravnih poslova",
            "Upravnih i sa njima povezanih stručnih poslova"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Rješenje kojim odbija zahtjev za pristup informaciji, nadležni javni organ dužan je dostaviti podnositelju zahtjeva:",
        options: [
            "Najkasnije u roku od osam dana od dana donošenja rješenja",
            "Najkasnije u roku od 15 dana od dana prijema zahtjeva",
            "U roku od 30 dana od dana prijema zahtjeva"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Republički zavod za statistiku je:",
        options: [
            "Samostalna republička upravna organizacija",
            "Samostalna republička uprava",
            "Upravna organizacija u sastavu Ministarstva financija"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Poslovi upravnog nadzora nad radom pravosudne uprave i federalnih organa uprave u nadležnosti su:",
        options: [
            "Federalnog ministarstva pravde",
            "Zavoda za javnu upravu",
            "Federalnog ministarstva unutrašnjih poslova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik FBiH koji je razriješen dužnosti zbog prekobrojnosti ima prednost prilikom ponovnog zaposlenja u državnoj službi FBiH ako se oglasi upražnjeno slično radno mjesto, u roku od:",
        options: [
            "U roku od šest mjeseci od dana razrješenja s dužnosti",
            "U roku od godinu dana od dana razrješenja s dužnosti",
            "U roku od dvije godine od dana razrješenja s dužnosti"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sindikat se u skladu sa Zakonom o radu u institucijama BiH može osnovati:",
        options: [
            "Uz saglasnost nadležne Vlade",
            "Uz odobrenje poslodavca",
            "Bez ikakvog prethodnog odobrenja"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U skladu sa Zakonom o državnoj službi u institucijama BiH, ADS BiH može poništiti javni oglas na obrazloženi zahtjev najkasnije do:",
        options: [
            "Održavanja javnog ispita",
            "Postavljanja kandidata sa liste uspješnih",
            "Dostavljanja rezultata izbornog procesa, odnosno liste uspješnih kandidata Agenciji"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ako je neko pravo iz radnog odnosa različito uređeno Zakonom o radu FBiH, kolektivnim ugovorom, pravilnikom o radu, ugovorom o radu primjenjuje se:",
        options: [
            "Za radnika najpovoljnije pravo osim ako to Zakonom o radu FBiH nije izričito zabranjeno",
            "Za radnika najpovoljnije pravo",
            "Pravo utvrđeno kolektivnim ugovorom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa zakonom o radu FBiH probni rad ne može trajati duže od:",
        options: [
            "Tri mjeseca",
            "Šest mjeseci",
            "Dvanaest mjeseci"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U skladu sa zakonom o radu FBiH radnicima koji rade noću poslodavac je dužan osigurati periodične ljekarske preglede najmanje:",
        options: [
            "Svakih šest mjeseci",
            "Jednom godišnje",
            "Jednom u dvije godine"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Građani koje zemlje EU su 23. juna 2016 godine glasovali za izlazak iz EU?",
        options: [
            "Ujedinjeno Kraljevstvo",
            "Norveška",
            "Danska"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Britansko-njemačka inicijativa za BiH, kojom su izabrani predstavnici vlasti u BiH pozvani da se pisanom izjavom obvežu na provedbu institucionalnih reformi na svim razinama te da u saradnji EU izrade opsežan plan reformi kojim će BiH napredovati u procesu integriranja, predstavljena je:",
        options: [
            "2013 godine",
            "2014 godine",
            "2015 godine"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U preambuli Ustava BiH se ne spominje:",
        options: [
            "Evropska konvencija za zaštitu ljudskih prava i sloboda",
            "Međunarodni pakt o ekonomskim, socijalnim i kulturnim pravima",
            "Deklaracija o pravima lica koja pripadaju nacionalnim ili etničkim, vjerskim i jezičkim manjinama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Glavni grad RS po Ustavu je:",
        options: [
            "Banja Luka",
            "Sarajevo",
            "Doboj"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema Ustavu BiH, sastavni dio pravnog poretka BiH i entiteta su:",
        options: [
            "Načela Univerzalne deklaracije o ljudskim pravima",
            "Načela Statuta Međunarodnog tribunala za bivšu Jugoslaviju",
            "Opšta načela međunarodnog prava"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Vrhovni sud Federacije:",
        options: [
            "Ima izvorne nadležnosti jer je samo najviši žalbeni sud Federacije",
            "Ima i izvorne nadležnosti pobrojane u Ustavu",
            "Ima i izvorne nadležnosti utvrđene federalnim zakonima"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Predsjednik Federacije ima dva potpredsjednika iz različitih konstitutivnih naroda.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema izbornom zakonu BiH državni službenici:",
        options: [
            "Mogu se kandidovati za javnu izbornu dužnost samo ako prethodno podnesu ostavku na taj položaj ili postupe u skladu sa zakonima koji regulišu njihov status",
            "Ne mogu se kandidovati",
            "Mogu se bez ograničenja kandidovati"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nadzor nad radom Republičke uprave za inspekcijske poslove vrši:",
        options: [
            "Vlada RS",
            "Narodna skupština RS",
            "Ministarstvo pravde"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Članove Vlade RS bira:",
        options: [
            "Predsjednik RS",
            "Narodna skupština RS, poslije svakog konstituiranja, na prijedlog kandidata za predsjednika Vlade",
            "Narodna skupština RS na prijedlog predsjednika i podpredsjednika"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kojom većinom Vlada Brčko Distrikta odlučuje o godišnjem proračunu budžeta?",
        options: [
            "Natpolovićnom većinom prisutnih na sjednici",
            "Dvotrećinskom većinom",
            "Tropetinskom većinom glasova od ukupnog broja članova Vlade"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Sredstva za rad organa uprave i upravnih organizacija u FBiH utvrđuje se:",
        options: [
            "Budžetom Federacije BiH za federalne organe uprave i upravne organizacije",
            "Budžetom Federacije BiH za federalne i kantonalne organe uprave",
            "Budžetom Federacije BiH za federalne, kantonalne i općinske organe uprave"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Republički sekretarijat za zakonodavstvo je:",
        options: [
            "Uprava u sastavu Ministarstva pravde",
            "Samostalna republička upravna organizacija",
            "Samostalna stručna služba Vlade RS"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sekretar Vlade FBiH za svoj rad odgovara:",
        options: [
            "Vladi FBiH i Premijeru Predsjedniku Vlade FBiH",
            "Vladi Federacije BiH, Premijeru, Predsjedniku Vlade FBiH i zamjenicima Premijera Predsjednika Vlade FBiH",
            "Premijeru Predsjedniku Vlade FBiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Uredbu o uvjetima, načinu i programu za polaganje ispita općeg znanja i stručnog ispita za kandidate za državnu službu u Federaciji BiH donosi:",
        options: [
            "Vlada FBiH",
            "Parlament Federacije",
            "Parlament FBIH na prijedlog ADS FBiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa Zakonom o državnoj službi FBiH u rukovođenju organima državne službe rukovodiocu organa državne službe FBiH pomažu:",
        options: [
            "Sekretar organa državne službe, pomoćnik rukovodioca organa državne službe, savjetnik i šef kabineta",
            "Sekretar organa državne službe, pomoćnik rukovodioca, savjetnik",
            "Sekretar, pomoćnik i šef kabineta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu o radu RS, puno radno vrijeme radnika mlađeg od 18 godina ne može da se utvrdi u trajanju dužem od:",
        options: [
            "40 sati sedmično",
            "35 sati sedmično",
            "30 sati sedmično"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Članove Disciplinske komisije u skladu sa Zakonom o državnoj službi FBiH imenuje:",
        options: [
            "ADS FBiH",
            "Rukovodilac organa državne službe",
            "Sindikat"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Unapređenje državnog službenika Zakon o državnoj službi FBiH se vrši putem:",
        options: [
            "Javnog oglasa koji traje najmanje sedam dana",
            "Internog oglasa koji traje najmanje deset dana",
            "Internog oglasa koji traje najmanje sedam dana od dana objavljivanja na oglasnoj tabli organa državne službe"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U skladu sa Zakonom o radu FBiH, naknadu plate u visini od 100 posto prosječne plate koju je radnik ostvario u odgovarajućem prethodnom periodu ili od plate koju bi ostvario da je bio na radu, ima radnik za vrijeme:",
        options: [
            "Korištenja godišnjeg odmora i državnog praznika",
            "Korištenja godišnjeg odmora, državnog praznika i privremene spriječenosti za rad zbog povrede na radu ili profesionalne bolesti",
            "Privremene spriječenosti za rad zbog povrede na radu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ko bira medijatore državne službe prema Zakonom o državnoj službi FBiH?",
        options: [
            "Svi državni službenici i namještenici organa državne uprave u saradnji sa sindikatom",
            "Svi državni službenici organa državne uprave u saradnji sa sindikatom",
            "Svi državni službenici i namještenici u saradnji sa rukovodiocem"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa Zakonom o državnoj službi FBiH, interni oglas za unapređenje državnog službenika objavljuje se:",
        options: [
            "Na službenoj stranici Agencije",
            "U najmanje dva lista koja se distribuiraju na cijeloj teritoriji BiH",
            "Na oglasnoj tabli organa državne službe u kojem se vrši unapređenje"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Zahtjev za vanredno preispitivanje sudske odluke podnosi se:",
        options: [
            "Vrhovnom sudu Federacije",
            "Kantonalnom sudu",
            "Vrhovnom sudu Federacije ili kantonalnom sudu"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Pojedina pitanja postupka za određenu upravnu oblast:",
        options: [
            "Mogu se samo izuzetno urediti posebnim zakonom",
            "Ne mogu se uređivati zakonom",
            "Mogu se izuzetno urediti i podzakonskim aktom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U stvarima o kojima neposredno na osnovu ustavnih ovlaštenja odlučuju PS BiH ili Predsjedništvo BiH, upravni spor:",
        options: [
            "Može voditi",
            "Ne može voditi",
            "Može voditi samo u određenim slučajevima"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Oglašavanje rješenja ništavnim:",
        options: [
            "Onemogućava se dalje proizvođenje pravnih posljedica rješenja koje je oglašeno ništavim",
            "Ne poništavaju se pravne posljedice koje je rješenje već proizvelo od dana oglašavanja ništavim",
            "Poništavaju se pravne posljedice koje je rješenje već proizvelo od dana oglašavanja ništavim"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema odredbama Zakona o upravnom postupku Brčko Distrikta BiH o žalbi protiv rješenja i drugih pojedinačnih upravnih akata koje u prvom stepenu donose organi uprave i institucije s javnim ovlaštenjima rješava:",
        options: [
            "Vlada Distrikta",
            "Apelaciona komisija",
            "Gradonačelnik"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Protiv kojeg rješenja donesenog u upravnom postupku može izjaviti žalba?",
        options: [
            "Protiv svakog rješenja bez izuzetka koje je doneseno od nadležnog organa",
            "Samo protiv drugostepenog rješenja",
            "U pravilu, protiv rješenja donesenog u prvom stepenu"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Primljeni akti u organima uprave RS razvrstavaju se na:",
        options: [
            "Akte predmeta upravnog postupka i akte povjerljive pošte",
            "Akte predmeta upravnog postupka i ostale akte akte predmeta neupravnog postupka",
            "Akte predmeta upravnog postupka i postupaka po zahtjevu stranke"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Brojčane oznake za obilježavanje organizacionih jedinica odnosno radnih mjesta ako nema organizacionih jedinica, počinju s brojem:",
        options: [
            "Od 01 pa nadalje",
            "Od 1 pa nadalje",
            "Od 001 pa nadalje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko otvara pošiljke koja se odnosi na raspisane licitacije, natječaje i slično?",
        options: [
            "Komisija formirana za te poslove ako nije drukčije određeno",
            "Šef pisarnice",
            "Službenik koji ovlasti rukovodilac"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Termin fascikl predstavlja:",
        options: [
            "Omot, sanduk, kutiju i slično u kojima je složeno više predmeta ili više dosijea koji se poslije završenog postupka čuvaju u tim fasciklima",
            "Dokument koji sadrži samo jedan predmet",
            "Samo omot za čuvanje dokumenata"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Članove Europskog vijeća čine:",
        options: [
            "Predsjednici država ili predsjednici vlada država članica, predsjednik Europskog vijeća i predsjednik Europske komisije",
            "Ministri vanjskih poslova država članica",
            "Predsjednici država i vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Najveći program za istraživanje i inovacije koji je pokrenut u EU, a koji je u razdoblju od 2014-2020 raspolagao sa skoro 80 milijardi eura za podršku pametnom, održivom i uključivom ekonomskom rastu, zove se?",
        options: [
            "Erasmus +",
            "Horizon 2020",
            "Eureka"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sud Evropske unije broji:",
        options: [
            "12 sudaca iz najstarijih zemalja članica",
            "6 sudaca iz zemalja osnivača",
            "Broj je usklađen sa brojem država članica"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Instrument predpristupne pomoći IPA predstavlja:",
        options: [
            "Sredstvo putem kojeg EU podržava reforme u zemljama proširenja kroz financijsku i tehničku pomoć",
            "Sredstvo putem kojeg EU podržava reforme zemljama kandidatima kroz finansijsku i tehničku pomoć",
            "Sredstvo putem kojeg EU podržava zemlje Zapadnog balkana za ulazak u EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Peto proširenje bilo je najveće proširenje EU, kada je najprije pristupilo deset novih članica, zatim još dvije nove članice, trajalo je:",
        options: [
            "Od 2004 do 2007",
            "Od 2007 do 2013",
            "Od 2010 do 2013"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U zakonu o općem upravnom postupku RS propisano je da sukob nadležnosti između republičkih organa rješava:",
        options: [
            "Skupština RS",
            "Vlada RS",
            "Ustavni sud RS"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Upravne organizacije mogu se osnivati u općinama koji imaju najmanje:",
        options: [
            "30 000 stanovnika",
            "25 000",
            "50 000 stanovnika"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Organe uprave iz nadležnosti BiH osniva:",
        options: [
            "Predsjedništvo BiH",
            "Vijeće ministara na prijedlog Predsjedništva",
            "Parlamentarna skupština BiH na prijedlog Vijeća ministara BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Poslodavac je dužan radniku uz pisani dokaz dostaviti fotokopije prijave na obavezno osiguranje kao i svake promjene osiguranja koja se tiče radnika u skladu sa zakonom o radu FBiH:",
        options: [
            "U roku od 90 dana",
            "U roku od mjesec dana od dana zaključenja ugovora",
            "Odmah na početku rada"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Zakonodavnu vlast u RS vrši:",
        options: [
            "Narodna skupština i Ustavni sud",
            "Narodna skupština i Vijeće naroda",
            "Predsjednik Republike"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Dom naroda PS BiH se može raspustiti:",
        options: [
            "U slučaju da se dom ne sastaje duže od šest mjeseci",
            "Odlukom Predsjedništva BiH ili od strane samog Doma pod uslovom utvrđenim Ustavom BiH",
            "Ako Dom naroda ne usvoji Budžet"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Predsjednik i potpredsjednik Federacije biraju se:",
        options: [
            "Od strane Domova Parlamenta Federacije",
            "Neposrednim izborima",
            "Od strane Vlade Federacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu BiH će preuzeti dodatne nadležnosti između ostalog i u onim stvarima:",
        options: [
            "Koje su predvidene u aneksima 5-8 Općeg okvirnog sporazuma",
            "1-3",
            "9 i 10"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavni sud BiH je jedini nadležan da odluči o bilo kojem sporu koji se javlja po Ustavu BiH:",
        options: [
            "Između dva entiteta",
            "Između dva entiteta ili između BiH ili jednog ili oba entiteta i institucija BiH",
            "U slučajevima spora između institucija BiH i međunarodne zajednice"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vladu Federacije čine:",
        options: [
            "Premijer predsjednik Vlade, federalni ministri i tajnik Vlade Federacije",
            "Premijer predsjednik Vlade Federacije i federalni ministri",
            "Premijer, predsjednik, tajnik, savjetnici i federalni ministri"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Republička uprava za inspekcijske poslove je:",
        options: [
            "Samostalna republička upravna organizacija",
            "Samostalna republička uprava",
            "Uprava u sastavu Ministarstva pravde"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Samostalne federalne uprave su:",
        options: [
            "Federalna uprava civilne zaštite, Federalna uprava za geodetske i imovinsko pravne poslove, Arhiv Federacije",
            "Federalna uprava civilne zaštite, Federalna uprava za geodetske i imovinsko pravne poslove i Federalna uprava za inspekcijske poslove",
            "Federalna direkcija robnih rezervi, Arhiv"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Plata državnog službenika FBiH uvećava se za:",
        options: [
            "0,50",
            "0,60",
            "0,70"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Osiguranik u FBiH stiče pravo na starosnu penziju kad navrši:",
        options: [
            "65 godina života i najmanje 20 godina penzijskog staža ili kada navrši 40 godina penzijskog staža bez obzira na godine života",
            "60 godina i najmanje 35 godina penzijskog staža",
            "65 godina života i 35 godina penzijskog staža"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa Zakonom o radu u institucijama BiH za vrijeme trudnoće, porodaja, njege djeteta, žena ima pravo na porodajno odsustvo u trajanju od:",
        options: [
            "Šest mjeseci neprekidno",
            "12 mjeseci neprekidno",
            "16 mjeseci neprekidno"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ukoliko poslodavac ne zaključi ugovor o radu na neodređeno vrijeme sa zaposlenikom u pismenoj formi u kojem roku je dužan zaposleniku uručiti pismenu izjavu koja sadrži podatke iz zakona, kolektivnog ugovora ili pravilnika o radu:",
        options: [
            "U roku od jednog mjeseca od dana kada zaposlenik otpočne da radi kod poslodavca",
            "U roku od dva mjeseci",
            "Do kraja kalendarske godine u kojoj je otpočeo da radi kod poslodavca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu o Agenciji za prevenciju korupcije i koordinaciju borbe protiv korupcije BiH, direktora Agencije imenuju:",
        options: [
            "Vijeće ministara BiH na prijedlog komisije za izbor i praćenje rada Agencije",
            "Ministar sigurnosti",
            "Parlamentarna skupština BiH na prijedlog Komisije za izbor i praćenje rada Agencije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Državni službenik koji je razriješen dužnosti može podnijeti žalbu Zakon o državnoj službi FBiH:",
        options: [
            "Odboru za žalbe FBiH u roku od 30 dana",
            "Odboru za žalbe FBiH u roku od 15 dana od dana prijema odluke o razrješenju",
            "Vladi FBiH u roku od 15 dana"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Protiv rješenja domova Parlamenta Federacije i zakonodavnog organa grada u prvom stepenu:",
        options: [
            "Odluke Vlada FBiH",
            "Odluke komisije",
            "Ne može se izjaviti žalba"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ako nadležni organ za vrijeme sudskog postupka donese drugi upravni akt kojim se mijenja ili stavlja van snage upravni akt protiv kog je pokrenut upravni spor pokrenut sud će:",
        options: [
            "Obustaviti postupak čim sazna da je takav akt donesen",
            "Odbaciti tužbu",
            "Obustaviti postupak ako tužitelj izjavi da je zadovoljan novim aktom ili se ne izjasni u roku koji odredi sud"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prema Zakonu o upravnom postupku FBiH drugostepeno rješenje kojim je izmijenjeno prvostepeno rješenje postaje izvršno:",
        options: [
            "Ako se protiv tog rješenja ne može pokrenuti upravni spor",
            "U roku od 15 dana od dana donošenja",
            "Kada se dostavi stranci"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Novčane kazne izrečene u postupku izvršenja naplaćuju se:",
        options: [
            "U korist Federacije, kantona, općine gradova ovisno čiji je organ izrekao kaznu",
            "U korist organa koji provodi izvršenje",
            "U korist stranke koja predlaže izvršenje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravo na žalbu na prvostepeno rješenje federalnih organa uprave i federalnih ustanova uređuje se:",
        options: [
            "Federalnim zakonom kojim se određuje nadležnost federalnog organa",
            "Federalnim zakonom iz odgovarajuće upravne oblasti",
            "Propisom o unutrašnjoj organizaciji uprave"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Punomoć za zastupanje u upravnom postupku prema Zakonu o upravnom postupku FBiH se može dati?",
        options: [
            "Samo pismeno i to zakonskom zastupniku",
            "Pismeno ili usmeno u zapisnik koji sastavlja službena osoba koja vodi postupak",
            "Samo odvjetniku ili licu kojeg on odredi"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Da li se na primljene račune stavlja otisak prijemnog žiga?",
        options: [
            "Da, stavlja se",
            "Ne, ne stavlja se",
            "Samo po nalogu šefa"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predmeti i akti stavljeni u arhivu izdaju se iz arhiva samo uz:",
        options: [
            "Revers",
            "Bez reversa",
            "Potvrdu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pošta koja se oprema preko poštanske službe razvrstava se:",
        options: [
            "U obične i povjerljive pošiljke",
            "U obične i preporučene pošiljke",
            "Obične i avionske"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koja država članica Evropske unije ima najveći broj zastupnika u Evropskom parlamentu?",
        options: [
            "Njemačka",
            "Ujedinjena Kraljevstva",
            "Italija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "IPA kao EU instrument predpristupne pomoći podijeljena je na nekoliko komponenti koje se odnose na potencijalne kandidate i na zemlje kandidate o kojem broju komponenti je riječ:",
        options: [
            "5",
            "6",
            "7"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira zastupnike u Evropskom parlamentu?",
        options: [
            "Vlade država članica",
            "Građani",
            "Građani i vlade"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kapacitet javnih institucija dovoljan za ostvarenje političkih, ekonomskih i pravnih kriterija koje država mora ispuniti za članstvo u EU?",
        options: [
            "Madridski kriterij",
            "Kopenhagenski kriterij",
            "Schengenski kriterij"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ako organ primi nerazumljiv podnesak na koji način će postupiti?",
        options: [
            "Odredit će podnositelju rok u kojem je dužan podnesak učiniti razumljivim",
            "Uopće neće postupati po tom podnesku",
            "Odbacit će takav podnesak bez odlaganja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodilac organa uprave u FBiH može ovlastiti određenog službenika da može vršiti otvaranje i pregledanje pošte. O čemu donosi:",
        options: [
            "Posebno rješenje",
            "Instrukciju",
            "Naredbu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Građani koje države su na dva referenduma 1972 i 1994 glasovali protiv članstva u EU iako je njihova država od 1973 dio Europskog gospodarskog prostora?",
        options: [
            "Farskih otoka",
            "Švicarske",
            "Norveške"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Način rada, odlučivanja i druga pitanja od značaj za rad Vlade Brčko Distrikta BiH, osim zakonom uređuje:",
        options: [
            "Uredbom",
            "Pravilnikom",
            "Poslovnikom o radu Vlade"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Koliko inspektor, koji vrši poslove inspekcijskog nadzora, koji su organizirani u okviru mjerodavnosti organa uprave, mora imati radnog staža?",
        options: [
            "Najmanje 2 godine",
            "Najmanje tri godine nakon završene školske spreme",
            "Najmanje 5 godina ukupno"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema izbornom zakonu BiH članove Centralne izborne komisije imenuje:",
        options: [
            "Predstavnički dom Parlamentarne skupštine BiH",
            "Oba doma PS BiH",
            "Predsjedništvo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organi uprave BiH obavezni su Ombudsmanu za ljudska prava BiH na njegov zahtjev omogućiti:",
        options: [
            "Da nesmetano ispita njihovu djelatnost, odnosno rad državnih službenika u organu uprave",
            "Da izvrši inspekcijski nadzor",
            "Samo da ispita rad državnih službenika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja institucija Evropske unije predstavlja europske gradove i regije?",
        options: [
            "Komisija za državljanstvo regija",
            "Evropski regionalni i socijalni odbor",
            "Odbor regija"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Do kada Vlada Federacije može povući prijedlog zakona kojeg je podnijela Parlamentu Federacije?",
        options: [
            "Samo do otvaranja pretresa u domovima Parlamenta Federacije",
            "Do razmatranja prijedloga u pojedinostima",
            "U svako doba, ako tako odluči premijer"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema zakonu o radu RS, najnižu platu radnika utvrđuje Vlada RS:",
        options: [
            "Na prijedlog Ministarstva rada i socijalne politike RS",
            "Na prijedlog ekonomskog socijalnog savjeta RS",
            "Na prijedlog Sindikata"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Predstavnički dom Federacije ima 98 poslanika zastupnika.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "O zahtjevu za zaštitu sloboda i prava pojedinca zajamčenih Ustavom Federacije sud odlučuje:",
        options: [
            "Rješenjem",
            "Odlukom",
            "Presudom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši signiranje pošte u FBiH?",
        options: [
            "Šef pisarnice",
            "Rukovodilac organa uprave odnosno službenik ovlašten za otvaranje i pregledanje pošte",
            "Službenik koji vodi protokol"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Upravne sporove sukladno Zakonu o upravnim sporovima RS rješava:",
        options: [
            "Vrhovni sud RS",
            "Okružni sud",
            "Okružni sud ili Vrhovni sud RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Službena pisma EU su:",
        options: [
            "Latinica i ćirilica",
            "Latinica, bugarska ćirilica i grčki alfabet",
            "Latinica i grčki alfabet"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Nijedna osoba ne može biti lišena državljanstva BiH ili državljanstva entiteta:",
        options: [
            "Arbitrarno, po bilo kojem diskriminacijskom osnovu ili na drugi način",
            "Osim pod uvjetima utvrđenim zakonom",
            "Osim pravomoćnom presudom za teška krivična djela"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organ uprave i službe za upravu u FBiH u okviru kancelarijskog poslovanja vode:",
        options: [
            "Osnovne knjige evidencija o predmetima i aktima iz svoje nadležnosti",
            "Osnovne i pomoćne knjige evidencija o predmetima i aktima iz svoje nadležnosti",
            "Pomoćne knjige evidencija"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Program za podršku obrazovanju, osposobljavanju mladima i sportu kojim je objedinjeno sedam prethodnih programa EU u području obrazovanja zove se:",
        options: [
            "Erasmus +",
            "Eurodesk",
            "Youthpass"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema zakonu o upravnom postupku Federacije BiH, administrativno izvršenje, u pravilu provodi organ uprave:",
        options: [
            "Koji je u stvari rješavao u drugom stepenu",
            "Koji je u stvari rješavao u prvom stepenu",
            "Koji je donio izvršno rješenje"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko ima ministarstava u RS?",
        options: [
            "16",
            "18",
            "12"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Poslove uprave iz nadležnosti BiH obavljaju:",
        options: [
            "Ministarstva, upravne organizacije (samostalne i u sastavu ministarstva) i druge institucije BiH osnovane posebnim zakonom ili kojima je posebnim zakonom povjereno obavljanje poslova uprave",
            "Ministarstva i samostalne uprave BiH",
            "Ministarstva, uprave i upravne organizacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta se smatra noćnim radom u skladu sa zakonom o radu RS?",
        options: [
            "Rad između 22.00 časa i 06.00 časova narednog dana",
            "Između 23 i 07.00",
            "Između 22.00 i 5 časa narednog dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ukoliko se dokazivanje u upravnom postupku provodi vještačenjem:",
        options: [
            "Vještak nije dužan položiti zakletvu",
            "Vještak je dužan položiti zakletvu ukoliko traži službena osoba ili stranka",
            "Vještak je dužan položiti zakletvu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Ustavu BiH, Vijeće ministara čini:",
        options: [
            "Predsjedavajući i ministri",
            "Predsjedavajući, ministri i zamjenici",
            "Predsjedavajući, zamjenik Predsjedavajućeg, ministri i zamjenici ministara"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu o radu Federacije BiH maloljetni radnik ima pravo na godišnji odmor:",
        options: [
            "Najmanje 20 radnih dana",
            "Najmanje 24 radna dana",
            "Najmanje 18 radnih dana"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Osiguraniku sa stažom osiguranja sa uvećanim trajanjem u RS računa se svakih 12 mjeseci kao:",
        options: [
            "15 mjeseci staža osiguranja",
            "16 mjeseci",
            "18 mjeseci"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odbor državne službe FBiH i Agenciju za državnu službu FBiH osniva Vlada FBiH.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prije donošenja rješenja, stranci će se dati mogućnost da se izjasni o činjenicama i okolnostima:",
        options: [
            "Uvijek osim kad je zakonom dopušteno donijeti rješenje bez učešća stranke",
            "Ako to zahtjeva stranka",
            "Ako to ovlaštena službena osoba smatra da je to potrebno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavom BiH je predviđeno da će BiH preuzeti nadležnost:",
        options: [
            "U onim stvarima o kojima se postigne saglasnost entiteta",
            "U skladu sa ustavima entiteta, kantona",
            "U skladu sa ustavom BiH i ustavima entiteta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema zakonu o upravnom postupku Federacije BiH troškove postupka u vezi i izvršenjem snosi, u pravilu:",
        options: [
            "Izvrsitelj",
            "Stranka po čijem je prijedlogu izvršenje provedeno",
            "Organ uprave koji je vodio postupak"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sudije Vrhovnog suda Federacije imenuje:",
        options: [
            "Predlaže predsjednik Federacije uz saglasnost oba potpredsjednika",
            "Bira Parlament Federacije na prijedlog komisije za sudska imenovanja",
            "Visoko sudsko i tužilačko vijeće"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Poslove državne uprave na opštine u Republici Srpskoj mogu se prenijeti:",
        options: [
            "Zakonom",
            "Zakonom i uredbom",
            "Uredbom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko traje pripravništvo u organu državne uprave za VSS u FBiH?",
        options: [
            "12 mjeseci",
            "6 mjeseci",
            "9 mjeseci"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakon o državnoj službi u institucijama BiH, sekretari domova Parlamentarne skupštine:",
        options: [
            "Nisu državni službenici",
            "Imaju status rukovodećih",
            "Imaju status rukovodećih na mandatu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zamjenici ministara u Vijeću ministara BiH u odnosu na ministra su:",
        options: [
            "Iz reda istog konstitutivnog naroda",
            "Iz različitih konstitutivnih naroda",
            "Iz reda ostalih"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ko u organima uprave za službu otvara povjerljivu i strogo povjerljivu poštu primljenu van radnog vremena i u dane kada se ne radi?",
        options: [
            "Dežurni službenik ako u organu uprave odnosno službe za upravu postoji dežurna služba",
            "Dežurni službenik ako u organu uprave odnosno službe za upravu postoji dežurna služba i to samo ako je za to posebno pismeno ovlašten",
            "Šef pisarnice"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ministre u Vijeću ministara imenuje:",
        options: [
            "Predsjedništvo BiH na prijedlog političkih stranaka",
            "Predsjedavajući Vijeća ministara BiH",
            "PS BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kada je postupak koji je pokrenut po službenoj dužnosti okončan povoljno za stranku, troškove postupka snosi?",
        options: [
            "Organi koji je pokrenuo postupak",
            "Svako snosi svoje troškove",
            "Stranka"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kojoj instituciji Europske unije zemlja kandidatkinja podnosi zahtjev za članstvo?",
        options: [
            "Vijeću Europske unije",
            "Evropskom vijeću",
            "Evropskoj komisiji"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vitalni nacionalni interes konstitutivnih naroda:",
        options: [
            "Definiran je u Ustavu Federacije BiH",
            "Utvrđuje se po svojoj procjeni Dom Naroda",
            "Utvrđen je Odlukom ustavnog suda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Službeni jezici Evropske unije su službeni jezici država članica:",
        options: [
            "24 službena jezika",
            "27 jezika",
            "12 jezika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko donosi rješenje o određivanju organizacionih jedinica kojim se pošta dostavlja u rad:",
        options: [
            "Rukovodilac organa uprave",
            "Šef pisarnice",
            "Sekretar organa uprave"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kvorum za rad Doma naroda PS BiH čini:",
        options: [
            "9 delegata",
            "15 delegata",
            "Većina od ukupnog broja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Otkazni rok u skladu sa zakonom o radu FBiH ne može biti:",
        options: [
            "Kraći od sedam dana u slučaju da radnik otkazuje ugovor o radu ni kraći od 14 dana u slučaju da poslodavac otkazuje ugovor o radu",
            "Kraći od sedam dana kada otkaz daje radnik ni kraći od 15 dana od strane poslodavca",
            "Kraći od deset dana od strane radnika ni kraći od 14 dana od strane poslodavca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu BiH entitetima nije dozvoljeno:",
        options: [
            "Provodenje bilo kakve kontrole na granici između entiteta",
            "Držanje oružanih snaga",
            "Sklapanje bilo kakvih sporazuma međunarodnog karaktera"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na osnovu Zakona o državnoj službi državni službenik koji je preventivno suspendovan, za vrijeme trajanja suspenzije prima platu u iznosu:",
        options: [
            "Dvije trećine svoje plate",
            "Puni iznos plate",
            "80 posto od prosječne plate"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Institucionalna ravnoteža je princip na osnovu kojeg su uređeni odnosi među institucijama EU, koji podrazumijevaju da institucije EU djeluju isključivo u okviru ovlasti koje su im date ugovorima. Koja institucija je nadležna za poštivanje ovog principa?",
        options: [
            "Sud Evropske unije",
            "Evropska komisija",
            "Vijeće EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Plata radnika RS prema Zakonu o radu RS uvećava se za svaku godinu staža:",
        options: [
            "0,60",
            "0,50",
            "0,30"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Kojim aktom starješina organa uprave u RS ovlašćuje radnika koji je neposredno odgovoran za vođenje kancelarijskog poslovanja?",
        options: [
            "Rješenjem",
            "Odlukom",
            "Uputstvom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za procesno nesposobnu fizičku osobu radnje u postupku obavlja?",
        options: [
            "Radnje može obavljati i sama osoba",
            "Zakonski zastupnik",
            "Punomoćnik"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "U zakonu o općem upravnom postupku RS protiv rješenja Vlade RS:",
        options: [
            "Može izjaviti žalba samo ako to odobri predsjednik RS",
            "Može izjaviti žalba",
            "Ne može izjaviti žalba"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U izvršavanju svojih nadležnosti, gradonačelnik u smislu Zakona o Vladi Brčko distrikta BiH, ne donosi sljedeće akte:",
        options: [
            "Zakone",
            "Odluke i pravilnike",
            "Odluke, organizacioni plan, instrukcije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa zakonom državnim službenicima RS, prekovremeni rad može trajati najviše:",
        options: [
            "10 sati sedmično odnosno 180 sati godišnje",
            "10 sati odnosno 150 sati godišnje",
            "15 sati sedmično"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je uvjerenje koje izdaje nadležni organ uprave upravni akt?",
        options: [
            "Nije",
            "Da",
            "Da ukoliko je izdato na osnovu službene evidencije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Izvršenje radi ispunjenja novčanih potraživanja u pravilu se provodi:",
        options: [
            "Sudskim putem",
            "Administrativnim putem a provodi ga organ uprave",
            "Izvršenjem putem drugih osoba"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko rukuje predmetima stavljenim u arhivu u organima državne službe FBiH?",
        options: [
            "Šef pisarnice",
            "Ovlašteni zaposlenik pisarnice",
            "Službenik koji je stavio predmet u arhivu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Sukob nadležnosti u upravnom postupku između organa uprave dva ili više kantona u FBiH rješava?",
        options: [
            "Međukantonalno vijeće",
            "Vrhovni sud Federacije",
            "Vlada FBiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vijeće ministara BiH će podnijeti ostavku ukoliko mu:",
        options: [
            "Parlamentarna skupština BiH izglasa nepovjerenje",
            "Predsjedništvo BiH",
            "Predstavnički dom PS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U osnovne knjige evidencije o predmetima i aktima organa uprave FBiH spada:",
        options: [
            "Djelovodnik predmeta i akata",
            "Interna dostavna knjiga",
            "Abecedni imenik predmeta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Acquis Communautaire je komunitarno pravo koje ima supremaciju u odnosu na zakonodavstvo država članica i neposredno dejstvo neposrednu primjenu.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U nadležnosti Vlade Federacije BiH za evropske integracije ne spada:",
        options: [
            "Ocjenjivanje usklađenosti federalnih propisa sa zakonodavstom Evropske unije, evropskim principima i standardima",
            "Koordinacija programa pomoći EU",
            "Koordinacija aktivnosti, nadzor i izvještavanja o provedbi Sporazuma o stabilizaciji i pridruživanju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporazum o stabilizaciji i pridruživanju između BiH i EU potpisan je 16.6.2008, a stupio je na snagu:",
        options: [
            "2015 godine",
            "2013 godine",
            "2009 godine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja od sljedećih zemalja ima status kandidata za članstvo u EU?",
        options: [
            "Turska",
            "Gruzija",
            "Norveška"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje rješenje je pravomoćno u upravnom postupku?",
        options: [
            "Ono protiv kojeg se ne može izjaviti žalba niti pokrenuti upravni spor",
            "Ono protiv kojeg se može izjaviti žalba",
            "Ono koje je doneseno u drugom stepenu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Amandmani na Ustav Federacije usvajaju se:",
        options: [
            "U Domu naroda prostom većinom, uključujući većinu bošnjačkih, hrvatskih i srpskih delegata i u Predstavničkom domu dvotrećinskom većinom poslanika",
            "Dvotrećinskom većinom u oba doma Parlamenta Federacije",
            "Dvotrećinskom većinom na plenarnoj sjednici Parlamenta Federacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Osnovna organizacijska jedinica ima:",
        options: [
            "Najmanje tri izvršioca s tim što se u taj broj ne uračunava rukovodilac organizacijske jedinice",
            "Najmanje tri izvršioca zajedno sa rukovodiocem koji se uračunava u taj broj izvršilaca",
            "Najmanje pet izvršilaca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Javni organ u smislu Zakona o slobodi i pristupa informacijama u FBiH dužan je objaviti:",
        options: [
            "Vodič za pristup informacijama",
            "Vodič za pristup informacijama i uz naknadu dostaviti podnosiocu zahtjeva za pristup informacijama",
            "Pravilnik za pristup informacijama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši raspoređivanje akata koji se obrađuju u elektronskom obliku u organima uprave u RS?",
        options: [
            "Šef pisarnice",
            "Radnik koji te akte evidentira u bazi podataka",
            "Starješina organa uprave"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Članovi Vijeća Europske unije su:",
        options: [
            "Jedan ministar iz svake države članice",
            "Čelnici država i vlada svake države članice",
            "Jedan šef države svake države članice"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EPSO ili Evropski ured za odabir zaposlenika vrši jednu od sljedećih funkcija:",
        options: [
            "Vrši odabir osoblja unutar svih institucija EU",
            "Vrši odabir osoblja samo unutar Evropske komisije",
            "Vrši odabir osoblja unutar svih međunarodnih institucija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U osnovne knjige evidencija o predmetima i aktima organa uprave i službi za upravu spada:",
        options: [
            "Upisnik drugostepenih predmeta upravnog postupka",
            "Personalni dosje",
            "Fascikla predmeta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Povrat u predašnje stanje ne može se tražiti:",
        options: [
            "Poslije isteka tri mjeseca od dana propuštanja",
            "Poslije isteka šest mjeseci od dana propuštanja",
            "Poslije isteka 30 dana od dana propuštanja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovorom iz Amsterdama, potpisanim 17.6.1997 u zakonodavstvo EU integrisan je:",
        options: [
            "Schengenski sporazum",
            "Ugovor iz Nice",
            "Jedinstveni europski akt"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ukoliko je stranka pogrešno upućena da ne može izjaviti žalbu rok za žalbu teče:",
        options: [
            "Od dana dostavljanja rješenja kojim je sud tužbu odbacio kao nedopuštenu",
            "Od dana donošenja rješenja kojim je sud tužbu odbacio kao nedopuštenu",
            "Od dana dostavljanja prvostepenog rješenja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Ustavu BiH, entitet može sklapati sporazume sa državama i međunarodnim organizacijama uz saglasnost Parlamentarne skupštine koja može zakonom predvidjeti da za određene vrste sporazuma takva saglasnost nije potrebna.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Federalna uprava za zaštitu od zračenja i radijacijsku sigurnost je:",
        options: [
            "U sastavu Federalnog ministarstva zdravstva",
            "U sastavu Federalnog ministarstva energije, rudarstva i industrije",
            "Samostalna federalna uprava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mjesna zajednica u smislu Zakona o principima lokalne samouprave u FBiH:",
        options: [
            "Nema svojstvo pravnog lica",
            "Ima svojstvo pravnog lica u okviru prava i dužnosti utvrđenih statutom i odlukom o osnivanju",
            "Ima svojstvo pravnog lica u okviru prava i dužnosti utvrđenih uredbom o osnivanju"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Protiv Odluke Disciplinske komisije državni službenik FBiH ima pravo izjaviti žalbu Odboru državne službe za žalbe FBiH radi preispitivanje odluke u roku od:",
        options: [
            "30 dana od dana prijema odluke Disciplinske komisije",
            "8 dana od dana prijema Odluke",
            "15 dana od dana prijema odluke Disciplinske komisije"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Predmeti i akti koji su zavedeni u djelovodnik za strogo i povjerljivu poštu ulazu se u omot crvene boje.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko potpisuje potvrdu o prijemu podneska stranke koja osobno predaje podnesak i zahtijeva izdavanje potvrde?",
        options: [
            "Službenik koji je podnesak primio uz stavljanje otiska pečata organa odnosno službe",
            "Rukovodilac organa službe",
            "Šef pisarnice"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U vitalni nacionalni interes po Ustavu Federacije osim drugih pitanja koja jedan klub 2/3 većinom proglasi za pitanje vitalnog nacionalnog interesa ne spada:",
        options: [
            "Sistem javnog informisanja",
            "Socijalna politika",
            "Organizacija organa javne vlasti"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prvostepeni organ u upravnom postupku može sam riješiti žalbu?",
        options: [
            "Ako nađe da je žalba osnovana u cijelosti a nije potrebno provoditi novi ispitni postupak",
            "Ako nema drugostepenog organa",
            "Ako se radi o jednostavnijem postupku, a u cilju smanjenja troškova uz saglasnost suprotne strane"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "O izuzećima službene osobe koja je ovlaštena da rješava ili da obavlja pojedine radnje u postupku u federalnom organu uprave i federalne ustanove odlučuje:",
        options: [
            "Rukovodilac koji rukovodi tim organom odnosno ustanovom",
            "Službena osoba ovlaštena od strane rukovodioca",
            "Drugostepeni organ"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Disciplinski postupak protiv državnog službenika u skladu sa Zakonom o državnoj službi FBiH vodi:",
        options: [
            "Disciplinska komisija",
            "ADS FBiH",
            "Rukovodilac organa"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke Odbora državne službe za žalbe FBiH dostaviće se podnosiocu u roku od:",
        options: [
            "Petnaest dana od dana donošenja",
            "Sedam dana od dana donošenja",
            "Osam dana od dana donošenja"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Mapa puta Road Map naziv je za dokument kojim je definirano 18 ključnih uvjeta koje BiH trebala ispuniti kako bi se pristupilo izradi Studije izvodljivosti za početak pregovora Sporazuma o stabilizaciji i pridruživanju, a objavljen je:",
        options: [
            "2000",
            "2007",
            "1999"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U slučajevima diskriminacije u smislu odredbi zakona o radu Brčko Distrikta BiH, radnik kao i lice koje traži zaposlenje mogu od poslodavca zahtijevati zaštitu u roku od:",
        options: [
            "15 dana od dana saznanja za diskriminaciju",
            "20 dana",
            "30 dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Radnik, za svaku kalendarsku godinu ima pravo na plaćeni godišnji odmor u trajanju od:",
        options: [
            "Najmanje 15 radnih dana, a najduže 30 radnih dana",
            "Najmanje 20 radnih dana a najduže 35 radnih dana",
            "Najmanje 20 radnih dana a najduže 30 radnih dana"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Prvo proširenje EEZ je bilo 1973 godine i pristupili su:",
        options: [
            "Portugal i Španjolska",
            "Danska, Irska i Ujedinjeno Kraljevstvo",
            "Austrija, Finska i Švedska"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Nadležnosti Centralne banke BiH:",
        options: [
            "Određuje Parlamentarna skupština uz određene uvjete utvrđene Ustavom",
            "Upravni odbor Centralne banke BiH",
            "Parlamentarna skupština na prijedlog Predsjedništva"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prijem i otprema računa i drugih finansijskih akata i dokumentacija u rad organizacionoj jedinici se dostavlja putem:",
        options: [
            "Knjige za otpremu računa",
            "Knjige primljenih računa",
            "Knjige za ličnu poštu"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Amandmanom na Ustav Federacije:",
        options: [
            "Ne mogu se ukinuti niti umanjiti nijedno od prava i sloboda utvrđenih u Ustavu Federacije",
            "Ne može se izmijeniti oblik federalnog uređenja",
            "Mogu se mijenjati sve odredbe Federacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sudije Evropskog suda za ljudska prava:",
        options: [
            "Bira Parlamentarna skupština Vijeća Evrope većinom glasova sa liste od tri kandidata koje imenuje visoka strana ugovornica",
            "Bira Komitet ministara Vijeća Evrope većinom glasova",
            "Biraju tijela visoke strane ugovornice u skladu sa nacionalnim propisima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv kojeg rješenja se može izjaviti žalba?",
        options: [
            "U pravilu, protiv rješenja donesenog u prvom stupnju kao i kad prvostupanjski organ nije u određenom roku donio rješenje o zahtjevu stranke",
            "Protiv rješenja koje donosi drugostepeni organ kada je to rješenje konačno",
            "Protiv rješenja koje donosi drugostepeni organ kada je to rješenje pravomoćno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Princip ekspeditivnosti podrazumijeva da svaka radnja u kancelarijskom poslovanju mora biti na vrijeme započeta i u što kraćem roku završena.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li službena osoba biti svjedok u postupku?",
        options: [
            "Ne može",
            "Može",
            "Može uz određena ograničenja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U skladu sa zakonom o radu FBiH prekovremeni rad može trajati najduže:",
        options: [
            "8 sati sedmično",
            "10 sati",
            "15 sati"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jedina ovlaštena institucija za monetarnu politiku na cijelom području BiH?",
        options: [
            "Vijeće ministara BiH",
            "Centralna banka BiH",
            "Ministarstvo finansija BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prema zakonu o državnoj službi FBiH rukovodeći državni službenik koji je imenovan na položaj u bilo kojem zakonodavnom ili izvršnom organu na bilo kojem nivou vlasti u BiH:",
        options: [
            "Podnosi ostavku na mjestu u državnoj službi",
            "Ima pravo na odsustvo iz državne službe od trenutka kada je imenovan",
            "Vraća se na isto ili slično radno mjesto po isteku funkcije na koju je imenovan"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U postupcima pred organima uprave BiH stranke se:",
        options: [
            "Mogu koristiti i drugim jezikom ako taj jezik nije jedan od službenih jezika",
            "Mogu koristiti i drugim jezikom ako taj jezik nije jedan od službenih jezika i to o trošku organa uprave pred kojim se vodi postupak",
            "Mogu koristiti i drugim jezikom ako taj jezik nije jedan od službenih jezika ali isključivo o svom trošku"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "1. januara 2002 godine je uvedena nova valuta euro koji je zamijenio stare valute u:",
        options: [
            "12 država",
            "16 država",
            "11 država"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Drugi stub EU obuhvata:",
        options: [
            "Zajedničku vanjsku i sigurnosnu politiku to jest segment vanjske politike",
            "Segment pravosuđa",
            "Ekonomski segment"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Inspekcijske poslove osim poslova upravne inspekcije na teritoriji FBiH obavlja:",
        options: [
            "Finansijska policija u saradnji sa upravnom inspekcijom",
            "Federalna uprava za inspekcijske poslove",
            "Federalni upravni inspektorat u okviru Federalnog ministarstva pravde"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Treće proširenje EEZ je bilo 1986 godine i pristupile su:",
        options: [
            "Portugal i Španija",
            "Austrija, Finska i Švedska",
            "Danska, Irska i Ujedinjeno Kraljevstvo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Materijalnu štetu koju u vršenju državne službe učini namjerno ili krajnjom nepažnjom u skladu sa Zakonom o državnoj službi FBiH državni službenik:",
        options: [
            "Dužan je nadoknaditi samo u visini plate",
            "Nije dužan nadoknaditi",
            "Dužan je nadoknaditi"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Može li se izvršiti rješenje dok traje rok za žalbu?",
        options: [
            "Može",
            "Ne može",
            "Može na zahtjev stranke"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Direktora odnosno rukovodioca i zamjenika direktora samostalne upravne organizacije imenuje:",
        options: [
            "Parlamentarna skupština BiH na prijedlog Vijeća ministara BiH",
            "Predsjedavajući Vijeća ministara BiH na prijedlog Vijeća ministara BiH",
            "Vijeće ministara BiH na prijedlog predsjedavajućeg Vijeća ministara BiH"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "U prvih šest godina poslije stupanja na snagu Ustava BiH, Centralna banka BiH ne može:",
        options: [
            "Davati kredite štampanjem novca niti funkcionirati kao valutna komisija",
            "Vršiti zaduživanje bez odobrenja PS BiH",
            "Sklapati međunarodne sporazume o zaduživanju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke Odbora državne službe za žalbe su:",
        options: [
            "Konačne i ne mogu biti preispitivane od strane suda",
            "Konačne i mogu biti preispitivane od strane nadležnog suda",
            "Konačne i mogu biti preispitivane od strane Vlade FBiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Treći stub EU obuhvata:",
        options: [
            "Segment pravosuđa to jest saradnju u pravosuđu i unutrašnjim sudovima",
            "Zajedničku vanjsku i sigurnosnu politiku",
            "Ekonomski segment"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada će se zavesiti akti koji se iz opravdanih razloga nisu mogli zavesiti istog dana kada su primljeni:",
        options: [
            "Najkasnije prvog narednog radnog dana prije zavodenja nove pošte i to pod datumom kada su akti primljeni",
            "Kada to naredi šef pisarnice",
            "Najkasnije za dva dana od dana prispijeća akta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Administrativno tehničke i stručne poslove za Centralnu izbornu komisiju BiH obavlja:",
        options: [
            "Ministarstvo pravde BiH",
            "Sekreterijat Centralne izborne komisije BiH",
            "Sekreterijat PS BiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Vijeće Evropske unije čini:",
        options: [
            "Ministri Vlada EU koji se sastaju kako bi raspravljali o zakonima, donosili ih i mijenjali",
            "Predsjednici država članica Evropske unije koji donose ključne odluke",
            "Članovi Evropskog parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ombudsmeni Federacije BiH imaju pravo u vezi s postupcima:",
        options: [
            "Pokretati postupke pred nadležnim sudovima, intervenirati u postupcima koji su u toku i prisustvovati sudskim i upravnim postupcima",
            "Samo intervenirati u postupcima koji su u toku",
            "Samo pokretati postupke pred nadležnim sudovima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropsko Vijeće je:",
        options: [
            "Institucija EU koja donosi zakonodavne propise i regulira trgovinske odnose",
            "Institucija EU koja definira opće političke smjernice i prioritete EU",
            "Savjetodavno tijelo EU"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kada se Predsjednik Federacije može smijeniti?",
        options: [
            "Kada odluči da ukine kantonalne vlade na vlastitu inicijativu",
            "Ukoliko je prekršio zakletvu ili je iz drugih razloga nedostojan vršenja te funkcije",
            "Kada promijeni himnu Federacije bez saglasnosti Parlamenta"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ponavljanje postupka u upravnom sporu se pokreće:",
        options: [
            "Zahtjevom",
            "Žalbom",
            "Automatski bez potrebe za posebnim zahtjevom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EUROSTAT je?",
        options: [
            "Agencija za ekonomske analize EU",
            "Statistički ured Evropskih zajednica čiji je zadatak obrada i objavljivanje uporedivih statističkih podataka na nivou EU",
            "Odjel za istraživanje tržišta EU"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koji Ministar vanjskih poslova je potpisao Ugovor o čeliku i uglju?",
        options: [
            "Robert Schuman",
            "Jean Monnet",
            "Konrad Adenauer"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je IPA?",
        options: [
            "Instrument predpristupne pomoći",
            "Inovativni plan akcije",
            "Integracija politika za adaptaciju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja zemlja je 2016 godine glasovala za izlazak iz EU?",
        options: [
            "Velika Britanija",
            "Francuska",
            "Španija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko imenuje članove disciplinske komisije?",
        options: [
            "ADS FBiH",
            "Ministarstvo za rad",
            "Direktor organizacije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uvjerenje i potvrde spadaju pod upravne akte?",
        options: [
            "Spadaju ali samo u određenim slučajevima",
            "Ne spadaju",
            "Spadaju ali samo u postupku koji je završen"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Stranka u postupku može odustati od zahtjeva:",
        options: [
            "U toku cijelog postupka",
            "Samo na početku postupka",
            "Samo uz saglasnost druge strane"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U slučaju lakših povreda radnih obaveza ugovor o radu se ne može otkazati bez:",
        options: [
            "Odluke upravnog odbora",
            "Odborenja sindikata",
            "Prethodnog izjašnjenja zaposlenika"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Gdje se piše dopis?",
        options: [
            "Na memorandumu",
            "Na običnom papiru",
            "U zapisniku"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U omot zelene boje ulaze se koji se zavode u upisnik prvostepenih predmeta i akata po kojima se upravni postupak pokreće po zahtjevu stranke, a plava boja po službenoj dužnosti.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta se podrazumijeva pod noćnim radom?",
        options: [
            "22 h - 06 h",
            "21 h - 05 h",
            "23 h - 07 h"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira policijskog komesara?",
        options: [
            "Neovisni odbor",
            "Ministar unutrašnjih poslova",
            "Narodna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je donio Uredbu o kancelarijskom poslovanju FBiH?",
        options: [
            "Parlament FBiH",
            "Vlada FBiH na prijedlog federalnog ministra pravde",
            "Predsjednik FBiH"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Protiv odluke izborne komisije može se uložiti žalba:",
        options: [
            "Apelacionom odjeljenju",
            "Evropskom sudu za ljudska prava",
            "Vrhovnom sudu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je revers?",
        options: [
            "Privremena evidencija o rukovanju arhivskim predmetima",
            "Zahtjev za vraćanje dokumenta",
            "Izvještaj o pregledu arhivskih materijala"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koliko faza se sastoji ovjeravanje rukopisa i potpisa?",
        options: [
            "Četiri",
            "Dvije",
            "Tri"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Klasifikacija predmeta i akata u RS:",
        options: [
            "Prema bojama omota",
            "Od 0 do 9",
            "Od A do F"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "O statusnim pitanjima službenika i namještenika odlučuje:",
        options: [
            "Upravni odbor",
            "Vlada",
            "Rukovodilac organa uprave"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Razmjena studenata kojim programom se obavlja?",
        options: [
            "Erasmus",
            "Comenius",
            "Tempus"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vodi rokovnik predmeta u organima službe za upravu?",
        options: [
            "Rukovodilac sektora",
            "Službenik pisarnice",
            "Glavni sekretar"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Protiv rješenja Vlade RS ne može se izjaviti žalba.",
        options: [
            "Tačno",
            "Netačno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucija EU koja određuje opće političko usmjerenje?",
        options: [
            "Savjet EU",
            "Evropsko Vijeće",
            "Evropska komisija"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kada se i na koji način razvrstavaju upravni akti u RS?",
        options: [
            "Po vrstama upravnih odluka i mjera",
            "Primljene akte ovlašteni radnik razvrstava na predmete upravnog postupka i na ostale akte predmeta neupravnog postupka",
            "Primljene akte razvrstava rukovodilac"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Postupak ovjeravanja potpisa, rukopisa i prijepisa uređen je:",
        options: [
            "Zakonom i uputstvom",
            "Uredbom",
            "Uredbom i uputstvom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o sukobu nadležnosti između Distrikta Brčko i institucija BiH?",
        options: [
            "Ustavni sud BiH",
            "Predsjedništvo BiH",
            "Vijeće ministara BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organ uprave propisuje bliže pravila i uputstva za rad?",
        options: [
            "Instrukcijama",
            "Pravilnicima",
            "Uredbama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ocjenjivanje službenika u RS vrši se svakih?",
        options: [
            "6 mjeseci",
            "12 mjeseci",
            "3 mjeseca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koju knjigu se zavode računi?",
        options: [
            "Knjiga finansijskih transakcija",
            "Knjiga prijema i isporuke računa",
            "Otpremna knjiga računa i drugih finansijskih sredstava"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Najmanja država površinom u EU?",
        options: [
            "Slovenija a Italija je najveća država",
            "Luksemburg a Španija je najveća država",
            "Malta a Francuska je najveća država površinom u EU"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Pripravnici imaju pravo na platu od:",
        options: [
            "80%",
            "70%",
            "100%"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko maloljetna osoba može da radi u FBiH puno radno vrijeme?",
        options: [
            "30 sati",
            "35 sati",
            "40 sati"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Mandat sudija Ustavnog suda:",
        options: [
            "U prvom sazivu je mandat trajao 5 godina, a sudije kasnijeg saziva mogu obavljati svoje dužnosti do 70 godina",
            "Traje 5 godina sa mogućnošću reizbora",
            "Traje do 65 godina starosti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sekretar Vlade FBiH:",
        options: [
            "Imenovan je od strane premijera i odgovara samo njemu",
            "Ima status državnog službenika",
            "Nije državni službenik, a Vlada FBiH imenuje i razrješava sekretara, a za svoj rad odgovara Vladi, Premijeru i zamjeniku Premijera"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Koji je moto ili slogan EU?",
        options: [
            "Ujedinjeni u raznolikosti",
            "Sloboda, jednakost, solidarnost",
            "Zajedno za bolju budućnost"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv rješenja Upravnog inspektorata poslodavac i zaposlenik mogu izjaviti žalbu:",
        options: [
            "Ministru Ministarstva pravde BiH",
            "Sudu BiH",
            "Vijeću ministara BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira Europski parlament?",
        options: [
            "Biraju ga glasači izravno",
            "Biraju ga nacionalni parlamenti",
            "Bira ga Vijeće EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se otisak prijemnog štambilja stavlja na prilog dostavljen uz akt:",
        options: [
            "Da",
            "Ne",
            "Samo ako je akt službeni"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Kome se podnosi zahtjev za članstvo EU?",
        options: [
            "rotirajućem predsjednistvu Vijeća EU",
            "Europskom parlamentu",
            "Europskoj komisiji"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Otkazni rok kada zaposlenik otkazuje ugovor o radu ne može biti kraći od:",
        options: [
            "7 dana",
            "14 dana",
            "30 dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko određuje, čuva i odobrava izradu pečata?",
        options: [
            "Ministarstvo pravde BiH",
            "Predsjedništvo BiH",
            "Vijeće ministara BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Himna EU:",
        options: [
            "Oda radosti",
            "Oda slobodi",
            "Oda Europi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlje koje su potpisale ugovor o čeliku?",
        options: [
            "Zapadna Njemačka, Francuska, Belgija, Nizozemska, Luksemburg i Italija",
            "Njemačka, Francuska, Italija, Španjolska, Portugal",
            "Francuska, Belgija, Nizozemska, Luksemburg, Italija, UK"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski parlament ima tri uloge:",
        options: [
            "donosi zakone, nadzire rad institucija EU, dijeli ovlasti nad budžetom EU",
            "donosi zakone, bira predsjednika EU, nadzire vanjsku politiku",
            "određuje monetarnu politiku, nadzire trgovinu, donosi zakone"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je uveo deset prioriteta za EU?",
        options: [
            "Jean Claude Juncker",
            "Ursula von der Leyen",
            "José Manuel Barroso"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Svrha potpisivanja Lisabonskog ugovora:",
        options: [
            "stvaranje novih upravljačkih struktura i pojednostavljenje metoda rada",
            "uvođenje zajedničke valute",
            "proširenje EU na istočne zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Isključive nadležnosti Europske Unije:",
        options: [
            "Carinska, monetarna i trgovinska politika",
            "Obrazovanje, kultura i turizam",
            "Unutarnja sigurnost i policijska suradnja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja država članica EU ima najviše zastupnika u Europskom parlamentu?",
        options: [
            "Njemačka",
            "Francuska",
            "Italija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Temeljni stubovi jedinstvenog tržišta EU:",
        options: [
            "kretanje ljudi, roba, usluga i kapitala",
            "zajednička valuta, zajednička politika, zajednički tržišni propisi",
            "slobodna trgovina, zajednička carina, zajednička poljoprivredna politika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi formalni ugovorni odnos između BiH i EU?",
        options: [
            "Sporazum o stabilizaciji i pridruživanju",
            "Ugovor o trgovinskoj suradnji",
            "Ugovor o pridruživanju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Članovi Vijeća EU su:",
        options: [
            "Jedan ministar iz svake države članice",
            "Predsjednici vlada svih država članica",
            "Zastupnici iz svake države članice"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kvorum za rad Doma PS BiH čine:",
        options: [
            "većina od ukupnog broja delegata Doma naroda",
            "dvotrećinska većina",
            "svi delegati"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustav BiH:",
        options: [
            "Ima jedan amandman kojim je definiran status Brčko Distrikta BiH",
            "Nema amandmana",
            "Ima tri amandmana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Godišnji budžet PS BiH predlaže:",
        options: [
            "Vijeće ministara uz saglasnost Predsjedništva BiH",
            "Ministarstvo finansija BiH",
            "Predsjedništvo BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nadzor nad primjenom Zakona o principima lokalne samouprave u FBiH vrši:",
        options: [
            "Federalno ministarstvo pravde i Federalno ministarstvo finansija",
            "Federalna vlada",
            "Federalni parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Način rada, odlučivanje i druga pitanja od značaja za rad Vlade Brčko distrikta BiH osim zakonom uređuje se i:",
        options: [
            "Poslovnikom o radu Vlade",
            "Odlukom Vlade",
            "Uredbom ministra"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Lični podaci u smislu Zakona o zaštiti ličnih podataka BiH znače:",
        options: [
            "bilo koju informaciju koja se odnosi na fizičko lice koje je identificirano ili se može utvrditi identitet lica",
            "samo službene dokumente",
            "samo podatke iz matičnih knjiga"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Samostalne Federalne uprave su:",
        options: [
            "Federalna uprava civilne zaštite, Federalna uprava za geodetske i imovinsko pravne poslove, Federalna uprava za inspekcijske poslove",
            "Federalna uprava za obrazovanje, Federalna uprava za zdravstvo, Federalna uprava za pravdu",
            "Federalna uprava za unutarnje poslove, Federalna uprava za vanjske poslove, Federalna uprava za finansije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema organima uprave BiH, s ciljem osiguranja izvršavanja zakona i drugih propisa, upustva i smjernice o načinu izvršavanja zakona i drugih propisa može utvrditi:",
        options: [
            "PS BiH, Predsjedništvo BiH i Vijeće ministara BiH",
            "Samo Vijeće ministara BiH",
            "Samo Predsjedništvo BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Privremeno povremeni radovi prema zakonu o radu na određeno vrijeme mogu se potpisati najduže na:",
        options: [
            "6 mjeseci",
            "1 godinu",
            "3 mjeseca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Maloljetni radnik ima pravo na liječnički pregled, a na teret poslodavca najmanje jednom u:",
        options: [
            "dvije godine",
            "godinu dana",
            "tri godine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko je u EU nadležan za rješavanje sukoba između članica i institucija EU?",
        options: [
            "Sud EU",
            "Europski parlament",
            "Vijeće EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Lokalnu samoupravu u RS čine:",
        options: [
            "gradovi i općine",
            "kantoni",
            "regije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je financijski podržao Marshallov plan?",
        options: [
            "SAD",
            "UK",
            "Francuska"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko raspoređuje elektronsku poštu u RS?",
        options: [
            "Starješina organa ili drugi ovlašteni službenik",
            "Ministar komunikacija",
            "Administrativni službenik"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Osiguraniku sa stažom osiguranja sa uvećanim trajanjem, u RS za svakih 12 mjeseci računa se:",
        options: [
            "15 mjeseci staža osiguranja",
            "12 mjeseci staža osiguranja",
            "18 mjeseci staža osiguranja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prema zakonu o radu RS, najnižu platu radnika utvrđuje Vlada RS:",
        options: [
            "na prijedlog Ekonomskog i socijalnog savjeta RS",
            "sama",
            "na prijedlog sindikata"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu Republike Srpske, Republika Srpska je?",
        options: [
            "jedinstven i nedjeljiv ustavnopravni entitet",
            "federalna jedinica",
            "autonomna pokrajina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS sredstva u društvenoj i državnoj svojini mogu se otuđivati?",
        options: [
            "samo po tržišnim kriterijumima",
            "ne mogu se otuđivati",
            "samo uz saglasnost vlade"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravo predlaganja zakona, drugih propisa i opštih akata po Ustavu RS imaju:",
        options: [
            "Predsjednik Republike, Vlada, svaki narodni poslanik ili najmanje 3000 birača",
            "Samo Vlada",
            "Samo narodni poslanici"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nacrt akta o promjeni Ustava RS utvrđuje?",
        options: [
            "Narodna skupština većinom glasova od ukupnog broja narodnih poslanika",
            "Ustavni sud",
            "Vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakone usvojene od Narodne skupštine RS Vijeće naroda razmatra:",
        options: [
            "ako se odnosi na vitalni interes definiran Ustavom RS",
            "uvijek",
            "samo na zahtjev predsjednika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Cenzura štampe i drugih vidova javnog obavještavanja je?",
        options: [
            "zabranjena",
            "dozvoljena u izuzetnim slučajevima",
            "dozvoljena samo za političke sadržaje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U Ustavu RS građanima se garantuje sloboda izražavanja nacionalne pripadnosti i kulture i pravo uporabe svog jezika i pisma?",
        options: [
            "niko nije dužan da se izjašnjava o svojoj nacionalnoj pripadnosti",
            "svi su dužni izjasniti se o nacionalnoj pripadnosti",
            "samo službenici su dužni izjasniti se"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS, glavni grad RS je:",
        options: [
            "Sarajevo",
            "Banja Luka",
            "Istočno Sarajevo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS, službeni jezik i pismo RS su:",
        options: [
            "jezik srpskog naroda, jezik bošnjačkog naroda i jezik hrvatskog naroda, a službena pisma su ćirilica i latinica",
            "samo srpski jezik i ćirilica",
            "samo bosanski jezik i latinica"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS Teritorij RS?",
        options: [
            "jedinstvena, nedjeljiva i neotuđiva",
            "može se mijenjati odlukom vlade",
            "može se dijeliti na regije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prijedlog za izglasavanje nepovjerenja Vladi RS može podnijeti?",
        options: [
            "najmanje 20 narodnih poslanika",
            "samo predsjednik",
            "samo vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta se smatra informacijom od javnog značaja prema Zakonu o slobodnom pristupu informacijama od javnog značaja RS?",
        options: [
            "Informacija kojom raspolaže organ javne vlasti, nastala u radu ili u vezi sa radom organa javne vlasti",
            "Samo službeni dokumenti",
            "Samo informacije koje su objavljene u medijima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je bitno da se neka informacija smatra informacijom od javnog značaja prema ovom Zakonu?",
        options: [
            "Da se odnosi na sve o čemu javnost ima opravdan interes da zna",
            "Da je potpisana od strane nadležnog organa",
            "Da je u pismenoj formi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavotvornu i zakonodavnu vlast u RS ostvaruje:",
        options: [
            "Narodna skupština RS",
            "Vlada RS",
            "Predsjednik RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Narodna skupština RS ima:",
        options: [
            "83 narodna poslanika, od toga najmanje četiri člana jednog konstitutivnog naroda",
            "100 narodnih poslanika",
            "120 narodnih poslanika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik RS ima:",
        options: [
            "dva potpredsjednika iz različitih konstitutivnih naroda",
            "jednog potpredsjednika",
            "nema potpredsjednika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za vrijeme trajanja mandata Vlade RS, predsjednik Vlade može vršiti promjene u sastavu Vlade:",
        options: [
            "na osnovu mišljenja predsjednika Republike i predsjednika Narodne skupštine",
            "samo uz saglasnost parlamenta",
            "ne može vršiti promjene"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zaštitu Ustavnosti i zakonitosti u RS osigurava:",
        options: [
            "Ustavni sud RS",
            "Vrhovni sud RS",
            "Narodna skupština RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Radna mjesta državnih službenika u RS dijele se na:",
        options: [
            "položaje i na izvršilačka radna mjesta",
            "samo na položaje",
            "samo na izvršilačka radna mjesta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako državni službenik u RS stiče položaj?",
        options: [
            "postavljenjem od Vlade ili drugog državnog organa",
            "izborom",
            "konkursom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako se određuje položaj u sudovima i javnim tužilaštvima?",
        options: [
            "aktom Vrhovnog kasacionog suda odnosno državnog tužioca",
            "odlukom vlade",
            "odlukom parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS Predsjednika RS u slučaju privremene spriječenosti da obavlja svoju funkciju, zamjenjivače?",
        options: [
            "Potpredsjednik kojeg odredi Predsjednik",
            "Predsjednik vlade",
            "Predsjednik parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS ko se ogriješio o ljudska prava i osnovne slobode zajamčene ustavom?",
        options: [
            "lično je odgovoran za to i ne može se pravdati ničijim naređenjem",
            "može se pravdati naređenjem nadređenog",
            "nije odgovoran ako je postupio po naređenju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS upotreba i iskorišćavanje stvari od posebnog kulturnog, naučnog ili istorijskog značaja ili od značaja za zaštitu prirode i čovjekove okoline?",
        options: [
            "mogu se na osnovu zakona ograničiti uz punu naknadu",
            "ne mogu se ograničiti",
            "mogu se ograničiti bez naknade"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "RS ima zastavu, grb i himnu, izgled zastave i grba i teksta himne se uređuje?",
        options: [
            "Ustavnim zakonom",
            "Odlukom vlade",
            "Odlukom parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS u Narodnoj skupštini će biti zastupljena najmanje?",
        options: [
            "četiri člana jednog konstitutivnog naroda",
            "dva člana jednog konstitutivnog naroda",
            "šest članova jednog konstitutivnog naroda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Obaveza plaćanja poreza i drugih dažbina, po Ustavu RS?",
        options: [
            "je opšta i utvrđuje se prema ekonomskoj snazi obveznika",
            "je samo za poduzetnike",
            "je samo za fizičke osobe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Isto lice može biti izabrano za predsjednika ili potpredsjednika Republike, po Ustavu RS?",
        options: [
            "najviše dva puta",
            "najviše tri puta",
            "bez ograničenja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Skraćivanjem ili prestankom mandata Narodne skupštine RS, mandat Vlade?",
        options: [
            "Prestaje",
            "Nastavlja se do izbora nove vlade",
            "Prelazi na privremenu vladu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS kada su u pitanju svojinska prava na nepokretnost?",
        options: [
            "jamči se svojina na poljoprivredno zemljište, a na šume i šumsko zemljište u zakonom utvrđenim granicama",
            "ne jamči se svojina",
            "jamči se samo za građevinsko zemljište"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada i članovi Vlade RS odgovaraju?",
        options: [
            "Narodnoj skupštini",
            "Predsjedniku",
            "Ustavnom sudu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS obavezno i besplatno je?",
        options: [
            "osnovno školovanje",
            "srednje školovanje",
            "visoko školovanje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nakon potpunog sprovođenja Aneksa 7. Sastav Vlade RS mora imati?",
        options: [
            "najmanje 15% pripadnika jednog konstitutivnog naroda, najmanje 35% iz reda dva konstitutivnog naroda i najmanje jednog ministra iz reda Ostalih",
            "jednaku zastupljenost svih naroda",
            "većinski narod najmanje 50%"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vladu RS sačinjavaju?",
        options: [
            "predsjednik, potpredsjednik i ministri",
            "samo ministri",
            "predsjednik i ministri"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS u slučaju različitosti u odredbama o pravima i slobodama između Ustava RS i Ustava BiH primjenjuje se?",
        options: [
            "one odredbe koje su za pojedinca povoljnije",
            "uvijek odredbe Ustava BiH",
            "uvijek odredbe Ustava RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS strana lica?",
        options: [
            "mogu sticati pravo svojine i pravo po osnovu ulaganja kapitala, u skladu sa zakonom",
            "ne mogu sticati pravo svojine",
            "mogu sticati samo pravo korištenja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ocjenjivanje državnih službenika u RS vrši se svakih?",
        options: [
            "šest mjeseci",
            "godinu dana",
            "dvije godine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko propisuje kancelarijsko poslovanje u RS?",
        options: [
            "Vlada RS uredbom",
            "Ministar uprave",
            "Parlament zakonom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je nadležan za rješavanje upravnih stvari u prvom stepenu RS?",
        options: [
            "stvarno su nadležni organi određeni zakonom ili drugim propisom",
            "samo ministarstva",
            "samo vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko rješava sukob nadležnosti između republičkih organa, između organa uprave i upravnih organizacija kao i između upravnih organizacija?",
        options: [
            "Vlada RS",
            "Ustavni sud",
            "Vrhovni sud"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši razvrstavanje radnih mjesta i poslova u RS?",
        options: [
            "Vlada uredbom vrši razvrstavanje radnih mjesta",
            "Ministarstvo rada",
            "Parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li se zaposliti državni službenik na izvršilačkom radnom mjestu bez položenog državnog stručnog ispita?",
        options: [
            "Može, ali je dužan da ga položi u roku utvrđenom zakonom",
            "Ne može",
            "Može samo u iznimnim slučajevima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se protiv rješenja Vlade RS o postavljenju na položaj može uložiti žalba?",
        options: [
            "Žalba nije dopuštena, ali može da se pokrene upravni spor",
            "Da, žalba je dopuštena",
            "Ne može se ni žaliti ni pokretati spor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vodi Evidenciju programa stručnog usavršavanja u državnim organima RS u okviru Centralne evidencije?",
        options: [
            "Nacionalna akademija",
            "Ministarstvo obrazovanja",
            "Vlada RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakoni, drugi propisi i opći akti po Ustavu RS stupaju na snagu:",
        options: [
            "Objavom u Službenom glasilu RS",
            "Odlukom vlade",
            "Potpisom predsjednika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "RS i općine po Ustavu RS, javne prihode i rashode utvrđuju:",
        options: [
            "Budžetom",
            "Odlukom vlade",
            "Zakonom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prijedlog da se pristupi promjeni Ustava RS može podnijeti:",
        options: [
            "predsjednik RS, Vlada i najmanje 30 poslanika",
            "samo vlada",
            "samo predsjednik"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS u vršenju vlasti u RS, ravnopravno i bez diskriminacije sudjeluju:",
        options: [
            "Srbi, Bošnjaci i Hrvati kao konstitutivni narodi kao i Ostali građani",
            "Samo konstitutivni narodi",
            "Svi građani bez razlike"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS zaposleni imaju pravo na štrajk:",
        options: [
            "pod uslovima utvrđenim zakonom",
            "bez ikakvih ograničenja",
            "samo u privatnom sektoru"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS zaposleni imaju pravo na:",
        options: [
            "dnevni odmor, sedmični odmor, plaćeni godišnji odmor i naknade u skladu sa zakonom i kolektivnim ugovorom",
            "samo godišnji odmor",
            "samo sedmični odmor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS zaposleni imaju pravo učestvovanja u upravljanju preduzećem:",
        options: [
            "Da, imaju pravo u skladu sa zakonom",
            "Ne, nemaju pravo",
            "Samo u državnim preduzećima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS prinudni rad je:",
        options: [
            "zabranjen",
            "dozvoljen u iznimnim slučajevima",
            "dozvoljen samo u zatvorima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS privatnici mogu osnivati privatne škole:",
        options: [
            "u skladu sa zakonom",
            "ne mogu",
            "mogu samo uz saglasnost države"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS Republici pripadaju sve državne funkcije i nadležnosti:",
        options: [
            "osim onih koje su po Ustavu BiH izričito prenesene na institucije BiH",
            "sve bez izuzetka",
            "samo one koje su definirane ustavom RS"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS strana lica su:",
        options: [
            "pravo svojine i prava na osnovu ulaganja kapitala, u skladu sa zakonom",
            "ograničena u pravima",
            "isključena iz prava svojine"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS djeca, trudnice i stara lica imaju pravo na zdravstvenu zaštitu iz:",
        options: [
            "javnih prihoda",
            "samo iz doprinosa",
            "samo iz privatnih izvora"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS ekonomsko i socijalno uređenje temelji se na:",
        options: [
            "ravnopravnosti svih oblika svojine",
            "samo na državnoj svojini",
            "samo na privatnoj svojini"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS financiranje javnih službi vrši se:",
        options: [
            "preko fondova i budžeta, u skladu sa zakonom",
            "samo iz budžeta",
            "samo iz fondova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavotvornu i zakonodavnu vlast u RS po Ustavu RS vrši:",
        options: [
            "Narodna skupština i Vijeće naroda",
            "Samo Narodna skupština",
            "Samo Vijeće naroda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik RS ima:",
        options: [
            "dva potpredsjednika iz različitih konstitutivnih naroda",
            "jednog potpredsjednika",
            "nema potpredsjednika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik Vlade RS, predsjedavajući Narodne skupštine RS i predsjednik Ustavnog suda RS po Ustavu RS mogu biti iz reda istog konstitutivnog naroda ili iz reda Ostalih?",
        options: [
            "Ne",
            "Da",
            "Samo ako su iz različitih naroda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U prijelaznom periodu do potpunog provođenja Aneksa VII, Vlada RS se sastoji od:",
        options: [
            "8 ministara iz reda srpskog naroda, 5 ministara iz reda bošnjačkog naroda, tri ministra iz reda hrvatskog naroda",
            "jednake zastupljenosti svih naroda",
            "većinski narod ima većinu ministara"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada su u pitanju Zadruge i zadrugarstvo i zanatstvo, po Ustavu RS, Republika ih?",
        options: [
            "Štiti i podstiče",
            "Ne podstiče",
            "Samo tolerira"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada RS je izabrana ako za nju glasa?",
        options: [
            "većina od ukupnog broja narodnih poslanika",
            "dvotrećinska većina",
            "svi poslanici"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik RS može zahtijevati od Narodne skupštine da ponovo odlučuje o zakonu:",
        options: [
            "u roku od sedam dana od njegovog usvajanja",
            "u roku od mjesec dana",
            "samo prije usvajanja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rad maloljetnika u RS ne može trajati duže od:",
        options: [
            "35 sati",
            "40 sati",
            "20 sati"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada i članovi Vlade RS odgovaraju?",
        options: [
            "Narodnoj skupštini",
            "Predsjedniku",
            "Ustavnom sudu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po Ustavu RS građani se mogu slobodno kretati, boraviti na teritorij Republike, slobodno napuštati tu teritoriju i na nju se slobodno vraćati?",
        options: [
            "izuzeci se mogu uvesti zakonom, ograničenja samo ako je to neophodno radi vođenja krivičnog postupka ili radi zaštite bezbjednosti i zdravlja ljudi",
            "bez ikakvih ograničenja",
            "samo uz dozvolu vlasti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Senat, kao savjetodavno tijelo najviših ustavnih institucija RS, ima:",
        options: [
            "do 55 članova koje imenuje Predsjednik RS",
            "25 članova",
            "100 članova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Savjetodavno tijelo najviših ustavnih institucija RS je?",
        options: [
            "Senat",
            "Vijeće naroda",
            "Državno vijeće"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavni sud RS ima:",
        options: [
            "devet članova",
            "sedam članova",
            "pet članova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o promjeni Ustava RS?",
        options: [
            "Narodna skupština RS",
            "Vlada RS",
            "Ustavni sud RS"
        ],
        correctAnswerIndex: 0
    },

    {
        question: "Brčko Distrikt je:",
        options: [
            "Jedinstvena administrativna jedinica lokalne samouprave koja je pod suverenitetom BiH.",
            "Entitet unutar Federacije BiH.",
            "Dio Republike Srpske."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakoni i odluke svih vlasti Brčko distrikta BiH moraju biti:",
        options: [
            "U skladu sa važećim zakonima i odlukama institucija BiH.",
            "Odobrene od strane međunarodnih organizacija.",
            "Usvojene samo od strane lokalne vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Teritorij Brčko distrikta BiH obuhvata cjelokupni teritorij opcine Brčko u granicama od:",
        options: [
            "1. januara 1999 godine.",
            "1. januara 2000 godine.",
            "1. januara 2001 godine."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko distrikt BiH predstavlja:",
        options: [
            "Gradonačelnik.",
            "Skupština Distrikta.",
            "Visoki predstavnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vlast u Brčko distrikt se dijeli na:",
        options: [
            "Zakonodavnu, izvršnu i sudsku.",
            "Lokalnu i nacionalnu.",
            "Centralnu i regionalnu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporove u vezi sa zaštitom utvrđenog statusa i ovlaštenja Brčko distrikta BiH između Distrika i entiteta i između Distrikta i BiH rješava:",
        options: [
            "Ustavni sud BiH.",
            "Međunarodni sud.",
            "Lokalna vlada."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Teritorij Brčko distrikta BiH je u vlasništvu/svojini:",
        options: [
            "Stanovništva Brčko distrikta BiH.",
            "Vlade BiH.",
            "Entiteta."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ime Distrikta je:",
        options: [
            "Brčko distrikt Bosne i Hercegovine.",
            "Brčko distrikt Federacije BiH.",
            "Brčko distrikt Republike Srpske."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravni položaj Brčko Distrikta BiH uređen je:",
        options: [
            "Statutom Brčko Distrikta Bosne i Hercegovine.",
            "Ustavom BiH.",
            "Međunarodnim sporazumom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Skupština Distrikta Brčko sastoji se od:",
        options: [
            "31 poslanika, od kojih dva predstavljaju nacionalne manjine u Distriktu.",
            "25 poslanika, od kojih jedan predstavlja nacionalne manjine u Distriktu.",
            "35 poslanika, od kojih tri predstavljaju nacionalne manjine u Distriktu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakonodavnu vlast u Distriktu Brčko vrši:",
        options: [
            "Skupština Distrikta.",
            "Gradonačelnik.",
            "Vlada Distrikta."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gradonačelnika Distrikta bira:",
        options: [
            "Skupština.",
            "Stanovništvo.",
            "Visoki predstavnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prijedlog proračuna budžeta Brčko distrikta BiH Skupština podnosi:",
        options: [
            "Gradonačelnik u ime Vlade Distrikta.",
            "Ministar finansija.",
            "Međunarodni savjetnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Proračun budžeta Brčko distrikta usvaja:",
        options: [
            "Skupština najmanje 30 dana prije isteka svake fiskalne godine.",
            "Vlada Distrikta.",
            "Gradonačelnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Skupština Brčko distrikta BiH se saziva:",
        options: [
            "Najmanje dva puta mjesečno.",
            "Jednom mjesečno.",
            "Po potrebi."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vladu Brčko distrikt BiH čine:",
        options: [
            "Gradonačelnik, zamjenik gradonačelnika, glavni koordinator Vlade i šefovi odjeljenja.",
            "Samo gradonačelnik i zamjenik.",
            "Svi poslanici Skupštine."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gradonačelnik ne može imati više od:",
        options: [
            "Šest savjetnika.",
            "Četiri savjetnika.",
            "Osam savjetnika."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sjednicom Vlade Brčko distrikta BiH predsjedava:",
        options: [
            "Gradonačelnik predsjedava Vladom Brčko distrikta BiH.",
            "Zamjenik gradonačelnika.",
            "Glavni koordinator Vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko može sazvati sjednicu Skupštine?",
        options: [
            "Predsjednik Skupštine ili na pismeni zahtjev najmanje pet zastupnika, onoliko često koliko je neophodno završenje funkcija Skupštine.",
            "Samo predsjednik Skupštine.",
            "Gradonačelnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koji način Skupština donosi odluke?",
        options: [
            "Donosi odluke tropertinskom većinom glasova zastupnika koji su prisutni i glasaju.",
            "Jednoglasno.",
            "Većinom glasova svih zastupnika."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gradonačelnik je odgovoran za pravilno rukovođenje i upravljanje Distriktom:",
        options: [
            "Skupštini Distrikta Brčko.",
            "Vladi BiH.",
            "Visokom predstavniku."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za sprovođenje zakona u Brčko distrikta BiH i pravilno rukovođenje i upravljanje Distriktom odgovoran je:",
        options: [
            "Gradonačelnik.",
            "Skupština Distrikta.",
            "Vlada Distrikta."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kandidata za mjesto gradonačelnika može nominovati:",
        options: [
            "Svaki zastupnik Skupštine Brčko distrikta BiH.",
            "Samo predsjednik Skupštine.",
            "Visoki predstavnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li kandidati za gradonačelnika moraju biti iz reda članova Skupštine?",
        options: [
            "DA.",
            "NE.",
            "Samo u izuzetnim slučajevima."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravo predlaganja zakona u Brčkom distriktu BiH ima:",
        options: [
            "Svaki zastupnik, gradonačelnik u ime Vlade Brčko distrikta BiH i Pravosudno povjerenstvo/komisija.",
            "Samo gradonačelnik.",
            "Samo Skupština."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li stanovnici Distrikta imaju pravo izbora ili promjene svog državljanstva?",
        options: [
            "Da, imaju.",
            "Ne, nemaju.",
            "Samo u posebnim slučajevima."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakoni Distrikta, odluke, rezolucije Skupštine Distrikta u skladu sa Statutom objavljuje se:",
        options: [
            "U Službenom glasilu Brčko distrikta.",
            "U Službenom glasilu BiH.",
            "U lokalnim novinama."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt ima pečat:",
        options: [
            "Okruglog oblika s tekstom BiH, Brčko distrikt BiH ispisan latiničnim i ćiriličnim pismom.",
            "Kvadratnog oblika s tekstom Brčko distrikt.",
            "Bez teksta, samo sa grbom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Grb i zastava Brčko distrikta su:",
        options: [
            "Grb i zastava BiH.",
            "Posebno dizajnirani za Distrikt.",
            "Grb i zastava Federacije BiH."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Policija Brčko Distrikta ima:",
        options: [
            "Šefa i jednog zamjenika.",
            "Samo šefa.",
            "Više zamjenika."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šefa policije Brčko Distrikta imenuje:",
        options: [
            "Gradonačelnik uz saglasnost Skupštine na osnovu kriterija i stručnosti i preporuke nezavisnog odbora za izbor kandidata osnovanog u skladu sa zakonom.",
            "Ministar unutrašnjih poslova BiH.",
            "Visoki predstavnik."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravosuđe Brčko Distrikta čine:",
        options: [
            "Osnovni i Apelacijski sud.",
            "Samo Osnovni sud.",
            "Samo Apelacijski sud."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji jezici i pisma se upotrebljavaju za sve službene svrhe u Brčko Distriktu BiH?",
        options: [
            "Bosanski, hrvatski i srpski jezik, te latinično i ćirilićno pismo su u ravnopravnoj upotrebi za sve službene svrhe.",
            "Samo bosanski jezik i latinično pismo.",
            "Samo srpski jezik i ćirilićno pismo."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U ovlasti Distrikta spada:",
        options: [
            "Pravosuđe i služba pravne pomoći, finansije Distrikta, carinska uprava, a dok odbrana Distrikta NE spada u ovlasti Distrikta.",
            "Odbrana Distrikta.",
            "Samo finansije Distrikta."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sudije/tužioce Brčko distrikta imenuje i razrješava:",
        options: [
            "Visoko sudsko i tužilaćko vijeće/savjet.",
            "Gradonačelnik.",
            "Skupština Distrikta."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Javnu upravu Brčko Distrikta čine:",
        options: [
            "Odjeljenja Vlade Distrikta, kancelarija gradonačelnika, direkcija za finansije Distrikta, kancelarija za upravljanje javnom imovinom, kancelarija koordinatora za Brčko distrikt pri Vijeću ministara BiH i ostali organi uprave kada je to predviđeno zakonom.",
            "Samo odjeljenja Vlade Distrikta.",
            "Samo kancelarija gradonačelnika."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Definiši pojam državnog službenika?",
        options: [
            "Lice koje je postavljeno rješenjem na radno mjesto u organ državne službe.",
            "Lice koje radi u privatnom sektoru.",
            "Lice koje je izabrano na izborima."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zapošljavanje i unapređenje profesionalne karijere državnog službenika temelji se na?",
        options: [
            "Javnom konkursu i profesionalnoj sposobnosti.",
            "Političkoj pripadnosti.",
            "Ličnim vezama."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje sve principe državna služba osigurava?",
        options: [
            "Zakonitost, transparentnost i javnost, odgovornost, učinkovitost i ekonomičnost, profesionalna nepristrasnost, politička nezavisnost.",
            "Samo političku nezavisnost.",
            "Samo zakonitost."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko sve ne spada u državne službenike FBiH?",
        options: [
            "Savjetnici, predsjednici i potpredsjednici Federacije, članovi Parlamenta Federacije, kantonalne Vlade, skupštine kantona, sekretari domova Parlamenta Federacije, članovi Vlade Federacije, sekretar Vlade Federacije, sudije Ustavnog suda Federacije, Vrhovnog suda, kantonalni sudovi, federalni, kantonalni tužioci, rukovodilac samostalne federalne uprave, ustanove te rukovodilac federalne upravne organizacije i ustanove koje se nalazi u sastavu ministarstva, sekretari federalnog organa državne službe, pomoćnik rukovodioca federalnog organa, glavni federalni inspektor i šef kabineta rukovodioca federalnog organa, članovi općinskih vijeća, općinski načelnik i gradonačelnik, sudije općinskih sudova.",
            "Svi zaposleni u javnim ustanovama.",
            "Samo ministri."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja lica spadaju u državne službenike?",
        options: [
            "Stručni suradnik, viši stručni suradnik, stručni savjetnik, inspektor i šef unutrašnje organizacione jedinice.",
            "Samo ministri.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja lica spadaju u rukovodeće državne službenike na nivou BiH?",
        options: [
            "Sekretar i sekretar sa posebnim zadatkom, pomoćnik ministra, pomoćnik direktora, glavni inspektor.",
            "Samo ministri.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sekretar sa posebnim zadatkom imenuje se na:",
        options: [
            "Na vremensko razdoblje koje nije duže od 5 godina.",
            "Na neodređeno vrijeme.",
            "Samo na jednu godinu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik ne ostvaruje pravo na otpremninu ako izgubi status državnog službenika, osim u slučaju da je status državnog službenika izgubio zbog:",
        options: [
            "Prekobrojnosti.",
            "Odbijanja poslušnosti.",
            "Ličnih razloga."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kandidat prijavljen na eksterni ili javni oglas u skladu sa odredbama člana 32 a. Zakona o državnoj službi u institucijama BiH, koji nije zadovoljan regularnošću provedenog postupka može izjaviti žalbu:",
        options: [
            "Agenciji za državnu službu BiH.",
            "Vladi BiH.",
            "Sudu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Potvrdu o prijemu zahtjeva za pokretanje disciplinskog postupka izdaje:",
        options: [
            "Rukovodeći državni službenik najvišeg nivoa u instituciji u kojoj je zaposlen državni službenik protiv kojeg je zahtjev podnesen.",
            "Ministar.",
            "Sud."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Konkursna procedura po javnom oglasu na osnovu člana 21. Zakona o državnoj službi u institucijama Bosne i Hercegovine sastoji se od:",
        options: [
            "Javnog, te stručnog ispita koji se sastoji od pismenog i usmenog dijela. Usmenom dijelu pristupaju samo kandidati koji su ostvarili najmanje 75 bodova na pismenom dijelu.",
            "Samo pismenog ispita.",
            "Samo usmenog ispita."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodećeg državnog službenika razrješava:",
        options: [
            "Organ nadležan za imenovanje uz pribavljeno mišljenje Agencije za državnu službu BiH, sa izuzetkom razrješenja zbog nezadovoljavajućeg probnog perioda u kojem slučaju je razrješenje drugačije regulisano.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnog službenika u institucijama BiH razrješava:",
        options: [
            "Državnog službenika razrješava Agencija, po pribavljenom mišljenju nadležne institucije sa izuzetkom razrješenja zbog nezadovoljajućeg probnog perioda u kojem slučaju je razrješenje drugačije regulisano.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko razrješava državnog službenika u organima FBiH?",
        options: [
            "Rukovodilac organa državne službe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko proglašava državnog službenika prekobrojnim u organima FBiH?",
        options: [
            "Agencija proglašava državnog službenika prekobrojnim na prijedlog organa državne službe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko proglašava državnog službenika prekobrojnim u institucijama BiH?",
        options: [
            "Agencija proglašava državnog službenika prekobrojnim na prijedlog institucija.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši ocjenjivanje rada državnih službenika u organima FBiH?",
        options: [
            "Rukovodilac organa državne službe ocjenjuje rad svih državnih službenika, na prijedlog neposredno nadređenog službenika, najmanje svakih 12 mjeseci.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko utvrđuje ocjenu rada rukovodećih državnih službenika?",
        options: [
            "Rukovodilac Institucije.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko utvrđuje ocjenu rada sekretara na posebnom zadatku u Vijeću ministara?",
        options: [
            "Vijeće ministara na prijedlog posebnog povjerenstva koje Vijeće ministara imenuje sukladno propisu o ocjenjivanju državnih službenika.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko ocjenjuje rad svih državnih službenika u institucijama BiH?",
        options: [
            "Direktno nadređeni ocjenjuje rad svih državnih službenika najmanje svakih šest mjeseci uz potvrdu rukovodioca institucije, a ako institucija ima samo rukovodioca, onda on donosi ocjenu.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po pitanju platnih razreda državni službenici u institucijama izvršne vlasti BiH su razvrstani u:",
        options: [
            "Osam platnih razreda.",
            "Pet platnih razreda.",
            "Deset platnih razreda."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Svaki prijavljeni kandidat ima pravo podnijeti zahtjev za izuzeće bilo kojeg člana ili komisije za izbor u cjelosti:",
        options: [
            "Do momenta pristupanja stručnom ispitu i to Odboru državne službe za žalbe.",
            "Nakon polaganja ispita.",
            "Nikada."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko ukupno traje probni rad državnih službenika:",
        options: [
            "Za državne službenike u BiH traje godinu dana, za državne službenike u FBiH traje šest mjeseci, za namještenike u FBiH traje tri mjeseca.",
            "Samo godinu dana.",
            "Samo šest mjeseci."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Komisiju za izbor državnih službenika imenuje:",
        options: [
            "Agencija za državnu službu BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na interni oglas državne službe BiH mogu se prijaviti:",
        options: [
            "Samo državni službenici iz institucije u kojoj se nalazi oglašeno radno mjesto a koji ispunjavaju i posebne uslove za oglašeno radno mjesto.",
            "Svi građani.",
            "Samo ministri."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Viši stručni suradnik obavlja:",
        options: [
            "Odgovorne poslove u određenoj organizacionoj jedinici.",
            "Samo administrativne poslove.",
            "Samo tehničke poslove."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za sva radna mjesta propisana članom 7.stav 1. Zakona o državnoj službi u institucijama BiH utvrđuje se po:",
        options: [
            "Šest kategorija.",
            "Tri kategorije.",
            "Osam kategorija."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U jednom od dole navedenih slučajeva, radnjom ili propuštanjem radnje nije nastala povreda službene dužnosti od strane državnog službenika:",
        options: [
            "Odbijanje izvršenja nezakonitog naređenja neposrednog predpostavljenog.",
            "Neizvršenje zadatka.",
            "Kasnjenje na posao."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv akta o pokretanju disciplinskog postupka:",
        options: [
            "Ne može se izjaviti žalba.",
            "Može se izjaviti žalba.",
            "Može se izjaviti žalba samo ministru."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Eksterni premještaj državnog službenika u organima BiH vrši:",
        options: [
            "Vrši Agencija za državnu službu samo na slično radno mjesto u drugoj instituciji, u skladu sa potrebama rada, na prijedlog, odnosno uz saglasnost rukovodilaca institucija.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši interni premještaj državnog službenika u organima BiH?",
        options: [
            "Interni premještaj državnog službenika na slično djelatno mjesto sukladno potrebama službe provodi rukovoditelj institucije.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko propisuje uslove i način obavljanja internih natječaja, internih i eksternih premještaja državnih službenika na nivou BiH?",
        options: [
            "Agencija pravilnikom propisuje uslove i način obavljanja internih natječaja, internih i eksternih premještaja državnih službenika, uz prethodno pribavljenu saglasnost Vijeća ministara.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zakon o državnoj službi u institucijama BiH se ne primjenjuje na:",
        options: [
            "Zaposlene u Centralnoj banci, guverneri, ombdusmeni.",
            "Sve državne službenike.",
            "Samo ministre."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenje o internom premještaju na slično radno mjesto državnog službenika koji nije rukovodeći i kada se ne sprovodi interni konkurs donosi:",
        options: [
            "Rukovodilac institucije u kojoj je državni službenik zaposlen po prethodno pribavljenoj saglasnosti Agencije za državnu službu.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se interni oglas za državnu službu BiH objavljuje?",
        options: [
            "Interni oglas se objavljuje najmanje osam (8) dana prije krajnjeg roka za prijave u instituciji u kojoj se upražnjeno mjesto pojavilo.",
            "Samo jednom godišnje.",
            "Samo na zahtjev ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko traje interni oglas kada se vrši unapređenje državnog službenika u organima FBiH?",
        options: [
            "Interni oglas traje najmanje sedam dana od dana objavljivanja a objavljuje se na oglasnoj tabli državne službe u kojem se vrši unapređenje.",
            "Samo tri dana.",
            "Samo pet dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta sve sadrži interni oglas FBiH?",
        options: [
            "Naziv radnog mjesta, opis poslova i uvjete za obavljanje poslova utvrđenih u pravilniku o unutrašnjoj organizaciji organa državne službe.",
            "Samo naziv radnog mjesta.",
            "Samo opis poslova."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada Agencija za državnu službu poništava javni natječaj?",
        options: [
            "Agencija može poništiti objavljeni oglas na obrazložen zahtjev institucije najkasnije do dostavljanja rezultata izbornoga procesa, odnosno liste uspješnih kandidata Agenciji, pri čemu se ista radna mjesta ne mogu ponovno oglašavati u razdoblju od jedne godine od dana objave oglasa.",
            "Samo na zahtjev ministra.",
            "Nikada."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji su opći uslovi za postavljenje državnog službenika u organu državne službe BiH i FBiH?",
        options: [
            "Državljanin BiH, da je stariji od 18 godina, da ima univerzitetsku diplomu najmanje VII stepen stručne kvalifikacije, da je zdravstveno sposoban, da zakonom nije navršio dobnu granicu za umirovljenje, da nije otpuštena iz državne službe kao rezultat disciplinske mjere na bilo kojem nivou vlasti u Bosni i Hercegovini odbijanja polaganja prisege, samovoljnog napuštanja državne službe ili davanja neistinitih i netočnih podataka prilikom prijema u državnu službu, u roku od tri godine prije dana objavljivanja upražnjenog radnog mjesta; da se ne vodi krivični postupak protiv te osobe, da nije obuhvaćena odredbom člana IX.1 Ustava Bosne i Hercegovine.",
            "Samo da je državljanin BiH.",
            "Samo da ima univerzitetsku diplomu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Upražnjena radna mjesta državnog službenika institucija BiH prvo popunjava:",
        options: [
            "Interni premještaj.",
            "Eksterni premještaj.",
            "Javni natječaj."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Interni premještaj sa radnog mjesta državnog službenika na slično radno mjesto u istoj instituciji može biti:",
        options: [
            "Dobrovoljan ili nametnut državnom službeniku u skladu sa objektivno utvrđenim potrebama državne službe.",
            "Samo dobrovoljan.",
            "Samo nametnut."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko iznosi postotak uvećanja plate državnog službenika za jednu godinu radnog staža:",
        options: [
            "0,5 posto.",
            "1 posto.",
            "2 posto."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Do kog procenta se može povećati plata državnih službenika:",
        options: [
            "20 posto.",
            "30 posto.",
            "50 posto."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uslovi u skladu sa kojima državni službenik može uzeti neplaćeno odsustvo se utvrđuju:",
        options: [
            "Podzakonskim aktom.",
            "Samo odlukom ministra.",
            "Samo odlukom predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U prava državnog službenika ne spada:",
        options: [
            "Pravo da učestvuje u radu Savjeta ministara.",
            "Pravo na godišnji odmor.",
            "Pravo na zdravstveno osiguranje."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nespojivo je sa dužnošću državnog službenika:",
        options: [
            "Ne može obavljati dodatnu djelatnost za koju se plaća naknada osim u slučaju kada je to odobrio rukovodilac organa državne službe; državni službenik koji je razriješen dužnosti u roku od dvije godine od dana razrješenja dužnosti ne može se zaposliti kod poslodavca kome je bio redovni pretpostavljeni; ne može biti član upravnih i drugih odbora političkih stranaka i ne smije slijediti upute političkih stranaka.",
            "Samo obavljanje dodatne djelatnosti.",
            "Samo članstvo u političkoj stranci."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od kojeg momenta miruju prava i obaveze državnog službenika?",
        options: [
            "Prava i obaveze državnog službenika miruju od trenutka kada je imenovan na položaj u bilo kojem zakonodavnom ili izvršnom organu na bilo kojem nivou vlasti u FBiH.",
            "Samo nakon smrti.",
            "Samo nakon umirovljenja."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se može položaj savjetnika preinačiti u položaj državnog službenika sa sigurnošću uživanja položaja?",
        options: [
            "Ne može. (može biti razriješen dužnosti u bilo koje vrijeme od strane organa koji ga je imenovao).",
            "Može, ali samo uz saglasnost ministra.",
            "Može, ali samo uz saglasnost predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje odredbe se primjenjuje u vezi donošenja i dostavljanja rješenja državnom službeniku?",
        options: [
            "Odredbe Zakona o upravnom postupku.",
            "Odredbe Krivičnog zakona.",
            "Odredbe Ustava BiH."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o pravima i dužnostima državnog službenika FBiH iz radnog odnosa na osnovu ovog zakona i podzakonskih propisa?",
        options: [
            "Rukovodilac organa državne službe, osim kada je ovim zakonom i podzakonskim propisima utvrđeno da odlučuje drugi organ (Agencija i Odbor za žalbe).",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kome državni službenik može izjaviti žalbu protiv rješenja?",
        options: [
            "Protiv rješenja državni službenik ima pravo u roku od 15 dana od dana prijema rješenja izjaviti žalbu Odboru državne službe za žalbe.",
            "Samo ministru.",
            "Samo predsjedniku vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od koliko članova se sastoji Komisija za izbor kandidata državnog službenika u organima FBiH?",
        options: [
            "Komisiju za izbor sačinjava tri člana, od kojih su dva člana državni službenici iz organa državne službe, od kojih je jedan član predstavnik sindikata, na koji se javni natječaj odnosi i koji imaju akademsko i profesionalno iskustvo u oblastima obuhvaćenim procesom javnog natječaja, dok se treći imenuje s liste eksperata koju utvrdi Agencija.",
            "Pet članova.",
            "Sedam članova."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od koliko članova se sastoji Komisija za izbor kandidata državnog službenika u institucijama BiH?",
        options: [
            "Na način utvrđen podzakonskim aktima, komisiju za izbor sačinjava pet članova, od kojih su dva člana državni službenici iz institucije na koju se javna konkurencija odnosi i koji imaju akademsko i profesionalno iskustvo u oblastima obuhvaćenim procesom javne konkurencije, dok se ostala tri člana imenuju sa liste eksperata koju utvrdi Agencija.",
            "Tri člana.",
            "Sedam članova."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši postavljenje državnog službenika u organima FBiH?",
        options: [
            "Rukovodilac organa državne službe postavlja državnog službenika, s liste uspješnih kandidata koji su prošli javni konkurs.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Do kad se čuva pričuvna/rezervna lista državnih službenika?",
        options: [
            "Do isteka probnog rada postavljenog državnog službenika.",
            "Samo jednu godinu.",
            "Samo šest mjeseci."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koji način postavljeni državni službenik preuzima dužnost?",
        options: [
            "Preuzima dužnost polaganjem zakletve vjernosti pred rukovodiocem organa državne službe.",
            "Samo potpisivanjem ugovora.",
            "Samo usmenom izjavom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko postavlja državnog službenika, a ko rukovodeće državne službenike u institucijama BiH?",
        options: [
            "Državnog službenika postavlja Agencija u skladu sa rezultatom koji je kandidat postigao u izbornom procesu, a rukovodeće državne službenike imenuje nadležna institucija, po prethodno pribavljenom mišljenju Agencije, sa liste uspješnih kandidata koji su prošli javnu konkurenciju.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik razriješen dužnosti zbog prekobrojnosti ima pravo na otpremninu u iznosu od:",
        options: [
            "Šestomjesečne plate ako ima manje od 15 godina radnog staža, a u iznosu dvanaestomjesečne plate ako ima najmanje 15 godina radnog staža.",
            "Samo tri mjeseca plate.",
            "Samo šest mjeseci plate."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sekretar sa posebnim zadatkom gubi svoj posebni zadatak:",
        options: [
            "Kada se završi posebni zadatak.",
            "Samo nakon pet godina.",
            "Samo nakon smjene vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik koji je razriješen dužnosti zbog prekobrojnosti ima prednost prilikom ponovnog zaposlenja u državnoj službi ako se oglasi upražnjeno slično radno mjesto, u roku od:",
        options: [
            "Godinu dana od dana razrješenja dužnosti.",
            "Samo šest mjeseci.",
            "Samo tri mjeseca."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Upražnjeno radno mjesto državnog službenika popunjava se tako da:",
        options: [
            "Institucija u kojoj je radno mjesto upražnjeno objavljuje interni oglas na oglasnoj ploči i sl, a Agencija za državnu službu BiH interni oglas objavljuje u Službenom glasilu BiH. Ako se radno mjesto ne može popuniti internim premještajem, ADS BiH pokušava sa eksternim premještajem prekobrojnog državnog službenika na sličnom radnom mjestu u drugoj instituciji, a ako ni to nije moguće, Agencija objavljuje javni natječaj za njegovo popunjavanje.",
            "Samo internim premještajem.",
            "Samo javnim natječajem."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Unapređenje rukovodećeg državnog službenika na više radno mjesto vrši se samo putem:",
        options: [
            "Javnog natječaja.",
            "Internog premještaja.",
            "Direktnog imenovanja."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ukoliko je državni službenik razriješen dužnosti zbog nezadovoljavajuće ocjene rada u probnom periodu, upražnjeno radno mjesto popunjava se:",
        options: [
            "Postavljenjem sljedećeg uspješnog kandidata sa rezervne liste.",
            "Samo internim premještajem.",
            "Samo javnim natječajem."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rad državnog službenika ocjenjuje direktno nadređeni, i to:",
        options: [
            "Najmanje svakih 12 mjeseci.",
            "Samo jednom godišnje.",
            "Samo na zahtjev."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Polaznu osnovu za obračun plate za sve državne službenike u FBiH utvrđuje:",
        options: [
            "Vlada FBiH.",
            "Ministar finansija.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Po pitanju platnih razreda državni službenici su razvrstani u:",
        options: [
            "Deset platnih razreda.",
            "Osam platnih razreda.",
            "Pet platnih razreda."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zahtjev za pokretanje disciplinskog postupka protiv državnih službenika mogu podnijeti:",
        options: [
            "Rukovodilac organa državne službe ili lica koje on odredi.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak za utvrđivanje disciplinske odgovornosti državnog službenika za povrede radnih dužnosti sprovodi se u skladu sa načelima:",
        options: [
            "Kaznenog postupka.",
            "Građanskog postupka.",
            "Upravnog postupka."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li se protiv državnog službenika preduzeti disciplinski postupak na osnovu istih činjenica po kojima je protiv njega odbijena optužba za kazneno djelo?",
        options: [
            "Može.",
            "Ne može.",
            "Samo uz saglasnost suda."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko izriče disciplinske mjere državnom službeniku?",
        options: [
            "Disciplinska komisija.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se preventivno suspendirani državni službenik koji je okrivljen da je izvršio krivično djelo oslobodi optužbe pravosnažnom presudom nadležnog suda, onda se:",
        options: [
            "Državni službenik se vraća na svoje radno mjesto.",
            "Državni službenik se razrješava dužnosti.",
            "Državni službenik se suspendira na još jednu godinu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik koji je preventivno suspendovan za vrijeme trajanja suspenzije prima platu u iznosu:",
        options: [
            "Prima puni iznos plate.",
            "Prima pola plate.",
            "Ne prima platu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko utvrđuje postojanje i visinu štete, okolnosti pod kojim je učinjena i krivica državnog službenika za učinjenu štetu:",
        options: [
            "Komisija koju obrazuje rukovodilac organa državne službe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kojem od nabrojanih slučajeva organ nadležan za postavljanje odmah suspendira državnog službenika (preventivna suspenzija)?",
        options: [
            "Kada se nalazi u pritvoru i kada je protiv državnog službenika pokrenut kazneni postupak za kazneno djelo počinjeno u vršenju službene dužnosti.",
            "Samo kada se nalazi u pritvoru.",
            "Samo kada je pokrenut kazneni postupak."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Agenciju za državnu službu FBiH osnovala je:",
        options: [
            "Vlada FBiH.",
            "Parlament FBiH.",
            "Predsjednik FBiH."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odbor državne službe za žalbe sastoji se od:",
        options: [
            "Tri člana.",
            "Pet članova.",
            "Sedam članova."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke Odbora državne službe za žalbe:",
        options: [
            "Konačne i mogu biti preispitivane od strane nadležnog suda.",
            "Nisu konačne.",
            "Mogu se žaliti samo ministru."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira članove Odbora za žalbe?",
        options: [
            "Nezavisna komisija za izbor kandidata, koju imenuje Vlada Federacije, na osnovu njihovog radnog iskustva i demonstrirane sposobnosti.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko rukovodi Agencijom za državnu službu FBiH?",
        options: [
            "Rukovodi direktor agencije kojeg imenuje i razrješava Vlada FBiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko donosi pravilnik o unutrašnjoj organizaciji Agencije?",
        options: [
            "Donosi direktor Agencije uz saglasnost Vlade Federacije.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenje o prestanku radnog odnosa službenicima koji su u institucijama FBiH zaposleni protivno odredbama Zakona ili ne ispunjavaju uslove iz člana 25. Zakona o državnoj službi FBiH koje donosi Agencija za državnu službu, nakon revizije, stupa na snagu:",
        options: [
            "Okončanjem kompletnog postupka javnog konkursa raspisanog za odnosno radno mjesto.",
            "Odmah.",
            "Nakon tri mjeseca."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko imenuje direktora Agencije za državnu službu BiH?",
        options: [
            "Vijeće ministara imenuje ravnatelja Agencije koji se nalazi na djelatnom mjestu tajnika s posebnim zadatkom, a bira se i imenuje sukladno članku 34. ovoga zakona na mandat od pet godina.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik ima pravo:",
        options: [
            "Da osnuje ili se učlani u sindikat ili profesionalno udruženje, u skladu sa zakonom.",
            "Samo da osnuje sindikat.",
            "Samo da se učlani u profesionalno udruženje."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sekretar koji je imenovan na položaj u bilo kojem zakonodavnom ili izvršnom organu na bilo kojem nivou vlasti u BiH:",
        options: [
            "Podnosi ostavku na mjesto u državnoj službi.",
            "Ne podnosi ostavku.",
            "Samo suspendira dužnost."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Interni natječaj objavljuje se:",
        options: [
            "U instituciji u kojoj se upražnjeno mjesto pojavilo.",
            "Samo u Službenom glasilu.",
            "Samo na internetu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja su sve disciplinske mjere predviđene Zakonom o državnoj službi u Federaciji BiH:",
        options: [
            "Javna disciplinska opomena, suspenzija prava učestvovanja u javnim natječajima za unapređenje u državnoj službi u periodu od najviše dvije godine, kaznena suspenzija sa poslova i plate tokom perioda od dva do 30 dana, vraćanje na nižu kategoriju i prestanak radnog odnosa.",
            "Samo novčana kazna.",
            "Samo opomena."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U prava državnog službenika ne spada:",
        options: [
            "Da učestvuje u radu Vlade FBiH.",
            "Pravo na godišnji odmor.",
            "Pravo na zdravstveno osiguranje."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ocjena državnih službenika u RS vrši se:",
        options: [
            "Najmanje svakih šest mjeseci.",
            "Samo jednom godišnje.",
            "Samo na zahtjev."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Obaveza državnog službenika:",
        options: [
            "Da se imovina i radno vrijeme ne koriste u privatne svrhe.",
            "Samo da se radno vrijeme ne koristi u privatne svrhe.",
            "Samo da se imovina ne koristi u privatne svrhe."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnom službeniku nije dozvoljeno:",
        options: [
            "Davanje informacija ako to nije u skladu sa zakonom, drugim propisom, pravilima i zahtjevima organa državne službe.",
            "Samo davanje informacija.",
            "Samo primanje informacija."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik ostvaruje pravo na otpremninu ako:",
        options: [
            "Ako se proglasi prekobrojnim.",
            "Ako podnese ostavku.",
            "Ako bude suspendiran."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Agencija za državnu službu vrši sljedeće poslove:",
        options: [
            "Utvrđuje jedinstvene kriterije, pravila i postupke selekcije, imenovanja i postavljanja državnih službenika u organima FBiH, u skladu s ovim zakonom, planira i realizira proces zapošljavanja državnih službenika, na zahtjev i u skladu sa potražnjom organa državne službe, organizira i realizira stručno obrazovanje i usavršavanje državnih službenika, organizira edukaciju kandidatima za polaganje stručnog ispita za državnu službu koji predstavlja uvjet za rad u organu državne službe, podnosi godišnji izvještaj o stanju kadrova u organima državne službe i podnosi svoj plan rada za narednu godinu Vladi Federacije na odobravanje.",
            "Samo utvrđuje kriterije za zapošljavanje.",
            "Samo organizira edukaciju."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Članove disciplinske komisije imenuje:",
        options: [
            "Agencija za državnu službu.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od koliko članova se sastoji Disciplinska komisija?",
        options: [
            "Tri člana.",
            "Pet članova.",
            "Sedam članova."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li rukovodilac organa državne službe biti član Komisije disciplinske?",
        options: [
            "Ne može.",
            "Može, ali samo kao predsjednik.",
            "Može, ali samo kao član."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko sve rukovodiocu organa državne službe može podnijeti disciplinsku prijavu koja mora biti obrazložena?",
        options: [
            "Svi državni službenici.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mogu li se disciplinske mjere preduzeti na osnovu istih činjenica po kojima je državni službenik oslobođen u kaznenom postupku?",
        options: [
            "Ne mogu.",
            "Mogu.",
            "Samo uz saglasnost suda."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mogu li se disciplinske mjere preduzeti na osnovu istih činjenica ukoliko se optužba za kazneno djelo protiv državnog službenika odbije?",
        options: [
            "Disciplinski postupak se može preduzeti na osnovu istih činjenica.",
            "Ne može.",
            "Samo uz saglasnost suda."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se disciplinski postupak suspendira u slučaju preventivne suspenzije državnog službenika?",
        options: [
            "Disciplinski postupak se suspendira sve dok se ne donese pravomoćna presuda nadležnog suda.",
            "Ne suspendira se.",
            "Suspendira se samo na zahtjev."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je državni službenik dužan naknaditi materijalnu štetu u vršenju državne službe?",
        options: [
            "Kada u vršenju državne službe učini namjerno ili krajnjom nepažnjom.",
            "Samo kada učini namjerno.",
            "Samo kada učini krajnjom nepažnjom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji postupak se može pokrenuti ukoliko državni službenik odbije naknaditi štetu?",
        options: [
            "Postupak za naknadu štete koji se pokreće pred nadležnim sudom.",
            "Samo disciplinski postupak.",
            "Samo upravni postupak."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Godišnji odmor za državnog službenika po svim osnovama ne može trajati duže od:",
        options: [
            "36 radnih dana.",
            "30 radnih dana.",
            "40 radnih dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U slučaju da se u nekom od organa državne službe ne mogu popuniti radna mjesta državnih službenika zbog nemogućnosti osiguravanja kadrova državnim službenicima koji privremeno obavljaju taj posao plaća se:",
        options: [
            "Povećava do 50 posto u zavisnosti od nastalog povećanja obima poslova.",
            "Samo do 20 posto.",
            "Ne povećava se."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Polaznu osnovu za obračun plate za sve državne službenike u institucijama BiH utvrđuje:",
        options: [
            "Savjet ministara.",
            "Ministar finansija.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koju od navedenih naknada državni službenik nema pravo:",
        options: [
            "Troškove obrazovanja člana uže porodice.",
            "Troškove službenih putovanja.",
            "Troškove zdravstvenog osiguranja."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Stručno obrazovanje i usavršavanje državnih službenika je:",
        options: [
            "Pravo i obaveza državnih službenika.",
            "Samo pravo.",
            "Samo obaveza."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o obrazovanju državnih službenika na savjetovanjima i drugim oblicima obrazovnih aktivnosti?",
        options: [
            "Lice određeno podzakonskim aktom.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Krucijalni razlozi za prestanak radnog odnosa državnog službenika:",
        options: [
            "Odbijanje polaganja prisege, nezadovoljavajući probni period, dvije uzastopno negativne ocjene rada, ako je osuđen za kazneno djelo i zbog izdržavanja kazne zatvora mora biti odsutan sa rada u državnoj službi duže od šest mjeseci.",
            "Samo odbijanje polaganja prisege.",
            "Samo nezadovoljavajući probni period."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zaposlenje i postavljenje državnih službenika koje je bilo suprotno odredbama Zakona o državnoj službi u institucijama BiH, poništava:",
        options: [
            "Odbor državne službe za žalbe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kojem od navedenih slučajeva, radnjom ili propuštanjem radnje nije nastala povreda službene dužnosti od strane državnog službenika:",
        options: [
            "Odbijanje izvršenja nezakonitog naređenja neposrednog predpostavljenog.",
            "Neizvršenje zadatka.",
            "Kasnjenje na posao."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zahtjev za pokretanje disciplinskog postupka protiv državnih službenika mogu podnijeti:",
        options: [
            "Državni službenici, zaposlenici, ministar i zamjenik ministra.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Potvrdu o prijemu zahtjeva za disciplinski postupak izdaje:",
        options: [
            "Organ nadležan za postavljenje.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organ nadležan za postavljenje, interna disciplinska komisija koju je on imenovao, mogu izreći sljedeće disciplinske mjere:",
        options: [
            "Pismeni opomenu ili pismeni ukor.",
            "Samo novčanu kaznu.",
            "Samo suspenziju."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja od navedenih mjera nije disciplinska mjera propisana Zakonom o državnoj službi u institucijama BiH:",
        options: [
            "Novčana kazna do iznosa od 1/3 plate u trajanju do 30 dana.",
            "Pismena opomena.",
            "Pismeni ukor."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se preventivno suspendirani državni službenik koji je okrivljen da je izvršio kazneno djelo oslobodi optužbe pravosnažnom presudom nadležnog suda, onda se:",
        options: [
            "Državni službenik vraća na svoje radno mjesto.",
            "Državni službenik se razrješava dužnosti.",
            "Državni službenik se suspendira na još jednu godinu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ombudsmena institucije biraju:",
        options: [
            "Državni službenici i zaposlenici odnosne institucije.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Agenciju za državnu službu BiH osnovao je:",
        options: [
            "Savjet ministara.",
            "Parlament BiH.",
            "Predsjedništvo BiH."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenje o prestanku radnog odnosa radnicima koji su u institucijama BiH zaposleni protivno odredbama Zakona o državnoj upravi ili ne ispunjavaju uslove iz člana 22. Zakona o državnoj službi u institucijama BiH, koje donosi ADS BiH nakon obavljene revizije, stupa na snagu:",
        options: [
            "Okončanjem kompletnog postupka javnog konkursa raspisanog za odnosno radno mjesto.",
            "Odmah.",
            "Nakon tri mjeseca."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravni status državnog službenika u institucijama BiH, uređuje se:",
        options: [
            "Zakonom o državnoj službi u institucijama BiH.",
            "Ustavom BiH.",
            "Međunarodnim sporazumom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šef unutrašnje organizacione jedinice za svoj rad odgovara:",
        options: [
            "Pomoćniku odnosno sekretaru organa državne službe ukoliko u datom organu državne službe nema pomoćnika rukovodioca organa državne službe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kome odgovara sekretar Vlade FBiH za svoj rad?",
        options: [
            "Vladi FBiH, premijeru i zamjeniku premijera.",
            "Samo premijeru.",
            "Samo zamjeniku premijera."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je od navedenih dužnost državnog službenika?",
        options: [
            "Da izvršava zadatke predviđene opisom radnog mjesta.",
            "Samo da dolazi na posao na vrijeme.",
            "Samo da poštuje nadređene."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Komisiju za izbor državnih službenika imenuje:",
        options: [
            "ADS BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Eksterni premještaj državnih službenika vrši se:",
        options: [
            "Ukoliko je državni službenik proglašen prekobrojnim.",
            "Samo na zahtjev službenika.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši javno oglašavanje upražnjenih radnih mjesta državnih službenika u institucijama BiH:",
        options: [
            "ADS BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje po zahtjevu za diskvalifikaciju člana Komisije za izbor?",
        options: [
            "Odbor državne službe za žalbe.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko donosi odluku o načinu i programu polaganja stručnog ispita za lica koja se postavljaju za državne službenike u institucijama BiH:",
        options: [
            "Vijeće ministara BiH na prijedlog Agencije za državnu službu BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucija BiH koja preuzima ili na koje se prenose nadležnosti koje su ranije obavljali entiteti (član 32 a), popunjava upražnjena radna mjesta državnih službenika raspisivanjem:",
        options: [
            "Natječaja za interni ili eksterni premještaj ili javnog oglasa.",
            "Samo internog premještaja.",
            "Samo javnog oglasa."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Komisiju za izbor shodno članu 32 a Zakona o državnoj službi u institucijama BiH, imenuje:",
        options: [
            "ADS BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kandidat koji je prijavljen u skladu sa odredbama člana 32 a ZODS u institucijama BiH, koji nije zadovoljan regularnošću provedenog postupka može izjaviti žalbu:",
        options: [
            "ADS BiH.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Što od navedenog nije predmet ocjenjivanja državnih službenika:",
        options: [
            "Ukupan radni staž.",
            "Stručnost.",
            "Posvećenost poslu."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je od navedenih opisna ocjena o radu državnih službenika?",
        options: [
            "Ne zadovoljava ili zadovoljava.",
            "Odličan, vrlo dobar, dobar, dovoljan, nedovoljan.",
            "Samo zadovoljava."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik stiče pravo na unapređenje u višu kategoriju radnog mjesta:",
        options: [
            "Ukoliko kvalitetno, profesionalno i stručno obavlja poslove.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kojim slučajevima se može dati odobrenje državnom službeniku da obavlja dodatne djelatnosti za koje se plaća naknada:",
        options: [
            "Ako ista nije prema propisima nespojiva sa dužnostima državnog službenika.",
            "Samo ako je to odobrio ministar.",
            "Samo ako je to odobrio predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za sva radna mjesta propisana članom 7.stav 1 ZODS u institucijama BiH utvrđuje se po:",
        options: [
            "Tri kategorije i to od I do III.",
            "Pet kategorija.",
            "Osam kategorija."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnom službeniku koji se prvi put imenuje, odnosno postavlja određuje se kategorija II stepena ako ima:",
        options: [
            "Preko deset godina radnog staža na poslovima VSS.",
            "Samo pet godina radnog staža.",
            "Samo tri godine radnog staža."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnom službeniku se može odrediti neposredno veća kategorija u okviru radnog mjesta:",
        options: [
            "Ukoliko je u posljednje četiri godine ocijenjen ocjenom uspješan.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik gubi stećeni viši stepen u kategoriji i određuje mu se neposredno niža kategorija ako je:",
        options: [
            "U posljednje tri godine ocjenjen ocjenom zadovoljava.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koga se sve ne primjenjuje ZODS u institucijama BiH?",
        options: [
            "Sekretari domova Parlamentarne skupštine Bosne i Hercegovine i sekretar Zajedničke službe Parlamentarne skupštine, savjetnici, tužioci, sudije, policijski službenici itd.",
            "Svi državni službenici.",
            "Samo ministri."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko imenuje i razrješava rukovodioce stručnih službi Vlade Federacije?",
        options: [
            "Imenuje i razrješava Vlada Federacije na prijedlog premijera.",
            "Samo premijer.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li rukovodioc može odmah razrješiti državnog službenika ukoliko je ocjena rada negativna?",
        options: [
            "Ne može, nego državni službenik s ciljem poboljšanja stanja prolazi poseban program obuke.",
            "Može, ali samo uz saglasnost ministra.",
            "Može, ali samo uz saglasnost predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Unapređenje državnog službenika u organima FBiH vrši se putem internog oglasa koji traje:",
        options: [
            "Najmanje sedam dana od dana objavljivanja.",
            "Samo tri dana.",
            "Samo pet dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko potvrđuje izbor medijatora državne službe?",
        options: [
            "Agencija za državnu službu.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši praćenje izvršenja zakona o državnoj službi u organima FBiH?",
        options: [
            "Vlada Federacije najmanje jedanput u šest mjeseci razmatra izvještaj o provođenju ovog zakona i donosi mjere za unapređenje stanja u državnoj službi.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vrši upravni nadzor nad primjenom ovog zakona o državnoj službi u FBiH?",
        options: [
            "Federalno ministarstvo pravde.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Može li se poništiti rješenje o postavljenju državnog službenika i ko ga poništava?",
        options: [
            "Može, poništava ga organ za postavljenje ako postavljeni državni službenik neopravdano ne preuzme dužnost, i to u roku od 15 dana od dana predviđenog za preuzimanje dužnosti.",
            "Ne može se poništiti.",
            "Samo ministar može poništiti."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ako je protiv zaposlenika pokrenut krivični postupak, poslodavac može da suspendira zaposlenika sa dužnosti u slučaju:",
        options: [
            "Ako je za učinjeno krivično djelo predviđena kazna zatvora u trajanju od najmanje 5 godina.",
            "Samo ako je zaposlenik u pritvoru.",
            "Samo ako je osuđen."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik stiče pravo na unapređenje u višu kategoriju radnog mjesta:",
        options: [
            "Na osnovu pozitivne ocjene rada.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ostali državni službenici, kada budu izabrani, odnosno imenovani na položaj u zakonodavnom ili izvršnom organu:",
        options: [
            "Ne podnose ostavku na dužnost državnog službenika na kojoj se nalazi u instituciji BiH, već se smatra da se nalaze na odsustvu iz državne službe.",
            "Podnose ostavku.",
            "Suspendiraju se."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Eksterni premještaj državnog službenika:",
        options: [
            "Vrši Agencija za državnu službu samo na slično radno mjesto u drugoj instituciji, u skladu sa potrebama rada, na prijedlog, odnosno uz saglasnost rukovodilaca institucija.",
            "Samo na zahtjev službenika.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Čime rukovodilac institucije BiH može ovlastiti određenog državnog službenika da može vršiti otvaranje i pregledanje pošte:",
        options: [
            "Posebnim rješenjem.",
            "Usmenom naredbom.",
            "Samo pismenim putem."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li svaki državni službenik koji obavlja dužnost u instituciji ima nesmetan pristup svom administrativnom dosjeu?",
        options: [
            "Ima nesmetan pristup svom administrativnom dosjeu.",
            "Nema pristup.",
            "Samo uz saglasnost ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se radno mjesto sekretara s posebnim zadatkom može popuniti putem internog oglašavanja i sprovođenjem internog konkursa?",
        options: [
            "Ne može, isključivo se popunjava putem javnog konkursa.",
            "Može, ali samo uz saglasnost ministra.",
            "Može, ali samo uz saglasnost predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kom roku su kandidati koji su položili stručni ispit, od dana obavještavanja, dužni dostaviti Agenciji dokaze o ispunjavanju uvjeta javnog konkursa:",
        options: [
            "U roku od pet dana.",
            "U roku od deset dana.",
            "U roku od petnaest dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Radi vjerskih blagdana/praznika ili običaja, službenik, odnosno namještenik tijekom / u toku jedne kalendarske godine ima pravo na plaćen dopust/odsustvo u trajanju od:",
        options: [
            "Dva dana.",
            "Pet dana.",
            "Sedam dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Tko vrši procjenu probnog rada državnog službenika u FBiH?",
        options: [
            "Supervizor (neposredno nadređeni državni službenik).",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kakve povrede službene dužnosti mogu biti?",
        options: [
            "Lahke i teške.",
            "Samo lahke.",
            "Samo teške."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje disciplinske mjere se izriču namješteniku za lahke povrede?",
        options: [
            "Opomena i javna opomena.",
            "Samo novčana kazna.",
            "Samo suspenzija."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje disciplinske kazne za teže povrede se izriču namješteniku?",
        options: [
            "Novčana kazna do 40 posto od osnovne plate namještenika na period do šest mjeseci, suspenzija prava na povećanje plaće u periodu od najviše dvije godine, prestanak radnog odnosa.",
            "Samo opomena.",
            "Samo javna opomena."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kojim aktom se obustavlja postupak, odbacuje prijedlog za pokretanje postupka zbog povrede službene dužnosti i odlučuje o drugim radnjama koja se tiču disciplinskog postupka?",
        options: [
            "Zaključkom.",
            "Rješenjem.",
            "Naredbom."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji akt se koristi pri izricanju disciplinskih kazni?",
        options: [
            "Rješenje.",
            "Zaključak.",
            "Naredba."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko imenuje drugostepenu komisiju za namještenike?",
        options: [
            "Vlada FBiH, a vlade kantona za namještenike iz kantonalnih, općinskih i gradskih organa državne službe na period od dvije godine.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se plaćaju takse i troškovi postupka u prvostepenom i drugostepenom disciplinskom postupku?",
        options: [
            "Ne plaćaju se takse niti troškovi postupka.",
            "Plaćaju se takse.",
            "Plaćaju se troškovi postupka."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada namješteniku prestaje radni odnos?",
        options: [
            "Čiji je rad u posljednje dvije uzastopne godine ocijenjen ocjenom nezadovoljava.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se vrši ocjenjivanje rada namještenika?",
        options: [
            "Svake godine i obavezno se vrši u januaru za prethodnu kalendarsku godinu, s tim da se ne ocjenjuju namještenici koji su u kalendarskoj godini radili manje od šest mjeseci.",
            "Samo jednom godišnje.",
            "Samo na zahtjev."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zahtjev za pokretanje disciplinskog postupka protiv državnih službenika mogu podnijeti:",
        options: [
            "Svi zaposleni u instituciji.",
            "Samo ministar.",
            "Samo predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji je zakonski osnov za unapređenje državnog službenika u institucijama BiH?",
        options: [
            "Interni ili javni konkurs.",
            "Samo interni konkurs.",
            "Samo javni konkurs."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zapošljavanje na određeno vrijeme na radna mjesta državnih službenika može se izvršiti:",
        options: [
            "Za radna mjesta državnih službenika, izuzev rukovodećih državnih službenika, i to na period najduže do devet mjeseci, osim u slučaju bolovanja ili porodiljskog odsustva državnog službenika, ali ne duže od dvije godine, po dobijenoj saglasnosti Agencije.",
            "Samo na šest mjeseci.",
            "Samo na godinu dana."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se na osnovu istih činjenica koje se razmatraju u disciplinskom postupku protiv državnog službenika pokrene krivični postupak:",
        options: [
            "Disciplinski postupak se suspendira.",
            "Nastavlja se disciplinski postupak.",
            "Obustavlja se oba postupka."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke Odbora državne službe za žalbe su:",
        options: [
            "Konačne a sudski se prispituju u skladu sa Zakonom o upravnim sporovima BiH i dostaviće se podnosiocu u roku od osam dana od dana donošenja.",
            "Nisu konačne.",
            "Mogu se žaliti samo ministru."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li odgovornost za izvršenje krivičnih djela i prekršaja isključuje disciplinsku odgovornost državnog službenika, pod uslovom da takvo djelo istovremeno predstavlja povredu službene dužnosti?",
        options: [
            "Ne isključuje.",
            "Isključuje.",
            "Samo ako je osuđen."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kod direktnog preuzimanja nerukovodećeg državnog službenika rješenje o postavljenju donosi:",
        options: [
            "Agencija za državnu službu u skladu sa sporazumom i dostavljenim dokazima o ispunjavanju uslova.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državnom službeniku prestaje radni odnos zbog:",
        options: [
            "Neopravdanog izostanka s posla u kontinuitetu dužem od pet radnih dana.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ako bi izgubio svoj poseban zadatak sekretar sa posebnim zadatkom koji je ranije imao status državnog službenika ima pravo da se vrati na isto ili slično radno mjesto na kojem je ranije radio, i to:",
        options: [
            "U zakonom propisanim slučajevima.",
            "Samo uz saglasnost ministra.",
            "Samo uz saglasnost predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv konačne odluke o izrečenoj disciplinskoj mjeri pismene opomene i pismenog ukora:",
        options: [
            "Ne može se voditi upravni spor.",
            "Može se voditi upravni spor.",
            "Samo ako je odluka ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se nerukovodeći državni službenik može premjestiti na radno mjesto nižeg nivoa a nije disciplinski odgovarao i nije mu izrečena disciplinska mjera degradiranja na neposredno niže radno mjesto?",
        options: [
            "Može, samo uz njegov lični pristanak i na lični zahtjev državnog službenika.",
            "Ne može.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li rukovodeći državni službenik može biti na odsustvu iz državne službe?",
        options: [
            "Ne može.",
            "Može, ali samo uz saglasnost ministra.",
            "Može, ali samo uz saglasnost predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prekobrojnost nastaje:",
        options: [
            "Isključivo kao posljedica reorganizacije ili smanjenja obima poslova institucije u kojoj je državni službenik zaposlen, pri čemu dolazi do ukidanja pojedinih radnih mjesta a interni premještaj nije moguć.",
            "Samo na odluku ministra.",
            "Samo na odluku predsjednika vlade."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Dobrovoljnim istupanjem iz državne službe državnom službeniku prestaje radni odnos:",
        options: [
            "U slučaju sporazuma sa institucijom na dan postignut sporazumom i u slučaju jednostranog otkaza uz otkazni rok od 30 dana od dana podnošenja zahtjeva.",
            "Samo nakon pet godina rada.",
            "Samo na odluku ministra."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pismena opomena je:",
        options: [
            "Disciplinska mjera za lakše povrede službene dužnosti.",
            "Samo upozorenje.",
            "Samo novčana kazna."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira policijskog komesara?",
        options: [
            "Nezavisni odbor.",
            "Ministar.",
            "Predsjednik vlade."
        ],
        correctAnswerIndex: 0
    },

    {
        question: "Kada je EU nastala?",
        options: ["1993.", "1957.", "2002."],
        correctAnswerIndex: 0
    },
    {
        question: "9.maj se u EU proslavlja kao dan?",
        options: ["Dan Evrope", "Dan objavljivanja Šumanove deklaracije", "Dan osnivanja EU"],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko zvjezdica ima na zastavi EU?",
        options: ["12", "15", "27"],
        correctAnswerIndex: 0
    },
    {
        question: "Šta simbolizira broj zvjezdica na zastavi EU?",
        options: ["Broj članica", "Savršenstvo, jedinstvo, harmonija", "Godine postojanja"],
        correctAnswerIndex: 1
    },
    {
        question: "Šta je po svojoj prirodi EU?",
        options: ["Međunarodna organizacija", "Država", "EU je sui generis struktura - ni država ni međunarodna organizacija"],
        correctAnswerIndex: 2
    },
    {
        question: "Šta je Vijeće Europe?",
        options: ["Institucija EU", "Međunarodna organizacija za zaštitu ljudskih prava", "Parlament EU"],
        correctAnswerIndex: 1
    },
    {
        question: "Sjedište Vijeća Europe je u:",
        options: ["Briselu", "Strazburu", "Luksemburgu"],
        correctAnswerIndex: 1
    },
    {
        question: "Evropsko vijeće je:",
        options: ["Institucija Vijeća Europe", "Institucija EU", "Nijedno od navedenog"],
        correctAnswerIndex: 0
    },
    {
        question: "Himna Vijeća Europe je:",
        options: ["Oda radosti", "Evropska himna", "Betovenova oda radosti"],
        correctAnswerIndex: 2
    },
    {
        question: "Da li Vijeće EU ima stalne članove?",
        options: ["Da", "Ne", "Samo neke države"],
        correctAnswerIndex: 1
    },
    {
        question: "Šta Vijeće donosi s Parlamentom?",
        options: ["Zakone", "Proračun EU", "Vanjsku politiku"],
        correctAnswerIndex: 1
    },
    {
        question: "Koje od pobrojanih nije nadležnost Vijeća Europe?",
        options: ["Zaštita ljudskih prava", "Industrijski razvoj", "Demokratija"],
        correctAnswerIndex: 1
    },
    {
        question: "Vijeće Europe svoj rad temelji na:",
        options: ["Ustavu EU", "Konvencijama Vijeća Europe", "Parlamentarnim odlukama"],
        correctAnswerIndex: 1
    },
    {
        question: "Parlamentarna skupština Vijeća Europe je:",
        options: ["Zakonodavno tijelo", "Savjetodavno tijelo", "Izvršno tijelo"],
        correctAnswerIndex: 1
    },
    {
        question: "Prilikom korištenja sredstava iz fondova EU:",
        options: ["Postoje ograničenja", "Nema ograničenja", "Ovisi o državi"],
        correctAnswerIndex: 1
    },
    {
        question: "U Europskoj uniji pravo predlaganja zakona ima:",
        options: ["Evropska komisija", "Evropski parlament", "Vijeće EU"],
        correctAnswerIndex: 0
    },
    {
        question: "Glasanje u EU je uspostavljeno na sljedeći način:",
        options: ["Uvijek konsenzus", "Uvijek kvalificirana većina", "Neka pitanja konsenzus, neka kvalificirana većina"],
        correctAnswerIndex: 2
    },
    {
        question: "Kada se proslavlja Dan Europe?",
        options: ["9. maj", "1. maj", "25. mart"],
        correctAnswerIndex: 0
    },
    {
        question: "Uređenje administracije regulirano je kojim poglavljem Acquis Communitairea?",
        options: ["Poglavljem 23", "Nije regulirano nikako", "Poglavljem 5"],
        correctAnswerIndex: 1
    },
    {
        question: "Sjedište Europske banke je u:",
        options: ["Frankfurtu", "Briselu", "Parizu"],
        correctAnswerIndex: 0
    },
    {
        question: "Europska komisija je:",
        options: ["Najviše nadnacionalno tijelo Europske Unije", "Predstavničko tijelo država članica", "Sudsko tijelo EU"],
        correctAnswerIndex: 0
    },
    {
        question: "Od čega se finansira budžet EU?",
        options: ["Iz doprinosa država članica", "Iz vlastitih prihoda odnosno iz budžeta EU", "Od međunarodnih donacija"],
        correctAnswerIndex: 1
    },
    {
        question: "Gdje je utvrđena konačna struktura budžeta EU?",
        options: ["U Parizu 1951.", "Samitu Evropskog savjeta u Briselu 1988.", "U Maastrichtu 1992."],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko elementarnih funkcija ima budžet EU?",
        options: ["3 (alokativna, distributivna i stabilizujuća)", "5 (upravna, kontrolna, investiciona, redistributivna i fiskalna)", "1 (fiskalna)"],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko trenutno EU ima članica?",
        options: ["27", "28", "25"],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se Ujedinjeno Kraljevstvo povuklo iz EU?",
        options: ["31 januara 2020.", "23 juna 2016.", "1 januara 2021."],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je Norveška članica EU?",
        options: ["Da", "Ne", "Djelomično"],
        correctAnswerIndex: 1
    },
    {
        question: "Koliko EU ima službenih jezika?",
        options: ["24", "27", "1 (engleski)"],
        correctAnswerIndex: 0
    },
    {
        question: "Službeni jezici Vijeća Europe su:",
        options: ["Engleski i njemački", "Francuski i engleski", "Svi jezici članica"],
        correctAnswerIndex: 1
    },
    {
        question: "Vijeće Europe:",
        options: ["Bavi se pitanjem odbrane", "Ne bavi se uopće pitanjem odbrane", "Bavi se samo ekonomskim aspektima odbrane"],
        correctAnswerIndex: 1
    },
    {
        question: "Broj parlamentaraca iz zemalja članica zavisi od:",
        options: ["Površine države", "Proporcionalno broju stanovnika", "Ekonomske snage"],
        correctAnswerIndex: 1
    },
    {
        question: "TAIEX je:",
        options: ["Program evropske pomoći u oblasti zakonodavstva", "Finansijski instrument EU", "Parlamentarna skupština"],
        correctAnswerIndex: 0
    },
    {
        question: "CE oznaka na proizvodima znači da ti proizvodi:",
        options: ["Su proizvedeni u EU", "Po svim kriterijima zadovoljavaju sigurnost korisnika", "Imaju povlašćeni porez"],
        correctAnswerIndex: 1
    },
    {
        question: "Primarna legislativa EU podrazumijeva:",
        options: ["Direktive EU", "Evropske ugovore", "Odluke Suda pravde"],
        correctAnswerIndex: 1
    },
    {
        question: "Predsjedavanje EU rotira se:",
        options: ["Svake godine", "Svakih šest mjeseci", "Svake dvije godine"],
        correctAnswerIndex: 1
    },
    {
        question: "Koju funkciju trenutno obnaša Ursula von der Leyen?",
        options: ["Predsjednik Evropskog parlamenta", "Predsjednik Evropskog vijeća", "Predsjednik Evropske komisije"],
        correctAnswerIndex: 2
    },
    {
        question: "Evropska komisija je:",
        options: ["Institucija EU zadužena da čuva komunitarne interese", "Predstavničko tijelo država članica", "Nadzorno tijelo za ljudska prava"],
        correctAnswerIndex: 0
    },
    {
        question: "Osnovni cilj osnivanja Vijeća Europe sa sjedištem u Strazburu je:",
        options: ["Ekonomska integracija", "Zaštita ljudskih prava, vladavine prava i parlamentarne demokratije", "Kreiranje zajedničke valute"],
        correctAnswerIndex: 1
    },
    {
        question: "Pod pojmom Bijela knjiga podrazumijeva se:",
        options: ["Povelja o pravima EU", "Dokument koji daje preporuke za određenu oblast", "Ustav EU"],
        correctAnswerIndex: 1
    },
    {
        question: "Kada je Parlament usvojio Ustav EU?",
        options: ["2005.", "1992.", "2007."],
        correctAnswerIndex: 0
    },
    {
        question: "Ponderacija glasova država članica u Vijeću EU temelji se na:",
        options: ["Broju stanovništva država članica EU", "Ekonomskoj snazi države", "Povijesnom značaju države"],
        correctAnswerIndex: 0
    },
    {
        question: "Država članicom EU postaje:",
        options: [
            "Kada ispuni kriterije za članstvo i završi pregovore",
            "Kada to odluči Europski parlament",
            "Automatski nakon 5 godina kandidature"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jedan od ključnih zadataka Suda pravde EU je:",
        options: [
            "Osigurati da se zakonodavstvo EU tumači i primjenjuje na isti način u svim državama članicama",
            "Donositi nove zakone",
            "Nadgledati vanjsku politiku EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bugarska i Rumunjska članicama Europske unije su postale:",
        options: ["2007.", "2004.", "2010."],
        correctAnswerIndex: 0
    },
    {
        question: "Za stupanje na snagu Sporazuma o stabilizaciji i pridruživanju između EU i BiH ključna pretpostavka je:",
        options: [
            "Provođenje Privremenog sporazuma",
            "Potpisivanje svih država članica",
            "Referendum u BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bosna i Hercegovina:",
        options: [
            "Je preuzela obavezu usklađivanja zakonodavstva sa EU",
            "Nije preuzela nikakve obaveze prema EU",
            "Je već punopravna članica EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporazum o stabilizaciji i pridruživanju između EU i BiH potpisan je:",
        options: ["16.6.2008.", "1.4.2006.", "12.12.2010."],
        correctAnswerIndex: 0
    },
    {
        question: "Europsko partnerstvo je:",
        options: [
            "Instrument procesa stabilizacije i pridruživanja",
            "Finansijski fond EU",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Najvećim dostignućem Vijeća Evrope smatra se:",
        options: [
            "Evropska konvencija za zaštitu ljudskih prava",
            "Ujedinjenje Europe",
            "Uvođenje eura"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je izvještaj o napretku?",
        options: [
            "Dokument o napretku zemalja kandidata",
            "Godišnji izvještaj o radu EU",
            "Finansijski izvještaj"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Odluku o otvaranju za svako poglavlje pregovora donosi:",
        options: [
            "Vijeće EU na temelju screening-a",
            "Europski parlament",
            "Evropska komisija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Schengen zonu čini:",
        options: [
            "22 države članice i 4 europske države koje nisu članice EU",
            "Sve članice EU",
            "Samo osnivačice EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uobičajeno je da političku odluku o otvaranju pregovora o pristupanju donosi:",
        options: [
            "Europsko vijeće",
            "Evropska komisija",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pregovori o Sporazumu o stabilizaciji i pridruživanju između BiH i EU su vođeni:",
        options: [
            "Novembar 2005 - decembar 2006",
            "Januar 2007 - juni 2008",
            "Septembar 2004 - april 2005"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "IPA je:",
        options: [
            "Program pomoći EC namijenjen zemljama kandidatima",
            "Institucija EU",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "AVIS znači mišljenje i označava:",
        options: [
            "Mišljenje EC o spremnosti zemlje za pregovore",
            "Finansijski izvještaj",
            "Političku odluku"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pregovori o SPP se mogu zaključiti:",
        options: [
            "Kada zemlja postigne dovoljan napredak",
            "Nakon 2 godine",
            "Kada to odluči Europski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Status kandidata za članstvo u EU je:",
        options: [
            "Potreban, ali ne i dovoljan za otvaranje pregovora",
            "Dovoljan za automatsko članstvo",
            "Samo formalnost"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporazum o pristupu:",
        options: [
            "Odobrava Evropski parlament i ratificiraju sve zemlje",
            "Donosi samo Europsko vijeće",
            "Automatski stupa na snagu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U pogledu perspektive zemalja Zapadnog Balkana najvažniji događaj je:",
        options: [
            "Solunski sastanak Evropskog vijeća iz 2003.",
            "Ugovor iz Lisabona",
            "Proširenje EU 2004."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Crna Gora se nalazi na istom stadiju kao i BIH:",
        options: [
            "Tačno",
            "Netačno, Crna Gora je u procesu ispred BiH",
            "Netačno, BiH je ispred Crne Gore"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Prvo partnerstvo sa BiH Vijeće je usvojilo:",
        options: ["u junu 2004.", "u decembru 2006.", "u martu 2002."],
        correctAnswerIndex: 0
    },
    {
        question: "Madridski kriteriji utvrđuju:",
        options: [
            "Spremnost administracije za zahtjeve članstva",
            "Ekonomske standarde",
            "Granice EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Turska i Hrvatska dobile su saglasnost za otpočinjanje pregovora o priključenju EU:",
        options: ["u oktobru 2005.", "u maju 2004.", "u februaru 2007."],
        correctAnswerIndex: 0
    },
    {
        question: "Kada neka zemlja zapadnog Balkana potpiše SAP sporazum ona dobija status:",
        options: [
            "Potencijalnog kandidata",
            "Punopravnog člana",
            "Promatrača"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EU funkcionira kao jedinstveni ekonomski prostor koji se naziva:",
        options: [
            "Unutrašnje tržište",
            "Carinska unija",
            "Monetarna unija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Najveći dio budžeta EU izdvaja se za:",
        options: [
            "Poljoprivredu",
            "Obrazovanje",
            "Infrastrukturu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlje članice EU sarađuju na pitanju odbrane:",
        options: [
            "Kroz NATO",
            "Nema saradnje na polju odbrane",
            "Kroz zajedničku vojsku EU"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Acquis Communitaire se sastoji od:",
        options: ["35 poglavlja.", "50 poglavlja.", "12 poglavlja."],
        correctAnswerIndex: 0
    },
    {
        question: "Da li EU ima pravni subjektivitet?",
        options: [
            "Da, Ugovorom iz Lisabona",
            "Ne",
            "Samo u nekim državama članicama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jednoglasnost je:",
        options: [
            "Način donošenja odluka u Vijeću EU",
            "Način glasanja u Parlamentu",
            "Princip u Sudu pravde"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija je:",
        options: [
            "Institucija koja zastupa interese EU",
            "Predstavničko tijelo država članica",
            "Sudsko tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropsko vijeće je:",
        options: [
            "Institucija koja definira političke smjernice EU",
            "Zakonodavno tijelo",
            "Nadzorno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "CJFU je:",
        options: [
            "Centralna jedinica za finansiranje i ugovaranje",
            "Sudsko tijelo",
            "Parlamentarni odbor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "TAIEX je:",
        options: [
            "Instrument pomoći u usklađivanju zakonodavstva",
            "Finansijski fond",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski revizorski sud je:",
        options: [
            "Nadležan za nadzor proračuna EU",
            "Zakonodavno tijelo",
            "Nadležan za ljudska prava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovorom iz Lisabona definirana su dva zakonodavna postupka:",
        options: [
            "Redovni i posebni",
            "Hitni i standardni",
            "Privremeni i trajni"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "WEU je akronim za:",
        options: [
            "Zapadnoevropsku uniju",
            "World Economic Union",
            "Western European University"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporazum o stabilizaciji i pridruživanju država:",
        options: [
            "Uspostavlja ugovorne odnose s EU",
            "Omogućava automatsko članstvo",
            "Zamjenjuje članstvo u NATO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Politički kriterij za članstvo u EU (kriteriji iz Kopenhagena) podrazumijeva:",
        options: [
            "Demokratiju, vladavinu prava, ljudska prava",
            "Ekonomsku snagu",
            "Članstvo u NATO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Što znači proporcionalnost?",
        options: [
            "Da akcije Unije ne prelaze ono što je potrebno za postizanje ciljeva",
            "Da sve države imaju jednaku moć glasa",
            "Da se budžet dijeli proporcionalno broju stanovnika"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje su isključive nadležnosti EU?",
        options: [
            "Pravila natjecanja, carinska pravila, monetarna politika za euro",
            "Obrazovanje, kultura, zdravstvo",
            "Unutarnja sigurnost, policija, sudstvo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Ministar vanjskih poslova EU?",
        options: [
            "Institucija koja osigurava konzistentnost u vanjskom djelovanju EU",
            "Predstavnik zemlje koja predsjeda Vijećem EU",
            "Šef diplomatskog zbora EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kakva je struktura Suda pravde?",
        options: [
            "Sastoji se od Evropskog suda pravde, Vrhovnog suda i posebnih sudova",
            "Ima samo jedan sud",
            "Sastoji se od nacionalnih sudova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Evropska centralna banka (ECB)?",
        options: [
            "Nadležna za monetarnu uniju i euro",
            "Banka za razvoj projekata",
            "Nacionalna banka EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je jurisdikcija Suda pravde?",
        options: [
            "Sporovi između zemalja članica, Unije i privatnih lica",
            "Samo krivični predmeti",
            "Samo ekonomski sporovi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko miliona stanovnika živi u zemljama članicama EU?",
        options: ["oko 450 miliona", "oko 300 miliona", "oko 600 miliona"],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je donio odluku o potrebi donošenja Ustava EU?",
        options: [
            "Predstavnici EU u belgijskom gradu Lekenu",
            "Europski parlament",
            "Evropska komisija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko je BiH dobila finansijske pomoći od Evropske komisije između 2000 i 2003.godine?",
        options: ["oko 390 miliona eura", "oko 100 miliona eura", "oko 1 milijardu eura"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje tijelo u Vladi BiH vrši raspodjelu pitanja po institucijama u vezi sa pripremama za EU?",
        options: [
            "Direkcija za evropske integracije",
            "Ministarstvo vanjskih poslova",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na koji način se ispituje sposobnost zemlje za ugovorne odnose sa Evropskom unijom?",
        options: [
            "Izradom izvještaja Evropske komisije",
            "Putem referenduma",
            "Putem međunarodnih pregovora"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Europski parlament je:",
        options: [
            "Institucija EU čiji se članovi biraju direktnim izborima",
            "Savjetodavno tijelo",
            "Nadzorno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gdje se održavaju sastanci Evropskog vijeća?",
        options: [
            "U zemlji koja trenutno predsjedava EU",
            "U Briselu",
            "U Strazburu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi Evropski ugovor je sklopljen:",
        options: [
            "U Parisu i osnovao je Evropsku zajednicu ugljena i čelika",
            "U Rimu i osnovao je EU",
            "U Maastrichtu i osnovao je euro"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kriterij za članstvo u Europskoj uniji podrazumijevaju:",
        options: [
            "Političke, ekonomske i pravne kriterije",
            "Samo ekonomske kriterije",
            "Samo političke kriterije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Primarni izvori Evropskog prava su:",
        options: [
            "Ugovori na kojima se temelji EU",
            "Odluke Suda pravde",
            "Direktive Evropske komisije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bijela knjiga od posebnog interesa za BiH nosi naziv:",
        options: [
            "Pripreme pridruženih zemalja CEI Evrope za integraciju u unutarnje tržište EU",
            "Strategija proširenja EU",
            "Politika susjedstva"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija je lansirala Proces stabilizacije i pridruživanja:",
        options: ["1999.", "2004.", "2007."],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski Ustav:",
        options: [
            "Usvojen je u Solunu 2003.",
            "Nikada nije usvojen",
            "Usvojen je u Lisabonu 2007."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "CARDS (Pomoć zajednice za obnovu, razvoj i stabilizaciju) je:",
        options: [
            "Program tehničke pomoći za zemlje procesa stabilizacije i pridruživanja",
            "Finansijski instrument za članice EU",
            "Program za ruralni razvoj"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za koordinaciju CARDS programa u BiH zadužena je:",
        options: [
            "Direkcija za evropske integracije",
            "Ministarstvo finansija",
            "Centralna banka"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Provedba CARDS programa vrši se u skladu sa:",
        options: [
            "Standardima i procedurama Evropske komisije",
            "Nacionalnim zakonima",
            "Odlukama Vijeća Europe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji su bili prioriteti CARDS programa?",
        options: [
            "Obnova, demokratska stabilizacija, razvoj institucionalnog okvira",
            "Samo ekonomski razvoj",
            "Samo infrastrukturni projekti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od koliko komponenata se sastojao program CARDS?",
        options: ["Dvije (državni i regionalni)", "Pet", "Jedna"],
        correctAnswerIndex: 0
    },
    {
        question: "CARDS je 2007.godine zamijenjen novim finansijskim instrumentom. Kojim?",
        options: [
            "IPA (Instrumentom pretpristupne pomoći)",
            "ERDF (Europski regionalni razvojni fond)",
            "ESF (Europski socijalni fond)"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je to EURO?",
        options: [
            "Jedinstvena valuta EU",
            "Program ekonomske pomoći",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Od kada BiH uživa status specijalnog gosta u Vijeću Europe?",
        options: ["od 28.januara 1994.", "od 2002.", "od 2008."],
        correctAnswerIndex: 0
    },
    {
        question: "Od kada se počinju razvijati odnosi između BiH i Evropske unije?",
        options: ["od aprila 1992", "od 2000.", "od 2003."],
        correctAnswerIndex: 0
    },
    {
        question: "Proces stabilizacije i pridruživanja vezuje se za:",
        options: [
            "Zemlje Zapadnog Balkana",
            "Sve zemlje u razvoju",
            "Bivše sovjetske republike"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Studiju izvodljivosti (feasibility study) izrađuje:",
        options: [
            "Evropska komisija",
            "Vijeće Europe",
            "Nacionalne vlade"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi izravni izbori za Europski parlament su održani:",
        options: ["1979.", "1957.", "1993."],
        correctAnswerIndex: 0
    },
    {
        question: "Europski ombudsmen:",
        options: [
            "Istražuje žalbe na rad institucija EU",
            "Nadzire ljudska prava",
            "Vodi vanjsku politiku"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kriteriji iz Kopenhagena su:",
        options: [
            "Kriteriji za članstvo u EU",
            "Ekonomski standardi",
            "Pravila tržišnog natjecanja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovorom o Europskoj ekonomskoj zajednici je uspostavljena:",
        options: ["Carinska unija", "Monetarna unija", "Politička unija"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je zemlja iz regije jednostrano primjenjivala Privremeni sporazum?",
        options: ["Srbija", "Hrvatska", "Crna Gora"],
        correctAnswerIndex: 0
    },
    {
        question: "Status strukturnog fonda u financijskoj perspektivi 2007 i 2013 imaju:",
        options: [
            "ERDF i ESF",
            "CARDS i IPA",
            "TAIEX i CJFU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Privremeni sporazum između EU i BiH sadrži:",
        options: [
            "6 aneksa i 6 protokola",
            "Samo glavni tekst",
            "10 poglavlja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska partnerstva sa BiH Vijeće EU usvojilo:",
        options: ["2004, 2005/2006 i 2007/2008", "2000, 2002 i 2004", "2008, 2010 i 2012"],
        correctAnswerIndex: 0
    },
    {
        question: "BiH kao potencijalni kandidat za članstvo u EU je korisnica:",
        options: [
            "Pomoći u tranziciji i prekogranične saradnje",
            "Samo infrastrukturnih projekata",
            "Samo tehničke pomoći"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje godine je Finska postala država članicom EU?",
        options: ["1995.", "2004.", "2007."],
        correctAnswerIndex: 0
    },
    {
        question: "Na temelju ispunjavanja kriterija iz Kopenhagena utvrđuje se:",
        options: [
            "sposobnost države da postane članica EU",
            "visina financijske pomoći",
            "rok za pristupanje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Parlamentarna skupština Vijeća Europe je:",
        options: [
            "Savjetodavno tijelo",
            "Zakonodavno tijelo",
            "Izvršno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Posebni zakonodavni postupak podrazumijeva:",
        options: [
            "Postupak pristanka i savjetovanja",
            "Hitni postupak",
            "Privremeni postupak"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mapu puta Vijeće EU je za BiH usvojilo 2000., a BiH suštinski ispunila:",
        options: ["2002.", "2005.", "2008."],
        correctAnswerIndex: 0
    },
    {
        question: "Primarni izvori prava Europske unije su:",
        options: [
            "Osnivački ugovori",
            "Direktive",
            "Odluke Suda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Povelja o temeljnim pravima EU sadrži:",
        options: [
            "Građanska, politička, ekonomska i socijalna prava",
            "Samo politička prava",
            "Samo ekonomska prava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uspostavljanje decentraliziranog sistema provedbe (DIS) znači:",
        options: [
            "Prijenos dijela nadležnosti na državu korisnicu pomoći",
            "Ukidanje pomoći EU",
            "Centralizaciju upravljanja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi Osnivački ugovor Evropske unije je zaključen u:",
        options: ["Parizu", "Rimu", "Maastrichtu"],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovorom o spajanju izvršene su:",
        options: [
            "Institucionalne reforme",
            "Promjene granica",
            "Ekonomske reforme"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sjedište Europske središnje banke je u:",
        options: ["Frankfurtu", "Briselu", "Parizu"],
        correctAnswerIndex: 0
    },
    {
        question: "Europsko vijeće je:",
        options: [
            "Institucija EU",
            "Institucija Vijeća Europe",
            "Nezavisna organizacija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "NATO je osnovan:",
        options: ["1949.", "1957.", "1991."],
        correctAnswerIndex: 0
    },
    {
        question: "EU je 2004 godine primila 10 država u članstvo, uključujući:",
        options: [
            "Češku, Estoniju, Cipar, Letoniju, Litvaniju, Mađarsku, Maltu, Poljsku, Slovačku i Sloveniju",
            "Hrvatsku, Bugarsku, Rumunjsku",
            "Srbiju, Crnu Goru, Makedoniju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kronološki, osnivački ugovori i njihove revizije su:",
        options: [
            "Pariški ugovor, Rimski ugovor, Ugovor o spajanju, Jedinstveni europski akt, Ugovor iz Maastrichta, Ugovor iz Amsterdama, Ugovor iz Nice, Ugovor iz Lisabona",
            "Rimski ugovor, Pariški ugovor, Ugovor iz Maastrichta",
            "Ugovor iz Lisabona, Ugovor iz Nice, Ugovor iz Amsterdama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gospodarski i socijalni odbor i Odbor regija su:",
        options: [
            "Savjetodavna tijela EU",
            "Zakonodavna tijela",
            "Nadzorna tijela"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Politički kriterij za članstvo u EU podrazumijeva:",
        options: [
            "Demokratiju, vladavinu prava, ljudska prava",
            "Samo ekonomske pokazatelje",
            "Samo članstvo u NATO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Utemeljivačima današnje Europske unije smatraju se:",
        options: [
            "Robert Schuman, Jean Monet, Paul Henri Spaak, Altero Spinell, Walter Hallstein, Alcide de Gasperi, Konrad Adenauer i Winston Churchill",
            "Samo francuski političari",
            "Samo nemački političari"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "DIPAK je:",
        options: [
            "Državni koordinator za Instrument pretpristupne pomoći",
            "Direkcija za parlamentarne odnose",
            "Dokument o integraciji"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska unija je uspostavljena stupanjem na snagu Ugovora o Evropskoj uniji:",
        options: ["1.11.1993.", "1.1.1995.", "1.5.2004."],
        correctAnswerIndex: 0
    },
    {
        question: "Primarne izvore prava EU čine:",
        options: [
            "Osnivački ugovori, njihovi aneksi i protokoli",
            "Direktive i uredbe",
            "Nacionalni zakoni"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zahtjev za članstvo je:",
        options: [
            "Pismo koje država predaje Vijeću EU",
            "Sporazum s Komisijom",
            "Deklaracija namjere"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski parlament ima sljedeće funkcije:",
        options: [
            "Zakonodavna, demokratski nadzor i usvajanje budžeta",
            "Samo zakonodavna",
            "Samo nadzorna"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija ima sljedeće funkcije:",
        options: [
            "Predstavlja interese EU, predlaže propise, upravlja politikama",
            "Samo nadzorna funkcija",
            "Samo administrativna funkcija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zastupnici se u Europski parlament biraju na mandat od:",
        options: ["5 godina", "4 godine", "6 godina"],
        correctAnswerIndex: 0
    },
    {
        question: "U okviru Regionalnog pristupa za države zapadnog Balkana postavljeni su:",
        options: [
            "Opći i specifični uslovi",
            "Samo ekonomski uslovi",
            "Samo politički uslovi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ekonomsko-fiskalni program smatra se pripremom za:",
        options: [
            "Pretpristupni ekonomski program",
            "Članstvo u NATO",
            "Uvođenje eura"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pakt stabilnosti za jugoistočnu Europu 2008. je prerastao u:",
        options: [
            "Vijeće za regionalnu suradnju",
            "Regionalni parlament",
            "Ekonomsku uniju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na samom početku europskog integriranja 50-ih u igri su bile:",
        options: [
            "Njemačka, Francuska, Italija i zemlje Beneluksa",
            "Samo zapadne zemlje",
            "Sve evropske zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gdje se održavaju sastanci Europskog vijeća?",
        options: [
            "U zemlji koja trenutno predsjedava Unijom",
            "U Briselu",
            "U Strazburu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ekonomski kriterij za članstvo u Europskoj uniji podrazumijeva:",
        options: [
            "Djelotvornu tržišnu ekonomiju",
            "Visok BDP",
            "Članstvo u WTO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Coreper II i Coreper I čine:",
        options: [
            "Veleposlanici država članica pri EU",
            "Parlamentarni odbori",
            "Radne grupe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Europska sigurnosna i obrambena politika:",
        options: [
            "Dio je zajedničke vanjske i sigurnosne politike",
            "Nezavisna je od EU",
            "Zamjenjuje NATO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mapa puta je definirala:",
        options: [
            "18 političkih i ekonomskih smjernica",
            "Samo ekonomske reforme",
            "Samo administrativne reforme"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji je osnovni cilj osnivanja Vijeća Europe?",
        options: [
            "Promocija demokracije, ljudskih prava i vladavine prava",
            "Ekonomska integracija",
            "Vojna saradnja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Vijeće Europe uspostavljeno?",
        options: ["5.5.1949.", "9.5.1950.", "1.1.1958."],
        correctAnswerIndex: 0
    },
    {
        question: "Ko čini Europsku komisiju?",
        options: [
            "27 članova na petogodišnji mandat",
            "Predstavnici vlada",
            "Izabrani parlamentarci"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Za praćenje napretka u procesu europskih integracija BiH ključan je:",
        options: [
            "Izvještaj o napretku Evropske komisije",
            "Nacionalni izvještaji",
            "Medijske objave"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam screening označava:",
        options: [
            "Analitički pregled usklađenosti zakonodavstva s acquisom",
            "Finansijsku kontrolu",
            "Političku evaluaciju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Državni fond?",
        options: [
            "Dio institucionalne strukture DIS-a",
            "Nacionalni budžet",
            "Fond za pomoć"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Države osnivačice EU su:",
        options: [
            "Belgija, Italija, Francuska, Holandija, Luksemburg i Njemačka",
            "Samo Francuska i Njemačka",
            "Sve evropske zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mišljenje i preporuka su:",
        options: [
            "Sekundarni izvori prava EU neobavezujućeg karaktera",
            "Obavezujući dokumenti",
            "Samo informativni dokumenti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je izvještaj o napretku?",
        options: [
            "Dokument o napretku zemalja kandidata",
            "Godišnji izvještaj EU",
            "Finansijski izvještaj"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "RIA je akronim za:",
        options: [
            "Procjenu utjecaja propisa",
            "Regionalnu inicijativu",
            "Radnu grupu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koliko političkih skupina su organizirani zastupnici u Europskom parlamentu?",
        options: ["7", "5", "10"],
        correctAnswerIndex: 0
    },
    {
        question: "Zajedničke vrijednosti na kojima je utemeljena EU su:",
        options: [
            "Demokracija, jednakost, vladavina prava",
            "Samo ekonomska suradnja",
            "Samo kulturna suradnja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovorom iz Lisabona objedinjeni su:",
        options: [
            "Prvi i treći stub EU",
            "Svi stubovi EU",
            "Samo prvi stub"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Državljanstvo EU:",
        options: [
            "Ne zamjenjuje nacionalno državljanstvo",
            "Zamjenjuje nacionalno državljanstvo",
            "Postoji samo u nekim državama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji su to ključni instrumenti pristupne strategije?",
        options: [
            "Pristupno partnerstvo, NPAA i pretpristupna pomoć",
            "Samo financijska pomoć",
            "Samo politički dijalog"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EUROSTAT je:",
        options: [
            "Statistički ured EU",
            "Finansijska institucija",
            "Parlamentarni odbor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam benchmarking označava:",
        options: [
            "Minimalne preduvjete za pregovore",
            "Finansijska pravila",
            "Političke standarde"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucije EU odluke donose:",
        options: [
            "Jednoglasno, kvalificiranom većinom, apsolutnom većinom",
            "Uvijek jednoglasno",
            "Uvijek kvalificiranom većinom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koliko konfiguracija Vijeće EU održava sastanke?",
        options: ["10", "5", "15"],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam acquis označava:",
        options: [
            "Ukupna prava i obaveze EU",
            "Samo zakonodavstvo",
            "Samo političke odluke"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koordinacioni odbor centralnih jedinica za harmonizaciju KO CJH je tijelo nadležno za:",
        options: [
            "Harmonizaciju regulative u javnom sektoru u BiH",
            "Političke odluke",
            "Vanjske poslove"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Acquis se:",
        options: [
            "Svakodnevno širi i reproducira",
            "Ne mijenja",
            "Primjenjuje selektivno"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U institucije EU ne spada:",
        options: [
            "Evropski sud za ljudska prava",
            "Evropska komisija",
            "Europski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Euro je platežno sredstvo od:",
        options: ["2002.", "1999.", "2005."],
        correctAnswerIndex: 0
    },
    {
        question: "U koliko zemalja je euro službena valuta?",
        options: ["19", "27", "15"],
        correctAnswerIndex: 0
    },
    {
        question: "Od kojih navedenih zemalja članica EU nije u eurozoni?",
        options: ["Danska", "Francuska", "Italija"],
        correctAnswerIndex: 0
    },
    {
        question: "Rimski ugovor iz 1957 su se sastojali od:",
        options: [
            "Ugovora o EEZ i Euratomu",
            "Samo Ugovora o EEZ",
            "Samo Ugovora o Euratomu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vijeće Europe formirano je:",
        options: ["1949,potpisivanjem Statuta u palači Saint James u Londonu", "1957.", "1993."],
        correctAnswerIndex: 0
    },
    {
        question: "Članice eurozone su:",
        options: [
            "Austrija,Belgija,Cipar,Estonija,Finska,Francuska,Grčka,Irska,Italija,Latvija,Litva,Luksemburg, Nizozemska,Njemačka,Malta,Portugal,Slovačka,Slovenija,Španjolska,ukupno 19 članica",
            "Sve članice EU",
            "Samo osnivačice EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Upitnik Evropske komisije?",
        options: [
            "Analitički instrument za ocjenu spremnosti države za status kandidata",
            "Finansijski izvještaj",
            "Politička deklaracija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Aneks Bijele knjige je podjeljen u:",
        options: ["23 poglavlja", "35 poglavlja", "12 poglavlja"],
        correctAnswerIndex: 0
    },
    {
        question: "Jedinstveno tržište danas obuhvata:",
        options: ["27 zemalja", "19 zemalja", "35 zemalja"],
        correctAnswerIndex: 0
    },
    {
        question: "Jedinstveno tržište EU je formalno profukncioniralo:",
        options: ["1992", "1957", "2002"],
        correctAnswerIndex: 0
    },
    {
        question: "Tri osnovne komponente Procesa stabilizacije i pridruživanja su:",
        options: [
            "SSP, IPA i unilateralne trgovinske mjere",
            "Samo financijska pomoć",
            "Politički dijalog i reforme"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija je lansirala Proces stabilizacije i pridruživanja:",
        options: ["1999.", "2004.", "2007."],
        correctAnswerIndex: 0
    },
    {
        question: "Novi instrument Procesa stabilizacije i pridruživanja koji je uveden nakon Solunskog samita zove se:",
        options: [
            "Europsko partnerstvo",
            "CARDS program",
            "IPA instrument"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Proces pregovaranja o Potpisivanju Ugovora o stabilizaciji i pridruživanju traje za svaku zemlju:",
        options: [
            "Zavisi od pripremljenosti zemlje",
            "Uvijek 2 godine",
            "Uvijek 5 godina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Punopravno članstvo u EU nastaje:",
        options: [
            "Kada zemlja ispuni kriterije i završi pregovore",
            "Automatski nakon kandidature",
            "Odlukom Europskog parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vijeće EU čine:",
        options: [
            "Šefovi država/vlada + Predsjednik EC",
            "Samo ministri vanjskih poslova",
            "Predstavnici nacionalnih parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jedno od navedenih nije institucija Vijeća Europe iz Strasbura:",
        options: [
            "Evropski sud pravde",
            "Parlamentarna skupština",
            "Kongres lokalnih i regionalnih vlasti"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucije Vijeća Europe su:",
        options: [
            "Odbor ministara, Parlamentarna skupština, Evropski sud za ljudska prava",
            "Samo parlamentarna skupština",
            "Samo sud za ljudska prava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Struktura EU sastoji se od:",
        options: ["Tri stuba", "Pet stubova", "Jednog stuba"],
        correctAnswerIndex: 0
    },
    {
        question: "U institucije Europske unije ne spada:",
        options: [
            "Evropski sud za zaštitu ljudskih prava",
            "Evropska komisija",
            "Europski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ugovor iz Maastrihta značajan je zbog:",
        options: [
            "Dodavanja političkih dimenzija ekonomskoj zajednici",
            "Uvođenja eura",
            "Proširenja EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Struktura EU je nastala:",
        options: ["1993.", "1957.", "2002."],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi stub EU obuhvata:",
        options: [
            "Ekonomski segment",
            "Vanjsku politiku",
            "Pravosuđe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam EU uveden je kojim ugovorom?",
        options: [
            "Ugovorom o EU iz Maastrichta(1993)",
            "Rimskim ugovorom",
            "Lisabonskim ugovorom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Drugi stub obuhvata:",
        options: [
            "Zajedničku vanjsku i sigurnosnu politiku",
            "Ekonomsku politiku",
            "Pravosuđe"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Treći stub obuhvata:",
        options: [
            "Suradnju u pravosuđu i unutarnjim poslovima",
            "Ekonomsku politiku",
            "Obrazovanje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Europsko Vijeće je:",
        options: [
            "Sastanak 27 šefova država/vlada + Predsjednik EC",
            "Samo predstavnici parlamenta",
            "Nadzorno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Posljednje proširenje EU desilo se:",
        options: [
            "2013 (Hrvatska)",
            "2004 (10 zemalja)",
            "2007 (Bugarska, Rumunjska)"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kopenhagenški kriteriji su doneseni:",
        options: ["1993.", "2004.", "1957."],
        correctAnswerIndex: 0
    },
    {
        question: "Kriterij za članstvo, tkz Kopenhagenški kriteriji su dopunjeni:",
        options: [
            "U Madridu 1995",
            "U Lisabonu 2007",
            "U Maastrichtu 1992"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Acquis communautaire je dostigao:",
        options: ["120.000 stranica", "50.000 stranica", "1 milijun stranica"],
        correctAnswerIndex: 0
    },
    {
        question: "Acqius communatuaire je:",
        options: [
            "Ukupno pravno naslijeđe EU",
            "Samo ugovori",
            "Samo direktive"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlja koja formalno aplicira za članstvo u EU mora ispuniti tri elementa. Koja?",
        options: [
            "Formalna prijava, evropski teritorij, međunarodno priznanje",
            "Samo ekonomske kriterije",
            "Samo političke kriterije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li su Turska i Hrvatska prošle isti put do statusa kandidata za članstvo u EU:",
        options: ["Ne", "Da", "Djelomično"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje godine je usvojen naziv EU?",
        options: ["1992", "1957", "2002"],
        correctAnswerIndex: 0
    },
    {
        question: "BiH je postala članica Vijeća Europe:",
        options: ["2002.(24 april)", "1995.", "2008."],
        correctAnswerIndex: 0
    },
    {
        question: "Članovi Europskog parlamenta grupiraju se:",
        options: [
            "Političkim opcijama",
            "Po državama",
            "Po regijama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EU troicu čine:",
        options: [
            "Prošli, sadašnji i budući predsjedavajući EU",
            "Tri najveće zemlje",
            "Tri institucije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Europska ekonomska zajednica je:",
        options: [
            "Zajednica iz koje se transformirala EU",
            "Finansijski fond",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nadležnost Evropskog suda pravde:",
        options: [
            "Rješava sporove između zemalja članica i Unije",
            "Osigurava ispravno trošenje budžeta",
            "Nadzire ljudska prava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Takozvana trostuba konstrukcija EU uvedena je ugovorom iz:",
        options: ["Maastrichta", "Rima", "Lisabona"],
        correctAnswerIndex: 0
    },
    {
        question: "Samo jedna zemlja iz regiona nije imala zadovoljavajuću ocjenu iz studije izvodivosti u prvom pokušaju. To je:",
        options: ["Albanija", "Srbija", "Crna Gora"],
        correctAnswerIndex: 0
    },
    {
        question: "Za prijem zemlje u članstvo EU:",
        options: [
            "Nema vremenskih uvjetovanja",
            "Postoji rok od 5 godina",
            "Postoji rok od 10 godina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bih je od Europske komisije dobila da odgovori na 346 pitanja za studij izvodivosti:",
        options: ["u martu 2003.", "2000.", "2008."],
        correctAnswerIndex: 0
    },
    {
        question: "EU je za zemlje regije ustanovila tzv.Regionalni pristup:",
        options: ["1997 godine.", "2000.", "2003."],
        correctAnswerIndex: 0
    },
    {
        question: "Komesar Unije za proširenje je:",
        options: ["Oliver Varhelyi", "Jean-Claude Juncker", "Ursula von der Leyen"],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi vršitelj dužnosti Visokog predstavnika EU za zajedničku spoljnu i sigurnosnu politiku je:",
        options: ["Javier Solana", "Federica Mogherini", "Josep Borrell"],
        correctAnswerIndex: 0
    },
    {
        question: "Trenutni Visoki predstavnik EU za zajedničku spoljnu i sigurnosnu politiku:",
        options: ["Federica Mogherini", "Josep Borrell", "Javier Solana"],
        correctAnswerIndex: 0
    },
    {
        question: "Pregovori o stabilizaciji i pridruživanju će započeti:",
        options: [
            "Kada BiH demonstrira progres u 16 prioritetnih područja",
            "Automatski nakon 2 godine",
            "Kada to odluči Europski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlje članice procesa stabilizacije i pridruživanja iz jugoistočne Evrope su:",
        options: [
            "BiH, Hrvatska, Srbija, Crna Gora, Albanija, Makedonija",
            "Samo BiH i Srbija",
            "Sve balkanske zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zemlje članice Pakta stabilnosti iz jugoistočne Evrope su:",
        options: [
            "BiH, Hrvatska, Srbija, Crna Gora, Albanija, Makedonija, Bugarska, Rumunija, Slovenija i Grčka",
            "Samo članice EU",
            "Sve balkanske zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Acquis comunautaire skraćeno acquis naziva se još i:",
        options: [
            "Nasljeđem zajednice",
            "Političkim kriterijima",
            "Finansijskim pravilima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bijela knjiga je:",
        options: [
            "Dokument strategije za pripremu zemalja kandidata",
            "Finansijski izvještaj",
            "Parlamentarna odluka"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bijela knjiga sadrži:",
        options: [
            "22 do 31 poglavlja iz acquis communatarea",
            "Samo ekonomske preporuke",
            "Samo političke preporuke"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Ekonomska i monetarna unija?",
        options: [
            "Proces usklađivanja ekonomskih i monetarnih politika sa ciljem usvajanja eura",
            "Finansijski fond",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska unija je proces saradnje i integracije koji je započelo šest evropskih zemalja:",
        options: [
            "Belgija, Njemačka, Francuska, Italija, Luksemburg i Nizozemska",
            "Samo Francuska i Njemačka",
            "Sve evropske zemlje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pojam Evropske unije uveden je ugovorom koji je potpisan:",
        options: ["u Maastrichtu, 7 februara 1992", "u Rimu 1957", "u Lisabonu 2007"],
        correctAnswerIndex: 0
    },
    {
        question: "Ciljevi EU su:",
        options: [
            "Ekonomski rast, prostor bez granica, povećanje zaposlenosti",
            "Samo monetarna unija",
            "Samo politička unija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropske institucije su:",
        options: [
            "Evropsko vijeće, Vijeće EU, Evropska komisija, EP, Sud pravde",
            "Samo Europski parlament",
            "Samo Evropska komisija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je BiH prezentovala svoj zahtjev za otpočinjanje studija izvodljivosti o zaključenju ugovora o stabilizaciji i pridruživanju?",
        options: ["u februaru 2000.", "2003.", "2008."],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Predjsedništvo BiH prihvatilo uslove EU sadržane u mapi puta?",
        options: ["6.aprila 2000", "2002.", "2005."],
        correctAnswerIndex: 0
    },
    {
        question: "Šta sadrži mapa puta?",
        options: [
            "Političke, ekonomske uslove i uslove iz oblasti demokratije",
            "Samo ekonomske uslove",
            "Samo političke uslove"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Evropski sporazum?",
        options: [
            "Sporazum o pridruživanju sa zemljama CIE",
            "Sporazum o članstvu",
            "Finansijski sporazum"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Komitologija je:",
        options: [
            "Procedura pri provođenju zakonodavstva",
            "Parlamentarna procedura",
            "Sudska procedura"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta predstavlja kriterij konvergencije?",
        options: [
            "Ekonomske uvjete za EMU",
            "Političke kriterije",
            "Pravne kriterije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Pakt stabilnosti?",
        options: [
            "Inicijativa za podršku zemalja JI Evrope",
            "Finansijski fond",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je osnovan Pakt stabilnosti?",
        options: ["u junu 1999.", "2000.", "2004."],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je osnovano Vijeće Europe?",
        options: ["5.maja 1949", "1957.", "1993."],
        correctAnswerIndex: 0
    },
    {
        question: "Glavni ciljevi Vijeća Europe su:",
        options: [
            "Zaštita ljudskih prava, parlamentarna demokratija, razvoj evropskih ugovora",
            "Samo ekonomska integracija",
            "Samo kulturna saradnja"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta čini strukturu Vijeća Europe?",
        options: [
            "Komitet ministara, Parlamentarna skupština, Kongres lokalnih i regionalnih vlasti",
            "Samo parlamentarna skupština",
            "Samo komitet ministara"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Evropska unija objavila studiju izvodljivosti za BiH?",
        options: ["18.novembra 2003.", "2000.", "2005."],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko prioritetnih reformi je identificirano u studiji izvodjivosti?",
        options: ["16", "10", "25"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje tijelo vlasti BiH je direktno zaduženo za organizaciju i praćenje ispunjenja uslova za uključenje BiH u evropske integracije?",
        options: [
            "Direkcija za evropske integracije u sastavu Vijeća ministara BiH",
            "Parlamentarna skupština",
            "Predsjedništvo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Vijeće ministara BiH podnijelo izvještaj o ostvarenom napretku u 16 prioritetnih oblasti?",
        options: ["22.jula 2004", "2003.", "2005."],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko je sastanaka institucija BiH održano sa predstavnicima Evropske komisije o Studiji izvodljivosti u toku 2003 godine?",
        options: ["4", "1", "10"],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Evropski parlament i koliko broji članica?",
        options: [
            "Institucija sa 705 članova (5 godina mandat)",
            "Savjetodavno tijelo",
            "Nadzorno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropski savjet:",
        options: [
            "Tijelo EU bez legislativne funkcije",
            "Zakonodavno tijelo",
            "Sudsko tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Savjet ministara EU:",
        options: [
            "Zajedno sa EP izvršava legislativne i budžetske poslove",
            "Samo savjetodavno tijelo",
            "Samo nadzorno tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska komisija EC:",
        options: [
            "Tijelo koje zastupa zajedničke interese svih zemalja članica",
            "Predstavničko tijelo država članica",
            "Sudsko tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je to Odbor regija?",
        options: [
            "Tijelo sa zastupnicima lokalnih i regionalnih vlasti",
            "Parlamentarni odbor",
            "Vladin odbor"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucionalnu strukturu EU čine:",
        options: [
            "Institucije EU, savjetodavna tijela, financijska tijela, agencije",
            "Samo institucije EU",
            "Samo parlament i komisija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uredba kao pravni instrument EU predstavlja:",
        options: [
            "Pravni akt obavezujući u cijelosti",
            "Samo preporuku",
            "Samo informativni dokument"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sud pravde EU čine:",
        options: [
            "Sud pravde, opći sud i specijalizirani sudovi",
            "Samo glavni sud",
            "Samo sud za ljudska prava"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska unija temelji se na:",
        options: [
            "Ugovoru o EU, Ugovoru o funkcioniranju EU i Povelji o pravima",
            "Samo nacionalnim ustavima",
            "Samo međunarodnim konvencijama"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta znači da neka država pripada eurozoni?",
        options: [
            "Usvaja zajedničku monetarnu politiku i valutu",
            "Samo koristi euro",
            "Ima poseban status u EU"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako su definirane nadležnosti EU?",
        options: [
            "U granicama nadležnosti koje su joj države dodijelile",
            "Neograničene",
            "Samo u ekonomskim pitanjima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada EU donosi budžete?",
        options: ["Na period od šest godina", "Godišnje", "Na dvije godine"],
        correctAnswerIndex: 0
    },
    {
        question: "Kako se zove proces mjerenja rezultata u usklađivanju sa Acquis Comm?",
        options: ["Screening", "Evaluacija", "Monitoring"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je najstarija politička organizacija na Europskom kontinentu?",
        options: ["Vijeće Europe", "EU", "NATO"],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je IPA?",
        options: [
            "Finansijski instrument za države kandidate",
            "Parlamentarna skupština",
            "Politički sporazum"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko donosi odluku o pristupanju nove države članice EU?",
        options: ["Europska komisija", "Europski parlament", "Vijeće Europe"],
        correctAnswerIndex: 0
    },
    {
        question: "Madridski kriterij podrazumijeva:",
        options: [
            "Funkcionalnu tržišnu ekonomiju i kapacitete za konkurenciju",
            "Samo političke kriterije",
            "Samo pravne kriterije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Zajednička komisija za Europske integracije jeste Zajedničko tijelo:",
        options: ["oba doma PS BiH", "vlade", "predsjedništva"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja od navedenih je nova funkcija unutar sistema institucionalnog sustava EU?",
        options: [
            "Visoki predstavnik EU za vanjsku i sigurnosnu politiku",
            "Predsjednik komisije",
            "Predsjednik parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je svrha postojanja kohezione politike EU?",
        options: [
            "Umanjiti socijalne i ekonomske razlike",
            "Osigurati vojnu sigurnost",
            "Kontrolirati migracije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pravno obavezujući sekundarni izvori prava EU su:",
        options: ["Uredbe, odluke, direktive", "Samo preporuke", "Samo mišljenja"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja institucija EU ima odgovornost da utvrđuje opće smjernice u oblasti zajedničke vanjske i sigurnosne politike?",
        options: ["Europsko vijeće", "Europski parlament", "Evropska komisija"],
        correctAnswerIndex: 0
    },
    {
        question: "Kojim ugovorom o EU se bliže definiraju principi jedinstvenog tržišta?",
        options: [
            "Jedinstvenim Europskim aktom",
            "Ugovorom iz Lisabona",
            "Ugovorom iz Nice"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Acquis Communautaire?",
        options: [
            "Komunitarno pravo sa supremacijom nad nacionalnim",
            "Samo politički sporazumi",
            "Samo ekonomski propisi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja institucija EU odobrava kredite nedovoljno razvijenim regionima?",
        options: [
            "Evropska investiciona banka",
            "Europski parlament",
            "Evropska komisija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja je jedina zemlja članica EU odbila Lisabonski ugovor na referendumu 2008 godine?",
        options: ["Irska", "Francuska", "Nizozemska"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje izvršno tijelo EU ima ekskluzivno pravo zakonodavne inicijative?",
        options: [
            "Europska komisija",
            "Europsko vijeće",
            "Vijeće ministara"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja institucija EU je zadužena za kontrolu prihoda i rashoda budžeta EU?",
        options: [
            "Europski sud revizora",
            "Evropska komisija",
            "Europski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ključne supranacionalne institucije EU su:",
        options: [
            "Europsko Vijeće, Vijeće ministara, EP, Komisija, Sud EU",
            "Samo parlament i komisija",
            "Samo sud"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje tri europske zajednice predstavljale osnov za kreiranje EU?",
        options: [
            "EZ za ugalj i čelik, EZ za atomsku energiju i Europska ekonomska zajednica",
            "Samo Ekonomska zajednica",
            "Samo Euratom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Europski komesar uručio Upitnik Europske komisije predsjedavajućem Vijeća ministara BiH?",
        options: ["9.12.2016.", "2014.", "2018."],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je Sporazum o stabilizaciji i pridruživanju stupio na snagu?",
        options: ["1.6.2014", "2008.", "2012."],
        correctAnswerIndex: 0
    },
    {
        question: "Prvi formalni ugovorni odnos između BiH i EU je:",
        options: [
            "Sporazum o stabilizaciji i pridruživanju",
            "Privremeni sporazum",
            "Sporazum o saradnji"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sporazum o stabilizaciji i pridruživanju sa EU potpisan je:",
        options: ["16.6.2008.", "2005.", "2010."],
        correctAnswerIndex: 0
    },
    {
        question: "Unutrašnje tržište EU podrazumijeva:",
        options: [
            "Prostor bez unutarnjih granica sa slobodnim kretanjem roba, osoba, usluga i kapitala",
            "Samo carinsku uniju",
            "Samo monetarnu uniju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li preporuke i mišljenja kao sekundarni izvori prava EU imaju obavezujuću snagu?",
        options: ["NE", "DA", "Djelomično"],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je direktiva obavezujuća u pogledu rezultata koji je potrebno postići?",
        options: ["DA", "NE", "Samo za neke države"],
        correctAnswerIndex: 0
    },
    {
        question: "Da li uredba ima opću primjenu i obavezujuća je u cijelosti?",
        options: ["DA", "NE", "Samo u nekim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Europska komisija je:",
        options: [
            "Politički neovisno izvršno tijelo odgovorno za prijedloge zakonodavstva",
            "Predstavničko tijelo država članica",
            "Sudsko tijelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Vijeće EU čine:",
        options: [
            "Predsjednici i zamjenici predsjednika svih država članica EU",
            "Samo ministri vanjskih poslova",
            "Samo šefovi vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Program CARDS BiH djeluje u programu:",
        options: [
            "Direkcije za Europske integracije",
            "Ministarstva vanjskih poslova",
            "Parlamenta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je Norveška potpisnica Šengenskog sporazuma?",
        options: ["DA", "NE", "Djelomično"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje tijelo BiH je donijelo Priručnik za usklađivanje propisa BiH sa propisima EU?",
        options: [
            "Direkcija za Evropske integracije 2005 godine",
            "Parlament",
            "Vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Acquis za potrebe pregovora o pristupanju dijeli na:",
        options: ["35 poglavlja", "50 poglavlja", "20 poglavlja"],
        correctAnswerIndex: 0
    },
    {
        question: "Avis je:",
        options: [
            "Dokument kojim EC ocjenjuje sposobnost države za ispunjavanje kriterija za članstvo",
            "Finansijski izvještaj",
            "Politička deklaracija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Bezvizni režim za Bih je uspostavljen:",
        options: ["15.12.2010.", "2008.", "2012."],
        correctAnswerIndex: 0
    },
    {
        question: "Evropska ekonomska zajednica je:",
        options: [
            "Jedna od tri evropske zajednice iz kojih je izrasla EU",
            "Finansijski fond",
            "Parlamentarna skupština"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Izvore prava EU čini i:",
        options: [
            "Praksa Suda pravde EU",
            "Samo ugovori",
            "Samo direktive"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Instrumenti za usklađivanje zakonodavstva BiH sa pravnom stečevinom acquis EU su:",
        options: [
            "Tabela usklađenosti i izjava o usklađenosti",
            "Samo parlamentarne odluke",
            "Samo vladine odluke"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Jesu li sve države članice EU prošle isti put do članstva u EU?",
        options: [
            "NE, način i dinamika ovisi o spremnosti države i EU",
            "DA, sve su imale isti proces",
            "Samo osnivačice"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kriterijumi iz Kopenhagena su:",
        options: [
            "Uslovi za članstvo u EU",
            "Samo ekonomski standardi",
            "Samo politički standardi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Na temelju odgovora na Upitnik:",
        options: [
            "EC izrađuje avis o sposobnosti države za članstvo",
            "Automatski se otvaraju pregovori",
            "Donosi se politička odluka"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Načelo supsidijarnosti:",
        options: [
            "Definira prednost Unije u odnosu na države članice u određenim područjima",
            "Samo financijsko načelo",
            "Samo političko načelo"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako se i na koji način razvrstavaju upravni akti u RS?",
        options: [
            "Primljene akte ovlašteni radnik razvrstava na predmete upravnog postupka i na ostale akte predmetaneupravnog postupka",
            "Svi akti se razvrstavaju zajedno bez posebnih kategorija",
            "Akti se razvrstavaju samo po datumu primitka"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Klasifikacija predmeta i akata u RS?",
        options: [
            "Od 0 do 9",
            "Od A do Z",
            "Od 1 do 10"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o sukobu nadležnosti između Distrikta Brčko i Institucija BiH?",
        options: [
            "Ustavni sud BiH",
            "Vlada RS",
            "Evropski sud"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji Ministar vanjskih poslova je potpisao Ugovor o čeliku i uglju?",
        options: [
            "Robert Šhuman",
            "Jean Monnet",
            "Konrad Adenauer"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje je boje omot drugostepenog akta?",
        options: [
            "Žute boje",
            "Plave boje",
            "Crvene boje"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko traje pripravnički staž za VSS?",
        options: [
            "1 godina",
            "2 godine",
            "6 mjeseci"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U vršenju inspekcijskog nadzora upravni inspektor sačinjava?",
        options: [
            "Zapisnik",
            "Izvještaj",
            "Dokument"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kada stupaju na snagu Odluke Parlamentarne skupštine BiH?",
        options: [
            "Neće stupiti na snagu prije nego što budu objavljene",
            "Odmah nakon donošenja",
            "Nakon 30 dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Organ uprave propisuje bliža pravila i uputstva za rad?",
        options: [
            "Instrukcijama",
            "Zakonom",
            "Uredbom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koji je moto ili slogan EU?",
        options: [
            "Ujedinjenje u raznolikosti",
            "Sloboda, jednakost, bratstvo",
            "Zajedno jači"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "O statusnim pitanjima službenika i namještenika odlučuje:",
        options: [
            "Rukovodilac organa uprave",
            "Ministar",
            "Službenički savjet"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sjedište Evropskog parlamenta je?",
        options: [
            "Strasbourg",
            "Brisel",
            "Luxembourg"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Pripravnici imaju pravo na platu od:",
        options: [
            "70 posto",
            "50 posto",
            "90 posto"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko članova broji CiK?",
        options: [
            "7 članova",
            "5 članova",
            "9 članova"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Kako je organizovana sudska vlast u DB?",
        options: [
            "Osnovni sud i Apelacioni sud",
            "Opštinski sud i Okružni sud",
            "Vrhovni sud i Ustavni sud"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Najmanja država površinom u EU?",
        options: [
            "Malta",
            "Luksemburg",
            "Cipar"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koliko maloljetna osoba maksimalno može da radi u FBiH (puno radno vrijeme)?",
        options: [
            "35 sati",
            "40 sati",
            "30 sati"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ocjenjivanje službenika u RS vrši se svakih?",
        options: [
            "6 mjeseci",
            "1 godinu",
            "3 mjeseca"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Institucija EU koja određuje opće političko usmjerenje?",
        options: [
            "Evropsko Vijeće",
            "Evropska komisija",
            "Evropski parlament"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta spada u omot crvene boje?",
        options: [
            "Predmeti i akti koji su zavedeni u djelovodnik za strogu i povjerljivu poštu",
            "Svi važni dokumenti",
            "Finansijski izvještaji"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Gdje se piše dopis?",
        options: [
            "Na memorandumu",
            "Na službenom papiru",
            "U dnevniku"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko je donio uredbu o kancelarijskom poslovanju FBiH?",
        options: [
            "Vlada FBiH na prijedlog federalnog ministra pravde",
            "Parlament FBiH",
            "Predsjedništvo BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Uvjerenje i potvrde spadaju pod upravne akte?",
        options: [
            "Ne spadaju",
            "Spadaju",
            "Samo uvjerenje spada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ponavljanje postupka u upravnom sporu se pokreće?",
        options: [
            "Zahtjevom",
            "Automatski",
            "Odlukom suda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je IPA?",
        options: [
            "Instrument pretpristupne pomoći",
            "Međunarodna policijska agencija",
            "Institucija za pravnu pomoć"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koja zemlja je 2016 godine glasala za izlazak iz EU?",
        options: [
            "Velika Britanija",
            "Francuska",
            "Italija"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Stavlja li se na račune prijemni pečat?",
        options: [
            "Na primljene račune stavlja se otisak prijemnog štambilja",
            "Ne stavlja se ništa",
            "Samo potpis"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv odluke izborne komisije može se uložiti žalba:",
        options: [
            "Apelacionom odjeljenju",
            "Vrhovnom sudu",
            "Ustavnom sudu"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Stranka u postupku može odustati od zahtjeva:",
        options: [
            "U toku cijelog postupka",
            "Samo na početku",
            "Nakon prvog ročišta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "EUROSTAT je?",
        options: [
            "Statistički ured Evropskih zajednica čiji je zadatak obrada i objavljivanje uporedivih statističkih podataka na nivou EU",
            "Evropska banka",
            "Evropska agencija za standardizaciju"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Razmjena studenta kojim programom se obavlja?",
        options: [
            "ERASMUS",
            "SOCRATES",
            "LEONARDO"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Godišnji odmor ako se uzima u dijelovima, koliko prvi dio traje godišnjeg odmora?",
        options: [
            "U trajanju od najmanje 12 radnih dana",
            "U trajanju od najmanje 7 radnih dana",
            "U trajanju od najmanje 14 radnih dana"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Noćni rad se smatra:",
        options: [
            "22 sata uvečer i šest sati ujutro idućeg dana",
            "20 sati uvečer i četiri sata ujutro idućeg dana",
            "Ponoć do šest ujutro"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Da li se može izjaviti žalba protiv rješenje Vlade RS?",
        options: [
            "Ne može",
            "Može",
            "Samo u posebnim slučajevima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko bira policijskog komesara?",
        options: [
            "Nezavisni odbor",
            "Ministar unutrašnjih poslova",
            "Vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Sekretar Vlade FBiH:",
        options: [
            "Nije državni službenik, a Vlada FBiH imenuje i razrješava sekretara, a za svoj rad odgovara Vladi, Premijeru i zamjeniku Premijera",
            "Je državni službenik",
            "Bira se na izborima"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Mandat sudija Ustavnog suda:",
        options: [
            "U prvom sazivu je mandat trajao 5 godina, a sudije kasniji saziva mogu obavljati svoje dužnosti do 70 godina",
            "Trajno",
            "6 godina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koju knjigu se zavode računi?",
        options: [
            "Otprema računa i drugih finansijskih sredstava vrše se putem knjige za otpremu računa",
            "Glavna knjiga",
            "Dnevnik"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odobrava Budžet institucija BiH?",
        options: [
            "Parlamentarna skupština BiH",
            "Vlada BiH",
            "Predsjedništvo BiH"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Reguliranje međuentitetskog transporta je u nadležnosti?",
        options: [
            "Institucija BiH",
            "Entiteta",
            "Brčko Distrikta"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kojem roku od dana utvrđivanja podliježu reviziji radna mjesta na kojima se staž osiguranja računa sa uvećanim trajanjem?",
        options: [
            "5 godina",
            "3 godine",
            "10 godina"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U slučaju lakših povreda radnih obaveza ugovor o radu se ne može otkazati bez?",
        options: [
            "Prethodnog izjašnjenja zaposlenika",
            "Saglasnosti sindikata",
            "Odluke suda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko imenuje članove disciplinske komisije?",
        options: [
            "Agencija za državnu službu",
            "Ministar",
            "Vlada"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak ovjeravanja potpisa, rukopisa i prijepisa uređen je:",
        options: [
            "Zakonom i uputstvom",
            "Samo zakonom",
            "Pravilnikom"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Šta je Revers?",
        options: [
            "Privremena evidencija o rukovanju arhivskim predmetima",
            "Vrsta ugovora",
            "Službena potvrda"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U koliko faza se sastoji ovjeravanje rukopisa i potpisa?",
        options: [
            "Dvije",
            "Tri",
            "Jedna"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "U kojim slučajevima nije potrebno utvrditi identitet osobe prilikom ovjeravanja rukopisa, potpisa i prijepisa?",
        options: [
            "Prijepisa",
            "Rukopisa",
            "Potpisa"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Koje podatke ne treba sadržavati potvrda o ovjeri prijepisa?",
        options: [
            "Lične podatke osobe koja traži ovjeravanje prijepisa",
            "Datum ovjere",
            "Pečat institucije"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ko vodi rokovnik predmeta u organima službe za upravu?",
        options: [
            "Službenik pisarnice",
            "Sekretar",
            "Arhivar"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Evidencija u omot za predmete i akte vodi se:",
        options: [
            "Na prednjoj i unutrašnjoj strani omota",
            "Samo na prednjoj strani",
            "U posebnoj knjizi"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Izvori radnog prava, prema tome ko ih donosi se dijele:",
        options: ["Heteronomne, autonomne i sui generis", "Državni i privatni", "Zakonski i podzakonski"],
        correctAnswerIndex: 0
    },
    {
        question: "Bitni elementi radnog odnosa su:",
        options: ["Subordinacija, Oneoroznost, Lično obavljanje rada", "Plaća, Radno vrijeme, Godišnji odmor", "Ugovor, Pravilnik, Kolektivni ugovor"],
        correctAnswerIndex: 0
    },
    {
        question: "Subordinacija podrazumjeva:",
        options: ["Pravo poslodavca da radniku nalaže, kontroliše i sankcioniše njegov rad", "Obavezu radnika da poštuje radno vrijeme", "Pravo radnika na kolektivno pregovaranje"],
        correctAnswerIndex: 0
    },
    {
        question: "Prosječno sedmično puno radno vrijeme radnika je:",
        options: ["40 sati", "38 sati", "42 sata"],
        correctAnswerIndex: 0
    },
    {
        question: "Otkazni rok kada zaposleni otkazuje ugovor o radu ne može biti kraći od:",
        options: ["7 dana", "15 dana", "30 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Poslodavac može samostalno izmjeniti uslove utvrđene ugovorom o radu.",
        options: ["Da", "Ne", "Samo uz saglasnost sindikata"],
        correctAnswerIndex: 1
    },
    {
        question: "Vrste zaštite prava iz radnog odnosa su:",
        options: ["Interna i eksterna", "Sudska i vanparnična", "Individualna i kolektivna"],
        correctAnswerIndex: 0
    },
    {
        question: "Sudska zaštita se ostvaruje pred redovnim sudovima u parničnom postupku:",
        options: ["Da", "Ne", "Samo u određenim slučajevima"],
        correctAnswerIndex: 1
    },
    {
        question: "Stvarno nadležni sudovi za rješavanje radnih sporova su:",
        options: ["Općinski sudovi", "Kantonalni sudovi", "Vrhovni sud"],
        correctAnswerIndex: 0
    },
    {
        question: "Organizacijski razlozi zbog kojih poslodavac može otkazati ugovor o radu su:",
        options: ["Ukidanje pojedinih poslova", "Slabi poslovni rezultati", "Ponašanje radnika"],
        correctAnswerIndex: 0
    },
    {
        question: "Rok za zaštitu prava iz radnog odnosa kod poslodavca je:",
        options: ["30 dana od dana saznanja za povredu", "15 dana od dana povrede", "60 dana od dana povrede"],
        correctAnswerIndex: 0
    },
    {
        question: "Zaštita prava iz radnog odnosa pred nadležnim sudom uslovljena je prethodnim zahtjevom poslodavcu za ostvarenje povrijeđenog prava, izuzev kod naknade štete ili drugih novčanih potraživanja.",
        options: ["Da", "Ne", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Pravilnik o radu dužan je donijeti poslodavac koji zapošljava više od:",
        options: ["30 radnika", "50 radnika", "10 radnika"],
        correctAnswerIndex: 0
    },
    {
        question: "Vrste kolektivnih ugovora su:",
        options: ["Opći kolektivni ugovor", "Individualni i grupni", "Sektorski i lokalni"],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodeći državni službenici su:",
        options: ["Rukovodilac samostalne uprave i ustanove", "Ministri i direktori", "Svi državni službenici"],
        correctAnswerIndex: 0
    },
    {
        question: "Imenovanje na mjesto savjetnika se može preinačiti u položaj državnog službenika:",
        options: ["Da", "Ne", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Uslovi koje moraju ispunjavati savjetnici moraju biti identični uslovima za prijem:",
        options: ["Pomoćnika rukovodioca organa", "Običnih državnih službenika", "Ministara"],
        correctAnswerIndex: 0
    },
    {
        question: "Komisija za izbor državnog službenika sastoji se od:",
        options: ["3 člana", "5 članova", "7 članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Državnog službenika sa liste uspješnih kandidata, i uz prethodno pribavljeno mišljenje ADS FBiH, postavlja:",
        options: ["Rukovodilac organa", "Ministar", "Komisija"],
        correctAnswerIndex: 0
    },
    {
        question: "Izvori radnog prava su:",
        options: ["Zakoni", "Običaji", "Međunarodni ugovori"],
        correctAnswerIndex: 0
    },
    {
        question: "Princip in favorem laboratoris podrazumjeva:",
        options: ["Da se na radnika treba primijeniti najpovoljnije pravo", "Da radnik ima prednost u sporovima", "Da poslodavac ima pravo otkaza"],
        correctAnswerIndex: 0
    },
    {
        question: "Radni odnos zasniva se:",
        options: ["Stupanjem na rad na osnovu zaključenog ugovora o radu", "Usmenim dogovorom", "Samim početkom rada"],
        correctAnswerIndex: 0
    },
    {
        question: "Najniža plaća se utvrđuje:",
        options: ["Kolektivnim ugovorom i pravilnikom o radu", "Zakonom", "Sporazumom između poslodavca i radnika"],
        correctAnswerIndex: 0
    },
    {
        question: "Teret dokazivanja postojanja opravdanog razloga za otkaz u sporu zbog otkaza ugovora o radu je na:",
        options: ["Tuženom", "Tužiocu", "Sudu"],
        correctAnswerIndex: 0
    },
    {
        question: "Vremenski periodi isplate plaće su do:",
        options: ["30 dana", "15 dana", "45 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Poslovno uslovljen redovan otkaz zasniva se:",
        options: ["Na prestanku potrebe za radom radnika zbog ekonomskih, tehničkih ili organizacijskih razloga", "Na ponašanju radnika", "Na kršenju ugovora"],
        correctAnswerIndex: 0
    },
    {
        question: "Radno-pravni odnos državnih službenika uspostavlja se:",
        options: ["Rješenjem", "Ugovorom", "Zakonom"],
        correctAnswerIndex: 0
    },
    {
        question: "Ekonomski razlozi zbog kojih poslodavac može otkazati ugovor o radu su:",
        options: ["Gubitak tržišta, Slabi poslovni rezultati", "Nedostatak kvalifikacija radnika", "Promjena tehnologije"],
        correctAnswerIndex: 0
    },
    {
        question: "Zaštita prava iz radnog odnosa ostvaruje se:",
        options: ["U radnom sporu pred redovnim sudom", "Samo pred inspekcijom rada", "Isključivo kolektivnim pregovaranjem"],
        correctAnswerIndex: 0
    },
    {
        question: "Inspekcija rada može naložiti poslodavcu upravnu mjeru uspostavljanja radno-pravnog odnosa radniku kojem je odlukom poslodavca utvrđen prestanak radnog odnosa:",
        options: ["Da", "Ne", "Samo u određenim slučajevima"],
        correctAnswerIndex: 1
    },
    {
        question: "Rukovodilac samostalne uprave i samostalne ustanove za svoj rad i upravljanje odgovara:",
        options: ["Vladi FBiH", "Parlamentu", "Ministarstvu"],
        correctAnswerIndex: 0
    },
    {
        question: "Unaprjeđenje rukovodećeg državnog službenika na više radno mjesto vrši se:",
        options: ["Isključivo putem javnog konkursa", "Po odluci rukovodioca", "Po stažu"],
        correctAnswerIndex: 0
    },
    {
        question: "Pravo na godišnji odmor u trajanju od najmanje 18 radnih dana ima zaposlenik koji ima:",
        options: ["Najmanje šest mjeseci neprekidnog rada", "Godinu dana rada", "Tri mjeseca rada"],
        correctAnswerIndex: 0
    },
    {
        question: "Rad državnog službenika ocjenjuje rukovodilac organa državne službe:",
        options: ["Najmanje svakih 12 mjeseci", "Svakih 6 mjeseci", "Po potrebi"],
        correctAnswerIndex: 0
    },
    {
        question: "Polaznu osnovu za obračun plate za sve državne službenike u FBiH utvrđuje:",
        options: ["Vlada Federacije BiH", "Ministarstvo finansija", "Agencija za državnu službu"],
        correctAnswerIndex: 0
    },
    {
        question: "Ko izriče disciplinske mjere državnom službeniku?",
        options: ["Disciplinska komisija", "Rukovodilac organa", "Ministar"],
        correctAnswerIndex: 0
    },
    {
        question: "Državni službenik koji je preventivno suspendovan za vrijeme trajanja suspenzije prima platu u iznosu:",
        options: ["Punog iznosa plate", "Polovine plate", "Trećine plate"],
        correctAnswerIndex: 0
    },
    {
        question: "Viši stručni saradnik obavlja:",
        options: ["Odgovorne poslove u određenoj organizacionoj jedinici", "Pomoćne poslove", "Administrativne poslove"],
        correctAnswerIndex: 0
    },
    {
        question: "Godišnji odmor za državnog službenika po svim osnovama ne može trajati duže od:",
        options: ["36 radnih dana", "30 radnih dana", "42 radna dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Period probnog rada državnog službenika traje ukupno:",
        options: ["Šest mjeseci nakon preuzimanja dužnosti", "Tri mjeseca", "Godinu dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Interni premještaj sa radnog mjesta državnog službenika na slično radno mjesto u istom organu državne službe može biti:",
        options: ["Dobrovoljan ili nametnut državnom službeniku u skladu sa objektivno utvrđenim potrebama državne službe", "Samo dobrovoljan", "Samo nametnut"],
        correctAnswerIndex: 0
    },
    {
        question: "Disciplinski postupak protiv namještenika zbog povrede službene dužnosti pokreće se:",
        options: ["Na zahtjev rukovodioca organa državne službe", "Po službenoj dužnosti", "Na zahtjev kolega"],
        correctAnswerIndex: 0
    },
    {
        question: "Zakon o upravnom postupku je:",
        options: ["procesno-pravni propis", "materijalno-pravni propis", "ustavni propis"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravne stvari u upravnom postupku rješavaju:",
        options: ["Organi uprave, preduzeća, ustanove i pravna lica kojima su povjerena javna ovlaštenja", "Samo organi uprave", "Isključivo sudovi"],
        correctAnswerIndex: 0
    },
    {
        question: "Poseban upravni postupak se može propisati samo:",
        options: ["Posebnim federalnim zakonom", "Uredbom vlade", "Odlukom ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Nadležnost organa da riješi upravnu stvar u upravnom postupku može se mijenjati:",
        options: ["Ne može se mijenjati", "Može se mijenjati odlukom ministra", "Može se mijenjati sporazumom organa"],
        correctAnswerIndex: 0
    },
    {
        question: "Načelo materijalne istine znači:",
        options: ["Obavezu organa da utvrdi pravo stanje stvari i u tom cilju utvrdi pravilno i potpuno sve činjenice i okolnosti koje su od značaja za donošenje zakonitog i pravilnog rješenja", "Da se postupak vodi po formalnim pravilima", "Da se vodi evidencija o postupku"],
        correctAnswerIndex: 0
    },
    {
        question: "Stranačku sposobnost u upravnom postupku ima svako lice:",
        options: ["Koje je sposobno biti stranka u postupku", "Koje ima punoletnu dob", "Koje ima državljanstvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenje u upravnom postupku donosi:",
        options: ["Rukovodilac organa uprave", "Službenik koji vodi postupak", "Komisija"],
        correctAnswerIndex: 0
    },
    {
        question: "Podnesci se mogu podnositi putem faxa:",
        options: ["Da", "Ne", "Samo u hitnim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako podnesak sadrži nedostatke usljed kojih se po njemu ne može postupiti:",
        options: ["Organ će poduzeti potrebne radnje radi otklanjanja nedostataka", "Odbija se podnesak", "Šalje se na dopunu"],
        correctAnswerIndex: 0
    },
    {
        question: "Pozivanje se može vršiti radi dostavljanja pismena:",
        options: ["Ne", "Da", "Samo u izuzetnim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "O važnijim usmenim izjavama stranaka ili trećih lica u postupku sastavlja se:",
        options: ["Zapisnik", "Službena bilješka", "Izjava"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravni postupak pokreće:",
        options: ["Organ po službenoj dužnosti ili povodom zahtjeva stranke", "Samo na zahtjev stranke", "Po nalogu suda"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravni postupak se smatra pokrenutim:",
        options: ["Kad je organ izvršio ma koju radnju radi vođenja postupka", "Kad je podnesen zahtjev", "Kad je dostavljen poziv"],
        correctAnswerIndex: 0
    },
    {
        question: "Skraćeni ispitni postupak je postupak manjeg značaja:",
        options: ["Ne", "Da", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv uvjerenja se može izjaviti žalba:",
        options: ["Ne", "Da", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenjem se odlučuje:",
        options: ["O stvari koja je predmet postupka", "O pravima i obavezama stranaka", "O nadležnosti organa"],
        correctAnswerIndex: 0
    },
    {
        question: "Konačno je ono rješenje:",
        options: ["Protiv kojeg se ne može izjaviti žalba", "Koje je doneseno u prvom stupnju", "Koje je doneseno u drugom stupnju"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako je u rješenju dato pogrešno uputstvo o pravnom lijeku:",
        options: ["Stranka ne može trpiti štetne posljedice zbog pogrešnog uputstva o pravnom lijeku", "Rješenje je ništavo", "Stranka gubi pravo žalbe"],
        correctAnswerIndex: 0
    },
    {
        question: "Opći rok za podnošenje žalbe je:",
        options: ["15 dana", "30 dana", "8 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Poništavanje i ukidanje rješenja po pravu nadzora je:",
        options: ["Vanredni pravni lijek", "Redovni pravni lijek", "Administrativna mjera"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravni spor se može voditi protiv:",
        options: ["Konačnog upravnog akta", "Bilo kojeg upravnog akta", "Samo rješenja"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravni spor rješava:",
        options: ["Kantonalni sud", "Općinski sud", "Vrhovni sud"],
        correctAnswerIndex: 0
    },
    {
        question: "Sud u upravnom sporu donosi:",
        options: ["Presude i rješenja", "Samo presude", "Samo rješenja"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravni postupak čine pravna pravila kojima su uređeni:",
        options: ["Način rada i postupanja organa uprave u rješavanju upravnih stvari", "Prava i obaveze stranaka", "Nadležnosti organa"],
        correctAnswerIndex: 0
    },
    {
        question: "Poseban upravni postupak se može propisati:",
        options: ["Za pojedina pitanja postupka", "Samo za hitne slučajeve", "Samo za financijske stvari"],
        correctAnswerIndex: 0
    },
    {
        question: "Aktivna stranka u upravnom postupku je ona:",
        options: ["Povodom čijeg zahtjeva se vodi postupak", "Koja se brani", "Koja daje izjave"],
        correctAnswerIndex: 0
    },
    {
        question: "Kada rješenje nije doneseno u propisanom roku stranka može:",
        options: ["Izjaviti žalbu nadležnom organu kao da je njen zahtjev odbijen", "Tražiti poništenje postupka", "Podnijeti tužbu"],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak za rješavanje sukoba nadležnosti pokreće se na prijedlog:",
        options: ["Organa koji je posljednji odlučivao o svojoj nadležnosti", "Stranke", "Nadležnog ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Za podnesak je u upravnom postupku zakonom propisana forma:",
        options: ["Ne", "Da", "Samo za određene podneske"],
        correctAnswerIndex: 0
    },
    {
        question: "Dostavnicu potpisuje:",
        options: ["Dostavljač i primalac", "Samo dostavljač", "Samo primalac"],
        correctAnswerIndex: 0
    },
    {
        question: "Uvjerenje je upravni akt:",
        options: ["Ne", "Da", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Pravosnažno je ono rješenje:",
        options: ["Ono protiv kojeg se ne može izjaviti žalba niti pokrenuti upravni spor", "Koje je doneseno u drugom stupnju", "Koje je potpisano"],
        correctAnswerIndex: 0
    },
    {
        question: "Obavezni elementi rješenja su:",
        options: ["Uvod, dispozitiv, obrazloženje, pouka o pravnom lijeku, pečat i potpis", "Samo dispozitiv", "Samo obrazloženje"],
        correctAnswerIndex: 0
    },
    {
        question: "Rok za donošenje rješenja je:",
        options: ["30 i 60 dana", "15 i 30 dana", "60 i 90 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "O ispravci greške u rješenju donosi se:",
        options: ["Zaključak", "Novo rješenje", "Odluka"],
        correctAnswerIndex: 0
    },
    {
        question: "Poravnanje u upravnom postupku ima snagu izvršnog rješenja:",
        options: ["Da", "Ne", "Samo ako je potvrđeno od strane suda"],
        correctAnswerIndex: 0
    },
    {
        question: "Opći rok za podnošenje žalbe je:",
        options: ["15 dana", "30 dana", "8 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Žalba se izjavljuje:",
        options: ["Drugostepenom organu putem prvostepenog organa", "Neposredno drugostepenom organu", "Sudu"],
        correctAnswerIndex: 0
    },
    {
        question: "Rok za podnošenje tužbe u upravnom sporu je:",
        options: ["30 dana", "15 dana", "60 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako je tužba nepotpuna sud će:",
        options: ["Pozvati podnosioca da tužbu upotpuni", "Odbaciti tužbu", "Zatražiti dopunu od organa"],
        correctAnswerIndex: 0
    },
    {
        question: "Po pravilu, sud upravni spor rješava na podlozi činjenica koje su utvrđene u upravnom postupku:",
        options: ["Da", "Ne", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Mogu li se pojedina pitanja za određenu upravnu oblast urediti drugačije nego što su uređena Zakonom o upravnom postupku?",
        options: ["Mogu izuzetno, posebnim federalnim zakonom, ali ne protivno načelima Zakona o upravnom postupku", "Ne mogu nikada", "Mogu po odluci ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Kakvo mora biti rješenje doneseno u upravnim stvarima u kojima je organ uprave zakonom ili na zakonom zasnovanom propisu ovlašten da rješava po slobodnoj ocjeni?",
        options: ["U granicama ovlasti i uskladu s ciljem s kojim je ovlast data, uz primjenu pravila postupka utvrđenih Zakonom o upravnom postupku", "Sasvim slobodno", "Po unutrašnjim pravilima"],
        correctAnswerIndex: 0
    },
    {
        question: "Može li organ nadležan za rješavanje u određenoj upravnoj stvari prenijeti rješavanje u toj stvari na drugi organ?",
        options: ["Može, na osnovu izričitog zakonskog ovlaštenja", "Ne može nikada", "Može po odluci ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Da li je organ uprave samostalan u vođenju upravnog postupka i donošenju rješenja?",
        options: ["Da, u okviru ovlasti datih zakonom, drugim propisom i općim aktom", "Ne, mora se konsultovati sa ministarstvom", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Koje se činjenice u postupku uzimaju kao dokazane?",
        options: ["O tome odlučuje ovlaštena službena osoba po svom uvjerenju, na osnovu ocjene dokaza i rezultata cjelokupnog postupka", "Samo one koje su dokumentovane", "Samo one koje su prihvaćene od strane stranaka"],
        correctAnswerIndex: 0
    },
    {
        question: "Protiv kojeg se rješenja može izjaviti žalba?",
        options: ["U pravilu, protiv rješenja donesenog u prvom stupnju, kao i kad prvostupanjski organ nije u određenom roku donio rješenje o zahtjevu stranke", "Protiv svakog rješenja", "Samo protiv konačnog rješenja"],
        correctAnswerIndex: 0
    },
    {
        question: "Kako se određuje stvarna nadležnost za rješavanje u upravnim stvarima?",
        options: ["Po propisima po kojima se određuje određena upravna oblast ili po propisima kojima se određuje nadležnost pojedinih organa", "Po teritorijalnoj nadležnosti", "Po hijerarhijskoj nadležnosti"],
        correctAnswerIndex: 0
    },
    {
        question: "Sukob nadležnosti u upravnom postupku između organa uprave dva ili više kantona rješava:",
        options: ["Vrhovni sud Federacije Bosne i Hercegovine", "Vlada Federacije", "Ministar pravde"],
        correctAnswerIndex: 0
    },
    {
        question: "Sukob nadležnosti između federalnih organa uprave, između federalnih organa uprave i federalnih upravnih organizacija, kao i između federalnih upravnih institucija rješava:",
        options: ["Vlada Federacije Bosne i Hercegovine", "Vrhovni sud FBiH", "Predsjednik Federacije"],
        correctAnswerIndex: 0
    },
    {
        question: "U kojim slučajevima organi vlasti imaju u upravnom postupku prava i dužnosti stranke?",
        options: ["Kada su zakonom ovlašteni da zastupaju javne interese", "Uvijek", "Nikada"],
        correctAnswerIndex: 0
    },
    {
        question: "Tko može biti punomoćnik?",
        options: ["Svaka potpuno poslovno sposobna osoba, ako se ne bavi nadripisarstvom", "Samo advokat", "Samo roditelji"],
        correctAnswerIndex: 0
    },
    {
        question: "Punomoć se može dati:",
        options: ["Pismeno, ili usmeno u zapisnik koji sačinjava službena osoba organa koji vodi postupak", "Samo pismeno", "Samo usmeno"],
        correctAnswerIndex: 0
    },
    {
        question: "Podnesak se, u pravilu, može predati:",
        options: ["Svakog radnog dana u toku radnog vremena", "Samo u određene dane", "Samo putem pošte"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako organ nije nadležan za prijem pismenog postupka:",
        options: ["Upozorit će podnositelja tog podneska i uputiti ga organu nadležnom za prijem podneska", "Odbacit će podnesak", "Primit će podnesak i proslijediti ga"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako organ poštom dobije tužbu za pokretanje upravnog spora:",
        options: ["Dostavit će je bez odgađanja nadležnom sudu i o tome pismeno obavijestiti podnositelja tužbe", "Odbacit će je", "Zadržat će je"],
        correctAnswerIndex: 0
    },
    {
        question: "Kako se vrši dostavljanje kad se osoba kojoj se dostavljanje ima izvršiti ne zatekne u svom stanu?",
        options: ["Predajom pismena nekom od odraslih članova domaćinstva, a ako se ni oni ne zateknu u stanu, susjedu, ako on na to pristane", "Ostavljanjem pismena u poštanskom sandučiću", "Vraćanjem pismena pošiljaocu"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako stranka ima više punomoćnika, dostavljanje će se izvršiti:",
        options: ["Samo jednom od njih", "Svima", "Samo prvom na listi"],
        correctAnswerIndex: 0
    },
    {
        question: "Datum prijema na dostavnici upisuje:",
        options: ["Primatelj slovima", "Dostavljač", "Službenik organa"],
        correctAnswerIndex: 0
    },
    {
        question: "Rokovi u upravnom postupku se određuju:",
        options: ["Na dane, mjesece i godine", "Samo na dane", "Samo na mjesece"],
        correctAnswerIndex: 0
    },
    {
        question: "Rokovi koji su određeni zakonom ili drugim propisom:",
        options: ["Ne mogu se skratiti niti produžiti", "Mogu se produžiti", "Mogu se skratiti"],
        correctAnswerIndex: 0
    },
    {
        question: "Kada je pokrenut upravni postupak?",
        options: ["Čim nadležni organ izvrši ma koju radnju radi vođenja postupka", "Kad je podnesen zahtjev", "Kad je dostavljen poziv"],
        correctAnswerIndex: 0
    },
    {
        question: "Kada se provodi poseban ispitni postupak:",
        options: ["Radi utvrđivanja okolnosti značajnih za razjašnjenje stvari", "Uvijek", "Samo u složenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Ko odlučuje o isključenju javnosti za cijelu usmenu raspravu ili jedan njen dio?",
        options: ["Službena osoba koja vodi postupak", "Stranke", "Nadležni ministar"],
        correctAnswerIndex: 0
    },
    {
        question: "Naziv organa koji donosi rješenje sastavni je dio:",
        options: ["Uvoda rješenja", "Obrazloženja", "Dispozitiva"],
        correctAnswerIndex: 0
    },
    {
        question: "Svaki pisani sastav kojim se pokreće, dopunjuje, mijenja, prekida ili završava neka službena radnja organa uprave ili službe za upravu je:",
        options: ["Akt", "Dokument", "Zapisnik"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi uprave ili službe za upravu koji u svom radu imaju manji broj predmeta i akata u toku godine, mogu jednu knjigu upisnika, odnosno djelovodnika, voditi za sve predmete i akte svih klasifikacijskih oznaka iz svoje nadležnosti.",
        options: ["Da", "Ne", "Samo uz odobrenje ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Listu kategorija registraturskog materijala s rokovima čuvanja donosi:",
        options: ["Rukovodilac organa uprave ili službe za upravu", "Ministar", "Arhiv"],
        correctAnswerIndex: 0
    },
    {
        question: "Službenik koji prima poštu neposredno od stranke, ukoliko utvrdi da je podnesak netaksiran ili nedovoljno taksiran, a podliježe plaćanju takse:",
        options: ["Odbija njegov prijem", "Prima ga uz upozorenje", "Šalje ga na dopunu"],
        correctAnswerIndex: 0
    },
    {
        question: "U slučaju da organ uprave ili služba za upravu nije nadležan za primanje akta (podneska) stranku treba na to upozoriti i uputiti je da se obrati nadležnom organu. Na ponovljeni zahtjev stranke da se njen akt (podnesak) primi, službenik:",
        options: ["Primiće podnesak uz službenu zabilješku na podnesku o datom usmenom upozorenju", "Odbija podnesak", "Šalje podnesak nadležnom organu"],
        correctAnswerIndex: 0
    },
    {
        question: "Pošiljke primljene u vezi s licitacijom, natječajima i slično se:",
        options: ["Ne otvaraju ali se na kovertu stavlja datum i vrijeme (sat i minut) prijema", "Otvara se odmah", "Šalje se nadležnom organu"],
        correctAnswerIndex: 0
    },
    {
        question: "Pošta primljena na ime određenog službenika, zaposlenog u organu uprave ili službi za upravu, uručuje se neotvorena tom službeniku. Ako taj službenik nakon otvaranja pošiljke utvrdi da pošiljka predstavlja službeni akt upućen organu uprave ili službi za upravu, dužan je taj akt vratiti pisarnici radi evidentiranja u roku od:",
        options: ["24 sata po prijemu", "48 sati po prijemu", "7 dana po prijemu"],
        correctAnswerIndex: 0
    },
    {
        question: "Prilikom signiranja pošte vrši se na način što se svaki akti i predmet, poslije otvaranja i pregledanja, na prvoj stranici akta, odnosno predmeta, u desnom gornjem uglu upisuje se:",
        options: ["Broj organizacione jedinice, odnosno broj radnog mjesta kojem će se pošta dostaviti u rad ako ne postoji organizaciona jedinica i datum otvaranja i pregledanja pošte", "Samo broj organizacione jedinice", "Samo datum"],
        correctAnswerIndex: 0
    },
    {
        question: "Otisak prijemnog štambilja stavlja se na:",
        options: ["Akt", "Omotnicu", "Dostavnicu"],
        correctAnswerIndex: 0
    },
    {
        question: "U omot označen crvenom bojom ulažu se:",
        options: ["Predmeti i akti koji su zavedeni u djelovodnik za povjerljivu i strogo povjerljivu poštu", "Obična pošta", "Financijski dokumenti"],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak kada se svi akti i prilozi koji se odnose na isti predmet stavljaju u omot predmeta na koji se odnose se zove:",
        options: ["Združivanje", "Arhiviranje", "Evidencija"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako se pod podnesenom podnesku stranke ne može donijeti i dostaviti rješenje u roku predviđenom u Zakonu o upravnom postupku, službenik koji je ovlašten za rješavanje predmeta obavezno o tome mora pismeno obavijestiti stranku, pri čemu se iznose razlozi za takvo postupanje i daje pravna pouka. Ovo obavještenje se izdaje",
        options: ["I po službenoj dužnosti i na zahtjev stranke", "Samo po službenoj dužnosti", "Samo na zahtjev stranke"],
        correctAnswerIndex: 0
    },
    {
        question: "Pomoćni dijelovi akta su:",
        options: ["veza, prilozi, način dostave, dostavljeno", "samo prilozi", "samo dostava"],
        correctAnswerIndex: 0
    },
    {
        question: "Rokovnik predmeta ima:",
        options: ["32 fascikle", "12 fascikla", "52 fascikle"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako predmetu koji je stavljen u arhivu treba radi združivanja (kompletiranj a) priključiti akte primljene poslije njegovog arhiviranja, taj predmet izdaje i nakon združivanja vraća u arhivu:",
        options: ["Bez reversa", "Uz revers", "Samo uz odobrenje"],
        correctAnswerIndex: 0
    },
    {
        question: "Kancelarijsko poslovanje u organima uprave i službi za upravu u Federaciji Bosne i Hercegovine regulirano je:",
        options: ["Uredbom i uputstvom", "Zakonom", "Pravilnikom"],
        correctAnswerIndex: 0
    },
    {
        question: "Uredbu o kancelarijskom poslovanju u organima uprave i službi za upravu u Federaciji Bosne i Hercegovine, donio je:",
        options: ["Vlada Federacije Bosne i Hercegovine, na prijedlog federalnog ministra pravde", "Ministar pravde", "Parlament"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi uprave i službe za upravu u okviru kancelarijskog poslovanja vode:",
        options: ["Osnovne i pomoćne knjige evidencija o predmetima i aktima iz svoje nadležnosti", "Samo osnovne knjige", "Samo pomoćne knjige"],
        correctAnswerIndex: 0
    },
    {
        question: "Koji su osnovni dijelovi službenog akta (službenog dopisa) organa uprave, odnosno službe za upravu?",
        options: ["Službeni akt (dopis) mora da sadrži slijedeće dijelove: zaglavlje, naziv i adresu primatelja, kratki sadržaj predmeta, sadržaj akta, otisak službenog pečata i potpis ovlaštene osobe", "Samo zaglavlje i sadržaj", "Samo pečat i potpis"],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodilac organa ili službe može ovlastiti određenog državnog službenika da može vršiti otvaranje i pregledanje pošte",
        options: ["Posebnim rješenjem", "Usmenom naredbom", "Samo pismenom naredbom"],
        correctAnswerIndex: 0
    },
    {
        question: "Ko otvara povjerljivu i strogo povjerljivu poštu primljenu van radnog vremena i u dane kada se ne radi",
        options: ["Dežurni službenik ako u organu uprave odnosno službe za upravu postoji dežurna služba i to: samo ako j e za to posebno pismeno ovlašten", "Samo rukovodilac", "Niko"],
        correctAnswerIndex: 0
    },
    {
        question: "U smislu Uputstva u vršenju kancelarijskog poslovanja u organima uprave i službama za upravu Federacije BiH: primanje, otvaranje, pregledanje i raspoređivanje pošte, odnosno akata, zavođenje akata, združivanje akata, dostavljanje predmeta i akata u rad, rad s aktima, razvođenje predmeta i akata, rokovnik predmeta, otpremanje pošte i stavljanje predmeta i akata u arhivu (arhiviranje) i njihovo čuvanje obavlja se u:",
        options: ["Pisarnici", "Službi", "Organizacionoj jedinici"],
        correctAnswerIndex: 0
    },
    {
        question: "U djelovodnik predmeta i akata upisuju se:",
        options: ["Sve vrste predmeta i akata iz nadležnosti organa uprave ili službe za upravu o kojima se ne rješava u upravnom postupku", "Samo važni predmeti", "Samo akti"],
        correctAnswerIndex: 0
    },
    {
        question: "U vezi s čuvanjem i korištenjem arhiviranih predmeta iz oblasti odbrane i unutrašnjih poslova, primjenjuju se propisi o:",
        options: ["Zaštiti tajnih podataka", "Arhiviranju", "Kancelarijskom poslovanju"],
        correctAnswerIndex: 0
    },
    {
        question: "Klasifikacijske oznake u kancelarijskom poslovanju obuhvataju brojeve od:",
        options: ["01 - 49", "00 - 99", "10 - 50"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako u podnesku stranke nema priloga navedenih u tekstu, nema adrese stranke i sl.), službenik ovlašten za prijem pošte ukazat će stranci na te nedostatke i objasnit će joj kako da ih otkloni. Ako stranka i pored upozorenja zahtijeva da se akt (podnesak) primi, službenik će:",
        options: ["Primiće podnesak uz službenu zabilješku na podnesku o datom usmenom upozorenju", "Odbijati podnesak", "Šaljati podnesak nadležnom organu"],
        correctAnswerIndex: 0
    },
    {
        question: "Prilikom primanja pošte od drugog organa uprave odnosno službe za upravu ili pravne osobe, koju ovi dostavljaju putem dostavljača (kurira), potvrđuje se prijem:stavljanjem datuma i čitkog potpisa u dostavnoj knjizi ili na dostavnici ili povratnici ili na kopiji akta čiji se orginal prima. Pečat organa uprave i službe za upravu se u dostavnoj knjizi:",
        options: ["Ne stavlja", "Stavlja", "Stavlja samo u posebnim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Otvaranje i pregledanje cjelokupne službene pošte (obična, povjerljiva i strogo povjerljiva, vrijednosne pošiljke i dr), organa uprave ili službe za upravu vrši, po pravilu:",
        options: ["Rukovodilac organa uprave ili službe za upravu", "Službenik za poštu", "Sekretar"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako se nakon otvaranja pošte utvrdi da postoje određeni nedostaci (nema adrese, priloga i dr.), te nedostatke treba:",
        options: ["Konstatovati kratkom zabilješkom na aktu koja se ispisuje neposredno uz otisak prijemnog štambilja", "Odbaciti poštu", "Vratiti pošiljaocu"],
        correctAnswerIndex: 0
    },
    {
        question: "Ako se zbog velikog broja primljenih akata ili iz drugih opravdanih razloga akti ne mogu zavesti istog dana kada su primljeni, zavest će se najkasnije:",
        options: ["Prvog narednog radnog dana, prije zavođenja nove pošte i to pod datumom kad su akti primljeni", "U roku od 3 dana", "U roku od 7 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "U omot označen zelenom bojom ulažu se:",
        options: ["Prvostepeni predmeti upravnog postupka po kojima se upravni postupak pokreće na zahtjev stranke", "Povjerljivi predmeti", "Financijski predmeti"],
        correctAnswerIndex: 0
    },
    {
        question: "Naknadno primljeni akt koji se odnosi na predmet koji se već nalazi u organizacionoj jedinici odnosno kod službenika u radu dostavlja se:",
        options: ["Bez omota", "U omotu", "Samo uz revers"],
        correctAnswerIndex: 0
    },
    {
        question: "Kada ovlašteni službenik pisarnice akte i predmete dostaviti u rad nadležnim organizacionim jedinicama odnosno službenicima zaduženim za prijem pošte u rad, kada nema organizacionih jedinica to čini putem:",
        options: ["Interne dostavne knjige", "Usmene naredbe", "Elektronske pošte"],
        correctAnswerIndex: 0
    },
    {
        question: "Osnovni dijelovi akta su:",
        options: ["Zaglavlje, predmet, naziv i adresa primaoca, sadržaj akta, naziv funkcije osobe ovlaštene za potpisivanje akta, otisak pečata", "Samo zaglavlje i sadržaj", "Samo pečat i potpis"],
        correctAnswerIndex: 0
    },
    {
        question: "Službenik ovlašten za rješavanje predmeta i akata dužan je sve riješene predmete i akte vratiti pisarnici putem:",
        options: ["Interne dostavne knjige", "Usmeno", "Elektronske pošte"],
        correctAnswerIndex: 0
    },
    {
        question: "Završeni predmeti i akti sređuju se u arhivi tako što se slažu:",
        options: ["Po klasifikacionim oznakama, a unutar tih oznaka po rednim brojevima iz odgovarajuće knjige evidencije u koju su zavedeni", "Po datumu", "Po važnosti"],
        correctAnswerIndex: 0
    },
    {
        question: "Prema Zakonu o organizaciji organa uprave u FBIH federalni organi uprave su:",
        options: ["Federalna ministarstva i uprave", "Samo ministarstva", "Samo uprave"],
        correctAnswerIndex: 0
    },
    {
        question: "Upravne organizacije se osnivaju za obavljanje:",
        options: ["Stručnih poslova, koji zahtijevaju primjenu naučnih i stručnih metoda rada i s njima povezanih poslova", "Administrativnih poslova", "Financijskih poslova"],
        correctAnswerIndex: 0
    },
    {
        question: "Povjeravanje javnih ovlaštenja vrši se:",
        options: ["Općim aktom nadležnog predstavničkog tijela", "Zakonom", "Odlukom ministra"],
        correctAnswerIndex: 0
    },
    {
        question: "Pravna lica sa javnim ovlaštenjima dužna su podnijeti izvještaj o vršenju povjerenih javnih ovlaštenja nadležnom organu uprave koji vrši upravni nadzor nad njihovim radom:",
        options: ["Najmanje jednom godišnje", "Svaka tri mjeseca", "Po zahtjevu"],
        correctAnswerIndex: 0
    },
    {
        question: "Koji posao NE spada u djelatnost organa uprave:",
        options: ["Donose zakone", "Izvršavaju zakone", "Upravljaju javnim službama"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi uprave koji se osnivaju na nivou grada su:",
        options: ["Gradske službe za upravu i gradske upravne organizacije", "Samo službe", "Samo organizacije"],
        correctAnswerIndex: 0
    },
    {
        question: "Pravilnik o unutrašnjoj organizaciji i sistematizaciji radnih mjesta donosi:",
        options: ["Rukovodilac organa uprave uz mišljenje političko-izvršnog organa", "Ministar", "Vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "Direktor federalne uprave u sastavu ministarstva odgovoran je:",
        options: ["Federalnom ministru i Vladi Federacije BiH", "Samo ministru", "Samo Vladi"],
        correctAnswerIndex: 0
    },
    {
        question: "Općinskim službama za upravu i upravnim organizacijama rukovodi:",
        options: ["Načelnik", "Gradonačelnik", "Ministar"],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodeći državni službenici na svim nivoima vlasti u FBiH su:",
        options: ["Direktor samostalne uprave i samostalne upravne organizacije, Pomoćnik rukovodioca organa uprave i upravne organizacije, Glavni inspektor", "Samo direktori", "Samo pomoćnici"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi uprave i upravne organizacije mogu donositi sljedeće podzakonske propise:",
        options: ["Pravilnike, uputstva, naredbe, instrukcije", "Samo pravilnike", "Samo uputstva"],
        correctAnswerIndex: 0
    },
    {
        question: "Pojedinačne pravne akte, u skladu s važećim propisima, donosi:",
        options: ["Rukovodilac organa uprave", "Ministar", "Vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "U kontekstu zakonom propisanih odnosa organa uprave prema građanima, u slučaju onemogućavanja efikasnog i brzog rješavanja podnesenih zahtjeva, građani imaju pravo da u vezi sa takvim ponašanjem državnih službenika podnesu:",
        options: ["Predstavke i pritužbe rukovodiocu organa uprave, načelniku ili gradonačelniku", "Samo predstavke", "Samo pritužbe"],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak inspekcijskog nadzora pokreće se:",
        options: ["Po službenoj dužnosti, uz pravo inicijative fizičkih i pravnih lica", "Samo po službenoj dužnosti", "Samo na zahtjev"],
        correctAnswerIndex: 0
    },
    {
        question: "Rješenje po žalbi u postupku inspekcijskog nadzora, mora se donijeti u roku od:",
        options: ["15 dana od dana prijema žalbe", "30 dana", "7 dana"],
        correctAnswerIndex: 0
    },
    {
        question: "Parlamentarna skupština Bosne i Hercegovine ima:",
        options: ["Dva doma", "Jedan dom", "Tri doma"],
        correctAnswerIndex: 0
    },
    {
        question: "Za donošenje zakona koji su potrebni za provođenje odluka Predsjedništva BiH ili za vršenje funkcija Skupštine po Ustavu BiH nadležan je:",
        options: ["Parlamentarna skupština Bosne i Hercegovine", "Vlada", "Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Agenciju za državnu službu FBiH osniva:",
        options: ["Vlada FBiH", "Parlament", "Predsjednik"],
        correctAnswerIndex: 0
    },
    {
        question: "Odbor državne službe za žalbe BiH se sastoji od:",
        options: ["Tri člana", "Pet članova", "Sedam članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Mandat članova Odbora državne službe FBiH za žalbe traje:",
        options: ["Četiri godine", "Dvije godine", "Pet godina"],
        correctAnswerIndex: 0
    },
    {
        question: "Poslove uprave iz nadležnosti BiH ne obavljaju:",
        options: ["Sudovi za prekršaje", "Ministarstva", "Uprave"],
        correctAnswerIndex: 0
    },
    {
        question: "Rukovodilac federalne uprave, odnosno federalne upravne organizacije u sastavu federalnog ministarstva za svoj rad odgovara:",
        options: ["Federalnom ministarstvu u čijem je sastavu federalna uprava, odnosno federalna upravna organizacija kojom rukovodi", "Vladi", "Parlamentu"],
        correctAnswerIndex: 0
    },
    {
        question: "Bosna i Hercegovina trenutno ima:",
        options: ["Devet ministarstava", "Sedam ministarstava", "Dvanaest ministarstava"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedavajući Vijeća ministara BiH ima:",
        options: ["Dva zamjenika predsjedavajućeg", "Jednog zamjenika", "Nema zamjenika"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedavajući vijeća ministara BiH podnosi ostavku:",
        options: ["Predsjedništvu BiH", "Parlamentu", "Vladi"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedavajući vijeća ministara BiH za svoj rad odgovara:",
        options: ["Parlamentarnoj skupštini BiH i Predsjedništvu BiH", "Samo Parlamentu", "Samo Predsjedništvu"],
        correctAnswerIndex: 0
    },
    {
        question: "Poslove uprave BiH obavljaju:",
        options: ["Ministarstva BiH i druge institutcije BiH određene zakonom (organi uprave)", "Samo ministarstva", "Samo uprave"],
        correctAnswerIndex: 0
    },
    {
        question: "Postupak izbora prema izbornom zakonu Bosne i Hercegovine provodi:",
        options: ["Centralna izborna komisija BiH", "Ministarstvo", "Parlament"],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt BiH je:",
        options: ["Jedinstvena administrativna jedinica lokalne samouprave koja je pod suverenitetom BiH", "Dio Federacije BiH", "Dio Republike Srpske"],
        correctAnswerIndex: 0
    },
    {
        question: "Izvršnu vlast u Brčko Distriktu BiH vrši:",
        options: ["Vlada Brčko Distrikta", "Gradonačelnik", "Skupština"],
        correctAnswerIndex: 0
    },
    {
        question: "Vladu Brčko Distrikta BiH čine:",
        options: ["Gradonačelnik i šefovi odsjeka", "Samo gradonačelnik", "Samo šefovi odsjeka"],
        correctAnswerIndex: 0
    },
    {
        question: "Gradonačelnika Brčko Distrikta BiH bira:",
        options: ["Skupština Brčko Distriktra BiH", "Građani", "Vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "Šefove Odjela u Vladi Brčko Distrikta BiH bira ili smjenjuje:",
        options: ["Gradonačelnik", "Skupština", "Ministar"],
        correctAnswerIndex: 0
    },
    {
        question: "Osim poslova upravne inspekcije sve inspekcijske poslove na teritoriju Federacije BiH obavlja:",
        options: ["Federalna uprava za inspekcijske poslove", "Kantonalne uprave", "Ministarstva"],
        correctAnswerIndex: 0
    },
    {
        question: "Institucija koja se bavi zaštitom prava fizičkih i pravnih lica u BiH ima naziv:",
        options: ["Ombudsmen za ljudska prava Bosne i Hercegovine", "Sud za ljudska prava", "Ministarstvo za ljudska prava"],
        correctAnswerIndex: 0
    },
    {
        question: "Isplata penzija-mirovina stečenih na području Federacije BiH ostvaruje se putem:",
        options: ["Federalnog zavoda za PIO/MIO", "Ministarstva financija", "Banka"],
        correctAnswerIndex: 0
    },
    {
        question: "Isplata penzija-mirovina stečenih na području Republike Srpske ostvaruje se putem:",
        options: ["Fonda za penzijsko i invalidsko osiguranje Republike Srpske", "Ministarstva financija", "Banka"],
        correctAnswerIndex: 0
    },
    {
        question: "Resorno ministarstvo na državnom nivou koje koordinira poslove iz oblasti penzijskog i invalidskog osiguranja i zdravstvenog osiguranja je:",
        options: ["Ministarstvo civilnih poslova BiH", "Ministarstvo finansija", "Ministarstvo zdravstva"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi jedinice lokalne samouprave su:",
        options: ["Vijeće i načelnik", "Samo vijeće", "Samo načelnik"],
        correctAnswerIndex: 0
    },
    {
        question: "Jedinica lokalne samouprave:",
        options: ["Ima svojstvo pravnog lica", "Nema svojstvo pravnog lica", "Samo u određenim slučajevima"],
        correctAnswerIndex: 0
    },
    {
        question: "Nadzor nad primjenom Zakona o principima lokalne samouprave u Federaciji Bosne i Hercegovine vrši:",
        options: ["Federalno ministarstvo pravde i Federalno ministarstvo finansija, svako u okviru svojih nadležnosti", "Samo ministarstvo pravde", "Samo ministarstvo finansija"],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavno uređenje Bosne i Hercegovine sadržano je u:",
        options: ["Aneksu 4. Općeg okvirnog sporazuma za mir u BiH", "Ustavu BiH", "Daytonskom sporazumu"],
        correctAnswerIndex: 0
    },
    {
        question: "Entiteti u Bosne i Hercegovine imaju status?",
        options: ["Unutrašnjih jedinica", "Nezavisnih država", "Međunarodnih subjekata"],
        correctAnswerIndex: 0
    },
    {
        question: "Prenos nadležnosti na državni nivo (institucije BiH) vršio se?",
        options: ["Donošenjem zakona", "Odlukom Predsjedništva", "Sporazumom entiteta"],
        correctAnswerIndex: 0
    },
    {
        question: "Koja institucija BiH nije utvrđena u Ustavu BiH?",
        options: ["Sud BiH", "Parlamentarna skupština", "Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "U redovne sudove ne spada:",
        options: ["Ustavni sud BiH", "Općinski sud", "Kantonalni sud"],
        correctAnswerIndex: 0
    },
    {
        question: "Izvršnu vlast u Federaciji BiH čine?",
        options: ["Predsjednik i dopredsjednici Federacije BiH i Vlada FBiH", "Samo predsjednik", "Samo vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "Gradovi u Federaciji BiH se osnivaju?",
        options: ["Ustavom i federalnim zakonom", "Odlukom vlade", "Odlukom kantona"],
        correctAnswerIndex: 0
    },
    {
        question: "Šta spada u isključivu nadležnost kantona?",
        options: ["Obrazovna politika", "Vanjska politika", "Monetarna politika"],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt BiH je formiran?",
        options: ["Konačnom arbitražnom odlukom Arbitražnog tribunala u Beču", "Daytonskim sporazumom", "Odlukom Predsjedništva"],
        correctAnswerIndex: 0
    },
    {
        question: "Suce ustavnog suda FBiH imenuje?",
        options: ["Predsjednik Federacije, uz saglasnost dopredsjednika", "Parlament", "Vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "Kakav status u ustavnom poretku BiH ima Europska konvencija za zaštitu ljudskih prava i temeljnih sloboda:",
        options: ["Ima prioritet nad svim drugim zakonima", "Isti status kao domaći zakoni", "Nema poseban status"],
        correctAnswerIndex: 0
    },
    {
        question: "Ministre u Vijeću ministara imenuje:",
        options: ["Predsjedavajući Vijeća ministara", "Predsjedništvo", "Parlament"],
        correctAnswerIndex: 0
    },
    {
        question: "Oružane snage su u nadležnosti:",
        options: ["Institucija na državnom nivou", "Entiteta", "Kantona"],
        correctAnswerIndex: 0
    },
    {
        question: "Brčko Distrikt Bosne i Hercegovine ima status:",
        options: ["Vlasništva oba entiteta", "Dijela Federacije", "Dijela Republike Srpske"],
        correctAnswerIndex: 0
    },
    {
        question: "Šta ne spada u podijeljenu nadležnost Federacije BiH:",
        options: ["Državljanstvo Federacije BiH", "Obrazovanje", "Zdravstvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Organi jedinica lokalne samouprave su:",
        options: ["Načelnik/gradonačelnik i općinsko/gradsko vijeće", "Samo načelnik", "Samo vijeće"],
        correctAnswerIndex: 0
    },
    {
        question: "Institucija Ombudsmana postoji na:",
        options: ["Razini države", "Razini entiteta", "Razini kantona"],
        correctAnswerIndex: 0
    },
    {
        question: "Ratifikaciju međunarodnih ugovora vrši:",
        options: ["Predsjedništvo BiH, uz saglasnost Parlamentarne skupštine BiH", "Vlada", "Ministar vanjskih poslova"],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke ustavnih sudova su:",
        options: ["Konačne i obavezujuće", "Može se žaliti", "Nisu obavezujuće"],
        correctAnswerIndex: 0
    },
    {
        question: "Nositelje pravosudnih funkcija u BiH imenuje:",
        options: ["Visoko sudsko i tužilačko vijeće (VSTV)", "Parlament", "Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Državljani BiH mogu imati državljanstvo druge države, uz uslov da:",
        options: ["Postoji bilateralni ugovor između te države i BiH, odobren od Parlamentarne skupštine BiH", "Nemogu imati", "Mogu bezuslovno"],
        correctAnswerIndex: 0
    },
    {
        question: "Simbole BiH (grb, zastavu) određuje:",
        options: ["Parlamentarna skupština BiH svojom odlukom i potvrđuje Predsjedništva BiH", "Vlada", "Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Državljanstvo BiH regulira:",
        options: ["Parlamentarna skupština BiH", "Vlada", "Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Lica sa dvojnim državljanstvom mogu glasati u BiH samo:",
        options: ["Ako je BiH država njihovog prebivališta", "Uvijek", "Nikada"],
        correctAnswerIndex: 0
    },
    {
        question: "U BiH se direktno primjenjuje i ima prioritet nad svim drugim zakonima:",
        options: ["Europska konvencija o zaštiti ljudskih prava i osnovnih sloboda", "Ustav BiH", "Daytonski sporazum"],
        correctAnswerIndex: 0
    },
    {
        question: "U nadležnost Bosne i Hercegovine prema članu III Ustava BiH ne spada:",
        options: ["Porezna politika", "Vanjska politika", "Oružane snage"],
        correctAnswerIndex: 0
    },
    {
        question: "Dom naroda Parlamentarne skupštine BiH ima:",
        options: ["15 delegata", "42 delegata", "30 delegata"],
        correctAnswerIndex: 0
    },
    {
        question: "Kvorum za rad Doma naroda Parlamentarne skupštine BiH čini:",
        options: ["9 delegata", "15 delegata", "21 delegat"],
        correctAnswerIndex: 0
    },
    {
        question: "Predstavnički dom Paralamentarne skupštine BiH ima:",
        options: ["42 člana", "15 članova", "30 članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Odluke Paralamentarne skupštine BiH stupaju na snagu:",
        options: ["Neće stupiti na snagu prije nego što budu objavljene", "Odmah nakon donošenja", "Nakon potpisa Predsjedništva"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedništvo Bosne i Hercegovine se sastoji od:",
        options: ["3 člana", "5 članova", "7 članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Mandat članova Predsjedništva BiH je:",
        options: ["Prvoizabranim dvije, a nakon toga četiri godine", "Uvijek četiri godine", "Tri godine"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedavajući Vijeća ministara BiH imenuje, a Predstavnički dom Parlamentarne skupštine BiH potvrđuje:",
        options: ["Ministre i zamjenike ministara", "Samo ministre", "Samo zamjenike"],
        correctAnswerIndex: 0
    },
    {
        question: "Vijeće ministara će podnijeti ostavku ukoliko mu:",
        options: ["Parlamentarna skupština BiH izglasa nepovjerenje", "Predsjedništvo izglasa nepovjerenje", "Vlade entiteta izglasaju nepovjerenje"],
        correctAnswerIndex: 0
    },
    {
        question: "Ustavni sud Bosne i Hercegovine sastoji se od:",
        options: ["Devet članova", "Sedam članova", "Pet članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Guvernera Centralne banke BiH, nakon prvog mandata imenuje:",
        options: ["Predsjedništvo BiH imenuje upravni odbor, koji potom bira guvernera između svojih članova", "Parlament", "Vlada"],
        correctAnswerIndex: 0
    },
    {
        question: "Nadležnosti Centralne banke BiH:",
        options: ["Određuje ih Parlamentarna skupština BiH uz određene uslove utvrđene Ustavom", "Određuje Vlada", "Određuje Predsjedništvo"],
        correctAnswerIndex: 0
    },
    {
        question: "Budžet institucija BiH utvrđuje:",
        options: ["Parlamentarna skupština BiH na prijedlog Predsjedništva BiH", "Vlada", "Ministarstvo finansija"],
        correctAnswerIndex: 0
    },
    {
        question: "Ustav BiH može se mijenjati:",
        options: ["Od strane Parlamentarne skupštine BiH, usvajanjem amandmana u oba doma, pri čemu usvajanje u Predstavničkom domu mora biti dvotrećinskom većinom", "Samo odlukom Predsjedništva", "Samo sporazumom entiteta"],
        correctAnswerIndex: 0
    },
    {
        question: "Aneksima Ustava BiH, u pogledu važenja zakona i drugih propisa određeno je:",
        options: ["Zakoni i drugi propisi na snazi doneseni prije stupanja na snagu Ustava BiH ostaju da važe u onoj mjeri u kjoj nisu u suprotnosti sa Ustavom BiH", "Svi stari propisi gube važenje", "Samo zakoni ostaju na snazi"],
        correctAnswerIndex: 0
    },
    {
        question: "Ustav BiH je stupio na snagu:",
        options: ["Potpisivanjem Općeg okvirnog sporazuma o miru u BiH, 14. 12. 1995. u Parizu", "Nakon rata", "Prije rata"],
        correctAnswerIndex: 0
    },
    {
        question: "Postoji državljanstvo BiH i državljanstvo svakog entiteta pod uslovom da su svi:",
        options: ["Državljani bilo kojeg entiteta, samim tim su državljani BiH", "Samo državljani BiH", "Samo državljani entiteta"],
        correctAnswerIndex: 0
    },
    {
        question: "Ratifikaciju međunarodnih ugovora po Ustavu BiH vrši:",
        options: ["Predsjedništvo BiH uz predhodnu saglasnost Parlamentarne skupštine BiH", "Vlada", "Ministar vanjskih poslova"],
        correctAnswerIndex: 0
    },
    {
        question: "Predstavnički dom Parlamentarne skupštine BiH sastoji se od:",
        options: ["42 člana", "15 članova", "30 članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Delegate u Dom naroda Parlamentarne skupštine BiH bira:",
        options: ["Hrvatski, odnosno bošnjački delegati u Domu naroda Parlamenta Federacije BiH i poslanici u Narodnoj skupštini RS", "Građani", "Vlade entiteta"],
        correctAnswerIndex: 0
    },
    {
        question: "Zakone BiH donosi:",
        options: ["Sve zakone moraju usvojiti u istovjetnom tekstu oba doma Parlamentarne skupštine BiH", "Samo Predstavnički dom", "Samo Dom naroda"],
        correctAnswerIndex: 0
    },
    {
        question: "Dom naroda Parlamentarne skupštine BiH se može raspustiti:",
        options: ["Odlukom Predsjedništva BiH ili od strane samog Doma naroda, pod uslovom utvrđenim Ustavom BiH", "Samo odlukom Predsjedništva", "Samo odlukom Doma"],
        correctAnswerIndex: 0
    },
    {
        question: "Godišnji budžet Parlamentarnoj skupštini BiH predlaže:",
        options: ["Predsjedništvo BiH, uz preporuku Vijeća ministara BiH", "Vlada", "Ministarstvo finansija"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjedništvo je nadležno za vršenje drugih djelatnosti koje nisu nabrojane Ustavom BiH:",
        options: ["Koje mu prenese Parlamentarna skupština BiH ili na koje pristanu entiteti", "Samo one koje su u Ustavu", "Nema dodatne nadležnosti"],
        correctAnswerIndex: 0
    },
    {
        question: "Mandat sudija Ustavnog suda BiH traje:",
        options: ["Do navršenih 70 godina života", "5 godina", "10 godina"],
        correctAnswerIndex: 0
    },
    {
        question: "Centralna banka BiH je po Ustavu BiH jedina ovlaštena institucija za:",
        options: ["Štampanje novca i monetarnu politiku na cijelom području BiH", "Samo štampanje novca", "Samo monetarnu politiku"],
        correctAnswerIndex: 0
    },
    {
        question: "U Aneksu Ustava Federacije BiH, kao instrumenti za zaštitu ljudskih prava, utvrđeni su:",
        options: ["22 međunarodna dokumenta", "10 dokumenta", "5 dokumenata"],
        correctAnswerIndex: 0
    },
    {
        question: "Predstavnički dom Federacije BiH sastoji se od:",
        options: ["98 članova", "42 člana", "15 članova"],
        correctAnswerIndex: 0
    },
    {
        question: "Sudsku funkciju u Federaciji Bosne i Hercegovine vrše:",
        options: ["Ustavni sud Federacije BiH, Vrhovni sud Federacije BiH, kantonalni sudovi i općinski sudovi", "Samo ustavni sud", "Samo vrhovni sud"],
        correctAnswerIndex: 0
    },
    {
        question: "Općinsko vijeće priprema i dvotrećinskom većinom glasova:",
        options: ["Usvaja statut općine", "Bira načelnika", "Donosi budžet"],
        correctAnswerIndex: 0
    },
    {
        question: "Zakonodavnu vlast u Republici Srpskoj vrši:",
        options: ["Narodna skupština i Vijeće naroda", "Samo Narodna skupština", "Samo Vijeće naroda"],
        correctAnswerIndex: 0
    },
    {
        question: "Narodna skupština RS ima:",
        options: ["83 narodna poslanika, od toga najmanje četiri člana iz svakog konstitutivnog naroda", "42 poslanika", "15 poslanika"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik Republike Srpske:",
        options: ["Ima dva potpredsjednika iz različitih konstitutivnih naroda", "Nema potpredsjednika", "Ima jednog potpredsjednika"],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada Republike Srpske sastoji se od:",
        options: ["8 ministara iz reda srpskog, 5 iz reda bošnjačkog i tri iz reda hrvatskog naroda", "Samo srpskih ministara", "Samo bošnjačkih i hrvatskih ministara"],
        correctAnswerIndex: 0
    },
    {
        question: "Zaštitu ustavnosti i zakonitosti u RS osigurava:",
        options: ["Ustavni sud RS", "Vlada", "Parlament"],
        correctAnswerIndex: 0
    },
    {
        question: "Republika Srpska je entitet:",
        options: ["Srba, Bošnjaka i Hrvata kao konstitutivnih naroda, građana i Ostalih", "Samo Srba", "Samo Bošnjaka i Hrvata"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik Federacije:",
        options: ["Predstavlja i zastupa Federaciju i šef je federalne izvršne vlasti", "Nema izvršnu vlast", "Samo predstavlja"],
        correctAnswerIndex: 0
    },
    {
        question: "Predsjednik Federacije BiH:",
        options: ["Ima dva potpredsjednika iz različitih konstitutivnih naroda", "Nema potpredsjednika", "Ima jednog potpredsjednika"],
        correctAnswerIndex: 0
    },
    {
        question: "Vlada Federacije Bosne i Hercegovine:",
        options: ["Ima premijera/predsjednika Vlade i šesnaest ministara od kojih su osam ministara iz reda bošnjačkog, pet ministara iz reda hrvatskog i tri ministra iz reda srpskog naroda", "Ima samo premijera", "Ima samo ministre"],
        correctAnswerIndex: 0
    }
];