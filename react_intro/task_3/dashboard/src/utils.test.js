import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the correct year', () => {
	const testDate = new Date('2024-01-01');
	jest.useFakeTimers().setSystemTime(testDate);

	const year = getFullYear();
	expect(year).toEqual(2024);

	jest.useRealTimers();
});


describe('getFooterCopy tests', () => {
	test('getFooterCopy when True returns the correct string', () => {
		const getFooterCopyTrue = getFooterCopy(true);
		expect(getFooterCopyTrue).toBe("Holberton School");
	});

	test('getFooterCopy when False returns the correct string', () => {
		const getFooterCopyFalse = getFooterCopy();
		expect(getFooterCopyFalse).toBe("Holberton School main dashboard");
	});
})


test('getLatestNotification return the correct string', () => {
	const expectedHtml = { __html: "<strong>Urgent requirement</strong> - complete by EOD" };
	const message = getLatestNotification();
	expect(message).toEqual(expectedHtml);
})



