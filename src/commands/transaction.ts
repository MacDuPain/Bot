import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("transaction")
    .setDescription("Notifie les transactions");

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Salut ! un utilisateur a demandé une transaction.");
}