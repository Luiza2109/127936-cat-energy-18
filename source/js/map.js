ymaps.ready(init);
var myMap,
    myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.9387,30.3216],
      zoom: 16
  });

  myPlacemark = new ymaps.Placemark([59.9386, 30.3231], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: [93, 86],
    iconImageOffset: [-60, -110]
  });

  myMap.geoObjects.add(myPlacemark);
}
