# Notes App

🌟 Hi there! If you find the Notes App repository helpful or interesting, please consider giving it a star! ⭐ Your support means a lot and helps others discover the project. 

## How to build or Deploy Notes App

**Quick start:**

**1. Fork the Repository:**

Go to the GitHub repository page and click on the "Fork" button in the top right corner. This will create a copy of the repository in your GitHub account.

**2. Clone the Repository:**

Open a terminal on your local machine and use the following command to clone the repository to your local system:

 ```bash
  git clone https://github.com/Your-Username/notes-app.git
 ```
 Replace `Your-Username` with your GitHub username.

**3. Navigate to the Project Directory:**
  
  Change your current directory to the project folder:

  ```bash
   cd notes-app
  ```

**4. Install Dependencies:**
 
 Install the required dependencies for the project. This usually involves running a package manager command. For example, if the project uses npm:

  ```bash
   npm install
   ```

**5. Write code for `firebase.js`**

  ```js
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection } from "firebase/firestore"  
  const firebaseConfig = {
    apiKey: "AIzaSyD_uXh8KfNe11S8qhfQuB_RAzIHrKFTOHE",
    authDomain: "react-notes-7a013.firebaseapp.com",
    projectId: "react-notes-7a013",
    storageBucket: "react-notes-7a013.appspot.com",
    messagingSenderId: "370854322953",
    appId: "1:370854322953:web:3e20fb09a3b7f61fc329d8"
  };  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const notesCollection = collection(db, "notes")
  ```

***Warning:*** replace to your own firebase project


**6. Run the Application Locally:**
 
  Start the application on your local machine to test it:

   ```bash
    npm start
   ```
    
  This command may vary based on the project's setup.


***Warning:*** Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)


Head over to https://vitejs.dev/ to learn more about using vite



### Deploying Vite / React App to GitHub Pages

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
