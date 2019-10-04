"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var kleur_1 = require("kleur");
var figlet = __importStar(require("figlet"));
var inversify_1 = require("inversify");
var console_message_1 = require("../models/console-message");
var Logger = /** @class */ (function () {
    function Logger() {
        this.newLine = '\n';
    }
    Logger.prototype.showTitleAndBanner = function () {
        console.log(kleur_1.cyan(figlet.textSync(console_message_1.ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
        console.info(kleur_1.cyan(console_message_1.ConsoleMessage.BANNER));
    };
    Logger.prototype.showError = function (message) {
        console.error(kleur_1.red(console_message_1.ConsoleMessage.ERROR) + message);
    };
    Logger.prototype.showSuccess = function (message) {
        console.log(kleur_1.green(console_message_1.ConsoleMessage.SUCCESS) + message + this.newLine);
    };
    Logger.prototype.showInfo = function (message) {
        console.info(kleur_1.cyan(console_message_1.ConsoleMessage.INFO) + message + this.newLine);
    };
    Logger.prototype.showGenerate = function (fileName) {
        console.log(kleur_1.cyan(console_message_1.ConsoleMessage.GENERATE) + (fileName + "..."));
    };
    Logger.prototype.showCreate = function (fileName, filePath) {
        filePath
            ? console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + (fileName + " in " + filePath))
            : console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + ("" + fileName));
    };
    Logger.prototype.showUpdate = function (fileName, filePath) {
        filePath
            ? console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + (fileName + " in " + filePath))
            : console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + ("" + fileName));
    };
    Logger = __decorate([
        inversify_1.injectable()
    ], Logger);
    return Logger;
}());
exports.Logger = Logger;
