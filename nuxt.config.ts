// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "~": "./",  //Setting alias for root
  },

  analyzeDir: "./.nuxt/analyze", //Set alias for nuxt analyse

  app: { //Defaults --see $dev, $prod etc below
    head: {
      title: "Slingshot CMS",
      titleTemplate: '%s | @Newtrick',
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        
      ],
      "link": [],
      "style": [],
      "script": [],
      "noscript": [],
    }
  },

  $development: { // This will be merged with the default above
    debug: true, //Debug mode
    app: {
      head: {
        title: "DEV",
      }
    }
  }, 

  $production: {
    app: {
      head: {
        title: "PROD"

      }
    }
  },

  runtimeConfig: {
    public: {
      //https://www.youtube.com/watch?v=_FYV5WfiWvs
      //the below is only run at build time, not
      // run time so cant be changed
      //myValue: process.env.OTHER_ENV_VAR
    }
  }

})
