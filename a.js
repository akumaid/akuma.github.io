
function devtoolIsOpening() {
    console.clear();
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 200) {
        document.write(" Dont open Developer Tools. ");
        window.location.replace("https://www.akuma.my.id");
    }
    setTimeout(devtoolIsOpening, 100);
}
devtoolIsOpening();
