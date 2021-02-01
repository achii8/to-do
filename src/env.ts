export default class Env {
    PORT = process.env.port || 3000;
    PASSWORD_SALT = "$2b$10$sAiRCNbK2s/xSGFV2rQtdu";
    DATABASE = "mongodb+srv://achii8:beyonce123@a1.xsw32.mongodb.net/travel-assistant-db?retryWrites=true&w=majority"
}