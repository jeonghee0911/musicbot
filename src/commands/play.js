module.exports = {
    name: "play",
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("음성방에 먼저 들어가고 명령어를 사용해 주세요!");

        const track = args.join(" ");
        const song = await client.musicManager.getSongs(`ytsearch: ${track}`);
        if (!song[0]) return message.channel.send("노래를 찾을 수 없습니다.");

        client.musicManager.handleVideo(message, message.member.voice.channel, song[0]);
    }
};