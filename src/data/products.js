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
    image: "https://m.media-amazon.com/images/I/415UacCO0qL._AC_SY355_.jpg",
  },
  {
    name: "Normaderm Phytosolution",
    amazonLink: "https://amzn.to/3vYobDU",
    image: "https://m.media-amazon.com/images/I/419ea-TkdrL._AC_SY355_.jpg",
  },
  {
    name: "Cleanance gel",
    amazonLink: "https://amzn.to/3OMdJrV",
    image: "https://m.media-amazon.com/images/I/515u1nQwWtL._AC_SY355_.jpg",
  },
  {
    name: "Epidac OC Sabonete Barra",
    amazonLink: "https://amzn.to/3KzO1nc",
    image: "https://m.media-amazon.com/images/I/518Nuux-zJL._AC_SY355_.jpg",
  },
  {
    name: "Bioderma Sebium Gel Moussant",
    amazonLink: "https://amzn.to/3Lt4zyp",
    image: "https://m.media-amazon.com/images/I/61dITcOEKmL._AC_SY355_.jpg",
  },
  {
    name: "Vichy mineral 89",
    amazonLink: "https://amzn.to/3MKSBjI",
    image: "",
  },
  {
    name: "Effaclar anti-age sérum",
    amazonLink: "https://amzn.to/3KrWkBq",
    image: "",
  },
  {
    name: "Sérum oil- Free Blemish + age defense skinceuticals",
    amazonLink: "https://amzn.to/3F8qc4D",
    image: "",
  },
  {
    name: "Normaderm Skin Balance Vichy",
    amazonLink: "https://amzn.to/3OOCRhH",
    image: "",
  },
  {
    name: "Hidradeep loção hidratante oil control",
    amazonLink: "RETIRAR",
    image: "",
  },
  {
    name: "C E ferulic skinceiticals",
    amazonLink: "https://amzn.to/3F2dzZ3",
    image: "",
  },
  {
    name: "Salicily C 10",
    amazonLink: "https://amzn.to/3FjuMNP",
    image: "",
  },
  { name: "Ivy C AOX", amazonLink: "https://amzn.to/38J2QXn", image: "" },
  {
    name: "Vichy Lift active AOX",
    amazonLink: "https://amzn.to/39vyKa8",
    image: "",
  },
  {
    name: "Episol sec 60 fps",
    amazonLink: "https://amzn.to/3OOx5g1",
    image: "",
  },
  {
    name: "Episol Color 70 Pele Extra clara",
    amazonLink: "https://amzn.to/3Ly3FRh",
    image: "",
  },
  {
    name: "Episol Color 70 Pele Clara",
    amazonLink: "https://amzn.to/3736FpG",
    image: "",
  },
  {
    name: "Episol Color 70 Pele Morena",
    amazonLink: "https://amzn.to/3vZYWkV",
    image: "",
  },
  {
    name: "Episol Color 70 Pele Morena-Escura",
    amazonLink: "https://amzn.to/3kzyKIc",
    image: "",
  },
  {
    name: "Episol Color 70 Pele Negra",
    amazonLink: "https://amzn.to/3kvGJq0",
    image: "",
  },

  {
    name: "Anthelios Airlicium 70 fps",
    amazonLink: "https://amzn.to/3s4LMSd",
    image: "",
  },
  {
    name: "Neutrogena Ultra sheer face FPS 55",
    amazonLink: "https://amzn.to/3y5vtZe",
    image: "",
  },
  {
    name: "Isdin fusion water FPS 50",
    amazonLink: "https://amzn.to/37UsS9W",
    image: "",
  },
  {
    name: "Skinceuticals Blemish + age UV Defense FPS 50 Protetor solar",
    amazonLink: "https://amzn.to/3KwmIdu",
    image: "",
  },
  {
    name: "Fisiogel Sabonete líquido",
    amazonLink: "https://amzn.to/3LxGPZW",
    image: "",
  },
  {
    name: "Cetaphil loção de limpeza facial",
    amazonLink: "https://amzn.to/3krGuvZ",
    image: "",
  },
  {
    name: "Dermotivin soft sabonete liquido",
    amazonLink: "https://amzn.to/3OOA6gj",
    image: "",
  },
  {
    name: "Profuse Nutrel creme suavizante",
    amazonLink: "https://amzn.to/3F1EeFj",
    image: "",
  },
  {
    name: "bepantol derma hidratante loção facial noturno",
    amazonLink: "https://amzn.to/3ONpyxT",
    image: "",
  },
  {
    name: "Hidratante calmante Avene Tolerance Etreme",
    amazonLink: "https://amzn.to/3vtSfbE",
    image: "",
  },
  {
    name: "Hidratante Nivea lata",
    amazonLink: "https://amzn.to/3vxA4BS",
    image: "",
  },
  {
    name: "Toleriane Hidratante facial",
    amazonLink: "https://amzn.to/3KC6rDE",
    image: "",
  },
  {
    name: "Serum 10 skinceuticals",
    amazonLink: "https://amzn.to/3F1EPXz",
    image: "",
  },
  {
    name: "Improve c 20 dermage",
    amazonLink: "https://amzn.to/38CIv5R",
    image: "",
  },
  {
    name: "Active C 10 creme",
    amazonLink: "https://amzn.to/3Fjxp29",
    image: "",
  },
  {
    name: "Protetor Solar",
    amazonLink: "",
    image: "",
  },
  {
    name: "Filtrum Hidrat FPS 30",
    amazonLink: "https://amzn.to/3MCAL2q",
    image: "",
  },
  {
    name: "Isdin Ultra FPS 99",
    amazonLink: "https://amzn.to/3wfHnNV",
    image: "",
  },
  {
    name: "Anthelios xL FPS 60",
    amazonLink: "https://amzn.to/3OLIwFc",
    image: "",
  },
  {
    name: "Skinblock extreme FPs 60",
    amazonLink: "não tem",
    image: "",
  },
  {
    name: "Discoloration Defense skinceuticals",
    amazonLink: "https://amzn.to/3LBE6ij",
    image: "",
  },
  {
    name: "Blancy TX gel clareador",
    amazonLink: "https://amzn.to/3vV2hBI",
    image: "",
  },
  {
    name: "LumiXyl loção clareadora",
    amazonLink: "https://amzn.to/3F2qM40",
    image: "",
  },
  {
    name: "Pigmentclar sérum clareador",
    amazonLink: "não tem na amozon vou retirar da lista",
    image: "",
  },
  {
    name: "Neostrata Gel clareador",
    amazonLink: "https://amzn.to/3KylNsM",
    image: "",
  },
  {
    name: "Clarité face Dermage",
    amazonLink: "https://amzn.to/3y7HFZK",
    image: "",
  },
  {
    name: "Effaclar alta tolerância",
    amazonLink: "https://amzn.to/39uTCyi",
    image: "https://m.media-amazon.com/images/I/61WV66rsusL._AC_SY355_.jpg",
  },
  {
    name: "Suavié sabonete liquido",
    amazonLink: "https://amzn.to/3LAJZfC",
    image: "",
  },
  {
    name: "Nutrel sabonete Barra",
    amazonLink: "https://amzn.to/38IeZfa",
    image: "",
  },
  {
    name: "C E ferulic skinceuticals",
    amazonLink: "https://amzn.to/3ksWtKb",
    image: "",
  },
  {
    name: "Vichy Lift active AXO",
    amazonLink: "https://amzn.to/3F35naK",
    image: "",
  },
  {
    name: "Liftactiv supreme vichy",
    amazonLink: "https://amzn.to/3OReX4W",
    image: "",
  },
  {
    name: "Peptide – AHA vichy",
    amazonLink: "https://amzn.to/3LBiEK2",
    image: "",
  },
  {
    name: "Neovadiol comple sustitut nuit",
    amazonLink: "https://amzn.to/3LtbR5f",
    image: "",
  },
  {
    name: "Reviline sérum rejuvenescedor",
    amazonLink: "https://amzn.to/3LGDrfC",
    image: "",
  },
  {
    name: "H. A intensifier skinceuticals",
    amazonLink: "https://amzn.to/3vY1jog",
    image: "",
  },
  {
    name: "Ivy C aox",
    amazonLink: "https://amzn.to/3KynhmQ",
    image: "",
  },
  {
    name: "Vichy Lift active AOx",
    amazonLink: "https://amzn.to/37UvYe4",
    image: "",
  },
];

export default products;
