param($commitMessage = 'updates made to intro4-pdfjs-2.4.456-dist-webpack-custom')
Clear-Host
[System.IO.FileInfo]$currentFolder = $MyInvocation.MyCommand.Path

# app folder
Set-Location $currentFolder.Directory.Parent.FullName

# set location back to dev_tools
Set-Location $currentFolder.Directory.FullName

$commitMessage = """" + $commitMessage + """"
Invoke-Expression "git add ."
Invoke-Expression "git commit -a -m $commitMessage"
Invoke-Expression "git push"
 
