const path = require('path');
const fs = require('fs');
const faker = require('faker');

const outFile = fs.createWriteStream(
    path.resolve(__dirname, '..', 'data', 'updates.json')
)

const writeGameUpdates = async () => {
    for (let i = 0; i < 10000000; i++) {
        const gameUpdates = {
            game_id: i,
            updates: [],
        }

        // Random number of updates biased towards 0.
        const numUpdates = Math.floor(Math.pow(Math.random(), 2) * 20);

        for (let j = 0; j < numUpdates; j++) {
            const update = {
                posted_by: faker.internet.userName(),
                post_date: faker.date.past(),
                tite: faker.lorem.sentence(4, false, 4),
                text: faker.lorem.paragraph(3, false, 5),
                img: faker.image.abstract(),
                comment_count: faker.random.number(),
            }

            gameUpdates.updates.push(update);
        }

        const doc = JSON.stringify(gameUpdates) + '\n';

        if (!outFile.write(doc)) {
            await new Promise((resolve) => {
                outFile.once('drain', resolve);
            });
        }
        
    }
}

writeGameUpdates();