import bot from "../core/bot";
import { bold } from "../utils/format";

bot.command("help", async (ctx) => {
    const text = ctx.i18n.t('help');
    console.log("AA");
    await ctx.replyWithHTML(text);
});
