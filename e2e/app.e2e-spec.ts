import { ImgWebAdminPage } from './app.po';

describe('img-web-admin App', () => {
  let page: ImgWebAdminPage;

  beforeEach(() => {
    page = new ImgWebAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
