import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '30px' };
    return (
        <footer>
          <Grid className="footer-background">
            <Grid columns={3} center container>
              <Grid.Column style={divStyle}>
                <Image src= "/images/vendors.jpg"/>
              </Grid.Column>
              <Grid.Column style={divStyle}>
                <Image src= "/images/food-time.png"/>
              </Grid.Column>
              <Grid.Column style={divStyle}>
                <Image src="/images/food-searching.jpg"/>
              </Grid.Column>
            </Grid>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
