"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query("addvertisement").find(params, populate);
  },

  /**
   * Promise to search records
   *
   * @return {Promise}
   */

  search(params) {
    return strapi.query("addvertisement").search(params);
  },
};
