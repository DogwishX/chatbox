const questionnaireCards = [
  {
    order: 0,
    id: "greeting1",
    question:
      "Essa é uma ferramenta que pode ajudar a determinar o seu tipo de pele - o Sistema de Baumann. É um método de classificação que foi desenvolvido pela dermatologista Leslie Baumann",
    buttonText: "Quero usar",
    numbered: false,
  },
  {
    order: 1,
    id: "greeting2",
    question:
      "Esta seção avalia a produção de óleo da pele e a hidratação. Estudos mostram que a percepção que as pessoas têm de se a pele é oleosa ou seca geralmente está incorreta. Não permita que os seus preconceitos ou o que as outras pessoas pensam ou falam sobre sua pele interfira nas respostas.",
    buttonText: "Entendi",
    numbered: false,
  },
  {
    order: 2,
    id: "question1",
    question:
      "Após lavar o rosto, não aplique hidratante, protetor solar, tônico, pó ou qualquer outro produto. Depois de duas ou três horas, olhe o rosto no espelho sob boa iluminação. Como é a aparência geral da fronte (testa) e das bochechas? ",
    options: [
      { value: 1, text: "Muito áspera, descamativa, sem brilho e sem “vida”." },
      { value: 2, text: "Sensação de tensão (repuxamento)." },
      {
        value: 3,
        text:
          "Bem hidratada, sem brilho excessivo (sem refletir o brilho da luz).",
      },
      { value: 4, text: "Muito brilhante, refletindo o brilho da luz." },
    ],
  },
];

export default questionnaireCards;
