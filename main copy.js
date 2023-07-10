// 动态加载
// require('electron-nice-auto-reload')({
//   rootPath: process.cwd(),
//   rules: [
//       {
//           // run lessc while style.less file is changed
//           // and this script will change the style.css
//           // hence reload all windows
//           action: 'script',
//           target: 'style\\.less',
//           // lessc src/css/style.less src/css/style.css
//           script: 'npm run less'
//       },
//       {
//           // relaunch the app while main process related js files
//           // were changed
//           action: 'app.relaunch',
//           target: 'preload\\.js|main\\.js'
//       }
//   ],
//   ignored: /node_modules/,
//   log: true,
//   devToolsReopen: true
// })




const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    // x:
    // y:
    show: false, //
    width: 1000, // 宽度
    height: 800, // 高度
    icon: "logo.ico",
    // frame: false,
    // transparent: true,
    // autoHideMenuBar: true,

    // maxHeight: 500,
    // maxWidth: 500,
    // minHeight: 500,
    // minWidth: 500,
    // resizable: false


    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation:false,
      preload: path.join(__dirname, 'preload.js')
      // __dirname 当前目录
    }
  })


  
  // 先内容加载
  win.loadFile('index.html')
  win.on("ready-to-show", () => {
    win.show()
  })



}

app.whenReady().then(() => {
  createWindow()

  app.on('ready', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
/*




*/