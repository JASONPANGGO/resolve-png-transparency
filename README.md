# resolve-png-transparency

实时解析 png 图片的透明区域，并生成 css 用于控制 cta 图的显示区域。

## 使用

html 直接引入 `build/png.browser.min.js`

```js
const { resolveCTAsize } = png;
resolveCTAsize("./cta.png", document.getElementById("cta"));
```
