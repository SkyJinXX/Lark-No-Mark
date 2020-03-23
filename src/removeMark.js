const CDP = require('chrome-remote-interface');
const JAVA_SCRIPT = `{
    document.querySelector('.lark-water-mark-main').remove()
    document.querySelector('.lark-water-mark').remove()
}`;


module.exports =  async function init (port = 799) {
    const targetList = await CDP.List({port})
    for (target of targetList) {
        excuteTarget(target)
    }
}
async function excuteTarget(target) {
    let client
    try {
        client = await CDP({target})
    
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

        console.log('success:   ', target.title)
    } catch (error) {
        console.error(error);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

// init()