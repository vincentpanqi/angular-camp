import { Ng01HelloworldPage } from './app.po';

describe('angular-demo App', () => {
  let page: Ng01HelloworldPage;

  beforeEach(() => {
    page = new Ng01HelloworldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
