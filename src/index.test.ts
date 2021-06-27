import { detectCategories } from ".";

describe('単一のカテゴリを判定できる', () => {
  describe('crisis: 災害を判定できる', () => {
    it.each([
      '災害が発生しました',
      '地震が発生しました',
      '洪水が発生しました',
    ])('%s', async (text) => {
      const categories = await detectCategories(text);
      const ids = categories.map((c) => {return c.id});
      expect(ids).toEqual(['crisis']);
    });
  });
  describe('politics: 政治を判定できる', () => {
    it.each([
      '首相が発言しました',
      '内閣総理大臣が発言しました',
      '国会が閉会しました',
    ])('%s', async (text) => {
      const categories = await detectCategories(text);
      const ids = categories.map((c) => {return c.id});
      expect(ids).toEqual(['politics']);
    });
  });
});

describe('複合カテゴリを判定できる', () => {
  describe('crisis, politics: 災害と政治を判定できる', () => {
    it.each([
      '首相が災害について発言しました'
    ])('%s', async (text) => {
      const categories = await detectCategories(text);
      const ids = categories.map((c) => {return c.id});
      expect(ids).toEqual(expect.arrayContaining(['crisis', 'politics']));
    });
  });
})

describe('カテゴリの出現をカウントできる', () => {
  it.each([
    '地震災害によって津波が発生しました',
  ])('%s', async (text) => {
      const categories = await detectCategories(text);
      const crisis = categories.filter((c) => {return (c.id === 'crisis')});
      expect(crisis[0].count).toBe(3);
  })

})
