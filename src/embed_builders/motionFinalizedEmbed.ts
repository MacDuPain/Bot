import { EmbedBuilder } from "discord.js";

export function getMotionFinalizedMentions() {
  return "the motion is executed";
}

function getMotionFinalizedEmbed(timestamp: number) {

  const embed = new EmbedBuilder()
    .setColor(0x1cae9f)
    .setTitle("New Payment")
    .setDescription(
      `**{amountPayed} {colonyTickers}** has been requested to **{recipientUsername}** ({recipient})`
    )
    .setThumbnail(
      "https://raw.githubusercontent.com/MacDuPain/Bot/c55dc8239b756b4a1c08f81354c4da22155a8d3f/src/Assets/images/Motion.png"
    )
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