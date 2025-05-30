@echo off
set /p TOKEN=Insert your GitHub token (ghp_...): 

echo.
echo Setting temporary GitHub remote with token...
git remote set-url origin https://%TOKEN%@github.com/skalevskyi/Montpellier-Guide.git

echo Pushing to GitHub...
git push -u origin main

echo Cleaning token from remote URL...
git remote set-url origin https://github.com/skalevskyi/Montpellier-Guide.git

echo Done. Repository pushed successfully.
pause
