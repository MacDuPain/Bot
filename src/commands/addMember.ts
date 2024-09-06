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
    .addStringOption(option => 
      option.setName("member_id")
          .setDescription("member's discord id")
          .setRequired(true))
    .addStringOption(option => 
      option.setName("member_wallet")
          .setDescription("member's wallet address")
          .setRequired(true))

export async function execute(interaction: CommandInteraction) {
    const memberId = interaction.options.get("member_id")?.value as string;
    const memberWallet = interaction.options.get("member_wallet")?.value as string;
    const colonyUserId = "3513514384653"; //id fictif

    const discordMember = {
      colonyUserId: colonyUserId,
      discordUserId: memberId,
      walletAddress: memberWallet
    };

    storeDiscordMember(discordMember)
    
    return interaction.reply({
      content: `🎉 <@${memberId}> has been added to notification list`,
    });
}