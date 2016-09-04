import { SpeakrPage } from './app.po';

describe('speakr App', function() {
  let page: SpeakrPage;

  beforeEach(() => {
    page = new SpeakrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
