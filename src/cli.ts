import { injectable, inject } from "inversify";
import { FeatureRequest } from "./templates/github/feature-request.template";
import { MergeRequest } from "./templates/gitlab/merge-request.template";
import { providerQuestion, githubFileQuestion, gitlabFileQuestion } from "./questions";
import { Answer, ProviderChoiceValue, GithubChoiceValue, GitlabChoiceValue } from "./models/answer-choice";
import { Logger } from './utils/logger.util';

@injectable()
export class CLI {
  constructor(
    @inject('Logger') private logger: Logger,
    @inject('FeatureRequest')
    private featureRequest: FeatureRequest,
    @inject('MergeRequest')
    private mergeRequest: MergeRequest,
  ) {
    this.logger.showTitleAndBanner();
    this.executeCLI();
  }

  public async executeCLI(): Promise<any> {
    let providerAnswer: Answer = await providerQuestion();

    if (providerAnswer.provider === ProviderChoiceValue.GITHUB) {
      return this.githubActions();
    } else if (providerAnswer.provider === ProviderChoiceValue.GITLAB) {
      return this.gitlabActions();
    }
  }

  private async githubActions() {
    let githubAnswer: Answer = await githubFileQuestion();

    switch (githubAnswer.files) {
      case GithubChoiceValue.FEATURE_REQUEST: {
        return this.featureRequest.generateFile();
      }
    }
  }

  private async gitlabActions() {
    let gitlabAnswer: Answer = await gitlabFileQuestion();

    switch (gitlabAnswer.files) {
      case GitlabChoiceValue.MERGE_REQUEST: {
        return this.mergeRequest.generateFile();
      }
    }
  }
}