"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.addvertisement.search(ctx.query);
    } else {
      entities = await strapi.services.addvertisement.find(ctx.query);
    }

    let data = entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.addvertisement })
    );

    data = data.map((img_obj) => {
      let new_img = {};
      new_img["img_url"] = img_obj["img_url"];
      new_img["name"] = img_obj["name"];
      new_img["id"] = img_obj["id"];
      return new_img;
    });
    return data;
  },
};
