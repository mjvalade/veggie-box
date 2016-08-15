var $veggieName = $('.veggie-name');
var $veggieSeason = $('.veggie-season');
var $submitButton = $('.submit-button');

$submitButton.on('click', function () {
  var options = { name: $veggieName.val(), season: $veggieSeason.val() };
  garden.veggies.push(new Veggie(options));
});

var garden = {
  veggies: []
};

function Veggie (options) {
  this.name = options.name;
  this.season = options.season;
  this.pickDate = null;
}
