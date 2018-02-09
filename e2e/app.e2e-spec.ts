import {AppPage} from './app.po';

describe('n5-complete-guide App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
      AppPage.navigateTo();
      expect(AppPage.getParagraphText()).toEqual('Welcome to app!');
    });
});
