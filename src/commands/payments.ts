import { CommandInteraction, SlashCommandBuilder, Message, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { getMotionStakingStartedMentions, getMotionStakingStartedEmbed }  from "../embed_builders/motionStakingStartedEmbed"
import { storeDiscordNotification } from "../script";
import { verifyIfNotificationSent } from "../utilities/verifyNotificationsInDB";

export const data = new SlashCommandBuilder()
    .setName("payments")
    .setDescription("Notify of payments transaction")

export async function execute(interaction: CommandInteraction, timestamp: number) {

    const alreadyNotified = await verifyIfNotificationSent("1281557392sdvsdv592736308")
    if(alreadyNotified){
      console.log("This notification has already been sent by the bot");
      return;
    }

    // Mention the user who triggered the command
    const userId = interaction.user.id;

    // Create the embed
    const embed = getMotionStakingStartedEmbed(timestamp)
    const mentions = getMotionStakingStartedMentions()
    // Define the component
    const component = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
          .setURL("https://coconut-harrier-5b4.notion.site/Colony-Notification-discord-bot-d4f2334903a4481d9c11253b7ed9c808")
          .setStyle(ButtonStyle.Link)
          .setLabel("View transaction on Colony")
          .setDisabled(false)
    );
    
    // Send the reply and get the message object
    const message: Message = await interaction.reply({
      content: `<@${userId}> ${mentions}`,
      embeds: [embed],
      components: [component],
      fetchReply: true, // Ensure the reply is fetched
    });

    // Log or use the message information
    console.log("Notification sent:");
    // console.log(message);
    // console.log(`Message ID: ${message.id}`);
    // console.log(`Channel ID: ${message.channel.id}`);
    await storeDiscordNotification(message)

}