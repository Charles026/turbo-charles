import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';

async function runLighthouse() {
  // 启动 Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });

  // 运行 Lighthouse
  const results = await lighthouse('http://localhost:3000', {
    port: chrome.port,
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
  });

  // 保存报告
  const reportHtml = results.report;
  fs.writeFileSync('lighthouse-report.html', reportHtml);

  // 输出分数
  const { categories } = results.lhr;
  console.log('\nLighthouse 评分:');
  console.log('性能 (Performance):', Math.round(categories.performance.score * 100));
  console.log('可访问性 (Accessibility):', Math.round(categories.accessibility.score * 100));
  console.log('最佳实践 (Best Practices):', Math.round(categories['best-practices'].score * 100));
  console.log('SEO:', Math.round(categories.seo.score * 100));

  // 关闭 Chrome
  await chrome.kill();
}

runLighthouse().catch(console.error); 