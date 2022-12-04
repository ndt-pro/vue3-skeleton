# Vue3-Skeleton

> Loader showing skeleton view while data is being loaded to improve UX.

![Sample loader](https://res.cloudinary.com/ibnabubakre/image/upload/v1594505356/loader.gif)

---

## :cd: Installation

-   npm: `npm i @ndtpro/vue3-skeleton`
-   yarn: `yarn add @ndtpro/vue3-skeleton`

## Usage

You can import and register the component globally in your main.js, or import and use it in a particular component.

**Vue2: To register in your `main.js`**

```javascript
import Vue from 'vue';
// Import the component
import Vue3Skeleton from '@ndtpro/vue3-skeleton';

// Register the component globally
Vue.component('vue3-skeleton', Vue3Skeleton);
```

**Vue3: To register in your `main.js`**

```javascript
import { createApp } from 'vue';

// Import the component
import Vue3Skeleton from '@ndtpro/vue3-skeleton';

const app = createApp({});

// Register the component globally
app.component('vue3-skeleton', Vue3Skeleton);
```

**To register in your component**

```vue
<script>
	import Vue3Skeleton from '@ndtpro/vue3-skeleton';
	export default {
		components: { Vue3Skeleton },
	};
</script>
```

**Using loader in your `.vue` file**

```vue
<template>
	<Vue3Skeleton type="square" :width="300" :height="100" animation="wave" />
</template>
```

## API

### Props

| Prop       | Type           | Default                  | Options                             | Description                                                                                                                         |
| ---------- | -------------- | ------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| width      | number, string | 200                      |                                     | The is the width of the loader, and can be either a number or string. This property would be overridden if the `size` props is set  |
| height     | number, string | 100                      |                                     | The is the height of the loader, and can be either a number or string. This property would be overridden if the `size` props is set |
| size       | number,string  |                          |                                     | This is used to give the loader the same width and height. The property would override the width and height previously set          |
| type       | string         | 'rect'                   | rect, circle                        | This is the type of the loader. It could be circle or rectangle shaped                                                              |
| animation  | string         | 'wave'                   | fade, wave, pulse, pulse-x, pulse-y | The animation to be applied to the loader                                                                                           |
| color      | string         | rgba(0,0,0,0.08)         |                                     | The sets the color of the loader. It accepts all valid CSS colors (rgb, hsl, hex included)                                          |
| wave-color | string         | rgba(255, 255, 255, 0.5) |                                     | The sets the color of the wave. It accepts all valid CSS colors (rgb, hsl, hex included)                                            |
| rounded    | boolean        | false                    |                                     | Add this prop to give a non-circle loader a border-radius 0f 8px                                                                    |
| radius     | number,string  | 8                        |                                     | This is used to determine the border radius of the loader                                                                           |

## Project setup

### Install dependencies

-   npm: `npm install`
-   yarn: `yarn`

### Start Dev Server

-   npm: `npm run serve`
-   yarn: `yarn serve`

### Compiles and minifies for production

-   npm: `npm run build`
-   yarn: `yarn build`
