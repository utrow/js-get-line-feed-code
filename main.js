function getLineFeedCode(text) {
    const code = ["\r\n", "\r", "\n"];

    for (i = 0; i < code.length; i++) {
        if (text.indexOf(code[i]) > 0) {
            return code[i];
        }
    }
    return code[0];
}