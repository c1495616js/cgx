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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var path_1 = require("../../models/path");
var filename_1 = require("../../models/filename");
var FeatureRequest = /** @class */ (function () {
    function FeatureRequest(defaultTemplate) {
        this.defaultTemplate = defaultTemplate;
        this.fileName = filename_1.FileName.FEATURE_REQUEST;
        this.hasPath = true;
        this.pathOfFile = path_1.GithubPath.ISSUE_TEMPLATE;
    }
    FeatureRequest.prototype.generateFile = function () {
        this.defaultTemplate.generateFile(this.fileName, this.fileContent(), this.hasPath, this.pathOfFile);
    };
    FeatureRequest.prototype.fileContent = function () {
        return "---\nname: Feature request\nabout: Suggest an idea for this project\ntitle: ''\nlabels: ''\nassignees: ''\n---\n**Is your feature request related to a problem? Please describe.**\nA clear and concise description of what the problem is. Ex. I'm always frustrated when [...]\n**Describe the solution you'd like**\nA clear and concise description of what you want to happen.\n**Describe alternatives you've considered**\nA clear and concise description of any alternative solutions or features you've considered.\n**Additional context**\nAdd any other context or screenshots about the feature request here.\n        ";
    };
    FeatureRequest = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('DefaultTemplate'))
    ], FeatureRequest);
    return FeatureRequest;
}());
exports.FeatureRequest = FeatureRequest;
