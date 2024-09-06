import { Message } from "discord.js";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function storeDiscordNotification(discordAnswer: Message) {
  try {
    const notification = await prisma.notification.create({
      data: {
        transactionId: discordAnswer.id,
        discordLink: discordAnswer.channel.id,
      },
    });
    console.log("🎉 Les notifications sont bien enregistrées");
    console.log(notification);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

