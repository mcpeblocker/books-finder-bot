import bot from "../core/bot";
import { languagesKeyboard } from "../utils/keyboards";
import { getLanguages } from "../utils/texts";

bot.command("language", async (ctx) => {
  const name = ctx.from!.first_name;
  const text = getLanguages(name);
  ctx.session.step = "language";
  await ctx.replyWithHTML(text, {
    reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        ...languagesKeyboard
    }
  });
});
