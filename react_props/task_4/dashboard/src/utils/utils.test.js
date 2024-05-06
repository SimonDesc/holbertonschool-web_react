import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("should return current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });
  describe("getFooterCopy", function () {
    const trueMsg = "Holberton School";
    const falseMsg = "Holberton School main dashboard";

    it("Should return true message", function () {
      const msg = getFooterCopy(true);
      expect(msg).toEqual(trueMsg);
    });
    it("Should return false message", function () {
      const msg = getFooterCopy(false);
      expect(msg).toEqual(falseMsg);
    });
  });
  describe("getLatestNotification", function () {
    it("should return correct string element", function () {
		const expectedHtml = { __html: "<strong>Urgent requirement</strong> - complete by EOD" };
		const message = getLatestNotification();
		expect(message).toEqual(expectedHtml);
    });
  });
});
