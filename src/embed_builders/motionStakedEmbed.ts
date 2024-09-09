import { EmbedBuilder } from "discord.js";

export function getMotionStakedMentions() {
  return "motion is fully staked. If no one raise an objection, the motion will pass in 72h.";
}

export function getMotionStakedEmbed(timestamp: number, thumbnailUrl: string) {

  const embed = new EmbedBuilder()
    .setColor(0x2d88d9)
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