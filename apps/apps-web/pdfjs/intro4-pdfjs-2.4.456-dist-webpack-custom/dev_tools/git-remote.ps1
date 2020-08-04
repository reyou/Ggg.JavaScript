# Blackbaud.DevTools - Google Docs
# https://docs.google.com/document/d/1TI0fA775qJbqFxauCmi6TANONAj-6EObNGwg5bBURvY/edit

Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path

# app folder
Set-Location $currentFolder.Directory.Parent.FullName

Invoke-Expression "git remote -v > git-remote.txt"
Invoke-Expression "code git-remote.txt"

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName