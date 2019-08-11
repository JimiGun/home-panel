// @flow
import React from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../../Cards/Base';
import Climate from './Climate';
import Cover from './Cover';
import Fan from './Fan';
import Media from './Media';
import State from './State';
import Toggle from './Toggle';
import Weather from './Weather';

export interface EntityProps extends BaseProps {}

function Entity(props: EntityProps) {
  const domain = props.card.entity && props.card.entity.split('.')[0].trim();
  props.card.domain = domain;
  if (!props.card.entity) props.card.entity = '';

  if (
    domain === 'air_quality' ||
    domain === 'binary_sensor' ||
    domain === 'device_tracker' ||
    domain === 'geo_location' ||
    domain === 'sensor' ||
    domain === 'sun'
  )
    return <State {...props} />;

  if (
    domain === 'input_boolean' ||
    domain === 'light' ||
    domain === 'remote' ||
    domain === 'switch'
  )
    return <Toggle {...props} />;
  if (domain === 'climate') return <Climate {...props} />;
  if (domain === 'cover') return <Cover {...props} />;
  if (domain === 'fan') return <Fan {...props} />;
  if (domain === 'media_player') return <Media {...props} />;
  if (domain === 'weather') return <Weather {...props} />;

  return null;
}

Entity.propTypes = {
  card: PropTypes.any.isRequired,
  editing: PropTypes.number,
  hassConfig: PropTypes.any,
  hassEntities: PropTypes.any,
  handleChange: PropTypes.func
};

export default Entity;