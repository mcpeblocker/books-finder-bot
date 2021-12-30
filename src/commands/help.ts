import bot from "../core/bot";
import { bold } from "../utils/format";

bot.command("help", async (ctx) => {
    await ctx.replyWithHTML(ctx.i18n.t('help'));
});
