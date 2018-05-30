@echo off
:: npm install <package_name> without an option, just installs the package but does not update
:: the dependencies as listed in your package.json.
:: npm install <package_name> --save installs the package and updates 
:: the dependencies in your package.json.
:: bat file contents (if you want to stop batch when one of cmds errors)
::cmd1 && ^
::cmd2 && ^
::cmd3 && ^
::bat file contents (if you want to continue batch when one of cmds errors)
::cmd1 & ^
::cmd2 & ^
::cmd3 & ^
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
:: pause 
echo.
::============================================================================= 
:: local
:: --save installs the package and updates 
::
call npm install request --save
echo "GggMessage: request installed." 
echo.
::
call npm install node-fetch --save
echo "GggMessage: node-fetch installed." 
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul