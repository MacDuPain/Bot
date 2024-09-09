import { EmbedBuilder } from "discord.js";

export function getMotionFailedMentions() {
  return "motion did not reach the required staking.\n" +
    "The motion has failed";
}

export function getMotionFailedEmbed(timestamp: number, thumbnailUrl: string) {
  
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