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
    }
];