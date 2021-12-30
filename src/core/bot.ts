import * as process from 'process';

const token = process.env["BOT_TOKEN"]!;

import { Bot } from "grammy";
import BotContext from "./context";

const bot = new Bot<BotContext>(token);

export default bot;