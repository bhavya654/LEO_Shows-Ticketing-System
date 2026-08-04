#!/bin/sh

echo " Running startup scripts..."

npm run seed1
npm run seed2
npm run seed3

echo "Starting the backend..."

npm start

# Start the backend using PM2 in runtime mode for Docker
pm2-runtime ecosystem.config.js 
