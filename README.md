# Welcome to my portfolio!

Hæ, I’m @Patrikur, a junior-level web developer.
You can find the code for my current projects as well as my portfolio in this repository. Most of the pages are published with GitHub Pages. I included the links to every project within this documentation as well.

## Content
* [Portfolio page](#portfolio-page)
* [Grotenburg-Supporters](#grotenburg-supporters)
* [eNay - The Lazy Onlineshop](#enay---the-lazy-onlineshop)
* [Family Feud Browser Game](#family-feud-browser-game)
* [Patflix - Netflix Replica](#patflix---netflix-replica)

## [Portfolio page](https://patrikur.github.io)
### Table of content
* [Project Info](#project-info)
* [Technologies](#technologies)
* [Features](#features)

### Project Info
Portfolio page showcasing projects I'm currently working on or finished as well as my skill set and a bit of personal info about me.

### Technologies
Project created with:
* HTML5
* CSS3
* Vanilla JavaScript
* [Fontawesome](https://fontawesome.com/) icon library
* [GIPHY](https://giphy.com/) GIF database

### Features
* navigation bar relative to the position on the website
* on scroll animation for content boxes
* mobile version

## [Grotenburg-Supporters](https://grotenburg-supporters.de)
### Table of content
* [Project Info](#project-info)
* [Technologies](#technologies)
* [Features](#features)

### Project Info
Information page about current developments, sponsors, donators and media coverage of the nonprofit organization Grotenburg-Supporters which helps to restore the [Grotenburg Stadium](https://en.wikipedia.org/wiki/Grotenburg-Stadion) of my hometown football club [KFC Uerdingen](https://en.wikipedia.org/wiki/KFC_Uerdingen_05). 

### Technologies
* HTML5
* CSS3
* Vanilla JavaScript
* [Fontawesome library](https://fontawesome.com/)
* self created and maintained JSON databases (blog, media, shop, donators)

### Features
* landing page playing video in the background from the construction site
* blog site with entries as small cards looking like collection cards
* media site with the same design, categorised into regional and national coverage
* sponsors site showing logos of companies supporting the project
* donators site naming people financially supporting the project
* shop site showing products which can be ordered via email
* mobile version with a slider menu from top to bottom of the viewport
* loading animation showing the mascot of the club
* graphics and logo made by Armin Korf, part of the team behind the NPO

## [eNay - The Lazy Onlineshop](https://patrikur.github.io/eNay/index.html)
### Table of content
* [Project Info](#project-info)
* [Technologies](#technologies)
* [Features](#features)

### Project Info
Showcase project of building an online shop with the twist that the shop doesn't want to have customers. Inspiration came from the independent video game [There Is No Game](https://store.steampowered.com/app/1240210/There_Is_No_Game_Wrong_Dimension/). Put in several obstacles while trying to order as well as unattractive pricing and bad reviews.

### Technologies
Project created with:
* HTML5
* CSS3
* Vanilla JavaScript
* [Fontawesome library](https://fontawesome.com/)
* [Fake Store API](https://fakestoreapi.com/)
* [Random User Generator API](https://randomuser.me/)
* [REST Countries API](https://restcountries.eu/)

### Features
* negative testimonials from a self-created array, person data fetched from Random User Generator API
* shipping list of countries from REST Countries API
* search bar which is refusing to give the user results
* product carousel on the landing page which loops through product range from both directions
* products are put into shopping cart via session storage, shopping cart is fetching product ID from it to determine products
* several alert popups which are telling the user that certain features do not work in this shop, messages created in a self-created array
* checkout process is made very complicated with a lot of unnecessary data to put into the forms, animation on form fields shall annoy and create a bad overview, a lot of required fields to check before checkout button works and reveals the final site
* mobile version

## [Family Feud Browser Game](https://patrikur.github.io/Family%20Feud/index.html)
### Table of content
* [Project Info](#project-info)
* [Technologies](#technologies)
* [Features](#features)

### Project Info
Recreation of the score- and gameboard from the German version of the gameshow [Family Feud](https://www.buzzfeed.de/buzz/hier-kannst-du-familien-duell-mit-google-nachspielen-90135526.html). Not working on mobile devices.
### Technologies

### Features
* full-screen browser game
* working with keyboard inputs
* calculating scores and maintaining the team's turns
* playing sounds from the German version of the show (not working yet)
* running on the imported array that can be modified for other quiz topics

## Patflix - Netflix Replica
### Table of content
* [Project Info](#project-info)
* [Technologies](#technologies)
* [Features](#features)

### Project Info
A replica of the Netflix desktop website featuring my favorite films and series. Work in progress, not finished yet.

### Technologies
Project created with:
* React
* React-Hooks
* CSS3
* [Fontawesome library](https://fontawesome.com/)
* [The Internet Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
* JSON database of favorite films and series

### Features
* Menubar changing background on scrolling
* Hovering user settings and notifications dropdown menu
* Notifications dropdown fetching data from API
* Video carousel for different categories, fetching data from API
* Footer with randomlt generated service code when clicked on
