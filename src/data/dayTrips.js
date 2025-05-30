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
    location: "https://goo.gl/maps/wWvLPDiq9fMD6kK47",
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
    location: "https://goo.gl/maps/NY6sDNyEqk7FJKAV8",
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
    location: "https://goo.gl/maps/YXqYe4Vb4yM2",
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
    location: "https://goo.gl/maps/KdAGLZ99Zqs",
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
    location: "https://goo.gl/maps/hyGZoxKMCcG2",
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
    location: "https://goo.gl/maps/MqjHZbX7Khz",
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
    location: "https://goo.gl/maps/fUsY7PzyhW12",
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
    location: "https://goo.gl/maps/xZfqXzS5FyD2",
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
    location: "https://goo.gl/maps/7xC6nUfg8Vm",
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
    location: "https://goo.gl/maps/43w9c1qzpG32",
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
    location: "https://goo.gl/maps/G8A8PYBBFjp",
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
    location: "https://goo.gl/maps/2w6sszvdVwu",
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
    location: "https://goo.gl/maps/kEXsnBSeBy1t1c2P8",
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
    location: "https://goo.gl/maps/7v8uDwhsC4T2",
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
    location: "https://goo.gl/maps/nWr2TTsKkvD2",
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
    location: "https://goo.gl/maps/q6q8tRZyqzT2",
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
    location: "https://goo.gl/maps/YyRtJ8A8mQw",
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
    location: "https://goo.gl/maps/XBN5swqzVNs",
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
    location: "https://goo.gl/maps/eqFSWXnhEMp",
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
    location: "https://goo.gl/maps/pzRgnk96BE92",
    distance: "≈65 км / 55 хв"
  }
];

export default dayTrips;
