import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        appName: "Order Printer",
        titleHomePage: "Home Page",
        titleSecondPage: "Manage Orders",
        documentation: "Online Menu",
        version: "Version",
        madeBy: "Made by João",
      },
    },
    "pt-BR": {
      translation: {
        appName: "Impressora de comandas",
        titleHomePage: "Página Inicial",
        titleSecondPage: "Gerenciar Pedidos",
        documentation: "Cardápio Online",
        version: "Versão",
        madeBy: "Feito por João",
      },
    },
  },
});
