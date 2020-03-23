const { exec } = require("child_process");
const removeMark = require('./removeMark.js')
const port = 799

exec(process.env['USERPROFILE'] + "\\AppData\\Local\\Lark\\Lark.exe --remote-debugging-port=" + port, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});


setTimeout(() => {
    removeMark(port)
}, 3000);
setTimeout(() => {
    removeMark(port)
}, 6000);
setTimeout(() => {
    removeMark(port)
}, 9000);