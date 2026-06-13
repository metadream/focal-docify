const tmplFile = import.meta.dir + "/tmpl.html";

export const tmpl = await (async function () {
    if (tmplFile.match(/^https?:\/\//)) {
        const response = await fetch(tmplFile);
        return await response.text();
    }
    return await Bun.file(tmplFile).text();
})();