const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json'
const endpointsFiles = ["./routes/studentRouter.js"]

swaggerAutogen(outputFile, endpointsFiles)