// Файл: src/data/dayTrips.js

const dayTrips = [
  {
    name: "Saint-Guilhem-le-Désert",
    description: "Середньовічне село в ущелині з абатством та мальовничими вуличками.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Saint-Guilhem-le-D%C3%A9sert.jpg"
    ],
    plan: [
      "Виїзд зранку з Монпельє",
      "Відвідини абатства Gellone",
      "Прогулянка ущелиною"
    ],
    location: "https://www.google.com/maps/place/Saint-Guilhem-le-Désert,+34150/",
    distance: "≈50 км / 50 хв"
  },
  {
    name: "Pont du Diable",
    description: "Історичний міст через ущелину річки Hérault, популярне місце для пікніків.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Pont_du_Diable_Herault.jpg"
    ],
    plan: [
      "Зупинка біля мосту",
      "Купання",
      "Пішохідна прогулянка"
    ],
    location: "https://www.google.com/maps/place/Pont+du+Diable,+Aniane/",
    distance: "≈45 км / 40 хв"
  },
  {
    name: "Lac du Salagou",
    description: "Озеро з червоними горами, чудове місце для кемпінгу і хайкінгу.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Lac_du_Salagou.jpg"
    ],
    plan: [
      "Прогулянка довкола озера",
      "Каякінг",
      "Пікнік"
    ],
    location: "https://www.google.com/maps/place/Lac+du+Salagou,+34800/",
    distance: "≈55 км / 50 хв"
  },
  {
    name: "Cirque de Navacelles",
    description: "Вражаючий геологічний каньйон зі селищем та водоспадами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cirque_de_Navacelles.jpg"
    ],
    plan: [
      "Оглядові майданчики",
      "Спуск до села",
      "Водоспад"
    ],
    location: "https://www.google.com/maps/place/Cirque+de+Navacelles/",
    distance: "≈90 км / 1 год 30 хв"
  },
  {
    name: "Aigues-Mortes",
    description: "Середньовічне місто з фортечною стіною та рожевими соляними озерами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Aigues-Mortes_Herault.jpg"
    ],
    plan: [
      "Фортеця",
      "Соляні поля",
      "Прогулянка каналом"
    ],
    location: "https://www.google.com/maps/place/Aigues-Mortes,+30220/",
    distance: "≈35 км / 35 хв"
  },
  {
    name: "Sète",
    description: "Портове місто з каналами, панорамою та пляжами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sete_Canaux.jpg"
    ],
    plan: [
      "Порт",
      "Гора Сен-Клер",
      "Морепродукти"
    ],
    location: "https://www.google.com/maps/place/Sète,+34200/",
    distance: "≈35 км / 35 хв"
  },
  {
    name: "Palavas-les-Flots",
    description: "Курортне містечко з пляжами, колесом огляду та каналами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Palavas-les-Flots.jpg"
    ],
    plan: [
      "Пляж",
      "Прогулянка вздовж каналу",
      "Колесо огляду"
    ],
    location: "https://www.google.com/maps/place/Palavas-les-Flots,+34250/",
    distance: "≈13 км / 20 хв"
  },
  {
    name: "Abbaye de Valmagne",
    description: "Готичне абатство з виноробнею і садами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Abbaye_de_Valmagne.jpg"
    ],
    plan: [
      "Екскурсія",
      "Дегустація вина",
      "Сади"
    ],
    location: "https://www.google.com/maps/place/Abbaye+de+Valmagne,+Villeveyrac/",
    distance: "≈42 км / 45 хв"
  },
  {
    name: "Villeneuvette",
    description: "Історичне село з промисловим минулим і затишною атмосферою.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Villeneuvette.jpg"
    ],
    plan: [
      "Прогулянка",
      "Фабрика",
      "Водоспад"
    ],
    location: "https://www.google.com/maps/place/Villeneuvette,+34800/",
    distance: "≈55 км / 50 хв"
  },
  {
    name: "Cirque de Mourèze",
    description: "Унікальні кам’яні формації у природному амфітеатрі.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cirque_de_Moureze.jpg"
    ],
    plan: [
      "Піша прогулянка",
      "Фото скель",
      "Пікнік"
    ],
    location: "https://www.google.com/maps/place/Cirque+de+Mourèze/",
    distance: "≈52 км / 50 хв"
  },
  {
    name: "Étang de Thau",
    description: "Велика лагуна з фермами устриць та мальовничими краєвидами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Etang_de_Thau.jpg"
    ],
    plan: [
      "Дегустація устриць",
      "Прогулянка берегом",
      "Човен"
    ],
    location: "https://www.google.com/maps/place/Étang+de+Thau/",
    distance: "≈45 км / 40 хв"
  },
  {
    name: "La Grande-Motte",
    description: "Курорт з пірамідальною архітектурою та довгими пляжами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/La_Grande-Motte_vue_aerienne.jpg"
    ],
    plan: [
      "Пляж",
      "Круїз",
      "Маяк"
    ],
    location: "https://www.google.com/maps/place/La+Grande-Motte,+34280/",
    distance: "≈30 км / 35 хв"
  },
  {
    name: "Maguelone",
    description: "Острів із романським собором серед виноградників.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Cathedrale_de_Maguelone.jpg"
    ],
    plan: [
      "Прогулянка дамбою",
      "Відвідини собору",
      "Вино"
    ],
    location: "https://www.google.com/maps/place/Cathédrale+de+Maguelone,+Villeneuve-lès-Maguelone/",
    distance: "≈15 км / 25 хв"
  },
  {
    name: "Mont Aigoual",
    description: "Найвища точка Гарру, панорама та метеостанція.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Mont_Aigoual.jpg"
    ],
    plan: [
      "Оглядова вежа",
      "Метеоцентр",
      "Хайкінг"
    ],
    location: "https://www.google.com/maps/place/Mont+Aigoual/",
    distance: "≈95 км / 1 год 40 хв"
  },
  {
    name: "Grotte des Demoiselles",
    description: "Карстова печера з підсвіткою та гігантськими сталактитами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Grotte_des_Demoiselles.jpg"
    ],
    plan: [
      "Екскурсія з гідом",
      "Канатна дорога",
      "Фото"
    ],
    location: "https://www.google.com/maps/place/Grotte+des+Demoiselles,+Saint-Bauzille-de-Putois/",
    distance: "≈55 км / 1 год"
  },
  {
    name: "Clamouse Cave",
    description: "Печера з сталактитами та інтерактивним музеєм.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Grotte_de_Clamouse.jpg"
    ],
    plan: [
      "Екскурсія",
      "Фото в печерах",
      "Сувеніри"
    ],
    location: "https://www.google.com/maps/place/Grotte+de+Clamouse,+Saint-Jean-de-Fos/",
    distance: "≈40 км / 45 хв"
  },
  {
    name: "Loupian",
    description: "Римська вілла з мозаїками та археологічний музей.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Villa_Loupian.jpg"
    ],
    plan: [
      "Музей",
      "Огляд вілли",
      "Мозаїки"
    ],
    location: "https://www.google.com/maps/place/Loupian,+34140/",
    distance: "≈35 км / 40 хв"
  },
  {
    name: "Pézenas",
    description: "Місто Мольєра з антикварними крамницями та середньовічним шармом.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/P%C3%A9zenas_vue.jpg"
    ],
    plan: [
      "Центр міста",
      "Ремісничі лавки",
      "Антикваріат"
    ],
    location: "https://www.google.com/maps/place/Pézenas,+34120/",
    distance: "≈60 км / 50 хв"
  },
  {
    name: "Balaruc-les-Bains",
    description: "Курорт на озері Thau з термальними джерелами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Balaruc-les-Bains_vue.jpg"
    ],
    plan: [
      "Прогулянка берегом",
      "Спа",
      "Пляж"
    ],
    location: "https://www.google.com/maps/place/Balaruc-les-Bains,+34540/",
    distance: "≈30 км / 30 хв"
  },
  {
    name: "Agde",
    description: "Старовинне місто біля моря, відоме базальтовою архітектурою.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Agde_vue.jpg"
    ],
    plan: [
      "Церква Saint-Étienne",
      "Міст через Hérault",
      "Пляж Cap d’Agde"
    ],
    location: "https://www.google.com/maps/place/Agde,+34300/",
    distance: "≈65 км / 55 хв"
  }
];

export default dayTrips;
