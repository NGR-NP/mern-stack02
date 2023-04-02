function transformString(str, replacement = '-', regexToRemove, locale = 'en-US') {
    // Replace spaces with the specified replacement character
    const strWithSpacesReplaced = str.replace(/\s+/g, replacement);

    // Remove any characters matching the specified regex (if provided)
    const strWithRegexRemoved = regexToRemove
        ? strWithSpacesReplaced.replace(regexToRemove, '')
        : strWithSpacesReplaced;

    // Convert to lower case based on the specified locale
    const strLowercased = strWithRegexRemoved.toLocaleLowerCase(locale);

    // Strip special characters except the replacement character
    const allowedChars = `-${replacement}a-z0-9`;
    const strStripped = strLowercased.replace(new RegExp(`[^${allowedChars}]`, 'g'), '');

    // Trim leading and trailing replacement characters
    const strTrimmed = strStripped.replace(new RegExp(`^${replacement}+|${replacement}+$`, 'g'), '');

    return strTrimmed;
}
module.exports = transformString