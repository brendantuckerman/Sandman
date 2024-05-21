// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
      "link": [{ //Google fonts
                rel: "preconnect", href :"https://fonts.googleapis.com"
               },
               { 
                rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: "anonymous"
               },
               {
                rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
               },
               {
                rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
               },
               

      ],
       
      "style": [],
      "script": [],
      "noscript": [],
    }
  },

  $development: { // This will be merged with the default above
    debug: true, //Debug mode
    devtools: { enabled: true },
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
  },
  //Tailwind
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }

})
