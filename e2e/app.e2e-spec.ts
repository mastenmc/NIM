import { NIMPage } from './app.po';

describe('nim App', function() {
  let page: NIMPage;

  beforeEach(() => {
    page = new NIMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
