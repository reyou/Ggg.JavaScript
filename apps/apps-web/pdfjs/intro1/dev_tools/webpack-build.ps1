Clear-Host
[System.IO.FileInfo]$executionPath = Get-Item $MyInvocation.MyCommand.Path
Set-Location $executionPath.Directory.Parent.FullName

Invoke-Expression "npm run build"

Set-Location $executionPath.Directory.FullName