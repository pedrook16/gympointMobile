import React from 'react';
import PropTypes from 'prop-types';

import {Container, EmptyText} from './styles';

export default function Empty({children}) {
  return (
    <Container>
      <EmptyText>{children}</EmptyText>
    </Container>
  );
}

Empty.propTypes = {
  children: PropTypes.string.isRequired,
};
