import { CubicalCalendarPage } from './app.po';

describe('cubical-calendar App', function() {
  let page: CubicalCalendarPage;

  beforeEach(() => {
    page = new CubicalCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
