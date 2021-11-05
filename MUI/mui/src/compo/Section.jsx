import { Button, Card, CardActionArea , CardActions, Paper , CardMedia,CardContent, Container, Typography, Grid } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'

export default function Section() {
    const my = [1,2,3,4];


   

    return (
        <>
                <main style={{marginTop : 90}}>
                    <Container>
            
                <Typography variant="h4" align="center"  color="textPrimary">Blogging is Fun!</Typography>
                <Typography paragraph align="center" color="textSecondary">With Blogging we can get much information with it..</Typography>

                        <Grid container spacing={5}>
                        {my.map((e)=>(
                           
                            <Grid  item key={e} xs={12} sm={6} md={4}>
                            <Paper elevation={3}  />
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://source.unsplash.com/random"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   This is wonderfull image in this world.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </CardActionArea>
                        </Card>  
                        </Grid>
                        
                        ))}
                          
                           
                     
                                                             
                                   
                        </Grid>
                    </Container>
                </main>
        </>
    )
}
