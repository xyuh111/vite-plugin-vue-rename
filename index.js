module.exports = function() {
    return {
        name: 'vite-plugin-vue-rename',
        transform(code, id) {
            let newCode = code;
            if (/.*src.*index\.vue/.test(id)) {
                // 匹配 <script setup  name=“compoentName” >
                newCode = code.replace(/<script[\s\w-_'"=]*(setup|name=[\s\w-_'"=]*){1}[\s\w-_'"=]*(setup|name=[\s\w-_'"=]*){1}[\s\w-_'"=]*>/, function (value) {
                    // 匹配 compoentName
                    let componentName = value.match(/(?<=name=)"?'?[\w-_]*'?"?/);
                    componentName && (componentName = componentName[0].replace(/["']/g, ''));
                    if (!componentName) {
                        return;
                    }
                    // lang=ts|js
                    let langStr = value.match(/lang='?"?j?t?s"?'?/) || '';
                    // 添加几行代码
                    let codeStr = `
<script ${langStr}>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "${componentName}"
});
</script>

${value}
`;
                    return codeStr;
                });
            }
            return `${newCode}`;
        }
    };
};
