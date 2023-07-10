const {app , BrowserWindow, Menu } = require('electron')
// var electron = require('electron')

// var app = electron.app //应用
// var BrowserWindow = electron.BrowserWindow //窗口引用

var mainWindow = null // 声明要打开的主窗口


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: true,
    // show: false,
    webPreferences: {
      nodeIntegration: true, //文件的读取
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  
  let menubar = [
    {
      label: '文件',
      submenu: [
        {
          label: "打开文件",
          click(){
            console.log("打开文件")
          }
        },
        {
          type: 'separator'
        },
        {
          label: "关闭文件"
        },
        {
          label: "关于",
          role: "about"
        },
      ]
    },
    {label: '编辑'},
    {label: '选择'},
  ]
  let menu = Menu.buildFromTemplate(menubar)
  Menu.setApplicationMenu(menu)

  require('@electron/remote/main').initialize()
  require('@electron/remote/main').enable(mainWindow.webContents);
  mainWindow.loadFile('index.html')

  mainWindow.on('close', () => {
    mainWindow = null
  })
})