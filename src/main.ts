import { config } from 'dotenv';
config();
import { session } from "grammy";
import { hydrateReply } from "parse-mode";
import bot from "./core/bot";
import { initCommands } from "./core/commands";
import { i18n } from "./core/i18n";
import { SessionData } from "./core/session";
import languageRouter from "./routes/language";

bot.use(hydrateReply);
bot.use(session({ initial: (): SessionData => ({ step: "idle", language: "uz" }) }));
bot.use(i18n.middleware());
bot.use(languageRouter);

initCommands(bot);

import('./commands');

bot.start();
