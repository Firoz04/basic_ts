class LoginPage {
  get username() { return $('#user-name'); }
  get password() { return $('#password'); }
  get loginBtn() { return $('#login-button'); }

  async login(user: string, pass: string): Promise<void> {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
