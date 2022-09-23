@echo off
cls
ng build --configuration production
git add .
git commit -m "Init app"
git push