import {Server} from 'miragejs';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    environment,

    routes() {
      this.get('/api/recepies', () => {
        return {
          recepies: [
            {
              id: 1,
              category_id: 1,
              title: 'The Limit is The Sky',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
            },
            {
              id: 2,
              category_id: 2,
              title: 'Avocado Cream',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
            },
            {
              id: 3,
              category_id: 2,
              title: 'Sandwich',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
            },
            {
              id: 4,
              category_id: 2,
              title: '',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/q2b.JPEG',
            },
            {
              id: 5,
              category_id: 1,
              title: 'Panificando',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
            },
            {
              id: 6,
              category_id: 3,
              title: '',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
            },
            {
              id: 7,
              category_id: 1,
              title: 'Panificando',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
            },
            {
              id: 8,
              category_id: 3,
              title: '',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
            },
            {
              id: 9,
              category_id: 1,
              title: 'Panificando',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
            },
            {
              id: 10,
              category_id: 3,
              title: '',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
            },
            {
              id: 11,
              category_id: 3,
              title: '',
              img_url:
                'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
            },
          ],
        };
      });
    },
  });

  return server;
}
