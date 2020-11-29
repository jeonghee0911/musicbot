module.exports = {
    name: "nowplaying",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        if (!serverQueue.playing) return message.channel.send("음악이 일시중지 되어있어요!");
        const currSong = serverQueue.songs[0];
        message.channel.send(`지금 재생 중: **${currSong.info.title}** by *${currSong.info.author}*`);
    }
};