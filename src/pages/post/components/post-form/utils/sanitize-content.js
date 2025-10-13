export const sanitizeContent = (content) => content
    .replace(/\s+/g, ' ')
    .replace(' +', ' ')
    .replaceAll('<div><br></div>', '\\n')
    .replaceAll('<div>', '\n')
    .replaceAll('</div>', '')