import { Client } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

//Bloc ready : Utilise le cache des guildes pour accéder aux guildes déjà connectées, l'événement est simplement déclenché lorsque le client est prêt et ne passe aucun argument à la fonction de rappel. D'où la nécessité de déclarer guilds
client.once("ready", async () => {
    const guilds = client.guilds.cache; //Cette propriété contient un cache des guildes auxquelles le bot est connecté.
    for (const guild of guilds.values()) { //On itère sur chaque guilde pour déployer les commandes.
        await deployCommands({ guildId: guild.id });
    }
    console.log("Discord bot is ready! 🤖");
});

//Bloc guildCreate : La guilde est directement fournie en parametre par l'evenement, donc pas besoin de déclaration supplémentaire.
client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

client.login(config.DISCORD_TOKEN);