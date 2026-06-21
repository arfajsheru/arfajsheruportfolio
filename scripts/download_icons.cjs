const https = require('https');
const fs = require('fs');
const path = require('path');

// Target directory for the SVGs
const targetDir = path.join(__dirname, '..', 'assets', 'skills');

// Ensure the directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map of file names to their simple-icons slugs
const icons = {
  'react': 'react',
  'nextjs': 'nextdotjs',
  'react-native': 'react',
  'expo': 'expo',
  'typescript': 'typescript',
  'javascript': 'javascript',
  'tailwindcss': 'tailwindcss',
  'shadcnui': 'shadcnui',
  'html5': 'html5',
  'css3': 'css3',
  'nodejs': 'nodedotjs',
  'express': 'express',
  'nestjs': 'nestjs',
  'fastify': 'fastify',
  'postgresql': 'postgresql',
  'mongodb': 'mongodb',
  'prisma': 'prisma',
  'mongoose': 'mongoose',
  'git': 'git',
  'github': 'github',
  'postman': 'postman',
  'swagger': 'swagger',
  'vscode': 'visualstudiocode',
  'chrome': 'googlechrome',
  'pgadmin': 'pgadmin',
  'razorpay': 'razorpay',
  'google': 'google',
  'jwt': 'jsonwebtokens'
};

console.log(`Starting download of ${Object.keys(icons).length} skill icons...`);

Object.entries(icons).forEach(([fileName, slug]) => {
  // Using simple-icons CDN to get clean, monochrome SVGs that will perfectly 
  // adapt to the Black & White theme by inheriting the text color (currentColor)
  const url = `https://cdn.simpleicons.org/${slug}`;
  const filePath = path.join(targetDir, `${fileName}.svg`);

  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${fileName}.svg`);
      });
    } else {
      console.error(`❌ Failed: ${fileName}.svg (Slug: ${slug}) - Status: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`❌ Error downloading ${fileName}: `, err.message);
  });
});
