import React from 'react'

import { Box, Button } from '../UI/index';
import { listExtract } from '../../info';

console.log(listExtract);

const Extract = () => {
  return(
    <Box>
      {
        listExtract.updates.map(({id, type, from, value, date}) => {
          return(
            <div key={id}>
              <p>{type}</p>
              <p>{from}</p>
              <p>{value}</p>
              <p>{date}</p>
            </div>
          );
        })
      }
      <Button>Ver mais</Button>
    </Box>
  );
}

export default Extract;