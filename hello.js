function hello() {
    console.log('{"action":"insert","brand":"americanas","payload":"data"}');
    setTimeout(hello, 2000);
}

hello();