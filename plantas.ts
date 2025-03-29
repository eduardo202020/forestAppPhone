interface plantasProps {
  [region: string]: {
    Arboles_de_dosel_alto: {
      nombre_cientifico: string;
      nombre_comun: string;
      caracteristicas: string;
      zona: string;
      img: string[];
    }[];
    Arbustos_medianos: {
      nombre_cientifico: string;
      nombre_comun: string;
      caracteristicas: string;
      zona: string;
      img: string[];
    }[];
    Plantas_de_sotobosque: {
      nombre_cientifico: string;
      nombre_comun: string;
      caracteristicas: string;
      zona: string;
      img: string[];
    }[];
  };
}

export const plantas: plantasProps = {
  Loreto: {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Cedrelinga cateniformis',
        nombre_comun: 'Tornillo',
        caracteristicas: 'Madera dura, crecimiento rápido, resistente a plagas',
        zona: 'Selva',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.719QYVRbMbJUZ68KCO-4rQHaHa&w=474&h=474&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.MCrqZ0ORCpWF6HiS89QZZwHaFj&w=355&h=355&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.W8vE8pcCkSqqIe-jOKoxlAHaJ4&w=474&h=474&c=7',
        ],
      },
      {
        nombre_cientifico: 'Swietenia macrophylla',
        nombre_comun: 'Caoba',
        caracteristicas:
          'Madera valiosa, crecimiento lento, resistente a sequías',
        zona: 'Selva',
        img: [
          'https://tse2.mm.bing.net/th?id=OIP.Tqq0rnlPIW4jh7M4UpW4owHaEU&w=276&h=276&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.gn4pveklrSq1uZtgaDwNywHaF8&w=380&h=380&c=7',
          'https://tse1.mm.bing.net/th?id=OIP.nGZjA2ewYNSkIRMpHjo2ngHaFj&w=355&h=355&c=7',
        ],
      },
      {
        nombre_cientifico: 'Dipteryx micrantha',
        nombre_comun: 'Shihuahuaco',
        caracteristicas:
          'Madera dura, resistente a hongos, usada en construcciones',
        zona: 'Selva',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.b9F5q7RzaICzCJg5jZofSQHaE7&w=315&h=315&c=7',
          'https://tse1.mm.bing.net/th?id=OIP.ovmlezC6IKILrqsg2XouSQHaE8&w=316&h=316&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.edf849EeILm0GYMOTm1gjAHaD6&w=250&h=250&c=7',
        ],
      },
      {
        nombre_cientifico: 'Bertholletia excelsa',
        nombre_comun: 'Castaña Amazónica',
        caracteristicas:
          'Producción de frutos comestibles, importancia económica',
        zona: 'Selva',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.x3Bc-5_bpG6c0ykb0fo6vQHaFj&w=355&h=355&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.FAwTxmnYR_UyuwfJVEKxrAHaJ4&w=474&h=474&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.FQrmMwTCjk6EcxXXfnlSmwHaGe&w=414&h=414&c=7',
        ],
      },
      {
        nombre_cientifico: 'Ceiba pentandra',
        nombre_comun: 'Lupuna',
        caracteristicas:
          'Gran tamaño, tronco espinoso, usada en medicina tradicional',
        zona: 'Selva',
        img: [
          'https://tse2.mm.bing.net/th?id=OIP.fRwX6HjZE0AJw-wc6HIySgHaFS&w=338&h=338&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.yl-zbvxEkAgi3LE9RNujFQHaFj&w=355&h=355&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.r6Ym2yNjh4awcUQkwI1siAHaEK&w=266&h=266&c=7',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Piper aduncum',
        nombre_comun: 'Matico',
        caracteristicas:
          'Atrae polinizadores, alta tolerancia a inundaciones, valor medicinal',
        zona: 'Selva',
        img: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYbn99d3oQEzh8qu7GlntDM5Ax7_TV1iv4A&s',
          'https://marilynperalta.com/wp-content/uploads/2017/05/planta-de-guayuyo.jpg',
          'https://static.inaturalist.org/photos/60480516/large.jpeg',
        ],
      },
      {
        nombre_cientifico: 'Uncaria tomentosa',
        nombre_comun: 'Uña de gato',
        caracteristicas: 'Propiedades medicinales, trepadora de sotobosque',
        zona: 'Selva',
        img: [
          'https://upload.wikimedia.org/wikipedia/commons/c/c4/Uncaria_tomentosa.png',
          'https://i0.wp.com/www.mb-med.it/wp-content/uploads/2015/10/uncaria-tomentosa2.jpg?fit=1024%2C768&ssl=1',
          'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AXNPDTWOT5EYXPMYNX2JL6227E.JPG',
        ],
      },
      {
        nombre_cientifico: 'Theobroma cacao',
        nombre_comun: 'Cacao',
        caracteristicas:
          'Crecimiento moderado, alta producción de frutos, valor alimenticio',
        zona: 'Selva',
        img: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCV9hCd88O4l-2tiDkM0K_HU_mPZYl4kyTg&s',
          'https://i.pinimg.com/736x/3d/42/47/3d4247ab920347f9d7c6d6aa51ac1673.jpg',
          'https://philatax.pisceswebdesign.com/sites/default/files/Image_Species_Plantae/theobroma-cacao_0.jpg',
        ],
      },
      {
        nombre_cientifico: 'Bixa orellana',
        nombre_comun: 'Achiote',
        caracteristicas: 'Colorante natural, valor cultural y medicinal',
        zona: 'Selva',
        img: [
          'https://catalogofloravalleaburra.eia.edu.co/storage/images/9742380e146825c00f71a8b5dfe5b2a8a824abbd.jpg',
          'https://sisdeagro.com/storage/2024/07/achiote.png',
          'https://fichas.infojardin.com/foto-condimentos/bixa-orellana-2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Psychotria viridis',
        nombre_comun: 'Chacruna',
        caracteristicas:
          'Usada en prácticas tradicionales, relación con hongos micorrízicos',
        zona: 'Selva',
        img: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Psychotria_viridis%2C_known_as_Amiruca_%2814319059906%29.jpg/220px-Psychotria_viridis%2C_known_as_Amiruca_%2814319059906%29.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Psychotria-viridis-clipped.jpg/220px-Psychotria-viridis-clipped.jpg',
          'https://salvia-divinorum.salviamx.com/wp-content/uploads/2012/11/psychotria_viridis1.jpg',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Heliconia rostrata',
        nombre_comun: 'Platanillo',
        caracteristicas:
          'Floración prolongada, atrae polinizadores, valor ornamental',
        zona: 'Selva',
        img: [
          'https://www.ecoregistros.org/site/images/dataimages/2022/07/14/500055/Heliconia-rostrata.jpg',
          'https://live.staticflickr.com/2862/10457667734_b9b8af64bc_b.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Heliconia_wagneriana01.jpg/220px-Heliconia_wagneriana01.jpg',
        ],
      },
      {
        nombre_cientifico: 'Calathea lutea',
        nombre_comun: 'Bijao',
        caracteristicas:
          'Hojas grandes, usada en cocina y embalaje tradicional',
        zona: 'Selva',
        img: [
          'https://inaturalist-open-data.s3.amazonaws.com/photos/205037465/large.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Calathea_lutea_Cigar_2.jpg/220px-Calathea_lutea_Cigar_2.jpg',
          'https://elfarodelcanal.com/wp-content/uploads/2024/06/bijao1.jpg',
        ],
      },
      {
        nombre_cientifico: 'Costus scaber',
        nombre_comun: 'Caña agria',
        caracteristicas: 'Medicinal, tolerante a la sombra',
        zona: 'Selva',
        img: [
          'https://tse2.mm.bing.net/th?id=OIP.603Tv0XWdKIsEG9xGlzClQHaJa&w=474&h=474&c=7',
          'https://tse1.mm.bing.net/th?id=OIP.S2XDny-c7IdvcRzAVDLzrgHaKg&w=474&h=474&c=7',
          'https://tse2.mm.bing.net/th?id=OIP.Gnsk63QmdwqpKPdkjy8wugHaFj&w=355&h=355&c=7',
        ],
      },
      {
        nombre_cientifico: 'Bromelia pinguin',
        nombre_comun: 'Pita',
        caracteristicas:
          'Cobertura del suelo, resistente a plagas, usada en cercas vivas',
        zona: 'Selva',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.bry1SonFKyT6CEIPFZWuLAAAAA&w=474&h=474&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.lCtV3a1VVuEhB-8-zUQo9AHaFj&w=355&h=355&c=7',
          'https://ecosdelbosque.com/sites/default/files/styles/slider_rectangle/public/2024-08/Tillandsia_leiboldiana_06.jpg?itok=OeLSlK64',
        ],
      },
      {
        nombre_cientifico: 'Piper auritum',
        nombre_comun: 'Sacha culantro',
        caracteristicas: 'Aromática, usada en gastronomía local',
        zona: 'Selva',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.AmIwVsMJsOio6giixjxMBwHaFj&w=355&h=355&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.6p53dUe3WfXst9oOZLN4QAHaEb&w=283&h=283&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.-yjqcZlyycA8Vtkb0Kx9BgHaEm&w=294&h=294&c=7',
        ],
      },
    ],
  },
  Cuzco: {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Cedrela odorata',
        nombre_comun: 'Cedro',
        caracteristicas:
          'Madera valiosa, crecimiento moderado, resistente a plagas',
        zona: 'Sierra',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.x2C2BBR0Hc56yYeoJ3gZwwHaJ4&w=474&h=474&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.qmhSmH7aLXDcKPCn2rS6wgHaJ4&w=474&h=474&c=7',
          'https://tse2.mm.bing.net/th?id=OIP.5kIE44kAx33G8pZtO2s9YwHaFj&w=355&h=355&c=7',
        ],
      },
      {
        nombre_cientifico: 'Juglans neotropica',
        nombre_comun: 'Nogal',
        caracteristicas:
          'Árbol de madera dura, frutos comestibles, usado en carpintería',
        zona: 'Sierra',
        img: [
          'https://static.wixstatic.com/media/54c99b_c03dcdbeb27d42bca4d692fe3bf73fcd.jpg/v1/fill/w_1440%2Ch_1920%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/54c99b_c03dcdbeb27d42bca4d692fe3bf73fcd.jpg',
          'https://naturaleza.animalesbiologia.com/wp-content/uploads/2020/04/nogal-juglans-regia.jpg',
          'https://www.jardineriaon.com/wp-content/uploads/2020/10/cuidados-del-nogal-nueces.jpg',
        ],
      },
      {
        nombre_cientifico: 'Podocarpus oleifolius',
        nombre_comun: 'Romerillo',
        caracteristicas: 'Conífera andina, adaptada a suelos húmedos y fríos',
        zona: 'Sierra',
        img: [
          'https://phytoimages.siu.edu/users/paraman1/5_31_13_2/UploadC31May2013/261_PodocarpusOleifolius.jpg',
          'https://live.staticflickr.com/466/19142590280_6a945f27e3_b.jpg',
          'https://www.conifers.org/po/po/oleifolius02.jpg',
        ],
      },
      {
        nombre_cientifico: 'Ficus insipida',
        nombre_comun: 'Higuerón',
        caracteristicas:
          'Raíces aéreas, importante en la regeneración de bosques, frutos para fauna',
        zona: 'Selva',
        img: [
          'https://osa-arboretum.org/wp-content/uploads/2020/06/MOR-Ficus-insipida-piro.-foto-Marvin-Lopez-1-938x1024.jpg',
          'https://live.staticflickr.com/7405/27504925765_f93ce854f6_b.jpg',
          'https://www.picturethisai.com/wiki-image/1080/367451816736751616.jpeg',
        ],
      },
      {
        nombre_cientifico: 'Inga edulis',
        nombre_comun: 'Guaba',
        caracteristicas:
          'Árbol fijador de nitrógeno, frutos comestibles, crecimiento rápido',
        zona: 'Selva',
        img: [
          'https://ecosdelbosque.com/sites/default/files/2020-08/inga_edulis_02.jpg',
          'https://e-jardim.com.br/wp-content/uploads/2020/12/Inga-edulis-galeria-1-Copia-1362x2048.jpg',
          'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_L_Inga_edulis_puo_raggiungere_i_25_m_d_altezza_con_una_larga_chioma_c_Giuseppe_Mazza.jpg',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Baccharis latifolia',
        nombre_comun: 'Chilca',
        caracteristicas:
          'Crecimiento rápido, medicinal, tolerante a climas fríos',
        zona: 'Sierra',
        img: [
          'https://live.staticflickr.com/65535/48183968196_970efae567_b.jpg',
          'https://asvillaluz.org/wp-content/uploads/2021/03/Chilco.jpg',
          'https://live.staticflickr.com/65535/52611169113_84a4d02c69_h.jpg',
        ],
      },
      {
        nombre_cientifico: 'Brugmansia arborea',
        nombre_comun: 'Floripondio',
        caracteristicas:
          'Floración ornamental, propiedades medicinales y alucinógenas',
        zona: 'Sierra',
        img: [
          'https://www.brugmansia.us/gallery/category_55/gallery_2200_55_995985.jpg',
          'https://4.bp.blogspot.com/-fQC_rpTRKPU/Tu9YBxrAxaI/AAAAAAAAA6Q/4ew5-V98InY/s1600/P6281600.JPG',
          'https://www.consultaplantas.com/images/phocagallery/brugmansia_arborea/thumbs/phoca_thumb_l_brugmansia_arborea_1.JPG',
        ],
      },
      {
        nombre_cientifico: 'Smallanthus sonchifolius',
        nombre_comun: 'Yacón',
        caracteristicas:
          'Raíz comestible, alto contenido de inulina, usada en medicina tradicional',
        zona: 'Sierra',
        img: [
          'https://www.cultivariable.com/wp-content/uploads/2014/04/yacon-foliage-1-scaled-2048x1535.jpg',
          'https://www.elmundoforestal.com/wp-content/uploads/2020/10/yacon-1.jpg',
          'https://tropicalselfsufficiency.com/wp-content/uploads/sites/12/2020/01/Yacon-Smallanthus-sonchifolius-Flower-scaled.jpg',
        ],
      },
      {
        nombre_cientifico: 'Solanum sessiliflorum',
        nombre_comun: 'Cocona',
        caracteristicas:
          'Fruto ácido comestible, resistente a plagas, crece en climas cálidos',
        zona: 'Selva',
        img: [
          'https://i.pinimg.com/736x/d9/96/59/d996595424570714149e2b3c21613916.jpg',
          'https://tse2.mm.bing.net/th?id=OIP.C9VgeJR-gIE5a4pZM6il4wHaEj&w=291&h=291&c=7',
          'https://tse2.mm.bing.net/th?id=OIP.epJgtgbAIx0KUrJvT9CnZAHaGu&w=430&h=430&c=7',
        ],
      },
      {
        nombre_cientifico: 'Capsicum pubescens',
        nombre_comun: 'Rocoto',
        caracteristicas:
          'Pimiento picante andino, resistente a bajas temperaturas, alto valor gastronómico',
        zona: 'Sierra',
        img: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ripe-manzanos.jpg/220px-Ripe-manzanos.jpg',
          'https://taninos.tripod.com/florrocoto.jpg',
          'https://www.picturethisai.com/wiki-image/1080/153794566934233107.jpeg',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Guzmania lingulata',
        nombre_comun: 'Bromelia roja',
        caracteristicas:
          'Bromelia ornamental, alta capacidad de retención de agua',
        zona: 'Selva',
        img: [
          'https://us.123rf.com/450wm/robert82/robert822306/robert82230600884/205933756-zurich-suiza-22-de-mayo-de-2023-planta-detilandsia-guatemalensis-en-el-jard%C3%ADn-bot%C3%A1nico.jpg?ver=6',
          'https://tse4.mm.bing.net/th?id=OIP.N06-1l43QHguSm21_C8dzAHaFj&w=355&h=355&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.QhX7qvIVE7di4JJ_uMH2xQHaE7&w=315&h=315&c=7',
        ],
      },
      {
        nombre_cientifico: 'Calceolaria corymbosa',
        nombre_comun: 'Zapatito de la Virgen',
        caracteristicas: 'Planta de flores llamativas, adaptada a la sombra',
        zona: 'Sierra',
        img: [
          'https://ceab-rizoma.com/wp-content/uploads/2022/04/Calceolaria-corymbosa-Quebrada-del-tigre-scaled.jpg',
          'https://worldoffloweringplants.com/wp-content/uploads/2018/09/Calceolaria-corymbosa4.jpg',
          'https://fundacionphilippi.cl/wp-content/uploads/2018/10/c_corymbosa_montana_teno_2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Peperomia inaequalifolia',
        nombre_comun: 'Conchita',
        caracteristicas:
          'Cobertura del suelo, resistencia a la sequía, ornamental',
        zona: 'Selva',
        img: [
          'https://imagensubida.infojardin.com/subiras/images/jdv1338724296b.JPG',
          'https://4.bp.blogspot.com/-eBmiuCsRUFQ/WUnR5Ijh28I/AAAAAAAAfpY/Ew0xsxM5flAyqy04ozbTUnEaGApBZDefgCLcBGAs/s1600/congona.jpg',
          'https://evi-gampl.de/wp-content/uploads/2021/10/Zimtpfeffer.jpg',
        ],
      },
      {
        nombre_cientifico: 'Urtica magellanica',
        nombre_comun: 'Ortiga',
        caracteristicas:
          'Planta urticante, con propiedades medicinales antiinflamatorias',
        zona: 'Sierra',
        img: [
          'https://live.staticflickr.com/7382/8862553694_8e036cd5e3_b.jpg',
          'https://tse1.mm.bing.net/th?id=OIP.ugO4rGUs_c9x4GEd_WPhgwHaGi&pid=Api',
          'https://d2seqvvyy3b8p2.cloudfront.net/f40e7c50b2a0853dec1a7ea7959b9d36.jpg',
        ],
      },
      {
        nombre_cientifico: 'Begonia veitchii',
        nombre_comun: 'Begonia andina',
        caracteristicas:
          'Floración llamativa, resistente a la humedad, ornamental y medicinal',
        zona: 'Sierra',
        img: [
          'https://www.begonia.club/wp-content/uploads/2019/05/veitchii-1.jpeg',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/171967490/large.jpg',
          'https://i.redd.it/4p0ez46hoqyz.jpg',
        ],
      },
    ],
  },
  Puno: {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Polylepis incana',
        nombre_comun: 'Queñua o Queuña',
        caracteristicas:
          'Resistente a alturas extremas, crecimiento lento, madera densa',
        zona: 'Sierra',
        img: [
          'https://img.freepik.com/fotos-premium/arbol-papel-polylepis-incana_261041-1433.jpg',
          'https://live.staticflickr.com/65535/50288184356_110a9e5c9b_b.jpg',
          'https://as1.ftcdn.net/v2/jpg/05/68/05/44/1000_F_568054439_gfZeiEHa6bAJzdAszsswk9oDu5pUs5nA.jpg',
        ],
      },
      {
        nombre_cientifico: 'Buddleja coriacea',
        nombre_comun: 'Quishuar o Kiswar',
        caracteristicas:
          'Arbusto perenne, resistente a sequías, valor medicinal',
        zona: 'Sierra',
        img: [
          'https://2.bp.blogspot.com/-LB-w8hgp-24/W2ZfchWMUKI/AAAAAAAAAys/fVz5aBr9iZYVrCY-grV7qiN9-bNgmlpagCLcBGAs/w1200-h630-p-k-no-nu/IMG_4958.JPG',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/139258145/medium.jpeg',
          'https://d3e1m60ptf1oym.cloudfront.net/2f54ff72-ad56-472b-8bfe-41df960c9ca6/BolFlora2014D37_xgaplus.jpg',
        ],
      },
      {
        nombre_cientifico: 'Escallonia resinosa',
        nombre_comun: 'Chachacomo',
        caracteristicas:
          'Floración ornamental, valor medicinal, resistente al frío',
        zona: 'Sierra',
        img: [
          'https://live.staticflickr.com/2842/9265915249_dbe557639f_b.jpg',
          'https://www.picturethisai.com/wiki-image/1080/581F1A5C9D6040238A184B2AEBCA0B2D.jpeg',
          'https://www.agromatica.es/wp-content/uploads/2021/02/Cultivo-de-escalonia.jpg',
        ],
      },
      {
        nombre_cientifico: 'Senna birostris',
        nombre_comun: 'Retama',
        caracteristicas:
          'Crecimiento rápido, tolerante a suelos pobres, floración amarilla',
        zona: 'Sierra',
        img: [
          'https://www.pumahuida.cl/wp-content/uploads/2019/01/DSC_0855-1-1024x683.jpg',
          'https://live.staticflickr.com/2510/4052080743_28db9e8b29_b.jpg',
          'https://www.darwin.edu.ar/ImagenesIris/Senna%20birostris%20var.%20hookeriana-Salta-FOZ9315-Febrero%202007B%20%281%29.JPG',
        ],
      },
      {
        nombre_cientifico: 'Alnus acuminata',
        nombre_comun: 'Aliso',
        caracteristicas:
          'Fijador de nitrógeno, madera ligera, crecimiento rápido',
        zona: 'Sierra',
        img: [
          'https://2.bp.blogspot.com/-GZ5HdR8kp1U/Uwi-VgCp5QI/AAAAAAAABXc/P9D0gU4KAcY/s1600/ALNUS%2BACUMINATA%2BO%2BALISO%2B%28FLORES%2BMASCULINAS%29%2B9.JPG',
          'https://www.cardiffparks.org.uk/trees/bute/images/alnus-acuminata-subsp-acuminata-1.jpg',
          'https://i.etsystatic.com/28846087/r/il/11d090/3202043962/il_570xN.3202043962_swuj.jpg',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Baccharis boliviensis',
        nombre_comun: 'Chilca',
        caracteristicas: 'Resistente a heladas, valor medicinal, polinizador',
        zona: 'Sierra',
        img: [
          'https://bs.plantnet.org/image/o/c1e7a08f5c45f95342c52b72b4b36db4712b0c8a',
          'https://bs.plantnet.org/image/o/bdee9e248ec9bb60c2f0368bc407c85b92c625d5',
          'https://static.inaturalist.org/photos/34160742/medium.jpg',
        ],
      },
      {
        nombre_cientifico: 'Parastrephia lepidophylla',
        nombre_comun: 'Tola',
        caracteristicas: 'Tolerante a la sequía, usada en medicina tradicional',
        zona: 'Sierra',
        img: [
          'https://d3e1m60ptf1oym.cloudfront.net/bfc32f18-5d22-404f-b7a3-e45765ef173f/CHI_7137Da_Parastrephia_lepidophylla__Lauca_National_Park_Area_Chile_015EA_uxga.jpg',
          'https://blogger.googleusercontent.com/img/a/AVvXsEibe1CCYA3RepPLGGK3LpQ8BLIjQvckB2sTAoWemxXwtVuXb5-Z2fSaUPMdKhWS8ea150LZyIBAGtrhqi76feGjXgjNbORdx1bRHdA00-1Ujzh08gCFt6lfD26CTZNsYxzNdl5KebbB8uPl8OUPESzjfoIg3gyyCknthQKqPrYMAIdrP3w0GFUiv-3q=w1200-h630-p-k-no-nu',
          'https://pulperiaquilapan.com/wp-content/uploads/2022/07/koa1.jpg',
        ],
      },
      {
        nombre_cientifico: 'Mutisia acuminata',
        nombre_comun: 'Mutisia',
        caracteristicas: 'Floración ornamental, enredadera andina',
        zona: 'Sierra',
        img: [
          'https://fundacionphilippi.cl/wp-content/uploads/2018/10/mutisia-acuminata-var_hirsuta_mte_2-1000x675.jpg',
          'https://live.staticflickr.com/4100/4912173445_98405102bf_b.jpg',
          'https://live.staticflickr.com/3431/3386623234_decd19a684.jpg',
        ],
      },
      {
        nombre_cientifico: 'Cantua buxifolia',
        nombre_comun: 'Cantuta o Flor del Inca',
        caracteristicas: 'Flor emblemática de los Andes, ornamental',
        zona: 'Sierra',
        img: [
          'https://cdn.shopify.com/s/files/1/0204/5602/products/Cantua_buxifolia_2000x.jpg?v=1519634861',
          'https://tse4.mm.bing.net/th?id=OIP.hWeY4FHtMhqLcl_SphFJVwHaId&pid=Api',
          'https://3.bp.blogspot.com/-D0vyK1NHXPs/VdW9TTVh7FI/AAAAAAAAJh0/LYqgoSEfdS8/s1600/Un%2BPaseo%2BManchego%2B-%2Bflor%2Bde%2Bcantuta%2B%25281%2529.JPG',
        ],
      },
      {
        nombre_cientifico: 'Clinopodium bolivianum',
        nombre_comun: 'Muña',
        caracteristicas:
          'Aromática, usada en infusiones, resistente al clima frío',
        zona: 'Sierra',
        img: [
          'https://www2.darwin.edu.ar/ImagenesIris/Clinopodium%20bolivianum-Foto%20C.%20Martin.jpg',
          'https://botany.cz/foto3/clinopbolivherb4.jpg',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/34485489/medium.jpeg',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Lupinus mutabilis',
        nombre_comun: 'Tarwi o Chocho',
        caracteristicas: 'Alto contenido proteico, resistente a suelos pobres',
        zona: 'Sierra',
        img: [
          'https://2.bp.blogspot.com/-mwOIJCDyRaQ/W8DQDgNf6LI/AAAAAAAAsyA/6qJA2h4nvzwaIsQylCf040yXjttIcrmfgCLcBGAs/s1600/1200px-Lupinus_polyphyllus3.JPG',
          'https://www.dobrenasiona.com/wp-content/uploads/2017/11/image_4456.jpeg',
          'https://alseides.s3.amazonaws.com/photos/files/4217/original/Lupinus_mutabilis1.jpg?1382265492=',
        ],
      },
      {
        nombre_cientifico: 'Werneria nubigena',
        nombre_comun: 'Werneria',
        caracteristicas:
          'Planta rastrera, floración llamativa, adaptada a altas altitudes',
        zona: 'Sierra',
        img: [
          'https://c1.staticflickr.com/1/48/137511246_3846098079_b.jpg',
          'https://www.karbulka.cz/karkulka/Ecuador%20field%20trip/album/slides/Werneria%20nubigena.JPG',
          'https://www.karbulka.cz/karkulka/Ecuador%20field%20trip/album/slides/Werneria%20nubigena.JPG',
        ],
      },
      {
        nombre_cientifico: 'Chuquiraga spinosa',
        nombre_comun: 'Chuquiragua',
        caracteristicas:
          'Floración amarilla, resistente a la aridez, valor medicinal',
        zona: 'Sierra',
        img: [
          'https://ceab-rizoma.com/wp-content/uploads/2021/02/Chuquiraga-spinosa-%C2%A9-Andrea-Ugarte.jpg',
          'https://giorgetta.ch/images/flora/chuquiraga_spinosa/chuquiraga_spinosa_dsc_7177.jpg',
          'https://live.staticflickr.com/7436/9095117524_1749c91d63_z.jpg',
        ],
      },
      {
        nombre_cientifico: 'Azorella compacta',
        nombre_comun: 'Yareta',
        caracteristicas: 'Planta almohadillada, resistente al frío extremo',
        zona: 'Sierra',
        img: [
          'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/giant-cushion-plant-azorella-compacta-bolivia-mark-taylor--natureplcom.jpg',
          'https://live.staticflickr.com/65535/51255836498_d2aba93a2b_z.jpg',
          'https://www.ross.no/wp-content/2012/11/20121112-DSC_9263-1-4.2-scaled.jpg',
        ],
      },
      {
        nombre_cientifico: 'Valeriana rigida',
        nombre_comun: 'Valeriana',
        caracteristicas:
          'Usada en medicina tradicional, adaptada a terrenos rocosos',
        zona: 'Sierra',
        img: [
          'https://elarbol.org/wp-content/uploads/2018/10/word-image-149.jpeg',
          'https://i.pinimg.com/originals/03/18/e0/0318e0f79c0063be8b4251c32f124af5.jpg',
          'https://hablemosdeflores.com/wp-content/uploads/2019/02/Valeriana-officinalis-1024x850.jpg',
        ],
      },
    ],
  },
  'Madre de Dios': {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Dipteryx odorata',
        nombre_comun: 'Shihuahuaco',
        caracteristicas: 'Madera dura, aroma distintivo, usada en perfumería',
        zona: 'Selva',
        img: [
          'https://inaturalist-open-data.s3.amazonaws.com/photos/10894788/large.jpg',
          'https://www.tropicaltimber.info/wp-content/uploads/species_images/Photomaps/Totalphotos/Dipteryx%20odorata/Dipteryx%20odorata_TR_ITTO.jpg',
          'https://as1.ftcdn.net/v2/jpg/02/19/46/54/1000_F_219465452_k4DUflzRgqttEGX9cheaJB4JtFGcRuk2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Bertholletia excelsa',
        nombre_comun: 'Castaña Amazónica',
        caracteristicas:
          'Frutos comestibles, importancia económica, árbol de gran altura',
        zona: 'Selva',
        img: [
          'https://www.outdoorcircle.org/uploads/2/6/1/4/26147365/bertholetia-excelsa_orig.jpg',
          'https://perubiodiverso.com/wp-content/uploads/2020/08/ARBOL.jpg',
          'https://shiwi.pe/wp-content/uploads/2020/01/2016-PR-2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Swietenia macrophylla',
        nombre_comun: 'Caoba',
        caracteristicas:
          'Madera valiosa, crecimiento lento, resistente a plagas',
        zona: 'Selva',
        img: [
          'https://live.staticflickr.com/8181/8009462254_e820b21913_b.jpg',
          'https://www.quintadosouriques.com/wp-content/uploads/2021/07/swietenia-macrophylla-19573437.jpg',
          'https://live.staticflickr.com/3044/3083112287_7f96410e6f_b.jpg',
        ],
      },
      {
        nombre_cientifico: 'Ceiba pentandra',
        nombre_comun: 'Lupuna',
        caracteristicas:
          'Gran tamaño, tronco espinoso, usada en medicina tradicional',
        zona: 'Selva',
        img: [
          'https://www.reddearboles.org/imagenes/1/Ceiba.jpg',
          'https://osa-arboretum.org/wp-content/uploads/2020/06/IMG_20220429_150451.jpg',
          'https://greenparks.in/wp-content/uploads/2021/06/v2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Virola surinamensis',
        nombre_comun: 'Cumala',
        caracteristicas:
          'Madera utilizada en construcción, frutos comestibles para fauna',
        zona: 'Selva',
        img: [
          'https://d2seqvvyy3b8p2.cloudfront.net/c757229d08484bcbacbb203b27c965fb.jpg',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/1321926/medium.jpg',
          'https://biogeodb.stri.si.edu/bioinformatics/dfmfiles/files/c/10960/10960.jpg',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Piper aduncum',
        nombre_comun: 'Matico',
        caracteristicas:
          'Atrae polinizadores, alta tolerancia a inundaciones, valor medicinal',
        zona: 'Selva',
        img: [
          'https://1.bp.blogspot.com/-aB1oAVqJnzE/UXar6OkUJJI/AAAAAAAAFrQ/1zOpwM6nuGc/s1600/Piper_aduncum.jpg',
          'https://tse1.mm.bing.net/th?id=OIP.-xxyq7VtsMTOZj62lO0ZMQHaHa&pid=Api',
          'https://ecocosas.com/wp-content/uploads/2019/09/matico.jpg',
        ],
      },
      {
        nombre_cientifico: 'Uncaria tomentosa',
        nombre_comun: 'Uña de gato',
        caracteristicas: 'Propiedades medicinales, trepadora de sotobosque',
        zona: 'Selva',
        img: [
          'https://www.jardineriaon.com/wp-content/uploads/2018/12/Uncaria-tomentosa-entrelazandose-en-un-arbol-y-con-espinas-en-forma-de-garra.jpg',
          'https://www.fitoterapia.net/archivos/202001/uncaria-tomentosa-scf3723-750x858x80xX.jpg?1=',
          'https://www.wubmed.org/blog/wp-content/uploads/2021/09/cats-claw.jpg',
        ],
      },
      {
        nombre_cientifico: 'Theobroma cacao',
        nombre_comun: 'Cacao',
        caracteristicas:
          'Crecimiento moderado, alta producción de frutos, valor alimenticio',
        zona: 'Selva',
        img: [
          'https://2.bp.blogspot.com/-CzX3T69xX8o/UW2wgMIFGZI/AAAAAAAAEdA/r7APUfDWjbc/s1600/cacao-tree.jpg',
          'https://1.bp.blogspot.com/-j-sRBQyQz_8/VLarIoAWerI/AAAAAAAAajg/1QXSBgKt_5w/s1600/theobroma%2Bcacao%2B1.jpg',
          'https://img1.etsystatic.com/000/0/6359085/il_570xN.252831079.jpg',
        ],
      },
      {
        nombre_cientifico: 'Bixa orellana',
        nombre_comun: 'Achiote',
        caracteristicas: 'Colorante natural, valor cultural y medicinal',
        zona: 'Selva',
        img: [
          'https://2.bp.blogspot.com/-o-ZaQvnHX7I/UA7K-_L3wPI/AAAAAAAACCY/E-wZysl_NYg/s1600/paint_plant_bixa_orellana_IMG_9845.jpg',
          'https://chalk.richmond.edu/flora-kaxil-kiuic/b/bixa_orellana_TABI_3s.JPG',
          'https://s3-us-west-2.amazonaws.com/ntbgmeettheplants/images/600h/1384.jpg',
        ],
      },
      {
        nombre_cientifico: 'Psychotria viridis',
        nombre_comun: 'Chacruna',
        caracteristicas:
          'Usada en prácticas tradicionales, relación con hongos micorrízicos',
        zona: 'Selva',
        img: [
          'https://herbalistics.com.au/wp-content/uploads/2017/01/UNADJUSTEDNONRAW_thumb_4d92-669x750.jpg',
          'https://c1.staticflickr.com/7/6214/6241954920_65eb824716_b.jpg',
          'https://static.wixstatic.com/media/2bdcb3_fb415675f7b64c308c504392f5ccc456~mv2.png/v1/fit/w_1000%2Ch_628%2Cal_c/file.png',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Heliconia rostrata',
        nombre_comun: 'Platanillo',
        caracteristicas:
          'Floración prolongada, atrae polinizadores, valor ornamental',
        zona: 'Selva',
        img: [
          'https://www.plantasonya.com.br/wp-content/img/helicnia-rostrata-11-1024x768.jpg',
          'https://4.bp.blogspot.com/-7X0frV5WLxo/UmqtyTdb1TI/AAAAAAAAVQA/vq-woIVZkmo/s1600/Heliconia_rostrata%2Bgarden.jpg',
          'https://www.plantasonya.com.br/wp-content/img/Heliconia-Rostrata5.jpg',
        ],
      },
      {
        nombre_cientifico: 'Calathea lutea',
        nombre_comun: 'Bijao',
        caracteristicas:
          'Hojas grandes, usada en cocina y embalaje tradicional',
        zona: 'Selva',
        img: [
          'https://tse3.mm.bing.net/th?id=OIP.oIVQIm8DtE2BoXeyZVeI3gHaE7&pid=Api',
          'https://tropicsathome.com/wp-content/uploads/2022/08/Calathea-lutea-sale.jpg',
          'https://econutplants.com/wp-content/uploads/2021/02/calathea-plant-leaves.jpg',
        ],
      },
      {
        nombre_cientifico: 'Costus scaber',
        nombre_comun: 'Caña agria',
        caracteristicas: 'Medicinal, tolerante a la sombra',
        zona: 'Selva',
        img: [
          'https://www.rayon-de-serre.com/2951-full_default/costus-scaber.jpg',
          'https://live.staticflickr.com/6238/6242188903_3e628bbd0d_z.jpg',
          'https://4.bp.blogspot.com/-H1aKWl0mutk/UTu3Pl2GAfI/AAAAAAAABr4/UbWQhOqEwwg/s1600/costus%2Bscaber%2B%282%29.JPG',
        ],
      },
      {
        nombre_cientifico: 'Dieffenbachia seguine',
        nombre_comun: 'Caña muda',
        caracteristicas:
          'Tóxica si se ingiere, ornamental, resistente a la humedad',
        zona: 'Selva',
        img: [
          'https://www.jardineriaon.com/wp-content/uploads/2014/09/diffenbachia-en-jardin-e1613547136381.jpg',
          'https://www.greensouq.ae/wp-content/uploads/2018/02/Dieffenbachia-seguine-Tropic-Snow-Dieffenbachia.jpg',
          'https://www.greensouq.ae/wp-content/uploads/2018/02/Dieffenbachia-seguine-Tropic-Snow-Dieffenbachia.jpg',
        ],
      },
      {
        nombre_cientifico: 'Piper auritum',
        nombre_comun: 'Sacha culantro',
        caracteristicas: 'Aromática, usada en gastronomía local',
        zona: 'Selva',
        img: [
          'https://www.consultaplantas.com/images/phocagallery/piper_auritum/thumbs/phoca_thumb_l_piper_auritum_1.JPG',
          'https://4.bp.blogspot.com/-d8pyFY02CYs/WG1UyJmUXcI/AAAAAAAADNo/wZy1BWVv8mkGnJkHVZGFUGap2J2W9veaQCPcB/s1600/IMAG0074.jpg',
          'https://assessment.ifas.ufl.edu/site/assets/files/25329/piper_auritum_31zz.jpg',
        ],
      },
    ],
  },
  Amazonas: {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Cedrela montana',
        nombre_comun: 'Cedro de montaña',
        caracteristicas:
          'Madera valiosa, crecimiento moderado, resistente a plagas',
        zona: 'Sierra',
        img: [
          'https://1.bp.blogspot.com/-I1qGgiWo4Zs/VAMvDL_OsmI/AAAAAAAAOLE/idXtaKHy5nI/s1600/DSC08070.jpg',
          'https://catalogoarbolesurbanos.eia.edu.co/storage/images/9848d26b82c29648e198aeb5f8bb32657b9f99ed.jpg',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/7721241/medium.jpeg?1494392391=',
        ],
      },
      {
        nombre_cientifico: 'Juglans neotropica',
        nombre_comun: 'Nogal amazónico',
        caracteristicas:
          'Árbol de madera dura, frutos comestibles, usado en carpintería',
        zona: 'Sierra',
        img: [
          'https://static.wixstatic.com/media/54c99b_c03dcdbeb27d42bca4d692fe3bf73fcd.jpg/v1/fill/w_1440%2Ch_1920%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/54c99b_c03dcdbeb27d42bca4d692fe3bf73fcd.jpg',
          'https://www.picturethisai.com/wiki-image/1080/A4CCDC267B524E84B719A47E6CF13C30.jpeg',
          'https://bs.plantnet.org/image/o/c25dbfd45b5c4aeaff0ac5f18d47bd01cd0dd7bc',
        ],
      },
      {
        nombre_cientifico: 'Ficus insipida',
        nombre_comun: 'Renaco',
        caracteristicas:
          'Raíces aéreas, importante en la regeneración de bosques, frutos para fauna',
        zona: 'Selva',
        img: [
          'https://bs.plantnet.org/image/o/9ffbbb84055c5dca3effac3870cb5974c43cc198',
          'https://osa-arboretum.org/wp-content/uploads/2020/06/MOR-Ficus-insipida-piro.-foto-Marvin-Lopez-1-938x1024.jpg',
          'https://live.staticflickr.com/7376/27432813911_2a962af260.jpg',
        ],
      },
      {
        nombre_cientifico: 'Swietenia macrophylla',
        nombre_comun: 'Caoba',
        caracteristicas:
          'Crecimiento lento, resistente a sequías, valor maderable',
        zona: 'Selva',
        img: [
          'https://live.staticflickr.com/8181/8009462254_e820b21913_b.jpg',
          'https://live.staticflickr.com/8181/8009462254_e820b21913_b.jpg',
          'https://live.staticflickr.com/3044/3083112287_7f96410e6f_b.jpg',
        ],
      },
      {
        nombre_cientifico: 'Inga edulis',
        nombre_comun: 'Guaba o Pacay',
        caracteristicas:
          'Árbol fijador de nitrógeno, frutos comestibles, crecimiento rápido',
        zona: 'Selva',
        img: [
          'https://ecosdelbosque.com/sites/default/files/2020-08/inga_edulis_02.jpg',
          'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_L_Inga_edulis_puo_raggiungere_i_25_m_d_altezza_con_una_larga_chioma_c_Giuseppe_Mazza.jpg',
          'https://www.floralondrina.com.br/img/products/muda-de-inga-de-metro-inga-edulis_3_1200.jpg',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Piper aduncum',
        nombre_comun: 'Matico',
        caracteristicas:
          'Atrae polinizadores, alta tolerancia a inundaciones, valor medicinal',
        zona: 'Selva',
        img: [
          'https://1.bp.blogspot.com/-aB1oAVqJnzE/UXar6OkUJJI/AAAAAAAAFrQ/1zOpwM6nuGc/s1600/Piper_aduncum.jpg',
          'https://tse1.mm.bing.net/th?id=OIP.-xxyq7VtsMTOZj62lO0ZMQHaHa&pid=Api',
          'https://ecocosas.com/wp-content/uploads/2019/09/matico.jpg',
        ],
      },
      {
        nombre_cientifico: 'Uncaria tomentosa',
        nombre_comun: 'Uña de gato',
        caracteristicas: 'Propiedades medicinales, trepadora de sotobosque',
        zona: 'Selva',
        img: [
          'https://www.jardineriaon.com/wp-content/uploads/2018/12/Uncaria-tomentosa-entrelazandose-en-un-arbol-y-con-espinas-en-forma-de-garra.jpg',
          'https://www.fitoterapia.net/archivos/202001/uncaria-tomentosa-scf3723-750x858x80xX.jpg?1=',
          'https://www.wubmed.org/blog/wp-content/uploads/2021/09/cats-claw.jpg',
        ],
      },
      {
        nombre_cientifico: 'Theobroma grandiflorum',
        nombre_comun: 'Cupuaçu',
        caracteristicas:
          'Pariente del cacao, frutos comestibles con alto valor nutricional',
        zona: 'Selva',
        img: [
          'https://jbb.gov.co/wp-content/uploads/2023/02/theobroma_grandiflorum_b-768x576.png',
          'https://live.staticflickr.com/1562/26694340786_b3a3872768_b.jpg',
          'https://www.techno-science.net/illustration/Definition/inconnu/c/CUSYST11.JPG',
        ],
      },
      {
        nombre_cientifico: 'Bixa orellana',
        nombre_comun: 'Achiote',
        caracteristicas: 'Colorante natural, valor cultural y medicinal',
        zona: 'Selva',
        img: [
          'https://2.bp.blogspot.com/-o-ZaQvnHX7I/UA7K-_L3wPI/AAAAAAAACCY/E-wZysl_NYg/s1600/paint_plant_bixa_orellana_IMG_9845.jpg',
          'https://chalk.richmond.edu/flora-kaxil-kiuic/b/bixa_orellana_TABI_3s.JPG',
          'https://s3-us-west-2.amazonaws.com/ntbgmeettheplants/images/600h/1384.jpg',
        ],
      },
      {
        nombre_cientifico: 'Psychotria carthagenensis',
        nombre_comun: 'Chacruna',
        caracteristicas:
          'Usada en prácticas tradicionales, relación con hongos micorrízicos',
        zona: 'Selva',
        img: [
          'https://herbalistics.com.au/wp-content/uploads/2017/01/UNADJUSTEDNONRAW_thumb_4d92-669x750.jpg',
          'https://c1.staticflickr.com/7/6214/6241954920_65eb824716_b.jpg',
          'https://static.wixstatic.com/media/2bdcb3_fb415675f7b64c308c504392f5ccc456~mv2.png/v1/fit/w_1000%2Ch_628%2Cal_c/file.png',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Heliconia bihai',
        nombre_comun: 'Platanillo',
        caracteristicas:
          'Floración prolongada, atrae polinizadores, valor ornamental',
        zona: 'Selva',
        img: [
          'https://www.plantasonya.com.br/wp-content/img/helicnia-rostrata-11-1024x768.jpg',
          'https://4.bp.blogspot.com/-7X0frV5WLxo/UmqtyTdb1TI/AAAAAAAAVQA/vq-woIVZkmo/s1600/Heliconia_rostrata%2Bgarden.jpg',
          'https://www.plantasonya.com.br/wp-content/img/Heliconia-Rostrata5.jpg',
        ],
      },
      {
        nombre_cientifico: 'Calathea lutea',
        nombre_comun: 'Bijao',
        caracteristicas:
          'Hojas grandes, usada en cocina y embalaje tradicional',
        zona: 'Selva',
        img: [
          'https://tse3.mm.bing.net/th?id=OIP.oIVQIm8DtE2BoXeyZVeI3gHaE7&pid=Api',
          'https://tropicsathome.com/wp-content/uploads/2022/08/Calathea-lutea-sale.jpg',
          'https://econutplants.com/wp-content/uploads/2021/02/calathea-plant-leaves.jpg',
        ],
      },
      {
        nombre_cientifico: 'Costus spicatus',
        nombre_comun: 'Caña agria',
        caracteristicas: 'Medicinal, tolerante a la sombra',
        zona: 'Selva',
        img: [
          'https://www.rayon-de-serre.com/2951-full_default/costus-scaber.jpg',
          'https://live.staticflickr.com/6238/6242188903_3e628bbd0d_z.jpg',
          'https://4.bp.blogspot.com/-H1aKWl0mutk/UTu3Pl2GAfI/AAAAAAAABr4/UbWQhOqEwwg/s1600/costus%2Bscaber%2B%282%29.JPG',
        ],
      },
      {
        nombre_cientifico: 'Peperomia inaequalifolia',
        nombre_comun: 'Peperomia',
        caracteristicas:
          'Cobertura del suelo, resistencia a la sequía, ornamental',
        zona: 'Selva',
        img: [
          'https://imagensubida.infojardin.com/subiras/images/jdv1338724296b.JPG',
          'https://4.bp.blogspot.com/-eBmiuCsRUFQ/WUnR5Ijh28I/AAAAAAAAfpY/Ew0xsxM5flAyqy04ozbTUnEaGApBZDefgCLcBGAs/s1600/congona.jpg',
          'https://evi-gampl.de/wp-content/uploads/2021/10/Zimtpfeffer.jpg',
        ],
      },
      {
        nombre_cientifico: 'Anthurium andraeanum',
        nombre_comun: 'Anturio',
        caracteristicas: 'Planta ornamental, resistente a la sombra y humedad',
        zona: 'Selva',
        img: [
          'https://www.plantasonya.com.br/wp-content/img/Anthurium_andraeanum1.JPG',
          'https://www.plantasonya.com.br/wp-content/img/Anthurium_andraeanum1.JPG',
          'https://www.picturethisai.com/wiki-image/1080/201164237943406592.jpeg?x-oss-process=image%2Fresize%2Cl_600',
        ],
      },
    ],
  },
  'San Martín': {
    Arboles_de_dosel_alto: [
      {
        nombre_cientifico: 'Dipteryx odorata',
        nombre_comun: 'Shihuahuaco',
        caracteristicas:
          'Madera dura, resistente a plagas y hongos, usada en construcciones',
        zona: 'Selva',
        img: [
          'https://inaturalist-open-data.s3.amazonaws.com/photos/10894788/large.jpg',
          'https://www.tropicaltimber.info/wp-content/uploads/species_images/Photomaps/Totalphotos/Dipteryx%20odorata/Dipteryx%20odorata_TR_ITTO.jpg',
          'https://as1.ftcdn.net/v2/jpg/02/19/46/54/1000_F_219465452_k4DUflzRgqttEGX9cheaJB4JtFGcRuk2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Swietenia macrophylla',
        nombre_comun: 'Caoba',
        caracteristicas:
          'Crecimiento lento, resistente a sequías, valor maderable',
        zona: 'Selva',
        img: [
          'https://live.staticflickr.com/8181/8009462254_e820b21913_b.jpg',
          'https://live.staticflickr.com/8181/8009462254_e820b21913_b.jpg',
          'https://live.staticflickr.com/3044/3083112287_7f96410e6f_b.jpg',
        ],
      },
      {
        nombre_cientifico: 'Ceiba pentandra',
        nombre_comun: 'Lupuna',
        caracteristicas:
          'Gran tamaño, tronco espinoso, usada en medicina tradicional',
        zona: 'Selva',
        img: [
          'https://www.reddearboles.org/imagenes/1/Ceiba.jpg',
          'https://osa-arboretum.org/wp-content/uploads/2020/06/IMG_20220429_150451.jpg',
          'https://greenparks.in/wp-content/uploads/2021/06/v2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Bertholletia excelsa',
        nombre_comun: 'Castaña Amazónica',
        caracteristicas:
          'Producción de frutos comestibles, importancia económica',
        zona: 'Selva',
        img: [
          'https://www.outdoorcircle.org/uploads/2/6/1/4/26147365/bertholetia-excelsa_orig.jpg',
          'https://perubiodiverso.com/wp-content/uploads/2020/08/ARBOL.jpg',
          'https://shiwi.pe/wp-content/uploads/2020/01/2016-PR-2.jpg',
        ],
      },
      {
        nombre_cientifico: 'Ficus insipida',
        nombre_comun: 'Renaco',
        caracteristicas:
          'Raíces aéreas, importante en la regeneración de bosques, frutos para fauna',
        zona: 'Selva',
        img: [
          'https://bs.plantnet.org/image/o/9ffbbb84055c5dca3effac3870cb5974c43cc198',
          'https://osa-arboretum.org/wp-content/uploads/2020/06/MOR-Ficus-insipida-piro.-foto-Marvin-Lopez-1-938x1024.jpg',
          'https://live.staticflickr.com/7376/27432813911_2a962af260.jpg',
        ],
      },
    ],
    Arbustos_medianos: [
      {
        nombre_cientifico: 'Piper aduncum',
        nombre_comun: 'Matico',
        caracteristicas:
          'Atrae polinizadores, alta tolerancia a inundaciones, valor medicinal',
        zona: 'Selva',
        img: [
          'https://1.bp.blogspot.com/-aB1oAVqJnzE/UXar6OkUJJI/AAAAAAAAFrQ/1zOpwM6nuGc/s1600/Piper_aduncum.jpg',
          'https://tse1.mm.bing.net/th?id=OIP.-xxyq7VtsMTOZj62lO0ZMQHaHa&pid=Api',
          'https://ecocosas.com/wp-content/uploads/2019/09/matico.jpg',
        ],
      },
      {
        nombre_cientifico: 'Uncaria tomentosa',
        nombre_comun: 'Uña de gato',
        caracteristicas: 'Propiedades medicinales, trepadora de sotobosque',
        zona: 'Selva',
        img: [
          'https://www.jardineriaon.com/wp-content/uploads/2018/12/Uncaria-tomentosa-entrelazandose-en-un-arbol-y-con-espinas-en-forma-de-garra.jpg',
          'https://www.fitoterapia.net/archivos/202001/uncaria-tomentosa-scf3723-750x858x80xX.jpg?1=',
          'https://www.wubmed.org/blog/wp-content/uploads/2021/09/cats-claw.jpg',
        ],
      },
      {
        nombre_cientifico: 'Theobroma cacao',
        nombre_comun: 'Cacao',
        caracteristicas:
          'Crecimiento moderado, alta producción de frutos, valor alimenticio',
        zona: 'Selva',
        img: [
          'https://2.bp.blogspot.com/-CzX3T69xX8o/UW2wgMIFGZI/AAAAAAAAEdA/r7APUfDWjbc/s1600/cacao-tree.jpg',
          'https://1.bp.blogspot.com/-j-sRBQyQz_8/VLarIoAWerI/AAAAAAAAajg/1QXSBgKt_5w/s1600/theobroma%2Bcacao%2B1.jpg',
          'https://img1.etsystatic.com/000/0/6359085/il_570xN.252831079.jpg',
        ],
      },
      {
        nombre_cientifico: 'Bixa orellana',
        nombre_comun: 'Achiote',
        caracteristicas: 'Colorante natural, valor cultural y medicinal',
        zona: 'Selva',
        img: [
          'https://2.bp.blogspot.com/-o-ZaQvnHX7I/UA7K-_L3wPI/AAAAAAAACCY/E-wZysl_NYg/s1600/paint_plant_bixa_orellana_IMG_9845.jpg',
          'https://chalk.richmond.edu/flora-kaxil-kiuic/b/bixa_orellana_TABI_3s.JPG',
          'https://s3-us-west-2.amazonaws.com/ntbgmeettheplants/images/600h/1384.jpg',
        ],
      },
      {
        nombre_cientifico: 'Psychotria viridis',
        nombre_comun: 'Chacruna',
        caracteristicas:
          'Usada en prácticas tradicionales, relación con hongos micorrízicos',
        zona: 'Selva',
        img: [
          'https://herbalistics.com.au/wp-content/uploads/2017/01/UNADJUSTEDNONRAW_thumb_4d92-669x750.jpg',
          'https://c1.staticflickr.com/7/6214/6241954920_65eb824716_b.jpg',
          'https://static.wixstatic.com/media/2bdcb3_fb415675f7b64c308c504392f5ccc456~mv2.png/v1/fit/w_1000%2Ch_628%2Cal_c/file.png',
        ],
      },
    ],
    Plantas_de_sotobosque: [
      {
        nombre_cientifico: 'Heliconia rostrata',
        nombre_comun: 'Platanillo',
        caracteristicas:
          'Floración prolongada, atrae polinizadores, valor ornamental',
        zona: 'Selva',
        img: [
          'https://www.plantasonya.com.br/wp-content/img/helicnia-rostrata-11-1024x768.jpg',
          'https://4.bp.blogspot.com/-7X0frV5WLxo/UmqtyTdb1TI/AAAAAAAAVQA/vq-woIVZkmo/s1600/Heliconia_rostrata%2Bgarden.jpg',
          'https://www.plantasonya.com.br/wp-content/img/Heliconia-Rostrata5.jpg',
        ],
      },
      {
        nombre_cientifico: 'Calathea lutea',
        nombre_comun: 'Bijao',
        caracteristicas:
          'Hojas grandes, usada en cocina y embalaje tradicional',
        zona: 'Selva',
        img: [
          'https://tse3.mm.bing.net/th?id=OIP.oIVQIm8DtE2BoXeyZVeI3gHaE7&pid=Api',
          'https://tropicsathome.com/wp-content/uploads/2022/08/Calathea-lutea-sale.jpg',
          'https://econutplants.com/wp-content/uploads/2021/02/calathea-plant-leaves.jpg',
        ],
      },
      {
        nombre_cientifico: 'Costus scaber',
        nombre_comun: 'Caña agria',
        caracteristicas: 'Medicinal, tolerante a la sombra',
        zona: 'Selva',
        img: [
          'https://www.rayon-de-serre.com/2951-full_default/costus-scaber.jpg',
          'https://live.staticflickr.com/6238/6242188903_3e628bbd0d_z.jpg',
          'https://4.bp.blogspot.com/-H1aKWl0mutk/UTu3Pl2GAfI/AAAAAAAABr4/UbWQhOqEwwg/s1600/costus%2Bscaber%2B%282%29.JPG',
        ],
      },
      {
        nombre_cientifico: 'Dieffenbachia seguine',
        nombre_comun: 'Caña muda',
        caracteristicas: 'Planta ornamental, resistente a la sombra y humedad',
        zona: 'Selva',
        img: [
          'https://www.jardineriaon.com/wp-content/uploads/2014/09/diffenbachia-en-jardin-e1613547136381.jpg',
          'https://www.greensouq.ae/wp-content/uploads/2018/02/Dieffenbachia-seguine-Tropic-Snow-Dieffenbachia.jpg',
          'https://www.greensouq.ae/wp-content/uploads/2018/02/Dieffenbachia-seguine-Tropic-Snow-Dieffenbachia.jpg',
        ],
      },
      {
        nombre_cientifico: 'Piper auritum',
        nombre_comun: 'Sacha culantro',
        caracteristicas: 'Aromática, usada en gastronomía local',
        zona: 'Selva',
        img: [
          'https://www.consultaplantas.com/images/phocagallery/piper_auritum/thumbs/phoca_thumb_l_piper_auritum_1.JPG',
          'https://4.bp.blogspot.com/-d8pyFY02CYs/WG1UyJmUXcI/AAAAAAAADNo/wZy1BWVv8mkGnJkHVZGFUGap2J2W9veaQCPcB/s1600/IMAG0074.jpg',
          'https://assessment.ifas.ufl.edu/site/assets/files/25329/piper_auritum_31zz.jpg',
        ],
      },
    ],
  },
};
