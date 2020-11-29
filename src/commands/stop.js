module.exports = {
    name: "stop",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        serverQueue.destroy();
        message.channel.send("연결이 끊어졌습니다!");
    }
};