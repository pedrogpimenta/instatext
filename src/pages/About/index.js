import React, { Component } from 'react';
import styles from './index.module.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class About extends Component {
  render() {
    return (
      <>
        <Grid
          container
          direction='column'
          spacing={16} 
        >
          <Grid item>
            <Card> 
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  What
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  Instagram may transform your line breaks or paragraphs to simple spaces.
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  <strong>InstaText</strong> is a tool that helps you format your Instagram comments without losing the line breaks you want. 
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  We used <a href='http://www.apps4lifehost.com/Instagram/CaptionMaker.html'>Albert's tool</a> before, which does a great job, so thank him for the inspiration! 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card> 
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Why
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  There weren't many options available if you wanted a simple tool to fix Instagram's broken line breaks.
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  I'm also learning JavaScript and React and this is the first webapp I'm creating. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card> 
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Privacy 
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  This app works on the browser only, there's no server or backend into which your data could be going. The 'saved' items are stored on your browser only, I don't receive any data.
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  The only tool that may track you is Google Analytics and that's only for me to know if people are using InstaText.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card> 
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Cookies 
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  There are only Google Analytics cookies. These cookies are named <code>_ga</code>, <code>_gat</code> and <code>_gid</code>.
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  I use <code>localStorage</code> to save your content but only on your browser and I don't see it in any way. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card> 
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Open Source Code 
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  The code for InstaText is available on Github: <a href='https://github.com/pedrogpimenta/instatext'>https://github.com/pedrogpimenta/instatext</a>.
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  Feel free to dig around, to improve the code or to talk to me about it! 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  About me 
                </Typography>
                <Typography component='p' className={styles.paragraph}>
                  I'm <a href='http://pimenta.co'>Pedro Pimenta</a>, I'm a frontend developer learning React. Get in touch on <a href='https://twitter.com/pedrogpimenta'>Twitter</a> or by <a href='mailto:pedro@pimenta.co'>email</a>!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default About;
