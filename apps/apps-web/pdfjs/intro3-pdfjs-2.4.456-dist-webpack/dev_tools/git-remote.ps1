Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path
Set-Location $currentFolder.Directory.Parent.FullName

Invoke-Expression "git remote -v > git-remote.txt"
Invoke-Expression "code git-remote.txt"

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName
