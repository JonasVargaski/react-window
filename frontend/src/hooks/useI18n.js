import { useIntl } from 'react-intl';

export default () => {
  const intl = useIntl();
  return {
    t: (id, defaultMessage) => intl.formatMessage({ id, defaultMessage }),
  };
};
