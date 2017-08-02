var dht = require('beaglebone-dht'),
    sensor = dht.sensor('DHT22'),
    read;

/**
{
    celsius: 21.899999618530273,
    fahrenheit: 71.4199993133545,
    humidity: 53
}
**/
setInterval(toggle, 1000);

function toggle() {
    read = dht.read('P8_11');
    console.log(read);
    if(read){
      console.log(read['celsius'])
    }
}