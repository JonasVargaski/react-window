import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export default styled(ReactTooltip).attrs({
  place: 'top',
  delayShow: 800,
  effect: 'solid',
  backgroundColor: '#111',
  offset: { top: -4, left: 0 },
})`
  padding: 3px 5px;
  border-radius: 6px;
`;
