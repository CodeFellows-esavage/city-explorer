# City Explorer

**Author**: Erik Savage
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
City-Explorer will allow a user to search for a location (city name) and return local relevent information such as, location name, latitude, longitude, map of the area, weather, and movies.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
- takes a location request via searchbar interface
- passes request to LocationIQ API
- if successful retreives location name, latitude, and longitude
- passes name, latitude and longitude to backend, via two requests
  - backend passes latitude and longitude as a request to WeatherBit API
    - if successful retrieves 16 day forcast data
    - data is cleaned and stored in an array
  - backend passes location name as a request to MovieDB API
    - if successful retrieves array of 20 movie objects with location name in title
    - data is cleaned and stored in an array
  - data arrays are sent back as responses to Frontend
- states are updated with appropriate data arrays
- information is passed into react components and displayed on DOM

Technologies:
- HTML5
- CSS3
- JavaScript
- React
- Bootstrap
- LocationIQ API
- Weatherbit.io API
- TheMovieDB API
- Netlify Hosting

### Lab 08/09:
![Lab08WRRC](public/images/lab08WRRC.png)

### Lab 07:
![Lab08WRRC](public/images/lab07WRRC.png)

### Lab 06:
![Lab08WRRC](public/images/lab06WRRC.png)

## Change Log
- 12-09-2021 - Aplication backend and frontend modularization/componetization
- 12-08-2021 - Application is now hosted on Heroku
- 12-08-2021 - Application now has GET routes established to a movie and weather resource
- 12-07-2021 - Fully functional express server working with test weather data rendering
- 12-06-2021 - Application now has GET routes established to locatino resource and rendering


## Credit and Collaborations
- Andrew Enyeart
- Daniel Jackson
- Lianne Eaton Cook [pb.base.com](https://www.pbase.com/lecook/profile) - cat movie post image