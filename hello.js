function hello() {
    console.log('{action:"insert",payload:"data"}');
    setTimeout(hello, 2000);
}

hello();