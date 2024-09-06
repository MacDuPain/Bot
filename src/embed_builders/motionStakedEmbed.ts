import { EmbedBuilder } from "discord.js";

export function getMotionStakedMentions() {
  return "motion is fully staked. If no one raise an objection, the motion will pass in 72h.";
}

function getActionTypeImage(actionType: string){
  if(actionType == "PAYMENT_MOTION"){
    return "https://raw.githubusercontent.com/MacDuPain/Bot/c55dc8239b756b4a1c08f81354c4da22155a8d3f/src/Assets/images/Motion.png"
  } else {
    return "https://raw.githubusercontent.com/MacDuPain/Bot/Development/src/Assets/images/Forced.png"
  }
}

export function getMotionStakedEmbed(timestamp: number) {
  const thumbnailUrl = getActionTypeImage("PAYMENT_FORCE")

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