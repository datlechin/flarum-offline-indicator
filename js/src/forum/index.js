import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Application from 'flarum/common/Application';

app.initializers.add('datlechin/flarum-offline-indicator', () => {
  extend(Application.prototype, 'mount', function () {
    let alert;
    let connected;

    window.addEventListener('offline', () => {
      app.alerts.dismiss(connected);
      alert = app.alerts.show(
        {
          type: 'info',
          dismissible: false,
        },
        app.translator.trans('datlechin-offline-indicator.forum.offline')
      );
    });

    window.addEventListener('online', () => {
      app.alerts.dismiss(alert);
      connected = app.alerts.show(
        {
          type: 'success',
          dismissible: true,
        },
        app.translator.trans('datlechin-offline-indicator.forum.online')
      );
    });
  });
});
