const base = {
  formatOptions: {snippetInterface: 'async-await'},
  publishQuiet: true
};

export default base;

export const wip = {
  ...base,
  tags: '@wip'
};

export const noWip = {
  ...base,
  tags: '@wip'
};

export const focus = {
  ...base,
  tags: '@focus'
};
