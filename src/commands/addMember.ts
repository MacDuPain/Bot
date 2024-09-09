import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { storeDiscordMember } from "../script";

// Définir une interface pour l'objet discordMember
interface DiscordMember {
  colonyUserId: string;
  discordUserId: string;
  walletAddress: string;
}

export const data = new SlashCommandBuilder()
    .setName("add_member")
    .setDescription("Add member to colony bot notification list")
    .addUserOption(option => 
      option.setName("member_discord_id")
          .setDescription("member's discord id")
          .setRequired(true))
    .addStringOption(option => 
      option.setName("member_colony_id")
          .setDescription("member's colony id")
          .setRequired(true))
    .addStringOption(option => 
      option.setName("member_wallet")
          .setDescription("member's wallet address")
          .setRequired(true))

export async function execute(interaction: CommandInteraction) {
    const memberDiscordId = interaction.options.get("member_discord_id")?.value as string;
    const memberColonyId = interaction.options.get("member_colony_id")?.value as string;
    const memberWallet = interaction.options.get("member_wallet")?.value as string;

    const discordMember = {
      colonyUserId: memberColonyId,
      discordUserId: memberDiscordId,
      walletAddress: memberWallet
    };

    storeDiscordMember(discordMember)
    
    return interaction.reply({
      content: `🎉 <@${memberDiscordId}> has been added to notification list`,
    });
}