import { Bot } from "grammy";
import BotContext from "./context";

export const initCommands = (bot: Bot<BotContext>) => bot.api.setMyCommands([
    { command: "start", description: "Botni ishga tushirish" },
    { command: "help", description: "Bot buyruqlari haqida ma'lumot" },
    { command: "language", description: "Bot tili" },
    { command: "developer", description: "Bot yaratuvchisi" },
]);