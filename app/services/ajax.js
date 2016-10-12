import AjaxService from 'ember-ajax/services/ajax';
import environment from '../config/environment';

let options = {};

// Solo si mirage está desactivado intenta usar la API de producción.
if (!environment['ember-cli-mirage'].enabled) {
  options.host = environment.URL_API_BACKEND;
}

export default AjaxService.extend(options);
