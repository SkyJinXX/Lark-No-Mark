const CDP = require('chrome-remote-interface');

const JAVA_SCRIPT = `{
    document.querySelector('.lark-water-mark-main').remove()
    document.querySelector('.lark-water-mark').remove()
}`;

async function init () {
    const targetList = await CDP.List({port: 788})
    for (target of targetList) {
        excuteTarget(target)
    }
}
async function excuteTarget(target) {
    let client
    try {
        client = await CDP({port: 788, target})
    
        // console.log(target)
        const {CSS, DOM, Page, Runtime} = client;
        await DOM.enable();
        await CSS.enable();
        await Page.enable();

        // await Runtime.evaluate({
        //     expression: JAVA_SCRIPT
        // });
        const {styleSheetId} = await CSS.createStyleSheet({frameId: target.id});
        await CSS.setStyleSheetText({
            styleSheetId,
            text: `.lark-water-mark-main { display: none !important; } .lark-water-mark { display: none !important; }`
        });
    } catch (error) {
        console.error(error);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

init()