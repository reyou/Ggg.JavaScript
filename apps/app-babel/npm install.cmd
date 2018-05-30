@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
echo "GggMessage: rmdir node_modules" 
echo.
rmdir node_modules
echo.
::============================================================================= 
echo "GggMessage: npm install" 
echo.
call npm install
echo.
::============================================================================= 
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul