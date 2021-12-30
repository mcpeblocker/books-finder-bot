// make text bold
export const bold = (text: string) => `<b>${text}</b>`;

// make text italic
export const italic = (text: string) => `<i>${text}</i>`;

// make text link
export const link = (text: string, url: string) => `<a href="${url}">${text}</a>`;

// make text code
export const code = (text: string) => `<code>${text}</code>`;

// make text underlined
export const underline = (text: string) => `<u>${text}</u>`;

// make text strikethrough
export const strikethrough = (text: string) => `<s>${text}</s>`;