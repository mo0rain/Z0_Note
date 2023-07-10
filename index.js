const BrowserWindow = require('@electron/remote').BrowserWindow

window.addEventListener("DOMContentLoaded",()=>{


    window.onbeforeunload = function(){
        console.log("onbeforeunload")
        return false
    }

    let mainWin = require('@electron/remote').getCurrentWindow()
    let abtn = document.getElementsByClassName("windowTool")[0].getElementsByTagName('div')

    abtn[0].addEventListener('click',()=>{
        mainWin.close()
    })

    abtn[1].addEventListener('click',()=>{
        console.log(mainWin.isMaximizable())
        // mainWin.restore()
        // if(mainWin.isMaximizable()){
        //     mainWin.maximize()
        // }else{
        //     mainWin.restore()
        // }
    })

    abtn[2].addEventListener('click',()=>{
        console.log(mainWin.isMinimizable())   
        if(!mainWin.isMinimizable()){
            mainWin.minimize()
        }
    })


    const obtn = document.getElementById("btn1")
    obtn.addEventListener("click",()=>{
        // 创建窗口
        let indexMin = new BrowserWindow({
            width: 200,
            height: 200,
        })
        indexMin.loadFile("list.html")

        indexMin.on("close",()=>{
            indexMin = null
        })
    })
})