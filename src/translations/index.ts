import en from './en';
import de from './de';
import ar from './ar';
import tr from './tr';
import uk from './uk';
import ru from './ru';

export const translations = {
  en,
  de,
  ar,
  tr,
  uk,
  ru,
};

// Merge all keys from all translation files into a single type
type AllTranslations = typeof en & typeof de & typeof ar & typeof tr & typeof uk & typeof ru;

// Define TranslationKey as the union of all keys across all languages
export type TranslationKey = keyof AllTranslations;