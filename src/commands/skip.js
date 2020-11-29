module.exports = {
    name: "skip",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        if (!serverQueue.playing) serverQueue.playing = true;
        serverQueue.skip();
        message.channel.send("건너 뛰었습니다!");
    }
};