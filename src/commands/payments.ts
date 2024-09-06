import { CommandInteraction, SlashCommandBuilder, Message } from "discord.js";
import { getMotionStakingStartedMentions, getMotionStakingStartedEmbed }  from "../embed_builders/motionStakingStartedEmbed"
import { storeDiscordNotification } from "../script";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const data = new SlashCommandBuilder()
    .setName("payments")
    .setDescription("Notify of payments transaction")

export async function execute(interaction: CommandInteraction, timestamp: number) {

    // Mention the user who triggered the command
    const userId = interaction.user.id;

    // Create the embed
    const embed = getMotionStakingStartedEmbed(timestamp)
    const mentions = getMotionStakingStartedMentions()

    // Send the reply and get the message object
    const message: Message = await interaction.reply({
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
      ],
      fetchReply: true, // Ensure the reply is fetched
    });

    // Log or use the message information
    console.log("Notification sent:");
    // console.log(message);
    console.log(`Message ID: ${message.id}`);
    console.log(`Channel ID: ${message.channel.id}`);
    await storeDiscordNotification(message)
      .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
}