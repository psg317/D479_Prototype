(function(window, undefined) {
  var dictionary = {
    "01cc8191-6a18-4da1-80e9-80ec7c46304e": "Lodging",
    "5e7f2f48-10b3-4c52-83b9-ccb7fd4c2770": "Transportation",
    "ba07b52f-d037-4021-9c7e-000fea9eede3": "Dining",
    "2116ec50-aa70-40ee-9f2b-adf92e395aaa": "Bookings",
    "6f8b8a97-430b-4700-9615-97d8089f8caf": "Activities",
    "e63d8a24-94a8-4626-8e09-cf3cfaa53fe9": "FAQ",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);