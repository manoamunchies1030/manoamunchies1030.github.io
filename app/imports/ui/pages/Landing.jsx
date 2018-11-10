import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className= 'manoa-munchies-1030-landing-background'>
          <Grid verticalAlign='middle' textAlign='center' container>

            <Grid.Column width={4}>
              <Image size='huge' src="/images/UHM.png"/>
            </Grid.Column>

            <Grid.Column width={8}>
              <Header as='h1' inverted>Welcome to Manoa Munchies 1030</Header>
              <Header as='h3' inverted>This app can help you to find what is the food available today.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
