import { EmbedBuilder } from "discord.js";

export function getMotionStakingStartedMentions() {
  return "a new payment request has been made and is pending taking 0/100 CHR Staked";
}

function getActionTypeImage(actionType: string){
  if(actionType == "PAYMENT_MOTION"){
    return "https://raw.githubusercontent.com/MacDuPain/Bot/c55dc8239b756b4a1c08f81354c4da22155a8d3f/src/Assets/images/Motion.png"
  } else {
    return "https://raw.githubusercontent.com/MacDuPain/Bot/Development/src/Assets/images/Forced.png"
  }
}

export function getMotionStakingStartedEmbed(timestamp: number) {
  const thumbnailUrl = getActionTypeImage("PAYMENT_FORCE")

  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("💰 New Payment")
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