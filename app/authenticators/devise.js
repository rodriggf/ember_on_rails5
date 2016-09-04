import Ember from 'ember';
import Devise from 'ember-simple-auth/authenticators/devise';
const { RSVP: { Promise }, run } = Ember;

export default Devise.extend({
  store: Ember.inject.service('store'),
  tokenAttributeName: 'token',
  identificationAttributeName: 'email',

  authenticate(identification, password) {
    return new Promise((resolve, reject) => {
      var data = {
        password: password,
        [this.get('identificationAttributeName')]: identification
      };

      return this.makeRequest(data).then(
        (response) => {
          this.get('store').pushPayload(response); //too bad that pushPayload returns nothing
          var record = this.get('store').peekRecord('session', response.data.id);
          run(null, resolve, record.toJSON());
        },
        (xhr) => {
          run(null, reject, xhr.errors.get('firstObject.title'));
        }
      );
    });
  },

  makeRequest(data) {
    return this.get('store').adapterFor('session').ajax(
      this.get('store').adapterFor('session').buildURL('session'),
      "POST",
      {
        data:
        {
          data: {
            attributes: data
          }
        }
      }
    );
  }
});