import { AngularHackDayBnePage } from './app.po';

describe('angular-hack-day-bne App', function() {
  let page: AngularHackDayBnePage;

  beforeEach(() => {
    page = new AngularHackDayBnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
