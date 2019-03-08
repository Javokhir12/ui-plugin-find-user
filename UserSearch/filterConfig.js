import React from 'react';
import { FormattedMessage } from 'react-intl';

const filterConfig = [
  {
    label: <FormattedMessage id="ui-users.status" />,
    name: 'active',
    cql: 'active',
    values: [
      { name: 'Include inactive users', cql: 'false' },
      { name: 'Show active users', cql: 'true', hidden: true },
    ],
  },
  {
    label: <FormattedMessage id="ui-users.information.patronGroup" />,
    name: 'pg',
    cql: 'patronGroup',
    values: [], // will be filled in by componentWillUpdate
  },
];

export default filterConfig;
