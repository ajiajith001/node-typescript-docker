import db, { gentId } from '../../src/modules/db';

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: gentId(),
        slug: 'ultimate-node-stack',
        title: 'Ultimate Node Stack 2023',
        publishedAt: new Date(),
      },
      {
        id: gentId(),
        slug: 'draft-post',
        title: 'Draft post',
      },
    ],
  });
};

// Auto-run when called directly
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}
