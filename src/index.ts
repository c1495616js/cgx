import 'reflect-metadata';
import { Container } from 'inversify';
import { CLI } from './cli';
import { Logger } from './utils/logger.util';
import { Checker } from './utils/checker.util';
import { DefaultTemplate } from './templates/default/default.template';
import { FeatureRequest } from './templates/github/feature-request.template';
import { MergeRequest } from './templates/gitlab/merge-request.template';

export function index(): CLI {
  const container: Container = new Container();

  // Utils
  container.bind<Logger>('Logger').to(Logger).inSingletonScope();
  container.bind<Checker>('Checker').to(Checker).inSingletonScope();

  // Default Template
  container.bind<DefaultTemplate>('DefaultTemplate').to(DefaultTemplate).inSingletonScope();

  // Github Templates
  container.bind<FeatureRequest>('FeatureRequest').to(FeatureRequest).inSingletonScope();

  // Gitlab Templates
  container.bind<MergeRequest>('MergeRequest').to(MergeRequest).inSingletonScope();

  container.bind<CLI>('CLI').to(CLI).inSingletonScope();

  return container.get<CLI>('CLI');
};

index();