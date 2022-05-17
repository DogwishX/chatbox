const products = [
  {
    name: "LHA Cleansing Gel Skinceuticals",
    amazonLink: "https://amzn.to/37XAF6L",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61NjY5LsaaL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Effaclar concentrado",
    amazonLink: "https://amzn.to/3Kxc6uW",
    image:
      "https://m.media-amazon.com/images/I/415UacCO0qL._AC_SY355_.jpg",
  },
  {
    name: "Normaderm Phytosolution",
    amazonLink: "https://amzn.to/3vYobDU",
    image:
      "https://m.media-amazon.com/images/I/419ea-TkdrL._AC_SY355_.jpg",
  },
  {
    name: "Cleanance gel",
    amazonLink: "https://amzn.to/3OMdJrV",
    image:
      "https://m.media-amazon.com/images/I/515u1nQwWtL._AC_SY355_.jpg",
  },
  {
    name: "Epidac OC Sabonete Barra",
    amazonLink: "https://amzn.to/3KzO1nc",
    image:
      "https://m.media-amazon.com/images/I/518Nuux-zJL._AC_SY355_.jpg",
  },
  {
    name: "Bioderma Sebium Gel Moussant",
    amazonLink: "https://amzn.to/3Lt4zyp",
    image:
      "https://m.media-amazon.com/images/I/61dITcOEKmL._AC_SY355_.jpg",
  },
  {
    name: "Vichy mineral 89",
    amazonLink: "https://amzn.to/3MKSBjI",
    image:
      "https://m.media-amazon.com/images/I/51HSOjcm+xS._AC_SY450_.jpg",
  },
  {
    name: "Effaclar anti-age sérum",
    amazonLink: "https://amzn.to/3KrWkBq",
    image:
      "https://m.media-amazon.com/images/I/417S4zZIN-L._AC_SY355_.jpg",
  },
  {
    name:
      "Sérum oil- Free Blemish + age defense skinceuticals",
    amazonLink: "https://amzn.to/3F8qc4D",
    image:
      "https://m.media-amazon.com/images/I/51B7jtRysML._AC_SY355_.jpg",
  },
  {
    name: "Normaderm Skin Balance Vichy",
    amazonLink: "https://amzn.to/3OOCRhH",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41WW2B3dn-L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "C E ferulic skinceiticals",
    amazonLink: "https://amzn.to/3F2dzZ3",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51NIpG0t8qL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Salicily C 10",
    amazonLink: "https://amzn.to/3FjuMNP",
    image:
      "https://m.media-amazon.com/images/I/51f6IpPyXSL._AC_SY355_.jpg",
  },
  {
    name: "Ivy C AOX",
    amazonLink: "https://amzn.to/38J2QXn",
    image:
      "https://m.media-amazon.com/images/I/51GUmmnSuHL._AC_SY355_.jpg",
  },
  {
    name: "Vichy Lift active AOX",
    amazonLink: "https://amzn.to/39vyKa8",
    image:
      "https://m.media-amazon.com/images/I/61ubyb5WFNL._AC_SY355_.jpg",
  },
  {
    name: "Episol sec 60 fps",
    amazonLink: "https://amzn.to/3OOx5g1",
    image:
      "https://m.media-amazon.com/images/I/415+AArN3xL._AC_SY355_.jpg",
  },
  {
    name: "Episol Color 70 Pele Extra clara",
    amazonLink: "https://amzn.to/3Ly3FRh",
    image:
      "https://m.media-amazon.com/images/I/411A2lo6mTL._AC_SY355_.jpg",
  },
  {
    name: "Episol Color 70 Pele Clara",
    amazonLink: "https://amzn.to/3736FpG",
    image:
      "https://m.media-amazon.com/images/I/41A00phTT0L._AC_SY355_.jpg",
  },
  {
    name: "Episol Color 70 Pele Morena",
    amazonLink: "https://amzn.to/3vZYWkV",
    image:
      "https://m.media-amazon.com/images/I/511UCGkevVL._AC_SY741_.jpg",
  },
  {
    name: "Episol Color 70 Pele Morena-Escura",
    amazonLink: "https://amzn.to/3kzyKIc",
    image:
      "https://m.media-amazon.com/images/I/41cVJqDZuXL._AC_SY355_.jpg",
  },
  {
    name: "Episol Color 70 Pele Negra",
    amazonLink: "https://amzn.to/3kvGJq0",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51BmoBsN0QL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },

  {
    name: "Anthelios Airlicium 70 fps",
    amazonLink: "https://amzn.to/3s4LMSd",
    image:
      "https://m.media-amazon.com/images/I/41KG1rsauDL._AC_SY355_.jpg",
  },
  {
    name: "Neutrogena Ultra sheer face FPS 55",
    amazonLink: "https://amzn.to/3y5vtZe",
    image:
      "https://m.media-amazon.com/images/I/61005K7VJFL._AC_SY355_.jpg",
  },
  {
    name: "Isdin fusion water FPS 50",
    amazonLink: "https://amzn.to/37UsS9W",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51m0yOmNYqL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name:
      "Skinceuticals Blemish + age UV Defense FPS 50 Protetor solar",
    amazonLink: "https://amzn.to/3KwmIdu",
    image:
      "https://m.media-amazon.com/images/I/412VaW-xEXL._AC_SL1000_.jpg",
  },
  {
    name: "Fisiogel Sabonete líquido",
    amazonLink: "https://amzn.to/3LxGPZW",
    image:
      "https://m.media-amazon.com/images/I/412VaW-xEXL._AC_SY355_.jpg",
  },
  {
    name: "Cetaphil loção de limpeza facial",
    amazonLink: "https://amzn.to/3krGuvZ",
    image:
      "https://m.media-amazon.com/images/I/61Vt7fnQL6L._AC_SY606_.jpg",
  },
  {
    name: "Dermotivin soft sabonete liquido",
    amazonLink: "https://amzn.to/3OOA6gj",
    image:
      "https://m.media-amazon.com/images/I/410+zCIetHL._AC_SY355_.jpg",
  },
  {
    name: "Profuse Nutrel creme suavizante",
    amazonLink: "https://amzn.to/3F1EeFj",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41CMM4kjSlL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name:
      "Bepantol derma hidratante loção facial noturno",
    amazonLink: "https://amzn.to/3ONpyxT",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81RnjAQwLGL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name:
      "Hidratante calmante Avene Tolerance Extreme",
    amazonLink: "https://amzn.to/3vtSfbE",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61CFax4nLUL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Hidratante Nivea lata",
    amazonLink: "https://amzn.to/3vxA4BS",
    image:
      "https://m.media-amazon.com/images/I/51tT+dtZJuS._AC_SY355_.jpg",
  },
  {
    name: "Toleriane Hidratante facial",
    amazonLink: "https://amzn.to/3KC6rDE",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41Nu0f07r4L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Serum 10 skinceuticals",
    amazonLink: "https://amzn.to/3F1EPXz",
    image:
      "https://m.media-amazon.com/images/I/519ErIGbv0L._AC_SY355_.jpg",
  },
  {
    name: "Improve c 20 dermage",
    amazonLink: "https://amzn.to/38CIv5R",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51tuk6pPVCL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Active C 10 creme",
    amazonLink: "https://amzn.to/3Fjxp29",
    image:
      "https://m.media-amazon.com/images/I/41Xwu9QFHZL._AC_SY355_.jpg",
  },
  {
    name: "Filtrum Hidrat FPS 30",
    amazonLink: "https://amzn.to/3MCAL2q",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/515ZdZp4yVL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    name: "Isdin Ultra FPS 99",
    amazonLink: "https://amzn.to/3wfHnNV",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61nQiyEIF8L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Anthelios XL FPS 60",
    amazonLink: "https://amzn.to/3OLIwFc",
    image:
      "https://m.media-amazon.com/images/I/51SDV2D4KAL._AC_SY355_.jpg",
  },
  {
    name: "Discoloration Defense skinceuticals",
    amazonLink: "https://amzn.to/3LBE6ij",
    image:
      "https://m.media-amazon.com/images/I/517GFNcUzxL._AC_SY355_.jpg",
  },
  {
    name: "Blancy TX gel clareador",
    amazonLink: "https://amzn.to/3vV2hBI",
    image:
      "https://m.media-amazon.com/images/I/51h+--ckvxL._AC_SY355_.jpg",
  },
  {
    name: "Lumixyl loção clareadora",
    amazonLink: "https://amzn.to/3F2qM40",
    image:
      "https://m.media-amazon.com/images/I/41x+GdqTbiL._AC_SY355_.jpg",
  },
  {
    name: "Neostrata Gel clareador",
    amazonLink: "https://amzn.to/3KylNsM",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61SxjrhYlBL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Clarité face Dermage",
    amazonLink: "https://amzn.to/3y7HFZK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41bsgYra8RL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    name: "Effaclar alta tolerância",
    amazonLink: "https://amzn.to/39uTCyi",
    image:
      "https://m.media-amazon.com/images/I/61WV66rsusL._AC_SY355_.jpg",
  },
  {
    name: "Suavié sabonete liquido",
    amazonLink: "https://amzn.to/3LAJZfC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/612-Co7D3-L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Nutrel sabonete Barra",
    amazonLink: "https://amzn.to/38IeZfa",
    image:
      "https://m.media-amazon.com/images/I/51bK7g96cML._AC_SY355_.jpg",
  },
  {
    name: "C E ferulic skinceuticals",
    amazonLink: "https://amzn.to/3ksWtKb",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51xWPfXCyaL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Vichy Lift active Aox",
    amazonLink: "https://amzn.to/3F35naK",
    image: "",
  },
  {
    name: "Liftactiv supreme vichy",
    amazonLink: "https://amzn.to/3OReX4W",
    image:
      "https://m.media-amazon.com/images/I/61ubyb5WFNL._AC_SY355_.jpg",
  },
  {
    name: "Peptide – AHA vichy",
    amazonLink: "https://amzn.to/3LBiEK2",
    image:
      "https://m.media-amazon.com/images/I/411qch8z8tS._AC_SY355_.jpg",
  },
  {
    name: "Neovadiol comple sustitut nuit",
    amazonLink: "https://amzn.to/3LtbR5f",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71aY8aCLLKL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Reviline sérum rejuvenescedor",
    amazonLink: "https://amzn.to/3LGDrfC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51TSOrNrHiL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "H. A intensifier skinceuticals",
    amazonLink: "https://amzn.to/3vY1jog",
    image:
      "https://m.media-amazon.com/images/I/71oxQ8Yo2iL._AC_SY355_.jpg",
  },
  {
    name: "Ivy C aox",
    amazonLink: "https://amzn.to/3KynhmQ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51GUmmnSuHL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Glycolic 10 renew overnight",
    amazonLink: "https://amzn.to/3wggI4A",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jcpVlj8zL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "Ivy C corpo e colo",
    amazonLink: "https://amzn.to/3Lgtq7I",
    image:
      "https://m.media-amazon.com/images/I/41D3UhrhORL._AC_SY355_.jpg",
  },
  {
    name: "Hidratante corporal Ureadin 10",
    amazonLink: "https://amzn.to/3LhkZcb",
    image:
      "https://m.media-amazon.com/images/I/51Tf0UwLW+L._AC_SY355_.jpg",
  },
  {
    name: "Ideal body pescoço, colo e mãos",
    amazonLink: "https://amzn.to/3MjP10a",
    image:
      "https://m.media-amazon.com/images/I/51StZKgak2L._AC_SY355_.jpg",
  },
  {
    name:
      "Hidratante Corporal Neutrogena® Body Care Intensive",
    amazonLink: "https://amzn.to/3l98sgx",
    image:
      "https://m.media-amazon.com/images/I/61ja+onkb0L._AC_SY550_.jpg",
  },
  {
    name: "Cerave hidratante corporal",
    amazonLink: "https://amzn.to/3Lib7iy",
    image:
      "https://m.media-amazon.com/images/I/61sQ6vnhYQL._AC_SY355_.jpg",
  },
  {
    name:
      "Hidratanete corporal para pele áspera - Glycare Loção",
    amazonLink: "https://amzn.to/3FL3cZQ",
    image:
      "https://m.media-amazon.com/images/I/51v51TJbNqL._AC_SY355_.jpg",
  },
];

export default products;
