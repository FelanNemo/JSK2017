chrome.app.runtime.onLaunched.addListener(
  function(data){
    chrome.app.window.create(
      'index.html',
      {
        id: 'window',
        bounds: {width: 800, height: 800},
        resizable: true
      }
    );
  }
);
