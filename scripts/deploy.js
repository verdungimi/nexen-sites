#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Színek a konzolhoz
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, description) {
  try {
    log(`\n${description}...`, 'blue');
    execSync(command, { stdio: 'inherit' });
    log(`✓ ${description} sikeres`, 'green');
    return true;
  } catch (error) {
    log(`✗ ${description} sikertelen`, 'red');
    return false;
  }
}

function checkGitRepo() {
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function getUncommittedChanges() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    return status.trim().length > 0;
  } catch (error) {
    return false;
  }
}

async function getCommitMessage() {
  return new Promise((resolve) => {
    rl.question('\nÍrd be a commit üzenetet: ', (message) => {
      resolve(message.trim());
    });
  });
}

async function main() {
  log('\n=== Nexen Sites - Automatikus Deployment Helper ===\n', 'blue');

  // Ellenőrzés: Git repo létezik-e
  if (!checkGitRepo()) {
    log('✗ Ez nem egy Git repository!', 'red');
    log('Futtasd: git init', 'yellow');
    process.exit(1);
  }

  // Ellenőrzés: Vannak-e változtatások
  if (!getUncommittedChanges()) {
    log('ℹ Nincsenek változtatások a commitolásra.', 'yellow');
    rl.close();
    process.exit(0);
  }

  // Változtatások megjelenítése
  log('\nVáltoztatások:', 'blue');
  execSync('git status -s', { stdio: 'inherit' });

  // Commit üzenet bekérése
  const commitMessage = await getCommitMessage();

  if (!commitMessage) {
    log('\n✗ Commit üzenet kötelező!', 'red');
    rl.close();
    process.exit(1);
  }

  // Git add
  if (!execCommand('git add .', 'Változtatások hozzáadása')) {
    rl.close();
    process.exit(1);
  }

  // Git commit
  if (!execCommand(`git commit -m "${commitMessage}"`, 'Commit létrehozása')) {
    rl.close();
    process.exit(1);
  }

  // Git push
  log('\nPush-olás a remote repository-ba...', 'blue');
  try {
    execSync('git push', { stdio: 'inherit' });
    log('\n✓ Push sikeres!', 'green');
    log('\n🚀 A GitHub Actions automatikusan deployolni fogja a weboldalt!', 'green');
    log('Ellenőrizd a deployment státuszát: GitHub repository → Actions', 'yellow');
  } catch (error) {
    log('\n⚠ Push sikertelen. Próbáld manuálisan: git push', 'yellow');
    log('Győződj meg róla, hogy be van állítva a remote repository.', 'yellow');
  }

  rl.close();
}

main();

