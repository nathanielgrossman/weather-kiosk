# Netatmo Weather Kiosk

![Screencap](/screen.png)

## Description
I was giving a Netatmo Weather Station as a gift to someone who specifically wanted a wall mounted display to see the current readouts. This is a simple React Native application that ties into the Netatmo API.

The current configuration supports:
- 1x Main Module
- 1x Outdoor
- 1x Rain
- 1x Wind

## Setup
create a .env file with the following variables
```
NETATMO_ID= Api Client ID
NETATMO_SECRET= Api Client secret
NETATMO_USERNAME= Account email
NETATMO_PASSWORD= Account password
MAC_ADDRESS= Main module mac address
```

## Contributions
Thanks to [@abbeycampbell]( https://github.com/abbeycampbell ) for creating the following graphics shown in the humidty module: Fox, Hummer, and Quail