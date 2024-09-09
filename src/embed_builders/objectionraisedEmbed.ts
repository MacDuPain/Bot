import { EmbedBuilder } from "discord.js";

export function getObjectionRaisedMentions() {
  return "an objection was raised.\n" +
  "Vote on this motion is starting, it closed in 72h.";
}

export function getObjectionRaisedEmbed(timestamp: number, thumbnailUrl: string) {

  const embed = new EmbedBuilder()
    .setColor(0xe8833a)
    .setTitle("New Payment")
    .setDescription(
      `**{amountPayed} {colonyTickers}** has been requested to **{recipientUsername}** ({recipient})`
    )
    .setThumbnail(thumbnailUrl)
    .setAuthor({
      name: `{colonyName}`,
      iconURL: "https://raw.githubusercontent.com/MacDuPain/Bot/master/src/Assets/images/Logo-ChronoDAO.png",
    })
    .addFields({ value: `In **{domain}** team.`, name: "\u200B" })
    .setFooter({
      text: `Tsx : {transactionId} - ${new Date(
        timestamp * 1000
      ).toUTCString()}`,
    });

  return embed;
}