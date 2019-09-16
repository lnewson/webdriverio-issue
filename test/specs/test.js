describe("main suite", () => {
    it("some test", () => {
        browser.url("http://guinea-pig.webdriver.io")
        browser.setCookies({ name: '/test', value: 'bla', path: '/', domain: 'guinea-pig.webdriver.io' });
        const before = browser.getCookies();
        expect(before.length).toEqual(1);
        browser.deleteCookie('/test');
        const after = browser.getCookies();
        expect(after).toEqual([]);
    })
})
