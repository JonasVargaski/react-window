export default function getExample() {
  const randomID = () =>
    Math.floor(Math.random() * 44154 * Math.random() * 44154);
  return {
    session: String(randomID()),
    key: 'prf547',
    name: 'Tela Teste',
    props: {
      title: `${randomID()}`,
      w: 500,
      h: 400,
      position: 'CENTER',
      type: 'WINDOW',
      allowMinimize: true,
      allowClose: true,
    },
    components: [
      {
        id: randomID(),
        type: 'FRAME',
        styles: {
          w: 450,
          h: 100,
          x: 5,
          y: 1,
          z: 2,
        },
        css: [1525, 748],
      },
      {
        id: randomID(),
        type: 'FRAME',
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
        type: 'TEXTINPUT',
        props: {
          disabled: true,
        },
        styles: {
          w: 90,
          h: 25,
          x: 60,
          y: 250,
          z: 2,
          fz: 12,
        },
        css: [],
      },
    ],
    css: {
      '1525': `background:#ccc;`,
      '5145': `background: blue;`,
      '748': 'border-color: #222;',
    },
  };
}
