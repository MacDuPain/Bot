import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllUsers() {
  try {
    await prisma.user.deleteMany({});
    console.log('All users have been deleted.');
  } catch (error) {
    console.error('Failed to delete all users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Appel de la fonction pour supprimer tous les utilisateurs
deleteAllUsers();