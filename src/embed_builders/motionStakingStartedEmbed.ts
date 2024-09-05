import { EmbedBuilder } from "discord.js";

export function getMotionStakingStartedMentions() {
  return "a new payment request has been made and is pending taking 0/100 CHR Staked";
}

export function getMotionStakingStartedEmbed(timestamp: number) {

  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("💰 New Payment")
    .setDescription(
      `**{amountPayed} {colonyTickers}** has been requested to **{recipientUsername}** ({recipient})`
    )
    // .setThumbnail(
    //   "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300482191430/Forced.png"
    // )
    .setAuthor({
      name: `{colonyName}`,
      // iconURL: "attachment://colony-avatar.png",
    })
    .addFields({ value: `In **{domain}** team.`, name: "\u200B" })
    .setFooter({
      text: `Tsx : {transactionId} - ${new Date(
        timestamp * 1000
      ).toUTCString()}`,
    });

  return embed;
}