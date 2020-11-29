module.exports = {
    name: "queue",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("재생목록에 음악이 없어요!");
        let index = 0;
        message.channel.send(`
**Current Queue**

${serverQueue.songs.map(songs => `**${++index}.** ${songs.info.title}`).splice(0, 10).join("\n")}
${serverQueue.songs.length <= 10 ? "" : `And ${serverQueue.songs.length - 10} more..`}
`);
    }
};