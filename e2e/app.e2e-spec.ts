import { Ng2IuclidCucumberProtractorPage } from './app.po';

describe('ng2-iuclid-cucumber-protractor App', function() {
  let page: Ng2IuclidCucumberProtractorPage;

  beforeEach(() => {
    page = new Ng2IuclidCucumberProtractorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
