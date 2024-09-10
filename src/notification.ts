import { Client, TextChannel, ChannelType } from "discord.js";

export async function sendNotification(client: Client, channelId: string, message: string) {
    try {
        // Utiliser client.channels.fetch pour récupérer le salon
        const channel = await client.channels.fetch(channelId) as TextChannel;

        // Vérifie si le salon est un TextChannel avec la nouvelle méthode de Discord.js v14
        if (!channel || channel.type !== ChannelType.GuildText) {
            console.error("Le salon spécifié n'existe pas ou n'est pas un salon textuel.");
            return;
        }

        // Envoyer le message de notification
        await channel.send(message);
        console.log(`Notification envoyée dans le salon ${channelId} : ${message}`);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la notification : ", error);
    }
}
