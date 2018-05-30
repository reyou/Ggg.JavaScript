@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
echo "GggMessage: handlebars groceries.handlebars -f groceries.js" 
echo.
call handlebars groceries.handlebars -f groceries.js
echo.
::============================================================================= 
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul