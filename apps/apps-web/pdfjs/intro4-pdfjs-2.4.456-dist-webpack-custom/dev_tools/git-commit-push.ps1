# Blackbaud.DevTools - Google Docs
# https://docs.google.com/document/d/1TI0fA775qJbqFxauCmi6TANONAj-6EObNGwg5bBURvY/edit

param($commitMessage = 'blob storage example added')
Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path

# app folder
Set-Location $currentFolder.Directory.Parent.FullName

$commitMessage = """" + $commitMessage + """"
Invoke-Expression "git add ."
Invoke-Expression "git commit -a -m $commitMessage"
Invoke-Expression "git push"
Invoke-Expression "git status"

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName
