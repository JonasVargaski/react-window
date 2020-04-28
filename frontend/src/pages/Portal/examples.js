import randomValue from '~/utils/randomValue';

export default function getExample(w, h) {
  const width = randomValue(500, 1200, 250);
  const height = randomValue(500, 900, 100);

  const randomID = () =>
    Math.floor(Math.random() * 44154 * Math.random() * 44154);

  return {
    session: String(randomID()),
    key: `prf547${randomID()}`,
    name: 'Tela Teste',
    props: {
      title: `Window - ${randomID()}`,
      w: w ?? width(),
      h: h ?? height(),
      position: 'CENTER',
      type: 'WINDOW',
      allowMinimize: true,
      allowClose: true,
    },
    components: [
      {
        id: randomID(),
        type: 'FRAME',
        elementId: `${randomID()}`,
        styles: {
          w: 440,
          h: 80,
          x: 4,
          y: 4,
          z: 1,
        },
        css: [1],
      },
      {
        id: randomID(),
        type: 'FRAME',
        elementId: `${randomID()}`,
        styles: {
          w: 440,
          h: 124,
          x: 4,
          y: 88,
          z: 1,
        },
        css: [1],
      },
      {
        id: randomID(),
        elementId: `${randomID()}`,
        type: 'TEXTINPUT',
        props: {
          maxLength: 30,
        },
        styles: {
          w: 120,
          h: 20,
          x: 76,
          y: 8,
        },
        css: [],
      },
      {
        id: randomID(),
        elementId: `${randomID()}`,
        type: 'TEXTINPUT',
        props: {
          disabled: false,
          maxLength: 30,
        },
        styles: {
          w: 120,
          h: 20,
          x: 76,
          y: 32,
        },
        css: [],
      },
      {
        id: randomID(),
        elementId: `${randomID()}`,
        type: 'TEXTINPUT',
        props: {
          disabled: false,
          maxLength: 30,
        },
        styles: {
          w: 120,
          h: 20,
          x: 76,
          y: 56,
        },
        css: [],
      },
      {
        id: randomID(),
        elementId: `${randomID()}`,
        type: 'TEXTAREA',
        props: {
          disabled: false,
        },
        styles: {
          w: 430,
          h: 88,
          x: 8,
          y: 115,
          fs: 14,
        },
        css: [1],
      },
      {
        id: randomID(),
        elementId: `${randomID()}`,
        type: 'TEXTAREA',
        props: {
          disabled: false,
        },
        styles: {
          w: 178,
          h: 65,
          x: 260,
          y: 8,
          fs: 14,
        },
        css: [1],
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Detalhes',
        },
        styles: {
          w: 50,
          h: 20,
          x: 207,
          y: 9,
          ta: 'right',
          va: 'middle',
        },
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Nome',
        },
        styles: {
          w: 50,
          h: 20,
          x: 23,
          y: 9,
          ta: 'right',
          va: 'middle',
        },
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Biografia',
        },
        styles: {
          w: 50,
          h: 20,
          x: 15,
          y: 95,
          ta: 'right',
          va: 'middle',
        },
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Sobrenome',
        },
        styles: {
          w: 65,
          h: 20,
          x: 8,
          y: 33,
          ta: 'right',
          va: 'middle',
        },
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Idade',
        },
        styles: {
          w: 65,
          h: 20,
          x: 8,
          y: 57,
          ta: 'right',
          va: 'middle',
        },
      },
    ],
    css: {
      '1': `border-radius: 4px;`,
    },
  };
}
