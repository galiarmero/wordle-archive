(function() {
    var a = window.open('about:blank').document;
    a.write('<!DOCTYPE html><html><head><title>Save State</title><meta name="viewport" content="width=device-width" /></head><body></body></html>');
    a.close();
    var b = a.body.appendChild(a.createElement('pre'));
    b.style.overflow = 'auto';
    b.style.whiteSpace = 'pre-wrap';
    b.style.wordBreak = 'break-word';
    // Strip cached fonts, ad plugin caching etc
    var filteredObj = {};
    Object.keys(window.localStorage)
        .map(function (key) {
            filteredObj[key] = true;
        });
    var c = JSON.stringify(filteredObj);
    b.appendChild(a.createTextNode(c));
})();
