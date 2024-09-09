import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commands } from './index';  // Importer ton objet commands

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Displays this help message');

export async function execute(interaction: ChatInputCommandInteraction) {
  let helpMessage = '**Voici la liste des commandes disponibles :**\n';

  // Parcourt toutes les commandes dans l'objet commands
  for (const commandName in commands) {
    if (commands.hasOwnProperty(commandName)) {
      const command = commands[commandName];
      if (command.data && command.data.name && command.data.description) {
        helpMessage += `\`/${command.data.name}\`: ${command.data.description}\n`;
      }
    }
  }

  // Répond avec le message d'aide
  await interaction.reply(helpMessage);
}
