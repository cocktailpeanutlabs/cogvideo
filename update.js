module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "fs.rm",
    params: {
      path: "app"
    }
  }, {
    method: "script.start",
    params: {
      path: "install.js"
    }
  }, {
    method: "fs.copy",
    params: {
      src: "tabui.py",
      dest: "app/inference/gradio_composite_demo/tabui.py"
    }
  }]
}
