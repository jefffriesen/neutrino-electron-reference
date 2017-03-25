import {observable, action, useStrict} from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';
useStrict(true);

@remotedev class Store {
  @observable counter = 0;

  @action increaseCounter() {
    this.counter = this.counter + 1;
  }

  @action decreaseCounter() {
    this.counter = this.counter - 1;
  }
}

export default new Store();
