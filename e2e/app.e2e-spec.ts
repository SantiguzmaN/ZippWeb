import { ZippWebPage } from './app.po';

describe('zipp-web App', () => {
  let page: ZippWebPage;

  beforeEach(() => {
    page = new ZippWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
