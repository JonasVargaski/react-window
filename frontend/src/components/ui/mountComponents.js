import { memo, useMemo } from 'react';
import convertStyles from '~/utils/convertStyle';
import joinCss from '~/utils/joinCss';

import Window from './Window';
import Frame from './Frame';
import TextInput from './TextInput';
import Label from './Label';

const uiComponents = {
  WINDOW: Window,
  FRAME: Frame,
  TEXTINPUT: TextInput,
  LABEL: Label,
};

export default function mountComponents({ components, css }) {
  return components.map((c) => ({
    id: c.id,
    elementId: c.elementId,
    props: useMemo(() => c.props, [c.props]),
    styles: useMemo(() => convertStyles(c.styles), [c.styles]),
    css: useMemo(() => joinCss(css, c.css), [c.css]),
    Component: memo(uiComponents[c.type]),
  }));
}
