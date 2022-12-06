# what should I eat today?

> ### This web will help people decide what to eat

**Try out here:** https://chonnikan-aue-what-should-i-eat-today.netlify.app/

## Technologies used

- **For designing wire frames:** [wireframe.cc](https://wireframe.cc/)

- **For web development:** 

  1. React

  2. [React Bootstrap v2.6.0 (Bootstrap 5.2)](https://react-bootstrap.github.io/getting-started/introduction)

  3. [React Icons](https://react-icons.github.io/react-icons/)

- **For API:**

  1. **To random and get food information:** [TheMealDB](https://www.themealdb.com/api.php)

  2. **To get country code by nationality name:** [G Adventures API](https://developers.gadventures.com/docs/searching.html#searching)

  3. **To get flag from country code:** [REST Countries](https://restcountries.com/#api-endpoints-v3-code)

- **For connect API:** Axios

- **For deployment:** Netlify

## Installation instructions

This web works well in lastest version of Chrome browser in desktop and mobile devices.

## Planning

> ### User Stories

- As a user, I don't know what to eat today, so I random a food from api.

- As a user, I think maybe I don't want to eat the first random food, so I will choose from 8 random foods and the last food will be chosen

- As a user, I think it would be nice if the web show me the recipe, so I can cook myself

- As a user, maybe I have the category of food that I want to eat but I don't know what exactly food, so I will make it random from the category

> ### MVP Goals

1. Can random food from API

2. Can choose food until get the last one

3. Show recipe from the chosen food

4. Show youtube link that go to the recipe video (if it have)

> ### Stretch Goals

**First Priority**

- Show embeded recipe video instead of youtube link (if it have)

**Second Priority**

- Random food for specific category [(14 categories)](https://www.themealdb.com/api/json/v1/1/categories.php)

- Random food from specific country [(26 countries, not including `unknown`)](https://www.themealdb.com/api/json/v1/1/list.php?a=list)

**Third Priority**

- Can save the favorite recipe, using LocalStorage

## Design Process

> ### Wire Frames

**1. First page:**

![index](https://user-images.githubusercontent.com/116629287/205813200-23467cd9-2934-4253-92f3-4d28d8cd10c6.JPG)

**2. Categories page:** when user click `I want to eat...` button from the first page

![category](https://user-images.githubusercontent.com/116629287/205813295-4e181f78-c71c-49e4-974b-752171f0849f.JPG)

**3. Random food page:** 

- when user click `Random me anything!` button from the first page or click a category/country from the categories page

![pick-random-menu](https://user-images.githubusercontent.com/116629287/205813471-2400b4a1-c0a9-4f4a-9bf8-e09efc960043.JPG)

- when user click a random food picture until get the last one

![chosen-menu](https://user-images.githubusercontent.com/116629287/205814045-d9912762-c925-495d-bcc1-d6e57f85b715.JPG)

**4. Recipe page:** when user click `See Recipe` button after a food is left the last one

![recipe](https://user-images.githubusercontent.com/116629287/205814165-bbef29ea-203a-4f7a-842c-8fea00005304.JPG)

## Screenshots

**1. First page:**

![image](https://user-images.githubusercontent.com/116629287/205839505-8d57c3c5-00ce-4321-ae4c-de1f9ad4e538.png)

**2. Categories page:** when user click `I want to eat...` button from the first page

![image](https://user-images.githubusercontent.com/116629287/205838476-46f88cc1-239b-4aa5-bea7-466ca3a08a02.png)

**3. Random food page:** 

- when user click `Random me anything!` button from the first page or click a category/country from the categories page

![image](https://user-images.githubusercontent.com/116629287/205838622-c5caf309-fa21-41b9-8126-dbf6ea6dd43b.png)

- when user click a random food picture until get the last one

![image](https://user-images.githubusercontent.com/116629287/205838753-f0fbf680-2944-4b1e-a635-d0cdf44a071a.png)

**4. Recipe page:** when user click `See Recipe` button after a food is left the last one

![image](https://user-images.githubusercontent.com/116629287/205839719-5a5becd0-a601-4713-93eb-c87a2a5b1bde.png)

**5. Favorites Page:** when user click `My favorites ❤` button from the first page

![image](https://user-images.githubusercontent.com/116629287/205839927-942486a9-93ac-4c82-8808-8e38b6ff282a.png)

> ### You want to try? [Here you go!](https://chonnikan-aue-what-should-i-eat-today.netlify.app/)

## Room for Improvement

- Store favorite foods in Database

- Show nearby restuarants that have this chosen food or have this food category
