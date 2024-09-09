import { CommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { getMotionStakingStartedMentions, getMotionStakingStartedEmbed }  from "../embed_builders/motionStakingStartedEmbed"

export const data = new SlashCommandBuilder()
    .setName("payments")
    .setDescription("Notify of payments transaction");

function getActionTypeImage(actionType: string){
  if(actionType == "PAYMENT_MOTION"){
    return "https://raw.githubusercontent.com/MacDuPain/Bot/c55dc8239b756b4a1c08f81354c4da22155a8d3f/src/Assets/images/Motion.png"
  } else {
    return "https://raw.githubusercontent.com/MacDuPain/Bot/Development/src/Assets/images/Forced.png"
  }
}

export async function execute(interaction: CommandInteraction, timestamp: number) {

    const button = new ButtonBuilder()
    .setLabel("View transaction on Colony")
    .setStyle(ButtonStyle.Link)
    .setURL("https://coconut-harrier-5b4.notion.site/Colony-Notification-discord-bot-d4f2334903a4481d9c11253b7ed9c808");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    // Mention the user who triggered the command
    const userId = interaction.user.id;

    // Create the embed
    const thumbnailUrl = getActionTypeImage("PAYMENT_MOTION")
    const embed = getMotionStakingStartedEmbed(timestamp, thumbnailUrl)
    const mentions = getMotionStakingStartedMentions()

    return interaction.reply({
      content: `<@${userId}> ${mentions}`,
      embeds: [embed],
      components: [
        {
          type: 1,
          components: [
            {
              url: `https://coconut-harrier-5b4.notion.site/Colony-Notification-discord-bot-d4f2334903a4481d9c11253b7ed9c808`,
              style: 5,
              label: "View transaction on Colony",
              disabled: false,
              type: 2,
            },
          ],
        },
      ]
    });
}

