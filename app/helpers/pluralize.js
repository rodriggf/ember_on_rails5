import Ember from 'ember';

export function pluralize(params) {
  let [word, amount] = params;
  var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

  if (amount > 1) {
    return inflector.pluralize(word);
  } else {
    return inflector.singularize(word);
  }
}

export default Ember.Helper.helper(pluralize);
