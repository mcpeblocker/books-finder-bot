import bot from "../core/bot";

bot.command("start", async (ctx) => {
    await ctx.replyWithHTML(ctx.i18n.t("start"));
});