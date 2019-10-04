"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var inversify_1 = require("inversify");
var Checker = /** @class */ (function () {
    function Checker(logger) {
        this.logger = logger;
    }
    Checker.prototype.checkName = function (name) {
        if (name === true) {
            this.logger.showError('Invalid command: No name found after the command');
            process.exit(1);
        }
    };
    ;
    Checker.prototype.checkExistence = function (path) {
        return fs_1.default.existsSync(process.cwd() + path);
    };
    ;
    Checker.prototype.checkIfDirExistElseMakeDir = function (path) {
        var dir = this.checkExistence(path);
        if (!dir) {
            fs_1.default.mkdirSync(process.cwd() + path, { recursive: true });
        }
    };
    Checker = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Logger'))
    ], Checker);
    return Checker;
}());
exports.Checker = Checker;
