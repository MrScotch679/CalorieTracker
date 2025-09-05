import { makeAutoObservable } from 'mobx';

export class LoginFormStore {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async handleLogin(/* { email, password }: { email: string; password: string } */): Promise<void> {
    this.isLoading = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      // await loginApi.loginViaEmail(this.toLoginViaEmailDto({ email, password }));
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  /*  private toLoginViaEmailDto({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): LoginViaEmailDto {
    return new LoginViaEmailDto(email, password);
  } */
}
