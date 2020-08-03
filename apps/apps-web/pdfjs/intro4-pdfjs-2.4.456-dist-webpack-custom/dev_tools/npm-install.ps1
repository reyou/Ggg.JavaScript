param($cleanFolder = $false)
Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path
Set-Location $currentFolder.Directory.Parent.FullName

if ($cleanFolder) {
    Invoke-Expression "npm ci"
}

Invoke-Expression "npm install webpack-cli --save-dev"
Invoke-Expression "npm install webpack --save-dev"
Invoke-Expression "npm install webpack-dev-server --save-dev"
Invoke-Expression "npm install copy-webpack-plugin --save-dev"
Invoke-Expression "npm install typescript --save-dev"
Invoke-Expression "npm install ts-loader --save-dev"
Invoke-Expression "code package.json"

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName
