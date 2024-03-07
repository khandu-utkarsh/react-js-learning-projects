# Setting Up the React App without Using Vite

I received assistance from two main resources:

1. [Creating a React App without using create-react-app](https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92)
2. [React App from Scratch](https://github.com/machadop1407/react-app-from-scratch/blob/main/public/index.html)

Of course, this setup could be optimized, but it is functional as of now.

Please note that this is the development version of the configuration. It generates a rather large file for serving, so it is definitely not suitable for production use.

In summary, Webpack generates the main.js file from the index.js file. The main.js file is then included as a script in index.html, where all the rendering occurs.
