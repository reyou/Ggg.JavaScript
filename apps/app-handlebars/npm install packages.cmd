@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
echo "GggMessage: npm install handlebars --save" 
echo.
call npm install handlebars --save
echo.
::============================================================================= 
echo "GggMessage: npm install handlebars -g" 
echo.
call npm install handlebars -g
echo.
::============================================================================= 
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul
::============================================================================= 