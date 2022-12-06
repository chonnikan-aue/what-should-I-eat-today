# what should I eat today?

> ### This web will help peaple to decide what to eat

**Try out here:** https://chonnikan-aue-what-should-i-eat-today.netlify.app/

## Technologies used

- **For designing wire frames:** [wireframe.cc](https://wireframe.cc/)

- **For web development:** React, [React Bootstrap v2.6.0 (Bootstrap 5.2)](https://react-bootstrap.github.io/getting-started/introduction)

- **For API:**

1. **To random and get meal information:** [TheMealDB](https://www.themealdb.com/api.php)

2. **To get country code by nationality name:** [G Adventures API](https://developers.gadventures.com/docs/searching.html#searching)

3. **To get flag from country code:** [REST Countries](https://restcountries.com/#api-endpoints-v3-code)

- **For connect API:** Axios

- **For deployment:** Netlify

## Installation instructions

I recommend lastest version of Chrome browser in desktop, but I designed the responsive web for mobile devices as well.

## Planning

> ### User Stories

- As a user, I don't know what to eat today, so I random a food from api.

- As a user, I think maybe I don't want to eat the first random food, so I will choose from 8 random foods and the last food will be chosen

- As a user, I think it would be nice if the web show me the recipe, so I can cook myself

- As a user, maybe I have the category of food that I want to eat but I don't know what exactly menu, so I will make it random from the category

> ### MVP Goals

1. Can random food from API

2. Can choose food until get the last one

3. Show recipe from the chosen food

4. Show youtube link that go to the recipe video (if it have)

> ### Stretch Goals

**First Priority**

- Show embeded recipe video instead of youtube link (if it have)

**Second Priority**

- Random food for specific category ([14 categories](https://www.themealdb.com/api/json/v1/1/categories.php))

- Random food from specific country ([26 countries, not including `unknown`](https://www.themealdb.com/api/json/v1/1/list.php?a=list)

**Third Priority**

- Can save the favorite recipe, using LocalStorage

## Design Process

> ### Wire Frames

**1. First page:**

**2. Categories page:** when user click `I want to eat...` button from the first page

**3. Random food page:** when user click `Random me anything!` button from the first page or click a category/country from the categories page

**4. Recipe page:** when user click `See Recipe` button after a food is left the last one

## Screenshots

**1. First page:**

**2. Categories page:** when user click `I want to eat...` button from the first page

**3. Random food page:** when user click `Random me anything!` button from the first page or click a category/country from the categories page

**4. Recipe page:** when user click `See Recipe` button after a food is left the last one

**5. Favorites Page:** when user click `My favorites ❤` button from the first page

> ### Want to know more? [Finds out here!](https://chonnikan-aue-what-should-i-eat-today.netlify.app/)

## Room for Improvement

- Store favorite food in Database

- Show nearby restuarants that have this chosen food or have this food category