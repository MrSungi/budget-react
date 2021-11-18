import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => (
  <Segment textAlign='center'>
    <Grid columns={2} divided="divided">
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance title='Income' value='1254.12' color='green'/>
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance title='Expenses' value='954.12' color='red'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default DisplayBalances;
