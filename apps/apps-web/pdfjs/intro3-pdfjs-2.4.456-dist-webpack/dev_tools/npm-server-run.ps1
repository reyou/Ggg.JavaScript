Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path
Set-Location $currentFolder.Directory.Parent.FullName

# http://localhost:9000/
Invoke-Expression "npm run server"

Set-Location $currentFolder.Directory.FullName