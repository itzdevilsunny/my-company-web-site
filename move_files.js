import fs from 'fs';
import path from 'path';

const moves = [
  ['src/components/Avatar3D.jsx', 'src/components/ui/Avatar3D.jsx'],
  ['src/components/ThreeBackground.jsx', 'src/components/ui/ThreeBackground.jsx'],
  ['src/components/Icons.jsx', 'src/components/ui/Icons.jsx'],
  ['src/components/Navbar.jsx', 'src/components/layouts/Navbar.jsx'],
  ['src/components/Footer.jsx', 'src/components/layouts/Footer.jsx'],
  ['src/components/Hero.jsx', 'src/components/features/Hero.jsx'],
  ['src/components/Services.jsx', 'src/components/features/Services.jsx'],
  ['src/components/Pricing.jsx', 'src/components/features/Pricing.jsx'],
  ['src/components/Team.jsx', 'src/components/features/Team.jsx'],
  ['src/components/TechStack.jsx', 'src/components/features/TechStack.jsx'],
  ['src/components/WhyUs.jsx', 'src/components/features/WhyUs.jsx'],
  ['src/components/Portfolio.jsx', 'src/components/features/Portfolio.jsx'],
  ['src/components/Contact.jsx', 'src/components/features/Contact.jsx'],
  ['src/components/TrustSection.jsx', 'src/components/features/TrustSection.jsx'],
  ['src/components/MissionVision.jsx', 'src/components/features/MissionVision.jsx'],
  ['src/components/Hero.css', 'src/styles/components/Hero.css'],
  ['src/components/Navbar.css', 'src/styles/components/Navbar.css'],
  ['src/components/WhyUs.css', 'src/styles/components/WhyUs.css'],
  ['src/components/Pricing.css', 'src/styles/components/Pricing.css'],
  ['src/components/Services.css', 'src/styles/components/Services.css'],
  ['src/components/Footer.css', 'src/styles/components/Footer.css']
];

moves.forEach(([oldPath, newPath]) => {
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${oldPath} -> ${newPath}`);
  } else {
    console.log(`Skipped ${oldPath} - Does not exist`);
  }
});
