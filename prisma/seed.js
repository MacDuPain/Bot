const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.createMany({
        data: [{
            id: 'mc_pa',
            discordUserId: '154576736317603841',
            walletAdress: '0x3F4afb08E6775e44c7302832df06c59bCD19D2f4'
        },
        {
            id: 'Jeremie',
            discordUserId: '209855484637741066',
            walletAdress: '0x25d5C9DbC1E12163B973261A08739927E4F72BA8'
        },
        {
            id: 'korblen',
            discordUserId: '270334924504956938',
            walletAdress: '0xbcE489EB76e43F1f3E14b3E8b23EA569597aa03e'
        },
        {
            id: 'tommy.pe',
            discordUserId: '1143626021808124019',
            walletAdress: '0xB24932e4571f23DB0544B505D662f3F202587F72'
        },]
    })
    console.log(users)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })