import { I18n } from '@grammyjs/i18n';
import * as path from 'path';

export const i18n  = new I18n({
    defaultLanguageOnMissing: true,
    defaultLanguage: 'uz',
    directory: path.join(__dirname, '../../locales'),
    useSession: true
});