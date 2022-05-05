const questionnaireCards = [
  // Greeting
  {
    order: 0,
    header: "Questionário de Baumann",
    question:
      "Este é um questionario que ajuda a determinar o seu tipo de pele - o Sistema de Baumann.",
    buttonText: "Quero fazer!",
    numbered: false,
  },
  {
    order: 1,
    question:
      "Esta seção avalia a produção de óleo da pele e a hidratação. Não permita que os seus preconceitos ou falam sobre sua pele interfira nas respostas.",
    buttonText: "Entendi",
    numbered: false,
  },

  // Oleosa
  {
    order: 2,
    sectionOrder: 1,
    section: "oilyOrDry",
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
  {
    order: 3,
    sectionOrder: 2,
    section: "oilyOrDry",
    question: "Em fotos, a sua pele aparece brilhante:",
    options: [
      { value: 1, text: "Nunca ou você nunca notou." },
      { value: 2, text: " Às vezes." },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      { value: 4, text: "Sempre." },
    ],
  },
  {
    order: 4,
    sectionOrder: 3,
    section: "oilyOrDry",
    question:
      "Duas ou três horas após a aplicação da base cosmética, mas sem pó, a aparência de sua maquilhagem é:",
    options: [
      { value: 1, text: "Descamativa, encrostada." },
      { value: 2, text: "Lisa, macia." },
      {
        value: 3,
        text: "Brilhante.",
      },
      { value: 4, text: "Muito brilhante." },
      { value: 2.5, text: "Nunca uso base." },
    ],
  },
  {
    order: 5,
    sectionOrder: 4,
    section: "oilyOrDry",
    question:
      "Em meio ambiente com baixa humidade, se você não usar hidratante, nem protetor solar, a sua pele do rosto:",
    options: [
      { value: 1, text: "Fica muito seca e craquelada (descamativa)." },
      { value: 2, text: "Fica com sensação de tensão ." },
      {
        value: 3,
        text: "Fica normal.",
      },
      {
        value: 4,
        text: "Fica brilhante, ou nunca sinto que precisa de hidratante.",
      },
      { value: 2.5, text: "Não sei." },
    ],
  },
  {
    order: 6,
    sectionOrder: 5,
    section: "oilyOrDry",
    question:
      "Num espelho de aumento. Quantos poros abertos e dilatados (tamanho de uma ponta de alfinete ou maior) você tem?",
    options: [
      { value: 1, text: "Nenhum." },
      { value: 2, text: "Apenas um pouco na “zona T” (testa e nariz)." },
      {
        value: 3,
        text: "Muitos.",
      },
      {
        value: 4,
        text: " Uma quantidade exagerada!",
      },
      {
        value: 2.5,
        text:
          "Não sei. (Nota: Observe com atenção e só responda “e” se não for possível outra resposta!)",
      },
    ],
  },
  {
    order: 7,
    sectionOrder: 6,
    section: "oilyOrDry",
    question: "Você classifica  a sua pele do rosto como:",
    options: [
      { value: 1, text: "Seca." },
      { value: 2, text: "Normal." },
      {
        value: 3,
        text: "Mista.",
      },
      {
        value: 4,
        text: "Oleosa.",
      },
    ],
  },
  {
    order: 8,
    sectionOrder: 7,
    section: "oilyOrDry",
    question: "Quando  usa sabonete comum  a pele do seu rosto:",
    options: [
      { value: 1, text: "Fica seca ou craquelada." },
      {
        value: 2,
        text:
          "Fica levemente ressecada, mas não fica craquelada nem descamativa.",
      },
      {
        value: 3,
        text: "Fica normal.",
      },
      {
        value: 4,
        text: "Fica oleosa.",
      },
      {
        value: 5,
        text:
          "Nunca uso sabonete, nem outros produtos semelhantes para lavar o rosto. (Se você age assim porque eles deixam sua pele muito ressecada, marque “a”).",
      },
    ],
  },
  {
    order: 9,
    sectionOrder: 8,
    section: "oilyOrDry",
    question:
      "Se  não usar hidratante,a sua pele fica com sensação de tensão (estiramento):",
    options: [
      { value: 1, text: "Sempre." },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Raramente.",
      },
      {
        value: 4,
        text: "Nunca.",
      },
    ],
  },
  {
    order: 10,
    sectionOrder: 9,
    section: "oilyOrDry",
    question:
      "Tem poros obstruídos (com pontos escuros: cravos escuros ou pontos claros: cravos brancos):",
    options: [
      { value: 1, text: "Nunca." },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Algumas vezes.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
    ],
  },
  {
    order: 11,
    sectionOrder: 10,
    section: "oilyOrDry",
    question: "A sua pele é oleosa na “zona T” (testa e nariz):",
    options: [
      { value: 1, text: "Nunca." },
      {
        value: 2,
        text: " Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
    ],
  },
  {
    order: 12,
    sectionOrder: 11,
    section: "oilyOrDry",
    question:
      "Duas ou três horas após aplicar hidratante, como ficam as suas bochechas?",
    options: [
      {
        value: 1,
        text: "Muito ásperas, descamativas, sem brilho e sem “vida”.",
      },
      {
        value: 2,
        text: "Lisas, macias.",
      },
      {
        value: 3,
        text:
          "Bem hidratadas, sem brilho excessivo (sem refletir o brilho da luz).",
      },
      {
        value: 4,
        text: "Brilhantes e lisas, ou nunca uso hidratante.",
      },
    ],
  },

  // SensivelxResistencia
  {
    order: 13,
    question:
      "Esta seção avaliará a tendência da sua pele para desenvolver borbulhas,vermelhidão, rubor, comichão, todos, sinais de pele sensível.",
    buttonText: "Entendi",
    numbered: false,
  },
  {
    order: 14,
    sectionOrder: 1,
    section: "sensitiveOrResistant",
    question: "Você apresenta pápulas (“bolinhas”) vermelhas em sua pele:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Pelo menos uma vez por mês.",
      },
      {
        value: 4,
        text: "Pelo menos uma vez por semana.",
      },
    ],
  },
  {
    order: 15,
    sectionOrder: 2,
    section: "sensitiveOrResistant",
    question:
      "Produtos para cuidado com a pele (incluindo sabonetes, hidratantes,tônicos e maquilhagem) causam irritação, comichão, vermelhidão, ardência ou “alergia” em sua pele:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: " Sempre.",
      },
      {
        value: 2.5,
        text:
          "Não uso produtos em meu rosto (Nota: responda “d” se você não usa esses produtos porque causam os problemas descritos).",
      },
    ],
  },
  {
    order: 16,
    sectionOrder: 3,
    section: "sensitiveOrResistant",
    question: "Você já teve diagnóstico de acne ou rosácea:",
    options: [
      {
        value: 1,
        text: "Não.",
      },
      {
        value: 2,
        text: "Já disseram que tenho.",
      },
      {
        value: 3,
        text: "Sim.",
      },
      {
        value: 4,
        text: "Sim, um caso grave.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 17,
    sectionOrder: 4,
    section: "sensitiveOrResistant",
    question:
      "Você tem “alergia” quando usa bijuterias ou jóias que não sejam somente ouro 18 quilates:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 18,
    sectionOrder: 5,
    section: "sensitiveOrResistant",
    question:
      "Os protetores solares fazem a sua pele, queimar, ficar vermelha ou irritada, com comichão:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text: "Nunca uso protetor solar.",
      },
    ],
  },
  {
    order: 19,
    sectionOrder: 6,
    section: "sensitiveOrResistant",
    question:
      "Você já teve diagnóstico de dermatite atópica, eczema ou dermatite de contato (inflamação ou erupções na pele)?:",
    options: [
      {
        value: 1,
        text: "Não.",
      },
      {
        value: 2,
        text: "Já me disseram que tenho isso.",
      },
      {
        value: 3,
        text: "Sim.",
      },
      {
        value: 4,
        text: "Sim, um caso grave.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 20,
    sectionOrder: 7,
    section: "sensitiveOrResistant",
    question:
      "Com que freqüência  tem inflamação ou “alergia” no local onde usa anel?",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text: "Nunca uso anel.",
      },
    ],
  },
  {
    order: 21,
    sectionOrder: 8,
    section: "sensitiveOrResistant",
    question:
      "Banho em banheira com sabonete liquido, uso de óleo para massagem ou de loções hidratantes causam comichão, ressecamento ou reações alérgicas em sua pele:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Raramente.",
      },
      {
        value: 3,
        text: "Às vezes.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text:
          "Nunca uso produtos desse tipo (Nota: Responda “d” se você não usa esses produtos porque causam os problemas descritos).",
      },
    ],
  },
  {
    order: 22,
    sectionOrder: 9,
    section: "sensitiveOrResistant",
    question:
      "Pode utilizar o sabonete comum de um hotel no rosto e corpo sem ter problemas de “alergia”?",
    options: [
      {
        value: 1,
        text: "Sim.",
      },
      {
        value: 2,
        text: "Na maioria das vezes não tenho problemas.",
      },
      {
        value: 3,
        text: "Não, minha pele, fica vermelha e irritada e da comichão.",
      },
      {
        value: 4,
        text: "Não posso usar porque já tive vários problemas quando tentei!",
      },
      {
        value: 2.5,
        text:
          "Levo sempre o meu sabonete, por isso não tenho certeza. (Nota: Responda “d” se você não usa esses produtos porque causam os problemas descritos).",
      },
    ],
  },
  {
    order: 23,
    sectionOrder: 10,
    section: "sensitiveOrResistant",
    question:
      "Alguém na sua família tem diagnóstico de dermatite atópica, eczema, asma e/ou alergias?",
    options: [
      {
        value: 1,
        text: "Não.",
      },
      {
        value: 2,
        text: "Uma pessoa na família.",
      },
      {
        value: 3,
        text: "Algumas pessoas na família.",
      },
      {
        value: 4,
        text:
          "Muitas pessoas da família têm dermatite atópica, eczema, asma e/ou alergias.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 24,
    sectionOrder: 11,
    section: "sensitiveOrResistant",
    question:
      "O que acontece se  usar sabão e/ou amaciador perfumado para lavar suas roupas ou produtos que diminuem a eletricidade estática do tecido na maquina de secar roupa?",
    options: [
      {
        value: 1,
        text: "Tudo bem com a minha pele.",
      },
      {
        value: 2,
        text: "A minha pele fica levemente ressecada.",
      },
      {
        value: 3,
        text: "A minha pele da comichão.",
      },
      {
        value: 4,
        text: "A minha pele da comichão, fica irritada e com pápulas.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza porque nunca usei esse tipo de produto.",
      },
    ],
  },
  {
    order: 25,
    sectionOrder: 12,
    section: "sensitiveOrResistant",
    question:
      "Com que freqüência a sua pele e/ou pescoço ficam vermelhos após exercícios moderados, e/ou com stress ou com fortes emoções (com raiva)?",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
    ],
  },
  {
    order: 26,
    sectionOrder: 13,
    section: "sensitiveOrResistant",
    question:
      "Com que freqüência  tende a ficar vermelha ou ruborizada após ingerir bebidas alcoólicas?",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Sempre, ou não bebo por causa desse problema.",
      },
      {
        value: 4,
        text: "Nunca bebo álcool.",
      },
    ],
  },
  {
    order: 27,
    sectionOrder: 14,
    section: "sensitiveOrResistant",
    question:
      "Com que freqüência  tende a ficar vermelha ou ruborizada após comer alimentos apimentados ou muito quentes (temperatura)?",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Sempre.",
      },
      {
        value: 4,
        text:
          "Nunca como alimentos apimentados. (Nota: Se  não come alimentos apimentados ou comidas quentes porque tem esses sintomas, assinalar letra “d”).",
      },
    ],
  },
  {
    order: 28,
    sectionOrder: 15,
    section: "sensitiveOrResistant",
    question:
      "Quantas “veinhas” vermelhas ou azuladas você tem no rosto, incluindo o nariz (se você fez tratamento para eliminá-los, considere os que tinha antes)?",
    options: [
      {
        value: 1,
        text: "Nenhum.",
      },
      {
        value: 2,
        text: "Poucos (de um a três no rosto todo, incluindo o nariz).",
      },
      {
        value: 3,
        text: "Alguns (de quatro a seis no rosto todo, incluindo o nariz).",
      },
      {
        value: 4,
        text: "Muitos (mais de sete, incluindo o nariz).",
      },
    ],
  },
  {
    order: 29,
    sectionOrder: 16,
    section: "sensitiveOrResistant",
    question: "O seu rosto aparece vermelho nas fotografias?",
    options: [
      {
        value: 1,
        text: "Nunca, ou nunca notei.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
    ],
  },
  {
    order: 30,
    sectionOrder: 17,
    section: "sensitiveOrResistant",
    question:
      "As pessoas perguntam se teve ao sol (porque fica vermelha como pimentão), mesmo quando você não teve?",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text:
          "Estou sempre bronzeada ou queimada de sol. (Atenção: isto não é bom!)",
      },
    ],
  },
  {
    order: 31,
    sectionOrder: 18,
    section: "sensitiveOrResistant",
    question:
      "Ao usar maquilhagem, protetor solar ou produtos para cuidados com a pele, você fica com vermelhidão, coceira ou irritação:",
    options: [
      {
        value: 1,
        text: "Nunca.",
      },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text:
          "Não uso esses produtos. (Nota: Se não usa porque eles causam os problemas citados acima, assinale “d”).",
      },
    ],
  },
  {
    order: 32,
    sectionOrder: 19,
    section: "sensitiveOrResistant",
    question:
      "O seu dermatologista já deu o diagnóstico de acne, rosácea, dermatite de contato ou eczema?",
    options: [
      {
        value: 5,
        text: "Sim",
      },
      {
        value: 2,
        text:
          "Um médico de outra especialidade deu algum desses mesmos diagnósticos",
      },
      {
        value: 0,
        text: "Não",
      },
    ],
  },
  {
    order: 33,
    question:
      "Esta seção avaliará a tendência de  pele para formar melanina, um pigmento que produz tons escuros na pele, assim como todas as manchas castanhas, sardas e as áreas escuras pós-trauma.",
    buttonText: "Entendi",
    numbered: false,
  },
  {
    order: 34,
    sectionOrder: 1,
    section: "pigmentedOrNonPigmented",
    question:
      "Se  tiver uma pápula (“bolinha vermelha”), uma “espinha” ou um pêlo encravado, no local fica uma mancha castanha ou um ponto preto:",
    options: [
      { value: 1, text: "Nunca." },
      {
        value: 2,
        text: "Às vezes.",
      },
      {
        value: 3,
        text: "Freqüentemente.",
      },
      {
        value: 4,
        text: "Sempre.",
      },
      {
        value: 2.5,
        text: "Nunca tive pápulas, “espinhas”, nem pêlo encravado.Sempre.",
      },
    ],
  },
  {
    order: 35,
    sectionOrder: 2,
    section: "pigmentedOrNonPigmented",
    question:
      "Quando sofre um corte ou ferimento, quanto tempo o local fica com uma marca castanha (não vermelha)?",
    options: [
      { value: 1, text: "Nunca fico com marcas castanhas." },
      {
        value: 2,
        text: "Uma semana.",
      },
      {
        value: 3,
        text: "Algumas semanas.",
      },
      {
        value: 4,
        text: "Meses.",
      },
    ],
  },
  {
    order: 36,
    sectionOrder: 3,
    section: "pigmentedOrNonPigmented",
    question:
      "Quantas manchas escuras  teve no rosto quando engravidou, ou tomou pílulas anticoncepcionais, ou fez terapia de reposição hormonal?",
    options: [
      { value: 1, text: "Nenhuma." },
      {
        value: 2,
        text: "Uma",
      },
      {
        value: 3,
        text: "Poucas.",
      },
      {
        value: 4,
        text: "Muitas.",
      },
      {
        value: 2.5,
        text:
          "Esta questão não se aplica no meu caso (porque sou homem, ou porque nunca engravidei, nem usei pílulas anticoncepcionais, nem fiz reposição hormonal, ou porque não sei quando apareceram as manchas escuras).",
      },
    ],
  },
  {
    order: 36,
    sectionOrder: 4,
    section: "pigmentedOrNonPigmented",
    question:
      "Tem algum tipo de mancha escura no buço (pele sobre o lábio superior) ou bochechas? Ou já teve alguma que foi tratada?",
    options: [
      { value: 1, text: "Não." },
      {
        value: 2,
        text: "Não tenho certeza",
      },
      {
        value: 3,
        text: "Sim, elas são (ou eram) levemente perceptíveis.",
      },
      {
        value: 4,
        text: "Sim, elas são (ou eram) muito perceptíveis.",
      },
    ],
  },
  {
    order: 37,
    sectionOrder: 5,
    section: "pigmentedOrNonPigmented",
    question:
      " As suas manchas escuras no rosto ficam piores quando você apanha sol?",
    options: [
      { value: 1, text: "Não tenho manchas escuras." },
      {
        value: 2,
        text: "Não tenho certeza.",
      },
      {
        value: 3,
        text: "Pioram um pouco.",
      },
      {
        value: 4,
        text: "Pioram muito.",
      },
      {
        value: 2.5,
        text:
          "Uso protetor solar todos os dias e nunca pego sol. (Nota: Se você usa proteção solar constante porque tem medo de ficar com a pele manchada ou com sardas, marcar “d”).",
      },
    ],
  },
  {
    order: 38,
    sectionOrder: 6,
    section: "pigmentedOrNonPigmented",
    question:
      "Já teve diagnóstico de melasma (manchas castanhas no rosto), sardas brancas ou sardas castanhas, ou melanoses solares (manchas de sol castanhas) no rosto?",
    options: [
      { value: 1, text: "Não" },
      {
        value: 2,
        text: "Uma vez, mas saíram.",
      },
      {
        value: 3,
        text: "Sim.",
      },
      {
        value: 4,
        text: "Sim, um caso grave.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 39,
    sectionOrder: 7,
    section: "pigmentedOrNonPigmented",
    question:
      "Tem, ou já teve, manchas castanhas (sardas ou manchas de sol) no rosto, colo, costas ou braços?",
    options: [
      { value: 1, text: "Não" },
      {
        value: 2,
        text: "Sim, poucas (1-5).",
      },
      {
        value: 3,
        text: "Sim, muitas (6-15).",
      },
      {
        value: 4,
        text: "Sim, inúmeras (16 ou mais).",
      },
    ],
  },
  {
    order: 40,
    sectionOrder: 8,
    section: "pigmentedOrNonPigmented",
    question:
      "Quando a sua pele é exposta ao sol pela primeira vez após muitos meses:",
    options: [
      { value: 1, text: "Ela só queima." },
      {
        value: 2,
        text: "Queima e depois fica levemente bronzeada.",
      },
      {
        value: 3,
        text: "Fica bronzeada.",
      },
      {
        value: 4,
        text:
          'A minha pele já é escura, por isso é difícil avaliar se ela fica escura. (Atenção: Não teremos a alternativa "eu nunca tive exposição solar", se  estiver há muitos anos sem tomar sol; tente lembrar como reagia sua pele na infância).',
      },
    ],
  },
  {
    order: 41,
    sectionOrder: 9,
    section: "pigmentedOrNonPigmented",
    question:
      "O que acontece quando se expõe o sol por vários dias consecutivos?",
    options: [
      { value: 1, text: "Somente fico vermelha." },
      {
        value: 2,
        text: "A minha pele fica discretamente morena.",
      },
      {
        value: 3,
        text: "A minha pele fica muito morena.",
      },
      {
        value: 4,
        text:
          "A minha pele já é morena, por isso é difícil avaliar se fica mais morena.",
      },
      {
        value: 2.5,
        text:
          "Não tenho certeza. (Tente  lembrar-se de sua infância! Só responda “e” se não for possível outra resposta).",
      },
    ],
  },
  {
    order: 42,
    sectionOrder: 10,
    section: "pigmentedOrNonPigmented",
    question: "Quando se expõe ao sol aparecem sardas (pequenas 1-2 mm)?",
    options: [
      { value: 1, text: "Não, nunca tenho sardas." },
      {
        value: 2,
        text: "Aparecem poucas sardas por ano.",
      },
      {
        value: 3,
        text: "Aparecem sardas freqüentemente.",
      },
      {
        value: 4,
        text:
          "Minha pele é morena escura, por isso é difícil avaliar se aparecem sardas.",
      },
      {
        value: 2.5,
        text: "Nunca me exponho ao sol (Bom pra você!)",
      },
    ],
  },
  {
    order: 43,
    sectionOrder: 11,
    section: "pigmentedOrNonPigmented",
    question:
      "Algum de seus pais tem sardas? Por favor, assinalar quantas. Se nenhum ou apenas um apresentar, responda às questões. Se os dois apresentarem, considere o que apresenta mais sardas para responder.",
    options: [
      { value: 1, text: "Não" },
      {
        value: 2,
        text: "Um pouco no rosto.",
      },
      {
        value: 3,
        text: "Muitas no rosto.",
      },
      {
        value: 4,
        text: "Muitas no rosto, colo, pescoço e braços.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 44,
    sectionOrder: 12,
    section: "pigmentedOrNonPigmented",
    question:
      "Qual a cor natural de seu cabelo? (Atenção: se já estiver “branco”, considerar a cor anterior).",
    options: [
      { value: 1, text: "Loiro." },
      {
        value: 2,
        text: "Castanho",
      },
      {
        value: 3,
        text: "Preto.",
      },
      {
        value: 4,
        text: "Ruivo.",
      },
    ],
  },
  {
    order: 45,
    sectionOrder: 13,
    section: "pigmentedOrNonPigmented",
    question:
      "Já teve melanoma (tipo de câncer de pele maligno) ou alguém em sua família já teve (parente “de sangue”)?",
    options: [
      { value: 1, text: "Não." },
      {
        value: 2,
        text: "Uma pessoa na minha família.",
      },
      {
        value: 3,
        text: "Mais de uma pessoa na minha família.",
      },
      {
        value: 4,
        text: "Sim.",
      },
      {
        value: 2.5,
        text: "Não tenho certeza.",
      },
    ],
  },
  {
    order: 46,
    sectionOrder: 14,
    section: "pigmentedOrNonPigmented",
    question: "Você tem manchas escuras na pele, em áreas de exposição ao sol?",
    end: true,
    options: [
      {
        value: 5,
        text: "Sim.",
      },
      { value: 0, text: "Não." },
    ],
  },
];

export default questionnaireCards;
