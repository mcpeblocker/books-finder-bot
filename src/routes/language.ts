import { Router } from '@grammyjs/router';
import BotContext from '../core/context';
import { bold } from '../utils/format';
import { getLangCode, languages } from '../utils/languages';
import { getLanguages } from '../utils/texts';

const router = new Router<BotContext>((ctx) => ctx.session.step);

router.route("language", async (ctx) => {
    const lang = getLangCode(ctx.msg?.text);
    if (!lang) {
        await ctx.reply("🇺🇸 Please, select the language.\n\n🇷🇺 Пожалуйста, выберите язык.\n\n🇺🇿 Iltimos, tilni tanlang.");
        ctx.session.step = "language";
        return;
    }
    ctx.i18n.locale(lang);
    ctx.replyWithHTML(ctx.i18n.t("start"), {
        reply_markup: {
            remove_keyboard: true
        }
    });
    ctx.session.step = "idle";
});

export default router;