import React from 'react'

import { Box, Button } from '../UI/index';
import { listExtract } from '../../info';
import Items from '../Items';

const Extract = () => {
  return(
    <Box>
      {
        listExtract.updates.map(({id, type, from, value, date}) => {
          return(
              <Items key={id} type={type} from={from} value={value} date={date} />
          );
        })
      }
      <Button>Ver mais</Button>
    </Box>
  );
}

export default Extract;