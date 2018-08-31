chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
        id: 'windowBar Test',
        width: 950,
        height: 600,
        minWidth: 976,
        minHeight: 665,
        frame: 'none'
    }
  );
});