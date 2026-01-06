/**
 * Watch script that monitors the Next.js dev server
 * and automatically restarts it if it crashes
 */

const { spawn } = require('child_process');
const http = require('http');

let serverProcess = null;
let restartAttempts = 0;
const MAX_RESTART_ATTEMPTS = 5;
const CHECK_INTERVAL = 5000; // Check every 5 seconds
const PORT = 3000;

function startServer() {
  console.log('🚀 Starting Next.js development server...');
  
  serverProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true,
    cwd: process.cwd()
  });

  serverProcess.on('exit', (code) => {
    console.log(`\n⚠️  Server exited with code ${code}`);
    
    if (restartAttempts < MAX_RESTART_ATTEMPTS) {
      restartAttempts++;
      console.log(`🔄 Restarting server (attempt ${restartAttempts}/${MAX_RESTART_ATTEMPTS})...`);
      setTimeout(() => {
        startServer();
      }, 2000);
    } else {
      console.error('❌ Max restart attempts reached. Please check for errors.');
      process.exit(1);
    }
  });

  serverProcess.on('error', (error) => {
    console.error('❌ Error starting server:', error);
  });
}

function checkServerHealth() {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}`, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 404); // 404 is ok for Next.js
    });

    req.on('error', () => {
      resolve(false);
    });

    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function monitorServer() {
  setInterval(async () => {
    if (serverProcess && !serverProcess.killed) {
      const isHealthy = await checkServerHealth();
      
      if (!isHealthy) {
        console.log('⚠️  Server is not responding, restarting...');
        if (serverProcess) {
          serverProcess.kill();
        }
        restartAttempts = 0; // Reset counter for manual restart
        setTimeout(() => {
          startServer();
        }, 2000);
      }
    }
  }, CHECK_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  if (serverProcess) {
    serverProcess.kill();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down...');
  if (serverProcess) {
    serverProcess.kill();
  }
  process.exit(0);
});

// Start the server and monitoring
console.log('📡 Starting server monitor...');
startServer();
monitorServer();

