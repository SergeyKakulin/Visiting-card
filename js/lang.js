var txt = {
    en: {
        'ks':'Kakulin Sergey',
        "birth":"Date of Birth: January 31, 1994",
        "place":"Place of Birth: Kazakhstan, Kokshetau city",
        "married":"Marital Status: Married",
        "email":"E-Mail: sergey.kakulin@gmail.com",
        "links":"Links to my pages",
        "education":"Education",
        "education2":"2012-2016: Sh. Ualikhanov Kokshetau university",
        "education3":"2021: Training in Soth Galaxy G1 & SurvX 4.0",
        "work":"Work experience",
        "work2":'2015-now: "Kokshe Ground" LLP',
},
    ru: {
        'ks':'Какулин Сергей',
        'birth':'Дата рождения: 31 января 1994',
        'place':"Место рождения: Казахстан, город Кокшетау",
        "married":"Семейное положение: Женат",
        "email":"Эл. почта: sergey.kakulin@gmail.com",
        "links":"Ссылки на мои страницы",
        "education":"Образование",
        "education2":"2012-2016: Кокшетауский университет им. Ш. Уалиханова",
        "education3":"2021: Обучение Soth Galaxy G1 и ПО SurvX 4.0",
        "work":"Опыт работы",
        "work2":'2015-по настоящее время: ТОО "Kokshe Ground"',

    }
};

document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null,'ru'));
  
function setLang(lang){
    var p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }
}
  
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);