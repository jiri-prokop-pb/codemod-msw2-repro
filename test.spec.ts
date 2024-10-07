import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'isomorphic-fetch';

describe('test with MSW', () => {
  const server = setupServer();

  afterEach(() => {
    server.resetHandlers();
  });

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should fetch', async () => {
    let params: URLSearchParams = new URLSearchParams();

    server.use(
      rest.get('/api', (req, res, ctx) => {
        params = req.url.searchParams;

        return res(
          ctx.json({
            data: [],
          }),
        );
      }),
    );

    const response = await fetch('/api?models[]=a&models[]=b');

    expect(await response.json()).toEqual({
      data: [],
    });

    expect(params.getAll('models[]')).toEqual(['a', 'b']);
  });
});
