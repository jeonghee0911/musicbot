const MusicClient = require("./structures/MusicClient");

new MusicClient({
    disableMentions: "everyone",
    presence: {
        activity: {
            name: `${require("./config.json").prefix}help를 입력해 보세요!`
        }
    }
});