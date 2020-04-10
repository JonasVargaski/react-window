import convertStyles from '~/utils/convertStyle';
import joinCss from '~/utils/joinCss';

import Window from './Window';
import Frame from './Frame';
import TextInput from './TextInput';

const uiComponents = {
  WINDOW: Window,
  FRAME: Frame,
  TEXTINPUT: TextInput,
};

export default function mountComponents({ components, css }) {
  return components.map((data) => ({
    key: data.id,
    props: data.props,
    styles: convertStyles(data.styles),
    css: joinCss(css, data.css),
    Component: uiComponents[data.type],
  }));
}
