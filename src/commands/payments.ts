import { CommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { getMotionStakingStartedMentions, getMotionStakingStartedEmbed } from "../embed_builders/motionStakingStartedEmbed";
import { sendNotification } from '../notification';

export const data = new SlashCommandBuilder()
  .setName("payments")
  .setDescription("Notify of payments transaction");

export async function execute(interaction: CommandInteraction, timestamp: number) {

  try {
    await interaction.deferReply();

    const button = new ButtonBuilder()
      .setLabel("View transaction on Colony")
      .setStyle(ButtonStyle.Link)
      .setURL("https://coconut-harrier-5b4.notion.site/Colony-Notification-discord-bot-d4f2334903a4481d9c11253b7ed9c808");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    const userId = interaction.user.id;

    const embed = getMotionStakingStartedEmbed(timestamp);
    const mentions = getMotionStakingStartedMentions();

    await interaction.editReply({
      content: `<@${userId}> ${mentions}`,
      embeds: [embed],
      components: [row]
    });

    // Envoyer une notification dans un autre salon après l'exécution de la commande
    const targetChannelId = '1280516801918406722';
    const notificationMessage = `${interaction.user.username} vient d'effectuer une transaction via /payments !`;

    await sendNotification(interaction.client, targetChannelId, notificationMessage);
    console.log("Notification envoyée avec succès.");

  } catch (error) {
    console.error("Erreur lors de l'exécution de la commande /payments : ", error);
  }
}
