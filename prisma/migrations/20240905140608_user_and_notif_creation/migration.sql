-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "discordUserId" TEXT NOT NULL,
    "walletAdress" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notification" (
    "transactionId" TEXT NOT NULL PRIMARY KEY,
    "discordLink" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAdress_key" ON "User"("walletAdress");
