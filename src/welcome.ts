import { HttpClient } from 'aurelia';

export class Welcome {
  
  public name = 'John Doe';
  public message = `Welcome to ${name}!`;

  constructor(private httpClient: HttpClient) {   
  }

  public async clickMe() {
    var response = await this.httpClient.fetch("/api/HttpTriggerCSharp1", {
      method: 'post',
      body: JSON.stringify(this.message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    this.message = `Welcome to ${await response.json()}!`;
  }

}
