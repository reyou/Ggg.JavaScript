Clear-Host
[System.IO.FileInfo]$executionPath = Get-Item $MyInvocation.MyCommand.Path
Set-Location $executionPath.Directory.Parent.FullName

$items = New-Object System.Collections.ArrayList
[void]$items.Add("pdfjs-dist")
[void]$items.Add("@types/pdfjs-dist")
[void]$items.Add("typescript")
[void]$items.Add("webpack")
[void]$items.Add("webpack-cli")
[void]$items.Add("webpack-dev-server")
[void]$items.Add("ts-loader")
[void]$items.Add("copy-webpack-plugin")

foreach ($packageName in $items) {
    Write-Host "Removing $packageName."
    Invoke-Expression "npm remove $packageName"    
}

foreach ($packageName in $items) {
    Write-Host "Installing $packageName."
    Invoke-Expression "npm i $packageName --save-dev"    
}

# set location to dev_tools
Set-Location $executionPath.Directory.FullName