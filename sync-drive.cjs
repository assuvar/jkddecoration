const fs = require('fs');
const https = require('https');
const path = require('path');

const subfolders = [
  { name: "Baby Shower", id: "1-UsCotN74FGj9lzu7EMuQZLGx9y3gt12", category: "Baby Shower" },
  { name: "Birthday", id: "1AcJlNueCf6U5lVl7HkyccaHH4dBvwpG8", category: "Birthdays" },
  { name: "Decor", id: "1gdx-xFWw7Y4Gxo_GOYr_ihIV4UidokUT", category: "Decor" },
  { name: "Engagement Decor", id: "1eC01Sn9yTFDGfvcW5aeB82uJO6iaKoPf", category: "Engagement" },
  { name: "Entrance", id: "12DvgffRJhnU4-1x3cANBTp1oM3sAKHkP", category: "Entrance" },
  { name: "Haldi decors", id: "1vVhkq_5ILoQzYA6_w8o-asdOJGhU17tK", category: "Haldi" },
  { name: "Mugurtham", id: "1LI0fjVzRoBlDK7YnfX8l5uGnaussjqLK", category: "Mugurtham" },
  { name: "Naming ceremony", id: "1AUPcGdBM8wYXOfGXwBBI9ZCt9THVqxfZ", category: "Naming Ceremony" },
  { name: "Palahkuu", id: "1wTgOQbPUhx9_loRwyLGBu4s2olXa8YGO", category: "Palahkuu" },
  { name: "Puberty Decor", id: "19rmgJR60xxQkzQR8zDitP414ah8PctFf", category: "Puberty" },
  { name: "Reception Decor", id: "1bO8DZ1QSc0hYDAW4GQFM863a4rEX9dMS", category: "Reception" },
  { name: "Suprice Decor", id: "1_1BdHKKqqoj473_CysXAgEioljV9UFi3", category: "Surprise Parties" }
];

function fetchFolderPage(folderId) {
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let html = '';
      res.on('data', (chunk) => { html += chunk; });
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function parseImages(html) {
  const ivdMatch = html.match(/window\['_DRIVE_ivd'\]\s*=\s*'([\s\S]*?)'/);
  if (!ivdMatch) return [];

  const rawStr = ivdMatch[1];
  const decoded = rawStr.replace(/\\x([0-9a-fA-F]{2})/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  const fileRegex = /"([^"]+?)",\["[^"]+?"\],"([^"]+?\.(?:jpg|jpeg|png|webp|gif))"/gi;
  const files = [];
  let fileMatch;
  const seenIds = new Set();
  
  while ((fileMatch = fileRegex.exec(decoded)) !== null) {
    const id = fileMatch[1];
    const name = fileMatch[2];
    if (!seenIds.has(id)) {
      seenIds.add(id);
      files.push({ id, name });
    }
  }
  return files;
}

async function run() {
  console.log('Starting Google Drive synchronization...');
  const allItems = [];
  let globalId = 1;

  for (const folder of subfolders) {
    console.log(`Fetching subfolder: "${folder.name}" (${folder.id})...`);
    try {
      const html = await fetchFolderPage(folder.id);
      const images = parseImages(html);
      console.log(`  Found ${images.length} images.`);
      
      for (const img of images) {
        allItems.push({
          id: globalId++,
          title: `${folder.name} Decoration`,
          category: folder.category,
          image: `https://lh3.googleusercontent.com/d/${img.id}`,
          description: `Stunning ${folder.name.toLowerCase()} luxury setup by JK Orchid Events & Decoration.`
        });
      }
    } catch (err) {
      console.error(`  Error processing folder ${folder.name}:`, err.message);
    }
    // Sleep briefly to avoid hitting rate limits
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`Synchronization complete! Total items collected: ${allItems.length}`);

  const outputContent = `export const galleryData = ${JSON.stringify(allItems, null, 2)};\n`;
  const outputPath = path.join(__dirname, 'src', 'data', 'gallery.js');
  
  fs.writeFileSync(outputPath, outputContent);
  console.log(`Saved generated data to ${outputPath}`);
}

run();
