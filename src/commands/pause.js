module.exports = {
    name: "pause",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        if (!serverQueue.playing) return message.channel.send("대기열이 이미 일시 중지되었습니다.");
        serverQueue.pause();
        message.channel.send("일시 중지되었습니다!");
    }
};