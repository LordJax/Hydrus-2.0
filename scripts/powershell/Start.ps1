Write-Host "[Hydrus]: Checking Hydrus system..."
If (Test-Path ".\bot.js") {
  Write-Host "[Hydrus]: System check successful."
  Write-Host

  Write-Host "[Hydrus]: Booting up..."
  Write-Host "[Hydrus]: Hydrus is starting..."
  Write-Host

  node -r ./utils/globals.js .
}
Else {
  Write-Host "[Hydrus]: System check failed."
  Write-Host
}
Write-Host
