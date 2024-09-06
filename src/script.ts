import { Message } from "discord.js";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function storeDiscordNotification(discordAnswer: Message) {
  const notification = await prisma.notification.create({
    data: {
      transactionId:  discordAnswer.id,
      discordLink: discordAnswer.channel.id,
    },
  })
  console.log("🎉 Les notifications sont bien enregistrées");
  console.log(notification)
}

