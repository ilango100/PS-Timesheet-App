import { NewpsPage } from './app.po';

describe('newps App', () => {
  let page: NewpsPage;

  beforeEach(() => {
    page = new NewpsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
