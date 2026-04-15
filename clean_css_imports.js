import fs from 'fs';

const filesToClean = [
  'src/components/features/Hero.jsx',
  'src/components/features/Pricing.jsx',
  'src/components/features/Services.jsx',
  'src/components/features/WhyUs.jsx',
  'src/components/layouts/Navbar.jsx',
  'src/components/layouts/Footer.jsx'
];

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove lines matching `import './*.css';`
    content = content.replace(/import\s+['"]\.\/.*\.css['"];?\n?/g, '');
    fs.writeFileSync(file, content);
    console.log(`Cleaned CSS imports from ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
