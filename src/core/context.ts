import { I18nContextFlavor } from "@grammyjs/i18n/dist/source";
import { Context, SessionFlavor } from "grammy";
import { ParseModeContext } from 'parse-mode';
import { SessionData } from "./session";

type BotContext = 
    & Context
    & SessionFlavor<SessionData>
    & ParseModeContext
    & I18nContextFlavor;

export default BotContext;