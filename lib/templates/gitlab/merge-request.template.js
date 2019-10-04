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
var MergeRequest = /** @class */ (function () {
    function MergeRequest(defaultTemplate) {
        this.defaultTemplate = defaultTemplate;
        this.fileName = filename_1.FileName.MERGE_REQUEST;
        this.hasPath = true;
        this.pathOfFile = path_1.GitlabPath.MERGE_REQUEST_TEMPLATE;
    }
    MergeRequest.prototype.generateFile = function () {
        this.defaultTemplate.generateFile(this.fileName, this.fileContent(), this.hasPath, this.pathOfFile);
    };
    MergeRequest.prototype.fileContent = function () {
        return "# What does this implement/fix? Explain your changes.\n\u2026\n## Does this close any currently open issues?\n\u2026\n## Any relevant logs, error output, etc?\n(Please put this in a code block, so it is more readable for reviewers )\n## Any other comments?\n...\n## Where has this been tested?\n**Browsers:**\n- [ ] Chrome\n- [ ] Firefox\n- [ ] Safari\n- [ ] IE 11\n- [ ] Edge\n- [ ] Opera\n        ";
    };
    MergeRequest = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('DefaultTemplate'))
    ], MergeRequest);
    return MergeRequest;
}());
exports.MergeRequest = MergeRequest;
