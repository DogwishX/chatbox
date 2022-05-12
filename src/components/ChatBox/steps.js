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
        value: "oleosa",
        label: "Oleosa",
        trigger: "oleosa",
      },
      {
        value: "seca",
        label: "Seca",
        trigger: "seca",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const desconhecido = [
  {
    id: "desconhecido",
    message:
      "Não tem problema! Temos um questionlário que te ajudará identificar o seu tipo de pele.",
    trigger: "desconhecido2",
  },
  {
    id: "desconhecido2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosa = [
  {
    id: "oleosa",
    message: "Entendi! Agora diga pra mim se sua pele é:",
    trigger: "oleosa-options",
  },
  {
    id: "oleosa-options",
    options: [
      {
        value: "oleosa-sensivel",
        label: "Sensível",
        trigger: "oleosa-sensivel",
      },
      {
        value: "oleosa-resistente",
        label: "Resistente",
        trigger: "oleosa-resistente",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
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
        value: "oleosa-sensivel-pigmentada",
        label: "Pigmentada",
        trigger: "oleosa-sensivel-pigmentada",
      },
      {
        value: "oleosa-sensivel-nao-pigmentada",
        label: "Não-pigmentada",
        trigger: "oleosa-sensivel-naoPigmentada",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const oleosaSensivelPigmentada = [
  {
    id: "oleosa-sensivel-pigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "oleosa-sensivel-pigmentada-options",
  },
  {
    id: "oleosa-sensivel-pigmentada-options",
    options: [
      {
        value: "ospc",
        label: "Enrugada",
        trigger: "oleosa-sensivel-pigmentada-enrugada1",
      },
      {
        value: "ospf",
        label: "Firme",
        trigger: "oleosa-sensivel-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const oleosaSensivelPigmentadaEnrugada = [
  {
    id: "oleosa-sensivel-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-sensivel-pigmentada-enrugada2",
  },
  {
    id: "oleosa-sensivel-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaSensivelPigmentadaFirme = [
  {
    id: "oleosa-sensivel-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-sensivel-pigmentada-firme2",
  },
  {
    id: "oleosa-sensivel-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaSensivelNaoPigmentada = [
  {
    id: "oleosa-sensivel-naoPigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "oleosa-sensivel-naoPigmentada-options",
  },
  {
    id: "oleosa-sensivel-naoPigmentada-options",
    options: [
      {
        value: "osnc",
        label: "Enrugada",
        trigger: "oleosa-sensivel-nao-pigmentada-enrugada1",
      },
      {
        value: "osnf",
        label: "Firme",
        trigger: "oleosa-sensivel-nao-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const oleosaSensivelNaoPigmentadaFirme = [
  {
    id: "oleosa-sensivel-nao-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-sensivel-nao-pigmentada-firme2",
  },
  {
    id: "oleosa-sensivel-nao-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaSensivelNaoPigmentadaEnrugada = [
  {
    id: "oleosa-sensivel-nao-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-sensivel-nao-pigmentada-enrugada2",
  },
  {
    id: "oleosa-sensivel-nao-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
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
        value: "oleosa-resistente-pigmentada",
        label: "Pigmentada",
        trigger: "oleosa-resistente-pigmentada",
      },
      {
        value: "oleosa-resistente-nao-pigmentada",
        label: "Não-pigmentada",
        trigger: "oleosa-resistente-naoPigmentada",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];
const oleosaResistentePigmentada = [
  {
    id: "oleosa-resistente-pigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "oleosa-resistente-pigmentada-options",
  },
  {
    id: "oleosa-resistente-pigmentada-options",
    options: [
      {
        value: "orpc",
        label: "Enrugada",
        trigger: "oleosa-resistente-pigmentada-enrugada1",
      },
      {
        value: "orpf",
        label: "Firme",
        trigger: "oleosa-resistente-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const oleosaResistentePigmentadaEnrugada = [
  {
    id: "oleosa-resistente-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-resistente-pigmentada-enrugada2",
  },
  {
    id: "oleosa-resistente-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaResistentePigmentadaFirme = [
  {
    id: "oleosa-resistente-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-resistente-pigmentada-firme2",
  },
  {
    id: "oleosa-resistente-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaResistenteNaoPigmentada = [
  {
    id: "oleosa-resistente-naoPigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "oleosa-resistente-naoPigmentada-options",
  },
  {
    id: "oleosa-resistente-naoPigmentada-options",
    options: [
      {
        value: "ornc",
        label: "Enrugada",
        trigger: "oleosa-resistente-nao-pigmentada-enrugada1",
      },
      {
        value: "ornf",
        label: "Firme",
        trigger: "oleosa-resistente-nao-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const oleosaResistenteNaoPigmentadaEnrugada = [
  {
    id: "oleosa-resistente-nao-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-resistente-nao-pigmentada-enrugada2",
  },
  {
    id: "oleosa-resistente-nao-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const oleosaResistenteNaoPigmentadaFirme = [
  {
    id: "oleosa-resistente-nao-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "oleosa-resistente-nao-pigmentada-firme2",
  },
  {
    id: "oleosa-resistente-nao-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const seca = [
  {
    id: "seca",
    message: "Entendi! Agora diga pra mim se sua pele é:",
    trigger: "seca-options",
  },
  {
    id: "seca-options",
    options: [
      {
        value: "seca-sensivel",
        label: "Sensível",
        trigger: "seca-sensivel",
      },
      {
        value: "seca-resistente",
        label: "Resistente",
        trigger: "seca-resistente",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
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
        value: "seca-sensivel-pigmentada",
        label: "Pigmentada",
        trigger: "seca-sensivel-pigmentada",
      },
      {
        value: "seca-sensivel-nao-pigmentada",
        label: "Não-pigmentada",
        trigger: "seca-sensivel-nao-pigmentada",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const secaSensivelPigmentada = [
  {
    id: "seca-sensivel-pigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "seca-sensivel-pigmentada-options",
  },
  {
    id: "seca-sensivel-pigmentada-options",
    options: [
      {
        value: "sspc",
        label: "Enrugada",
        trigger: "seca-sensivel-pigmentada-enrugada1",
      },
      {
        value: "sspf",
        label: "Firme",
        trigger: "seca-sensivel-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const secaSensivelPigmentadaEnrugada = [
  {
    id: "seca-sensivel-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-sensivel-pigmentada-enrugada2",
  },
  {
    id: "seca-sensivel-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaSensivelPigmentadaFirme = [
  {
    id: "seca-sensivel-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-sensivel-pigmentada-firme2",
  },
  {
    id: "seca-sensivel-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaSensivelNaoPigmentada = [
  {
    id: "seca-sensivel-nao-pigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "seca-sensivel-naoPigmentada-options",
  },
  {
    id: "seca-sensivel-naoPigmentada-options",
    options: [
      {
        value: "ssnc",
        label: "Enrugada",
        trigger: "seca-sensivel-nao-pigmentada-enrugada1",
      },
      {
        value: "ssnf",
        label: "Firme",
        trigger: "seca-sensivel-nao-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const secaSensivelNaoPigmentadaFirme = [
  {
    id: "seca-sensivel-nao-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-sensivel-nao-pigmentada-firme2",
  },
  {
    id: "seca-sensivel-nao-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaSensivelNaoPigmentadaEnrugada = [
  {
    id: "seca-sensivel-nao-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-sensivel-nao-pigmentada-enrugada2",
  },
  {
    id: "seca-sensivel-nao-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
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
        value: "seca-resistente-pigmentada",
        label: "Pigmentada",
        trigger: "seca-resistente-pigmentada",
      },
      {
        value: "seca-resistente-naoPigmentada",
        label: "Não-pigmentada",
        trigger: "seca-resistente-naoPigmentada",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];
const secaResistentePigmentada = [
  {
    id: "seca-resistente-pigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "seca-resistente-pigmentada-options",
  },
  {
    id: "seca-resistente-pigmentada-options",
    options: [
      {
        value: "srpc",
        label: "Enrugada",
        trigger: "seca-resistente-pigmentada-enrugada1",
      },
      {
        value: "srpf",
        label: "Firme",
        trigger: "seca-resistente-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const secaResistentePigmentadaEnrugada = [
  {
    id: "seca-resistente-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-resistente-pigmentada-enrugada2",
  },
  {
    id: "seca-resistente-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaResistentePigmentadaFirme = [
  {
    id: "seca-resistente-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-resistente-pigmentada-firme2",
  },
  {
    id: "seca-resistente-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaResistenteNaoPigmentada = [
  {
    id: "seca-resistente-naoPigmentada",
    message: "Entendi! Última Pergunta! Sua pele é:",
    trigger: "seca-resistente-naoPigmentada-options",
  },
  {
    id: "seca-resistente-naoPigmentada-options",
    options: [
      {
        value: "srnc",
        label: "Enrugada",
        trigger: "seca-resistente-nao-pigmentada-enrugada1",
      },
      {
        value: "srnf",
        label: "Firme",
        trigger: "seca-resistente-nao-pigmentada-firme1",
      },
      {
        value: "nao-sei",
        label: "Não sei",
        trigger: "desconhecido",
      },
    ],
  },
];

const secaResistenteNaoPigmentadaEnrugada = [
  {
    id: "seca-resistente-nao-pigmentada-enrugada1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-resistente-nao-pigmentada-enrugada2",
  },
  {
    id: "seca-resistente-nao-pigmentada-enrugada2",
    message: "Estou te direcionando para a pagina agora.",
    end: true,
  },
];

const secaResistenteNaoPigmentadaFirme = [
  {
    id: "seca-resistente-nao-pigmentada-firme1",
    message:
      "Perfeito! Consegui identificar seu tipo de pele. Eu criei uma pagina especialmente para você!",
    trigger: "seca-resistente-nao-pigmentada-firme2",
  },
  {
    id: "seca-resistente-nao-pigmentada-firme2",
    message: "Estou te direcionando para a pagina agora.",
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
  ...oleosaSensivelPigmentadaFirme, // MISSING remind ju
  ...oleosaSensivelNaoPigmentada,
  ...oleosaSensivelNaoPigmentadaEnrugada,
  ...oleosaSensivelNaoPigmentadaFirme,
  ...oleosaResistente,
  ...oleosaResistentePigmentada,
  ...oleosaResistentePigmentadaEnrugada,
  ...oleosaResistentePigmentadaFirme, // MISSING
  ...oleosaResistenteNaoPigmentada,
  ...oleosaResistenteNaoPigmentadaFirme,
  ...oleosaResistenteNaoPigmentadaEnrugada,
  ...seca,
  ...secaSensivel,
  ...secaSensivelPigmentada,
  ...secaSensivelPigmentadaEnrugada, // MISSING
  ...secaSensivelPigmentadaFirme, // MISSING
  ...secaSensivelNaoPigmentada,
  ...secaSensivelNaoPigmentadaEnrugada,
  ...secaSensivelNaoPigmentadaFirme,
  ...secaResistente,
  ...secaResistentePigmentada,
  ...secaResistentePigmentadaEnrugada, // MISSING
  ...secaResistentePigmentadaFirme, // MISSING
  ...secaResistenteNaoPigmentada,
  ...secaResistenteNaoPigmentadaFirme,
  ...secaResistenteNaoPigmentadaEnrugada,
  ...desconhecido,
];

export default steps;
