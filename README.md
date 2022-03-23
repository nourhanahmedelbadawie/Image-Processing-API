Scripts
Install: npm install
Build: npm run build
Lint: npm run lint
Prettify: npm run prettify
Run unit tests: npm run test
Start server: npm run start
Usage
The server will listen on port 3000:

Brief instructions
http://localhost:3000/

Endpoint to resize images
http://localhost:3000/images

Expected query arguments are:

names: Available names are [1,2]
width
height



Notes
Images are served from /images .Further resized imagesserved from /images/resizedImages , 
