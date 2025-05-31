// Файл: src/data/dayTrips.js

const dayTrips = [
  {
    name: "Saint-Guilhem-le-Désert",
    description: "Середньовічне село в ущелині з абатством та мальовничими вуличками.",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrBsgzYhOJ4maJFBVH4ZJ5TOlv2D-r4vmtn8ZuMzjHtMGs484IydBgIxxcHAfoMN1qR0yiOjEZbivM8-mzwl1GEuH_RudNIZhwWOZsYunIPlJGhZMsrvduzb5wTHDkcsJsg8S3d=w540-h312-n-k-no"
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
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np7llbfzhiJ-rFBVfYSGpxLxHH2KJcQEuirxHht0lkgISQyVBdrSG0eO4WdTV-VKNouKrNqnoQOYLLVA0MdUGWDDZP22WMQpF9MndjuLeaUqkWII7XxrZnlTB0Xy7_82voemEdC=w408-h306-k-no"
    ],
    plan: [
      "Зупинка біля мосту",
      "Купання",
      "Пішохідна прогулянка"
    ],
    location: "https://maps.app.goo.gl/6oDFJo87zgrWxyFLA",
    distance: "≈45 км / 40 хв"
  },
  {
    name: "Lac du Salagou",
    description: "Озеро з червоними горами, чудове місце для кемпінгу і хайкінгу.",
    images: [
      "https://www.herault-tourisme.com/uploads/2024/03/la-presqu-ile-de-rouens-e-brendle-4.jpg"
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
      "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/137/233/11921801.jpg"
    ],
    plan: [
      "Оглядові майданчики",
      "Спуск до села",
      "Водоспад"
    ],
    location: "https://maps.app.goo.gl/zxvQW18A4uWHno536",
    distance: "≈90 км / 1 год 30 хв"
  },
  {
    name: "Aigues-Mortes",
    description: "Середньовічне місто з фортечною стіною та рожевими соляними озерами.",
    images: [
      "https://www.tourisme-occitanie.com/uploads/2023/03/4-aigues-mortes-la-bougeotte-francaise-crtl-occitanie-scaled.jpg"
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
      "https://www.lemasdeslavandes.fr/wp-content/uploads/sites/2/2025/01/visiter-sete-herault.webp"
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
      "https://content.r9cdn.net/rimg/dimg/5a/ad/c9d02a38-city-61575-1699c05a122.jpg?width=1200&height=630&xhint=4080&yhint=2107&crop=true"
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
      "https://strapi-upload.cdn.fondation-patrimoine.org/133036_vmc7yylaca_whr_f229d78ef2.jpg"
    ],
    plan: [
      "Екскурсія",
      "Дегустація вина",
      "Сади"
    ],
    location: "https://maps.app.goo.gl/3WtbPjQjim5hdnX49",
    distance: "≈42 км / 45 хв"
  },
  {
    name: "Villeneuvette",
    description: "Історичне село з промисловим минулим і затишною атмосферою.",
    images: [
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTWwHcdWwhlrj1PjHtJAGgG-vOHAaGNRXeGuEgS0ydrDZK--F4oWkfCKYfOfVwHyfq0AZLGSW2-sWc07k8BlXc5Yw1WD2cxKSlnBMf4hA"
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
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np46-UlQ9xENR-shR0VBp09snYYIcOBg_rriOghOG03LdUDTDHo6_blr639ZyOdsWjZ7wf2HHzdNdVth0S82EHXsAiZbuYiLm5KNonoe0wxTXjZl-kwhVb2OfB_A4FnAbkFgEjM0Q=w408-h544-k-no"
    ],
    plan: [
      "Піша прогулянка",
      "Фото скель",
      "Пікнік"
    ],
    location: "https://maps.app.goo.gl/prcLtpbdLi8gubbT7",
    distance: "≈52 км / 50 хв"
  },
  {
    name: "Étang de Thau",
    description: "Велика лагуна з фермами устриць та мальовничими краєвидами.",
    images: [
      "https://static.actu.fr/uploads/2016/11/ostreiculture-e1478271774115.jpgostreiculture.jpg"
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
      "https://photos.pierreetvacances.com/admin/fp2/photos/pano/1368x456/AAA_161514_pano.jpg"
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
      "https://www.sitesdexception.fr/wp-content/uploads/2022/03/Vue-aerienne-%C2%A9Castelet-2.jpg"
    ],
    plan: [
      "Прогулянка дамбою",
      "Відвідини собору",
      "Вино"
    ],
    location: "https://maps.app.goo.gl/ifqskfdRtWpjaDmv9",
    distance: "≈15 км / 25 хв"
  },
  {
    name: "Mont Aigoual",
    description: "Найвища точка Гарру, панорама та метеостанція.",
    images: [
      "https://woody.cloudly.space/app/uploads/cevennes-ales/2022/12/thumbs/GardTourisme_01745_Panorama_depuis_l_Observatoire_du_Mont_Aigoual_Copyright-Teddy_Verneuil_Lezbroz__Gard_Tourisme_BD-1-1920x960-crop-1671803618.jpeg"
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
      "https://radio.vinci-autoroutes.com/medias/image/fc64e5b0da4827bea996b8dce26495d3.png"
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
      "https://www.clamouse.com/img/sliders/clamouse_website_accueil_slide_grotte_02.jpg"
    ],
    plan: [
      "Екскурсія",
      "Фото в печерах",
      "Сувеніри"
    ],
    location: "https://maps.app.goo.gl/mDeNfYGcb6BrDEip9",
    distance: "≈40 км / 45 хв"
  },
  {
    name: "Loupian",
    description: "Римська вілла з мозаїками та археологічний музей.",
    images: [
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSIOwNfk00bxSXnNHaq_CS_15mirj_8YG6RZJN2gfD87ER4ArcHWnJmgXiqv6o9X5bi1fo1u7AW9uxjYdz4EHLhHwiCA6JaTrL3TIX_GA"
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
      "https://leblogduherisson.com/wp-content/uploads/2020/12/flaner-a-pezenas-1.jpg"
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
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/cc/ee/07/vue-au-drone-de-l-etablissemen.jpg?w=900&h=500&s=1"
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
      "https://www.herault-tribune.com/wp-content/uploads/2021/10/Agde-@renaudrdg-770x430.jpg"
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
