import { WPPage } from './app.po';

describe('wp App', () => {
  let page: WPPage;

  beforeEach(() => {
    page = new WPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
