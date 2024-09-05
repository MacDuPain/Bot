import { CommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("personalized")
    .setDescription("Notify of personalized transaction")
    .addIntegerOption(option => 
      option.setName("amount")
          .setDescription("The amount of the transaction")
          .setRequired(true))
    .addStringOption(option => 
      option.setName("user")
          .setDescription("user name")
          .setRequired(true))
    .addStringOption(option => 
      option.setName("team")
          .setDescription("team name")
          .setRequired(true));

export async function execute(interaction: CommandInteraction, timestamp: number) {
    const amount = interaction.options.get("amount")?.value as number;
    const user = interaction.options.get("user")?.value as string;
    const team = interaction.options.get("team")?.value as string;

    const button = new ButtonBuilder()
    .setLabel("View transaction on Colony")
    .setStyle(ButtonStyle.Link)
    .setURL("https://coconut-harrier-5b4.notion.site/Colony-Notification-discord-bot-d4f2334903a4481d9c11253b7ed9c808");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    // Mention the user who triggered the command
    const userId = interaction.user.id;

    // Create the embed
    const embed = new EmbedBuilder()
      .setColor(0x1cae9f)
      .setAuthor({ name: `${team}`})
      .setTitle("New Payment")
      .setDescription(`**${amount} CHR** has been requested to **${user}** ({recipient en development})`)
      // .setThumbnail(`Status image`)
      .addFields({ name: "\u200B", value: `In **${team}** team.` })
      .setFooter({
        text: `Tsx : {transactionId on development} - ${new Date(
          timestamp * 1000
        ).toUTCString()}`,
      });

    return interaction.reply({
      content: `<@${userId}> a new payment request has been made and is pending staking 0/100 CHR Staked`,
      embeds: [embed],
      components: [row]
    });
}