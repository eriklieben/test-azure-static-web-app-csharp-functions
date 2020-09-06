import { HttpClient } from 'aurelia';

export class Welcome {
  
  public name = 'Aurelia 2';
  public message = `Welcome to ${name}!`;

  constructor(private httpClient: HttpClient) {   
  }

  public async clickMe() {
    var response = await this.httpClient.fetch("/api/HttpTriggerCSharp1?name=" + this.name);
    this.message = `Welcome to ${await response.text()}!`;
  }
}
