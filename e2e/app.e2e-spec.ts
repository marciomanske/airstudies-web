import { AirstudiesWebPage } from './app.po';

describe('airstudies-web App', function() {
  let page: AirstudiesWebPage;

  beforeEach(() => {
    page = new AirstudiesWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
