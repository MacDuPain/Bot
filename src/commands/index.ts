import * as ping from "./ping";
import * as transaction from "./transaction";
import * as personalized from "./personalized";
import * as payments from "./payments";
import { Client, GatewayIntentBits, CommandInteraction } from 'discord.js';
import dotenv from 'dotenv';
import { sendNotification } from '../notification';

dotenv.config();

export const commands = {
  ping,
  transaction,
  personalized,
  payments
};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log('Notifications ok');
});

// Écoute les interactions slash commands
client.on('interactionCreate', async (interaction: CommandInteraction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  // Route les commandes en fonction de leur nom
  if (commands[commandName]) {
    // Appel de la méthode "execute" de la commande
    await commands[commandName].execute(interaction, Date.now());

    // Si la commande est /payments, envoyer une notification après
    if (commandName === 'payments') {
      const notificationMessage = `${interaction.user.username} vient d'effectuer une transaction via /payments !`;

      const targetChannelId = '1280516801918406722';

      console.log("Envoi de la notification...");
      await sendNotification(client, targetChannelId, notificationMessage);
    }
  }
});

client.login(process.env.BOT_TOKEN);
