import { ArkCliPage } from './app.po';

describe('ark-cli App', function() {
  let page: ArkCliPage;

  beforeEach(() => {
    page = new ArkCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
