class LanguageChooserController {
  constructor($translate) {
    "ngInject";
    Object.assign(this, {
      $translate,
      providedLangs: {
        de: "Deutsch",
        en: "English",
        fr: "Français",
        sv: "Svenska",
        es: "Español",
        eo: "Esperanto"
      }
    });
  }

  changeLanguage(langKey) {
    this.$translate.use(langKey);
  }
}

export default LanguageChooserController;
