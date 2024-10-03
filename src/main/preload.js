const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  batteryApi: {
    getBatteryStatus() {
      return ipcRenderer.invoke('battery-status');
    }
  },
  updateApi: {
    checkForUpdates() {
      ipcRenderer.send('check_for_updates');
    },
    restartApp() {
      ipcRenderer.send('restart_app');
    },
    onUpdateAvailable(callback) {
      ipcRenderer.on('update_available', callback);
    },
    onUpdateDownloaded(callback) {
      ipcRenderer.on('update_downloaded', callback);
    }
  }
});