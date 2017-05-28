import { NgBindPage } from './app.po';

describe('ng-bind App', () => {
  let page: NgBindPage;

  beforeEach(() => {
    page = new NgBindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
