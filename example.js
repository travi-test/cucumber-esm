// #### Import
// remark-usage-ignore-next 2
import stubbedFs from 'mock-fs';
// eslint-disable-next-line import/extensions
import {scaffold} from './lib/index.es.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffold({projectRoot: process.cwd()});
})();
