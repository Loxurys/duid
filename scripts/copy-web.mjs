import { cp, mkdir } from 'node:fs/promises';

await mkdir('www', { recursive: true });
for (const file of ['index.html', 'app.js', 'styles.css']) {
  await cp(file, `www/${file}`);
}
