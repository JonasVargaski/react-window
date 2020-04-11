import randomValue from '~/utils/randomValue';

export default function getExample(w, h) {
  const width = randomValue(500, 1200, 250);
  const height = randomValue(500, 900, 100);

  const randomID = () =>
    Math.floor(Math.random() * 44154 * Math.random() * 44154);

  return {
    session: String(randomID()),
    key: 'prf547',
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
        elementId: '6952449.mkmfassa',
        styles: {
          w: 450,
          h: 100,
          x: 5,
          y: 220,
          z: 1,
        },
        css: [],
      },
      {
        id: randomID(),
        type: 'FRAME',
        elementId: '695529.mkmfassa',
        styles: {
          w: 450,
          h: 100,
          x: 5,
          y: 110,
          z: 2,
        },
        css: [5145, 748],
      },
      {
        id: randomID(),
        elementId: '69564759.mkmfassa',
        type: 'TEXTINPUT',
        props: {
          disabled: false,
          maxLength: 30,
        },
        styles: {
          w: 120,
          h: 20,
          x: 100,
          y: 250,
        },
        css: [],
      },
      {
        id: randomID(),
        elementId: '695859.mkmfassa',
        type: 'TEXTINPUT',
        props: {
          disabled: false,
          maxLength: 30,
        },
        styles: {
          w: 120,
          h: 20,
          x: 100,
          y: 273,
        },
        css: [],
      },
      {
        id: randomID(),
        type: 'LABEL',
        props: {
          disabled: false,
          value: 'Nome',
        },
        styles: {
          w: 88,
          h: 20,
          x: 10,
          y: 250,
          fs: 13,
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
          w: 88,
          h: 20,
          x: 10,
          y: 273,
          fs: 13,
          ta: 'right',
          va: 'middle',
        },
        // css: [5145],
      },
    ],
    css: {
      '1525': `background:#ccc;`,
      '5145': `background: blue;`,
      '748': 'border-color: #222;',
    },
  };
}
