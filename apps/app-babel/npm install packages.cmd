@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
:: https://babeljs.io/docs/setup/#installation
echo "GggMessage: npm install babel-core --save-dev" 
echo.
call npm install babel-core --save-dev 
echo.
::============================================================================= 
echo "GggMessage: npm install babel-preset-env --save-dev" 
echo.
call npm install babel-preset-env --save-dev 
echo.
::============================================================================= 
echo "GggMessage: npm install babel-polyfill --save" 
echo.
call npm install babel-polyfill --save 
echo.
::============================================================================= 
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul