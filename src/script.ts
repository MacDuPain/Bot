import { Message } from "discord.js";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Définir une interface pour l'objet discordMember
interface DiscordMember {
  colonyUserId: string;
  discordUserId: string;
  walletAddress: string;
}

export async function storeDiscordMember(discordMember: DiscordMember) {
  try {
    const user = await prisma.user.create({
      data: {
        id: discordMember.colonyUserId,
        discordUserId: discordMember.discordUserId,
        walletAdress: discordMember.walletAddress
      },
    });
    console.log("🎉 L'utilisateur a bien été enregistré");
    // console.log(user);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function storeDiscordNotification(colonyTransactionId: string, discordAnswer: Message) {
  try {
    const notification = await prisma.notification.create({
      data: {
        transactionId: colonyTransactionId,
        discordLink: discordAnswer.id,
      },
    });
    console.log("🎉 Les notifications sont bien enregistrées");
    // console.log(notification);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
