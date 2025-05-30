// Файл: src/data/cityPlaces.js

const cityPlaces = [
  {
    name: "Place de la Comédie",
    category: "Центр",
    description: "Головна площа Монпельє з оперним театром і численними кафе.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Place_de_la_Com%C3%A9die_Montpellier.jpg",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/110000/110800-Montpellier.jpg",
      "https://www.soleil-vacances.com/blog/wp-content/uploads/2019/06/visiter-montpellier-place-comedie.jpg"
    ],
    plan: [
      "Почати з прогулянки біля фонтану Трьох грацій",
      "Зайти у торговий центр Polygone",
      "Піднятись до площі Анрі IV для огляду панорами"
    ],
    location: "https://goo.gl/maps/6v5Xoyt1z5uHkJVa9"
  },
  {
    name: "Promenade du Peyrou",
    category: "Оглядові точки",
    description: "Панорамна тераса з видом на акведук, пам’ятник Людовику XIV та старе місто.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Peyrou_Montpellier_01.jpg",
      "https://cdn.sortiraparis.com/images/80/67807/751085-peyrou-montpellier.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/03/arc-peyrou-montpellier-herault.jpg"
    ],
    plan: [
      "Приїхати до зупинки трамвая Place Albert 1er",
      "Піднятися алеєю до Арки тріумфу",
      "Оглянути водосховище і парк"
    ],
    location: "https://goo.gl/maps/KZuup9a6JoME5eNk6"
  },
  {
    name: "Jardin des Plantes",
    category: "Парки",
    description: "Один із найстаріших ботанічних садів Франції — заснований у 1593 році.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Jardin_des_plantes_Montpellier_02.jpg",
      "https://cdn.sortiraparis.com/images/80/67804/751083-jardin-des-plantes-montpellier.jpg",
      "https://static.actu.fr/uploads/2021/09/jardin-des-plantes-montpellier.jpg"
    ],
    plan: [
      "Увійти з боку Boulevard Henri IV",
      "Побачити старі теплиці та лікарські рослини",
      "Пройтись до амфітеатру в кінці саду"
    ],
    location: "https://goo.gl/maps/jZGb8wX9xGcSK8nH8"
  },
  {
    name: "Cathédrale Saint-Pierre",
    category: "Архітектура",
    description: "Готичний собор XIV століття з величезними контрфорсами біля входу.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Montpellier_cathedrale.jpg",
      "https://www.ot-montpellier.fr/wp-content/uploads/2020/07/cathedrale-saint-pierre-1-scaled.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/71/67/3d/cathedrale-saint-pierre.jpg"
    ],
    plan: [
      "Зайти через Cour de la Faculté de Médecine",
      "Оглянути внутрішній двір",
      "Відвідати кафедру й оглядову зону"
    ],
    location: "https://goo.gl/maps/5ZhtGkUkhoC2"
  },
  {
    name: "Musée Fabre",
    category: "Музеї",
    description: "Один із найважливіших музеїв образотворчого мистецтва у Франції.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mus%C3%A9e_Fabre_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67803/751082-musee-fabre-montpellier.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/04/musee-fabre-montpellier-herault-tourisme.jpg"
    ],
    plan: [
      "Придбати квиток онлайн або на вході",
      "Почати з класичного живопису",
      "Завершити сучасними інсталяціями"
    ],
    location: "https://goo.gl/maps/WJYWD3KR6rD2"
  },
  {
    name: "Esplanade Charles-de-Gaulle",
    category: "Парки",
    description: "Зелена пішохідна зона між Place de la Comédie та Musée Fabre з фонтанами і виставками.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/14/EsplanadeCharlesDeGaulle.jpg",
      "https://www.ot-montpellier.fr/wp-content/uploads/2020/06/esplanade-montpellier.jpg",
      "https://i.pinimg.com/originals/e9/58/9e/e9589e772ea7e216ff5b6dce675e2098.jpg"
    ],
    plan: [
      "Почати з кави в одному з кафе вздовж алеї",
      "Пройтися під тінню платанів",
      "Відвідати художні виставки просто неба"
    ],
    location: "https://goo.gl/maps/Cbi3UeMk43iPtHHd9"
  },
  {
    name: "Antigone",
    category: "Сучасна архітектура",
    description: "Архітектурний район із неокласичними будівлями, спроєктованими Рікардо Бофіллом.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Antigone_Montpellier.jpg",
      "https://media.easyvoyage.com/media/1200x630_crop/16807.jpg",
      "https://img.ev.mu/images/attractions/5621/960x640/1236.jpg"
    ],
    plan: [
      "Пройтися вулицею Place du Nombre d'Or",
      "Посидіти біля фонтанів",
      "Завітати до басейну Antigone або бібліотеки"
    ],
    location: "https://goo.gl/maps/YKtGoaapSSaHce5p6"
  },
  {
    name: "Le Corum",
    category: "Культура",
    description: "Конференц-центр і опера на пагорбі над Esplanade Charles-de-Gaulle.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Le_Corum_Montpellier.jpg",
      "https://www.corum-montpellier.com/sites/default/files/styles/gallery_large/public/2019-06/vue-generale-du-corum-copyright-dr.jpg",
      "https://img.ev.mu/images/attractions/5616/960x640/1273.jpg"
    ],
    plan: [
      "Зайти в оперний зал",
      "Оглянути терасу з видом на місто",
      "Відвідати конференцію або концерт"
    ],
    location: "https://goo.gl/maps/vVrKZ3xf9D42"
  },
  {
    name: "Quartier Saint-Roch",
    category: "Історичні райони",
    description: "Атмосферний квартал з вузькими вуличками, барами та церквою Saint-Roch.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Saint-Roch_Church_Montpellier.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/04/eglise-saint-roch-montpellier.jpg",
      "https://www.montpellier-france.com/sites/default/files/styles/gallery_large/public/2020-09/eglise-saint-roch-960x720.jpg"
    ],
    plan: [
      "Почати з церкви Saint-Roch",
      "Випити каву в одному з барів",
      "Прогулятись художніми вуличками з графіті"
    ],
    location: "https://goo.gl/maps/n9XxtFa4gP92"
  },
  {
    name: "Marché du Lez",
    category: "Гастрономія",
    description: "Креативний ринок з вуличною їжею, антикваріатом та арт-об'єктами.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Marche_du_Lez_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67806/751084-marche-du-lez.jpg",
      "https://i.pinimg.com/originals/36/c7/b4/36c7b450f0d9d32fef7a6767f99497aa.jpg"
    ],
    plan: [
      "Скуштувати локальні страви",
      "Придбати вінтажні речі",
      "Зробити фото біля муралів"
    ],
    location: "https://goo.gl/maps/XZh2uKPMW7T2"
  },
    {
    name: "Parc du Domaine de Méric",
    category: "Природа",
    description: "Колишній маєток родини художника Фредеріка Базіля, з видом на річку Лез.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Parc_Meric_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67809/751087-parc-meric.jpg",
      "https://i.ytimg.com/vi/7RIrmA9x9ik/maxresdefault.jpg"
    ],
    plan: [
      "Влаштувати пікнік з видом на річку",
      "Пройтись стежками вздовж Лез",
      "Оглянути віллу родини Базіля"
    ],
    location: "https://goo.gl/maps/nNmbxPtC42N2"
  },
  {
    name: "Aqueduc Saint-Clément",
    category: "Історія",
    description: "Акведук XVIII століття, який постачав воду до Монпельє.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Aqueduc_Saint-Cl%C3%A9ment.jpg",
      "https://cdn.sortiraparis.com/images/80/67810/751088-aqueduc-montpellier.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/03/aqueduc-saint-clement.jpg"
    ],
    plan: [
      "Пройтись вздовж акведуку від Parc du Peyrou",
      "Піднятись на міст для огляду",
      "Сфотографуватись на фоні аркад"
    ],
    location: "https://goo.gl/maps/mKzxtM1AEq72"
  },
  {
    name: "Planet Ocean World",
    category: "Розваги",
    description: "Океанаріум і планетарій у районі Odysseum, для всієї родини.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Planet_Ocean_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67811/751089-planet-ocean.jpg",
      "https://img.ev.mu/images/attractions/13390/960x640/3262.jpg"
    ],
    plan: [
      "Оглянути морських тварин і риб",
      "Відвідати космічні експозиції",
      "Заглянути до сувенірної крамниці"
    ],
    location: "https://goo.gl/maps/qR9AvE3Etdq"
  },
  {
    name: "Odysseum",
    category: "Шопінг та розваги",
    description: "Великий торгово-розважальний центр з магазинами, кінотеатром і ресторанною зоною.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Odysseum_Montpellier.jpg",
      "https://media.easyvoyage.com/media/1200x630_crop/12693.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/04/odysseum-montpellier.jpg"
    ],
    plan: [
      "Зайти до магазину Decathlon",
      "Подивитися фільм в кінотеатрі Gaumont",
      "Вечеряти в ресторані з терасою"
    ],
    location: "https://goo.gl/maps/LgVCkhnNDzK2"
  },
  {
    name: "Château de Flaugergues",
    category: "Історія та вино",
    description: "Елегантний заміський маєток XVIII століття з садами та виноробнею.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Chateau_de_Flaugergues.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/04/chateau-flaugergues.jpg",
      "https://img.ev.mu/images/attractions/13391/960x640/3263.jpg"
    ],
    plan: [
      "Взяти участь у винній дегустації",
      "Оглянути інтер’єри замку",
      "Прогулятись французьким садом"
    ],
    location: "https://goo.gl/maps/rSHdG8ACzqD2"
  },
  {
    name: "Zoo de Lunaret",
    category: "Розваги",
    description: "Один із найбільших зоопарків Франції з безкоштовним входом. Тут мешкає понад 1200 тварин.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Zoo_Lunaret_Montpellier.jpg",
      "https://www.montpellier-tourisme.fr/wp-content/uploads/2020/08/zoo-lunaret.jpg",
      "https://cdn.sortiraparis.com/images/80/67809/751089-zoo-lunaret.jpg"
    ],
    plan: [
      "Завчасно взяти карту маршруту",
      "Побачити жираф, левів і мавп",
      "Відпочити у тіні біля водойми"
    ],
    location: "https://goo.gl/maps/x4GUpSCWqLJ2"
  },
  {
    name: "Parc Montcalm",
    category: "Парки",
    description: "Великий міський парк із алеями, дитячими майданчиками та зонами для пікніка.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Parc_Montcalm_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67813/751090-parc-montcalm.jpg",
      "https://www.herault-tourisme.com/wp-content/uploads/2021/04/parc-montcalm.jpg"
    ],
    plan: [
      "Покататися на велосипеді по алеях",
      "Пограти у футбол або баскетбол",
      "Пікнік у тіні дерев"
    ],
    location: "https://goo.gl/maps/gzRmJ9eBAmH2"
  },
  {
    name: "Église Saint-Anne",
    category: "Культура",
    description: "Колишня церква, що стала центром сучасного мистецтва у серці історичного центру.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Saint_Anne_Montpellier.jpg",
      "https://cdn.sortiraparis.com/images/80/67814/751091-saint-anne.jpg",
      "https://www.montpellier-tourisme.fr/wp-content/uploads/2020/07/saint-anne.jpg"
    ],
    plan: [
      "Оглянути експозиції сучасного мистецтва",
      "Зайти в сувенірну крамницю",
      "Піднятися до оглядового майданчика"
    ],
    location: "https://goo.gl/maps/UhtY8vEQEsw"
  },
  {
    name: "Port Marianne",
    category: "Сучасна архітектура",
    description: "Модерновий район з хмарочосами, урбаністичним плануванням та мальовничими набережними.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Port_Marianne.jpg",
      "https://cdn.sortiraparis.com/images/80/67815/751092-port-marianne.jpg",
      "https://img.ev.mu/images/attractions/5618/960x640/1270.jpg"
    ],
    plan: [
      "Прогулянка уздовж Lez",
      "Кав’ярні біля Bassin Jacques Cœur",
      "Відвідати архітектурні новинки"
    ],
    location: "https://goo.gl/maps/X2h7zkGbRyp"
  },
  {
    name: "Maison de la Nature",
    category: "Природа та освіта",
    description: "Центр спостереження за птахами та природою в дельті річки Lez.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Maison_Nature_Lattes.jpg",
      "https://cdn.sortiraparis.com/images/80/67816/751093-maison-nature.jpg",
      "https://img.ev.mu/images/attractions/5619/960x640/1271.jpg"
    ],
    plan: [
      "Пройтись екологічною стежкою",
      "Подивитись на птахів у бінокль",
      "Оглянути виставки про біорізноманіття"
    ],
    location: "https://goo.gl/maps/MkDdvv3whmn"
  }
];

export default cityPlaces;
