export const languages = [
    {
        code : "uz",
        title: "🇺🇿 O'zbekcha",
    },
    {
        code : "ru",
        title: "🇷🇺 Русский",
    },
    {
        code : "en",
        title: "🇺🇸 English",
    }
]

export const getLangCode = (lang: string | undefined): string | undefined => {
    if (!lang) return undefined;
    const langCode = languages.find(item => item.title === lang);
    return langCode?.code;
}