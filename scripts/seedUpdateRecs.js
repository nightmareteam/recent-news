const path = require('path');
const fs = require('fs');
const faker = require('faker');

const outFile = fs.createWriteStream(
    path.resolve(__dirname, '..', 'server', 'database', 'data', 'updates.csv')
)

// Write fields on first line
outFile.write('game_id, posted_by, post_date, title, text, img, comment_count\n', () => {
    writeUpdates();
});

const writeUpdates = async () => {
    for (let i = 0; i < 1000; i++) {
        const updates = Math.floor(Math.pow(Math.random(), 2) * 20 + 2);
        for (let j = 0; j < updates; j++) {
            const record = [
                i, // game_id
                faker.internet.userName(), // posted_by
                faker.date.past().toISOString(), // post_date
                '"' + faker.lorem.sentence(4, false, 4) + '"', // title
                faker.lorem.paragraph(3, false, 5), // text 
                faker.image.abstract(), // img
                faker.random.number(), // comment_count
            ]
            const csv = record.join(',') + '\n';
            if (!outFile.write(csv)) {
                await new Promise((resolve) => {
                    outFile.once('drain', resolve);
                });
            };
        }
    }
}
