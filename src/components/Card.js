import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function Cards(props) {
  return (
    <Card border="light" style={{ width: '15rem' }}>
      <Button variant="outline-secondary" href="https://www.youtube.com/" >
        {/* Grid: {props.grid1} <br/> */}
            Chosen Algorithm: {props.algo} <br />
            Total Cost: {props.tc} <br />
            No. of cells visited: {props.cells}

      </Button>



    </Card>
  )
}