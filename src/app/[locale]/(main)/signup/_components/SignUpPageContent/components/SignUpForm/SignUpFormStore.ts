import { makeAutoObservable } from 'mobx';

export class SignUpFormStore {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async login(): Promise<void> {
    this.isLoading = true;
  }
}
