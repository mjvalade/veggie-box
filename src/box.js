var $veggieName = $('.veggie-name');
var $veggieSeason = $('.veggie-season');
var $submitButton = $('.submit-button');
var $veggieList = $('.veggie-list');

$submitButton.on('click', function () {
  var options = { name: $veggieName.val(), season: $veggieSeason.val() };
  $veggieName.val('');
  $veggieSeason.val('');

  garden.veggies.push(new Veggie(options));
  garden.render();
});

var garden = {
  veggies: [],
  render: function () {
    $veggieList.empty();
    var htmlVeggies = this.veggies.map(function(veggie, index) {
      return `<li id="veggie-${index}">Name: ${veggie.name}, Season: ${veggie.season}, Pick Date: ${veggie.pickDate || "Not picked yet."}</li>`;
    });
    $veggieList.append(htmlVeggies);
  }
};

function Veggie (options) {
  this.name = options.name;
  this.season = options.season;
  this.pickDate = null;
}
