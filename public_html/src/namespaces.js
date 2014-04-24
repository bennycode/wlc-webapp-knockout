var wlc = wlc || {};

String.prototype.slug = function() {
  return this.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
          ;
};