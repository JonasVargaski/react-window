export default function joinCss(list, ids = []) {
  const css = [];
  ids.forEach((id) => {
    if (list[id]) {
      css.push(list[id]);
    }
  });
  return css.join(' ');
}
