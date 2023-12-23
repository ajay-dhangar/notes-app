# Notes App

***Warning:*** Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

**Quick start:**

```bash
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite


## Deploying Vite / React App to GitHub Pages

1. Install gh-pages package
   
    ```bash
    npm install gh-pages --save-dev
    ```
2. Add deploy script to `package.json`
   
    ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist", 
    ```

3. Add homepage to package.json
   
    ```json
    "homepage": "https://<username>.github.io/<repo-name>/",
    ```

4. Add in `vite.config.js` file
      
    ```js
    export default defineConfig({
      base: '/<repo-name>/',
    })
    ```

5. Deploy
   
    ```bash
    $ npm run deploy
    ```

🎉 You now have a gh-pages branch in your repository and your app is deployed (you can check it under Settings -> Pages )

1. Set GitHub Pages source to gh-pages branch
2. Done!


**(Optional) Add custom domain to GitHub Pages**

1. (Optional) Add CNAME file to public folder
2. (Optional) Add custom domain to package.json
    ```json
    "homepage": "https://<custom-domain>/",
    ```

3.  (Optional) Deploy again
```bash
npm run deploy
```

4.  Done!