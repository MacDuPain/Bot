import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function verifyIfNotificationSent(transactionId: string):  Promise<boolean> {
  try {
    const notification = await prisma.notification.findUnique({
      where: { transactionId },
    });
    return notification !== null;
  } catch (error) {
    console.error('Error verifying notification:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}