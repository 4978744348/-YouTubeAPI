const MAIN_YUOTUBE_DOMAIN = "www.youtube.com";
const SECOND_YUOTUBE_DOMAIN = "youtu.be";

export const yutubeParserReq = (req) => {
    const pattern = /:\/\/(.[^\/]+)(.*)/g;
    let matchAll = req.matchAll(pattern);
    matchAll = Array.from(matchAll);
    let result;
    if (matchAll.length !== 0) {
        switch (matchAll[0][1]) {
            case MAIN_YUOTUBE_DOMAIN:
                result = matchAll[0][2].split(/v=|&/)[1];
                break;
            case SECOND_YUOTUBE_DOMAIN:
                result = matchAll[0][2].split(/\/|\?/)[1];
                break;
            default:
                result = null;
                break;
        }
    }
    return result;
}