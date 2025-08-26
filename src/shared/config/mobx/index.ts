import { configure } from 'mobx';

// This way mobx will consider all actions in methods as they are wrapped in runInAction
export const configureMobX = () =>
  setTimeout(() => {
    configure({
      enforceActions: 'never',
      isolateGlobalState: true,
      reactionScheduler: f => setTimeout(f),
    });
  });
