/**
 * Script to download klima images from web
 * Run with: node scripts/download-klima-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs - replace these with actual klima product images
const klimaImages = [
  {
    name: 'klima-samsung-ar35.jpg',
    url: 'https://images.unsplash.com/photo-1631549921402-19c2c8e0b0c8?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-midea-one.jpg',
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-midea-xtreme.jpg',
    url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-midea-breezeless.jpg',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-midea-all-easy.jpg',
    url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-gree-comfort.jpg',
    url: 'https://images.unsplash.com/photo-1631549921402-19c2c8e0b0c8?w=800&h=600&fit=crop&q=80'
  },
  {
    name: 'klima-daewoo.jpg',
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop&q=80'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image downloads...\n');
  
  for (const image of klimaImages) {
    const filepath = path.join(imagesDir, image.name);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipped (already exists): ${image.name}`);
      continue;
    }
    
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('\n✓ Download complete!');
}

downloadAllImages();

