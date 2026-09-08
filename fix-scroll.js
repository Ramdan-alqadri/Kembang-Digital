const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove snap-start, snap-end, shrink-0
  content = content.replace(/\bsnap-start\b/g, '');
  content = content.replace(/\bsnap-end\b/g, '');
  content = content.replace(/\bshrink-0\b/g, '');

  // Convert min-h-[100dvh] to min-h-screen
  content = content.replace(/\bmin-h-\[100dvh\]\b/g, 'min-h-screen');
  
  // Clean up extra spaces inside classNames
  content = content.replace(/className="([^"]+)"/g, (match, p1) => {
    return 'className="' + p1.replace(/\s+/g, ' ').trim() + '"';
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
files.forEach(f => processFile(path.join(componentsDir, f)));

// Fix Home.tsx
const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');
homeContent = homeContent.replace(/document\.documentElement\.style\.scrollSnapType\s*=\s*'y mandatory';/g, '');
homeContent = homeContent.replace(/document\.documentElement\.style\.scrollSnapType\s*=\s*'';/g, '');
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Updated Home.tsx');

