"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var cli_1 = require("./cli");
var logger_util_1 = require("./utils/logger.util");
var checker_util_1 = require("./utils/checker.util");
var default_template_1 = require("./templates/default/default.template");
var feature_request_template_1 = require("./templates/github/feature-request.template");
var merge_request_template_1 = require("./templates/gitlab/merge-request.template");
function index() {
    var container = new inversify_1.Container();
    // Utils
    container.bind('Logger').to(logger_util_1.Logger).inSingletonScope();
    container.bind('Checker').to(checker_util_1.Checker).inSingletonScope();
    // Default Template
    container.bind('DefaultTemplate').to(default_template_1.DefaultTemplate).inSingletonScope();
    // Github Templates
    container.bind('FeatureRequest').to(feature_request_template_1.FeatureRequest).inSingletonScope();
    // Gitlab Templates
    container.bind('MergeRequest').to(merge_request_template_1.MergeRequest).inSingletonScope();
    container.bind('CLI').to(cli_1.CLI).inSingletonScope();
    return container.get('CLI');
}
exports.index = index;
;
index();
