Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path
Set-Location $currentFolder.Directory.Parent.FullName

Invoke-Expression "npm install webpack-cli --save-dev"
Invoke-Expression "npm install webpack --save-dev"
Invoke-Expression "npm install webpack-dev-server --save-dev"
Invoke-Expression "code package.json"

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName
