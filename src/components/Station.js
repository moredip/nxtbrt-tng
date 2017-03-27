import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

export default function Station({station}){
  return (
    <Link to={`/s/${station.abbr}`}>
      <li className="station-list__station">
        {station.name}
      </li>
    </Link>
  );
}

Station.propTypes = {
  station: PropTypes.object.isRequired
}

