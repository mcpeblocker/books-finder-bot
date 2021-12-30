import { bold } from "./format";

export const getLanguages = (name: string): string => {
    let text = `🇺🇸 Welcome ${bold(name)}!\n`;
    text += "Choose the language that suits you.\n\n";
    text += `🇷🇺 Добро пожаловать, ${bold(name)}\n`;
    text += "Выберите язык, который вам подходит.\n\n";
    text += `🇺🇿 Xush kelibsiz, ${bold(name)}\n`;
    text += "O'zingizga qulay bo'lgan tilni tanlang\n\n";
    return text;
};