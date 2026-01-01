# Nexen Sites - Automatikus Deployment Helper Script
# PowerShell verzió

Write-Host ""
Write-Host "=== Nexen Sites - Automatikus Deployment Helper ===" -ForegroundColor Cyan
Write-Host ""

# Ellenőrzés: Git repo létezik-e
try {
    $null = git rev-parse --git-dir 2>$null
} catch {
    Write-Host "✗ Ez nem egy Git repository!" -ForegroundColor Red
    Write-Host "Futtasd: git init" -ForegroundColor Yellow
    exit 1
}

# Ellenőrzés: Vannak-e változtatások
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ Nincsenek változtatások a commitolásra." -ForegroundColor Yellow
    exit 0
}

# Változtatások megjelenítése
Write-Host "Változtatások:" -ForegroundColor Cyan
git status -s

# Commit üzenet bekérése
Write-Host ""
$commitMessage = Read-Host "Írd be a commit üzenetet"

if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    Write-Host ""
    Write-Host "✗ Commit üzenet kötelező!" -ForegroundColor Red
    exit 1
}

# Git add
Write-Host ""
Write-Host "Változtatások hozzáadása..." -ForegroundColor Cyan
try {
    git add .
    Write-Host "✓ Változtatások hozzáadva" -ForegroundColor Green
} catch {
    Write-Host "✗ Hiba a változtatások hozzáadásánál" -ForegroundColor Red
    exit 1
}

# Git commit
Write-Host "Commit létrehozása..." -ForegroundColor Cyan
try {
    git commit -m $commitMessage
    Write-Host "✓ Commit létrehozva" -ForegroundColor Green
} catch {
    Write-Host "✗ Hiba a commit létrehozásánál" -ForegroundColor Red
    exit 1
}

# Git push
Write-Host ""
Write-Host "Push-olás a remote repository-ba..." -ForegroundColor Cyan
try {
    git push
    Write-Host ""
    Write-Host "✓ Push sikeres!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 A GitHub Actions automatikusan deployolni fogja a weboldalt!" -ForegroundColor Green
    Write-Host "Ellenőrizd a deployment státuszát: GitHub repository → Actions" -ForegroundColor Yellow
} catch {
    Write-Host ""
    Write-Host "⚠ Push sikertelen. Próbáld manuálisan: git push" -ForegroundColor Yellow
    Write-Host "Győződj meg róla, hogy be van állítva a remote repository." -ForegroundColor Yellow
}

Write-Host ""

