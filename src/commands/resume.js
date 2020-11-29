module.exports = {
    name: "resume",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        if (serverQueue.playing) return message.channel.send("대기열 재생 중");
        serverQueue.resume();
        message.channel.send("재개되었습니다!");
    }
};