#!/bin/sh
apt-get update -y
apt-get install -y nodejs-legacy npm git git-core nano
npm install -g express-generator grunt grunt-cli 6to5
#git clone https://github.com/JediMindtrick/ExpressAngular-Starter.git /projects/ExpressAngular-Starter
