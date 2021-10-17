import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/styles';
import '../Main.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

function Carousel({details}) {
  const {patch, flickr} = details.links;
  const moreIndex = flickr.original.length;
  const classes = useStyles();
   const images = [
    {
        imgPath: `${patch.small}`
    },
    {
        imgPath: `${patch.large}`
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length+moreIndex;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  return (
      <>
      {/* Carousel */}
        <div className={classes.carousel}>
            <Grid container className={classes.container}>
            <Grid item md={1} lg={2} className={classes.item}></Grid>
            <Grid item sx={12} md={10} lg={8} className={classes.item}>
            <Box sx={{flexGrow: 1 , minWidth: 360}}>
            <Paper
            square
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
            }}
            >
            </Paper>
            <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
            {images.map((step, index) => (
                <div>
                {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                    component="img"
                    sx={{
                        // height: 255,
                        minWidth: 360,
                        display: 'block',
                        textAlign: 'center',
                        maxWidth: 600,
                        overflow: 'hidden',
                        width: '100%',
                        margin: 'auto'
                    }}
                    src={step.imgPath}
                    />
                ) : null}
                </div>
            ))}

            {/* {flickr.original != NULL &&  */}
            {flickr.original.map((img, moreIndex) => (
                <div>
                {Math.abs(activeStep - moreIndex) <= 2 ? (
                    <Box
                    component="img"
                    sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    src={img}
                    alt="Flickr original"
                    />
                ) : null}
                </div>
            ))}
            {/* } */}
            </AutoPlaySwipeableViews>
            <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                >
                Next
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                Back
                </Button>
            }
        />
            </Box>
            </Grid>
        <Grid item md={1} lg={2} className={classes.item}></Grid>
        </Grid>
        </div>
       {/* Carousel */}
      </>
  )

}

export default Carousel;