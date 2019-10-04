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
var fs_extra_1 = __importDefault(require("fs-extra"));
var inversify_1 = require("inversify");
var DefaultTemplate = /** @class */ (function () {
    function DefaultTemplate(logger, checker) {
        this.logger = logger;
        this.checker = checker;
    }
    DefaultTemplate.prototype.generateFile = function (nameOfFileWithExtension, fileContent, hasPath, pathOfFile) {
        if (hasPath === void 0) { hasPath = false; }
        if (pathOfFile === void 0) { pathOfFile = ''; }
        this.logger.showGenerate(nameOfFileWithExtension);
        this.checkIfDirExistElseMakeDir(hasPath, pathOfFile);
        var fileExists = this.checker.checkExistence(pathOfFile + "/" + nameOfFileWithExtension);
        if (!fileExists) {
            this.createFile(pathOfFile, nameOfFileWithExtension, fileContent);
        }
    };
    ;
    DefaultTemplate.prototype.checkIfDirExistElseMakeDir = function (hasPath, pathOfFile) {
        if (hasPath) {
            this.checker.checkIfDirExistElseMakeDir(pathOfFile);
        }
    };
    DefaultTemplate.prototype.createFile = function (pathOfFile, fileName, fileContent, fileExists) {
        var _this = this;
        if (fileExists === void 0) { fileExists = false; }
        var filepath = process.cwd() + (pathOfFile + "/" + fileName);
        fs_extra_1.default.writeFile(filepath, fileContent, function (error) {
            if (!error && fileExists === false) {
                _this.logger.showCreate(fileName, pathOfFile);
            }
            else if (!error && fileExists === true) {
                _this.logger.showUpdate(fileName, pathOfFile);
            }
            else {
                _this.logger.showError(error);
            }
        });
    };
    DefaultTemplate.prototype.fileAlreadyExist = function (fileName) {
        this.logger.showError(fileName + " already exists!");
        process.exit(1);
    };
    DefaultTemplate = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Logger')),
        __param(1, inversify_1.inject('Checker'))
    ], DefaultTemplate);
    return DefaultTemplate;
}());
exports.DefaultTemplate = DefaultTemplate;
