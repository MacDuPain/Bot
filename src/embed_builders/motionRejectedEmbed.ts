import { EmbedBuilder } from "discord.js";

export function getMotionRejectedMentions() {
  return "the vote resulted in rejection of this motion.\n" +
    "The motion was rejected";
}

export function getMotionRejectedEmbed(timestamp: number, thumbnailUrl: string) {

  const embed = new EmbedBuilder()
    .setColor(0xd3455b)
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