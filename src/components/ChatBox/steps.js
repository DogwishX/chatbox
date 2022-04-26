const greetings = [
  {
    id: "greeting2",
    message:
      "Olá sou a PicSkin. Minha função é dizer para você quais produtos mais indicados para seu Skincare, por isso precisamos descobrir qual o seu tipo de pele!",
    trigger: "greeting3",
  },
  {
    id: "greeting3",
    message: "Vamos descobrir?!",
    trigger: "skin-type",
  },
];

const skinType = [
  {
    id: "skin-type",
    message: "Diga pra mim se sua pele é:",
    trigger: "skin-type-options",
  },
  {
    id: "skin-type-options",
    options: [
      {
        value: 1,
        label: "Oleosa",
        trigger: "oleosa",
      },
      {
        value: 2,
        label: "Seca",
        trigger: "seca",
      },
    ],
  },
];

const oleosa = [
  {
    id: "oleosa",
    message:
      "Entendi! Agora diga pra mim se sua pele é :",
    trigger: "oleosa-options",
  },
  {
    id: "oleosa-options",
    options: [
      {
        value: 1,
        label: "Sensível",
        trigger: "oleosa-sensivel",
      },
      {
        value: 2,
        label: "Resistente",
        trigger: "oleosa-resistente",
      },
    ],
  },
];

const oleosaSensivel = [
  {
    id: "oleosa-sensivel",
    message: "Certo! Sua pele é:",
    trigger: "oleosa-sensivel-options",
  },
  {
    id: "oleosa-sensivel-options",
    options: [
      {
        value: 1,
        label: "Pigmentada",
        trigger: "oleosa-sensivel-pigmentada",
      },
      {
        value: 2,
        label: "Não-pigmentada",
        trigger: "oleosa-sensivel-naoPigmentada",
      },
    ],
  },
];

const oleosaSensivelPigmentada = [
  {
    id: "oleosa-sensivel-pigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger: "oleosa-sensivel-pigmentada-options",
  },
  {
    id: "oleosa-sensivel-pigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "oleosa-sensivel-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "oleosa-sensivel-pigmentada-firme1",
      },
    ],
  },
];

const oleosaSensivelPigmentadaEnrugada = [
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada1",
  //     message:
  //       "Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-sensivel-pigmentada-enrugada2",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger:
  //       "oleosa-sensivel-pigmentada-enrugada3",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-sensivel-pigmentada-enrugada4",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-sensivel-pigmentada-enrugada5",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-sensivel-pigmentada-enrugada6",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-sensivel-pigmentada-enrugada1",
    message:
      "sua pele e oleosa, sensivel, pigmentada e enrugada.",
    end: true,
  },
];

const oleosaSensivelPigmentadaFirme = [
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme1",
  //     message:
  //       "Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger: "oleosa-sensivel-pigmentada-firme2",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger: "oleosa-sensivel-pigmentada-firme3",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger: "oleosa-sensivel-pigmentada-firme4",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger: "oleosa-sensivel-pigmentada-firme5",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger: "oleosa-sensivel-pigmentada-firme6",
  //   },
  //   {
  //     id: "oleosa-sensivel-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-sensivel-pigmentada-firme1",
    message:
      "sua pele e oleosa, sensivel, pigmentada e firme.",
    end: true,
  },
];

const oleosaSensivelNaoPigmentada = [
  {
    id: "oleosa-sensivel-naoPigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger:
      "oleosa-sensivel-naoPigmentada-options",
  },
  {
    id: "oleosa-sensivel-naoPigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "oleosa-sensivel-nao-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "oleosa-sensivel-nao-pigmentada-firme1",
      },
    ],
  },
];

const oleosaSensivelNaoPigmentadaFirme = [
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme1",
  //     message:
  //       "[Oleosa-sensivel-naoPigmentada-firme selecionado]Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-firme2",
  //   },
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-firme3",
  //   },
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-firme4",
  //   },
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-firme5",
  //   },
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-firme6",
  //   },
  //   {
  //     id: "oleosa-sensivel-nao-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-sensivel-nao-pigmentada-firme1",
    message:
      "sua pele e oleosa, sensivel, nao-pigmentada e firme.",
    end: true,
  },
];

const oleosaSensivelNaoPigmentadaEnrugada = [
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada1",
  //     message:
  //       "[Oleosa-sensivel-naoPigmentada-enrugada selecionado]Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-enrugada2",
  //   },
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-enrugada3",
  //   },
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-enrugada4",
  //   },
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-enrugada5",
  //   },
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-sensivel-nao-pigmentada-enrugada6",
  //   },
  //   {
  //     id:
  //       "oleosa-sensivel-nao-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id:
      "oleosa-sensivel-nao-pigmentada-enrugada1",
    message:
      "sua pele e oleosa, sensivel, nao-pigmentada e enrugada.",
    end: true,
  },
];

const oleosaResistente = [
  {
    id: "oleosa-resistente",
    message: "Certo! Sua pele é:",
    trigger: "oleosa-resistente-options",
  },
  {
    id: "oleosa-resistente-options",
    options: [
      {
        value: 1,
        label: "Pigmentada",
        trigger: "oleosa-resistente-pigmentada",
      },
      {
        value: 2,
        label: "Não-pigmentada",
        trigger:
          "oleosa-resistente-naoPigmentada",
      },
    ],
  },
];
const oleosaResistentePigmentada = [
  {
    id: "oleosa-resistente-pigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger:
      "oleosa-resistente-pigmentada-options",
  },
  {
    id: "oleosa-resistente-pigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "oleosa-resistente-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "oleosa-resistente-pigmentada-firme1",
      },
    ],
  },
];

const oleosaResistentePigmentadaEnrugada = [
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada1",
  //     message:
  //       "[Oleosa-resistente-pigmentada-enrugada selecionado] Ótimo, já sei seu tipo de pele !Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-resistente-pigmentada-enrugada2",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger:
  //       "oleosa-resistente-pigmentada-enrugada3",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-resistente-pigmentada-enrugada4",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-resistente-pigmentada-enrugada5",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-resistente-pigmentada-enrugada6",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-resistente-pigmentada-enrugada1",
    message:
      "sua pele e oleosa, resistente, pigmentada e enrugada.",
    end: true,
  },
];

const oleosaResistentePigmentadaFirme = [
  //   {
  //     id: "oleosa-resistente-pigmentada-firme1",
  //     message:
  //       "[Oleosa-resistente-pigmentada-firme selecionado] Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-resistente-pigmentada-firme2",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "oleosa-resistente-pigmentada-firme3",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-resistente-pigmentada-firme4",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-resistente-pigmentada-firme5",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-resistente-pigmentada-firme6",
  //   },
  //   {
  //     id: "oleosa-resistente-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-resistente-pigmentada-firme1",
    message:
      "sua pele e oleosa, resistente, pigmentada e firme.",
    end: true,
  },
];

const oleosaResistenteNaoPigmentada = [
  {
    id: "oleosa-resistente-naoPigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger:
      "oleosa-resistente-naoPigmentada-options",
  },
  {
    id: "oleosa-resistente-naoPigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "oleosa-resistente-nao-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "oleosa-resistente-nao-pigmentada-firme1",
      },
    ],
  },
];

const oleosaResistenteNaoPigmentadaEnrugada = [
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada1",
  //     message:
  //       "[Oleosa-resistente-naoPigmentada-enrugada selecionado] Ótimo, já sei seu tipo de pele !Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-enrugada2",
  //   },
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-enrugada3",
  //   },
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-enrugada4",
  //   },
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-enrugada5",
  //   },
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-enrugada6",
  //   },
  //   {
  //     id:
  //       "oleosa-resistente-naoPigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id:
      "oleosa-resistente-nao-pigmentada-enrugada1",
    message:
      "sua pele e oleosa, resistente, nao-pigmentada e enrugada.",
    end: true,
  },
];

const oleosaResistenteNaoPigmentadaFirme = [
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme1",
  //     message:
  //       "[Oleosa-resistente-naoPigmentada-firme selecionado] Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-firme2",
  //   },
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-firme3",
  //   },
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-firme4",
  //   },
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-firme5",
  //   },
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "oleosa-resistente-naoPigmentada-firme6",
  //   },
  //   {
  //     id: "oleosa-resistente-naoPigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "oleosa-resistente-nao-pigmentada-firme1",
    message:
      "sua pele e oleosa, resistente, nao-pigmentada e firme.",
    end: true,
  },
];

const seca = [
  {
    id: "seca",
    message:
      "Entendi! Agora diga pra mim se sua pele é :",
    trigger: "seca-options",
  },
  {
    id: "seca-options",
    options: [
      {
        value: 1,
        label: "Sensível",
        trigger: "seca-sensivel",
      },
      {
        value: 2,
        label: "Resistente",
        trigger: "seca-resistente",
      },
    ],
  },
];

const secaSensivel = [
  {
    id: "seca-sensivel",
    message: "Certo! Sua pele é:",
    trigger: "seca-sensivel-options",
  },
  {
    id: "seca-sensivel-options",
    options: [
      {
        value: 1,
        label: "Pigmentada",
        trigger: "seca-sensivel-pigmentada",
      },
      {
        value: 2,
        label: "Não-pigmentada",
        trigger: "seca-sensivel-nao-pigmentada",
      },
    ],
  },
];

const secaSensivelPigmentada = [
  {
    id: "seca-sensivel-pigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger: "seca-sensivel-pigmentada-options",
  },
  {
    id: "seca-sensivel-pigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "seca-sensivel-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "seca-sensivel-pigmentada-firme1",
      },
    ],
  },
];

const secaSensivelPigmentadaEnrugada = [
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada1",
  //     message:
  //       "Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger: "seca-sensivel-pigmentada-enrugada2",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger: "seca-sensivel-pigmentada-enrugada3",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger: "seca-sensivel-pigmentada-enrugada4",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger: "seca-sensivel-pigmentada-enrugada5",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger: "seca-sensivel-pigmentada-enrugada6",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-sensivel-pigmentada-enrugada1",
    message:
      "sua pele e seca, sensivel, pigmentada, enrugada",
    end: true,
  },
];

const secaSensivelPigmentadaFirme = [
  //   {
  //     id: "seca-sensivel-pigmentada-firme1",
  //     message:
  //       "Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger: "seca-sensivel-pigmentada-firme2",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger: "seca-sensivel-pigmentada-firme3",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger: "seca-sensivel-pigmentada-firme4",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger: "seca-sensivel-pigmentada-firme5",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger: "seca-sensivel-pigmentada-firme6",
  //   },
  //   {
  //     id: "seca-sensivel-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-sensivel-pigmentada-firme1",
    message:
      "sua pele e seca, sensivel, pigmentada, firme",
    end: true,
  },
];

const secaSensivelNaoPigmentada = [
  {
    id: "seca-sensivel-nao-pigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger:
      "seca-sensivel-naoPigmentada-options",
  },
  {
    id: "seca-sensivel-naoPigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "seca-sensivel-nao-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "seca-sensivel-nao-pigmentada-firme1",
      },
    ],
  },
];

const secaSensivelNaoPigmentadaFirme = [
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme1",
  //     message:
  //       "[seca-sensivel-naoPigmentada-firme selecionado]Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-firme2",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-firme3",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-firme4",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-firme5",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-firme6",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-sensivel-nao-pigmentada-firme1",
    message:
      "sua pele e seca, sensivel, nao-pigmentada, firme",
    end: true,
  },
];

const secaSensivelNaoPigmentadaEnrugada = [
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada1",
  //     message:
  //       "[seca-sensivel-naoPigmentada-enrugada selecionado]Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-enrugada2",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-enrugada3",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-enrugada4",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-enrugada5",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "seca-sensivel-nao-pigmentada-enrugada6",
  //   },
  //   {
  //     id: "seca-sensivel-nao-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-sensivel-nao-pigmentada-enrugada1",
    message:
      "sua pele e seca, sensivel, nao-pigmentada, enrugada",
    end: true,
  },
];

const secaResistente = [
  {
    id: "seca-resistente",
    message: "Certo! Sua pele é:",
    trigger: "seca-resistente-options",
  },
  {
    id: "seca-resistente-options",
    options: [
      {
        value: 1,
        label: "Pigmentada",
        trigger: "seca-resistente-pigmentada",
      },
      {
        value: 2,
        label: "Não-pigmentada",
        trigger: "seca-resistente-naoPigmentada",
      },
    ],
  },
];
const secaResistentePigmentada = [
  {
    id: "seca-resistente-pigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger: "seca-resistente-pigmentada-options",
  },
  {
    id: "seca-resistente-pigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "seca-resistente-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "seca-resistente-pigmentada-firme1",
      },
    ],
  },
];

const secaResistentePigmentadaEnrugada = [
  //   {
  //     id: "seca-resistente-pigmentada-enrugada1",
  //     message:
  //       "[seca-resistente-pigmentada-enrugada selecionado] Ótimo, já sei seu tipo de pele !Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "seca-resistente-pigmentada-enrugada2",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger:
  //       "seca-resistente-pigmentada-enrugada3",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "seca-resistente-pigmentada-enrugada4",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "seca-resistente-pigmentada-enrugada5",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "seca-resistente-pigmentada-enrugada6",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-resistente-pigmentada-enrugada1",
    message:
      "sua pele e seca, resistente, pigmentada, enrugada",
    end: true,
  },
];

const secaResistentePigmentadaFirme = [
  //   {
  //     id: "seca-resistente-pigmentada-firme1",
  //     message:
  //       "[seca-resistente-pigmentada-firme selecionado] Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger: "seca-resistente-pigmentada-firme2",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger: "seca-resistente-pigmentada-firme3",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger: "seca-resistente-pigmentada-firme4",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger: "seca-resistente-pigmentada-firme5",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger: "seca-resistente-pigmentada-firme6",
  //   },
  //   {
  //     id: "seca-resistente-pigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-resistente-pigmentada-firme1",
    message:
      "sua pele e seca, resistente, pigmentada, firme",
    end: true,
  },
];

const secaResistenteNaoPigmentada = [
  {
    id: "seca-resistente-naoPigmentada",
    message:
      "Entendi! última Pergunta! Sua pele é:",
    trigger:
      "seca-resistente-naoPigmentada-options",
  },
  {
    id: "seca-resistente-naoPigmentada-options",
    options: [
      {
        value: 1,
        label: "Enrugada",
        trigger:
          "seca-resistente-nao-pigmentada-enrugada1",
      },
      {
        value: 2,
        label: "Firme",
        trigger:
          "seca-resistente-nao-pigmentada-firme1",
      },
    ],
  },
];

const secaResistenteNaoPigmentadaEnrugada = [
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada1",
  //     message:
  //       "[seca-resistente-naoPigmentada-enrugada selecionado] Ótimo, já sei seu tipo de pele !Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "seca-resistente-naoPigmentada-enrugada2",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza. ",
  //     trigger:
  //       "seca-resistente-naoPigmentada-enrugada3",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "seca-resistente-naoPigmentada-enrugada4",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "seca-resistente-naoPigmentada-enrugada5",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "seca-resistente-naoPigmentada-enrugada6",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-enrugada6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id:
      "seca-resistente-nao-pigmentada-enrugada1",
    message:
      "sua pele e seca, resistente, nao-pigmentada, enrugada",
    end: true,
  },
];

const secaResistenteNaoPigmentadaFirme = [
  //   {
  //     id: "seca-resistente-naoPigmentada-firme1",
  //     message:
  //       "[seca-resistente-naoPigmentada-firme selecionado] Ótimo, já sei seu tipo de pele! Já tenho dipónível para você ótimas indicações de produtos de SkinCare! ",
  //     trigger:
  //       "seca-resistente-naoPigmentada-firme2",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-firme2",
  //     message:
  //       "Sabonete facial:1- Effaclar alta tolerância 2- Suavié Darrow 3-Purete Thermale da Vichy  4-Gel de Limpeza Avène Cleanance Gel 5- Nutrel Gel de Limpeza.",
  //     trigger:
  //       "seca-resistente-naoPigmentada-firme3",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-firme3",
  //     message:
  //       "Clareador: 1- Pigmentaclar sérum facial 2- discoloration defense",
  //     trigger:
  //       "seca-resistente-naoPigmentada-firme4",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-firme4",
  //     message:
  //       "Vitamina C: 1- Vitamina C vichy Ao concetrate 2- Ivy C rejuvenescedor facial 3- Hyalu C creme 4- sérum 10 skinceuticals 5- Aoxitive sérum avene.",
  //     trigger:
  //       "seca-resistente-naoPigmentada-firme5",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-firme5",
  //     message:
  //       "Hidratante Facial: 1- Mineral 89 probiotic face 2- Epidrat calm hidratante facial 3- Toleriane hidratante facial 4- Nivea creme hidratante facial 5- Hyalu B5 repair creme.",
  //     trigger:
  //       "seca-resistente-naoPigmentada-firme6",
  //   },
  //   {
  //     id: "seca-resistente-naoPigmentada-firme6",
  //     message:
  //       "Protetor Solar: 1- Episol sec fps 60 2- anthelios airlicium 3- Anthelios ae pigmentation fps 50 4- episol color 70 5- Mate perfect fluido antiacne fps 60 sem cor Avene 6- UV oil defense fps 80 Skinceuticals 7- Isdin fusion water oil control fps 60.",
  //     end: true,
  //   },
  {
    id: "seca-resistente-nao-pigmentada-firme1",
    message:
      "sua pele e seca, resistente, nao-pigmentada, firme",
    end: true,
  },
];

const steps = [
  ...greetings,
  ...skinType,
  ...oleosa,
  ...oleosaSensivel,
  ...oleosaSensivelPigmentada,
  ...oleosaSensivelPigmentadaEnrugada,
  ...oleosaSensivelPigmentadaFirme,
  ...oleosaSensivelNaoPigmentada,
  ...oleosaSensivelNaoPigmentadaEnrugada,
  ...oleosaSensivelNaoPigmentadaFirme,
  ...oleosaResistente,
  ...oleosaResistentePigmentada,
  ...oleosaResistentePigmentadaEnrugada,
  ...oleosaResistentePigmentadaFirme,
  ...oleosaResistenteNaoPigmentada,
  ...oleosaResistenteNaoPigmentadaFirme,
  ...oleosaResistenteNaoPigmentadaEnrugada,
  ...seca,
  ...secaSensivel,
  ...secaSensivelPigmentada,
  ...secaSensivelPigmentadaEnrugada,
  ...secaSensivelPigmentadaFirme,
  ...secaSensivelNaoPigmentada,
  ...secaSensivelNaoPigmentadaEnrugada,
  ...secaSensivelNaoPigmentadaFirme,
  ...secaResistente,
  ...secaResistentePigmentada,
  ...secaResistentePigmentadaEnrugada,
  ...secaResistentePigmentadaFirme,
  ...secaResistenteNaoPigmentada,
  ...secaResistenteNaoPigmentadaFirme,
  ...secaResistenteNaoPigmentadaEnrugada,
];

export default steps;