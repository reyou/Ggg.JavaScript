Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path
Set-Location $currentFolder.Directory.Parent.FullName

Invoke-Expression "npm init -y"

Set-Location $currentFolder.Directory.FullName