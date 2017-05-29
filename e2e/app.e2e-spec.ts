import { PortfolioPageInAngularPage } from './app.po';

describe('portfolio-page-in-angular App', () => {
  let page: PortfolioPageInAngularPage;

  beforeEach(() => {
    page = new PortfolioPageInAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
