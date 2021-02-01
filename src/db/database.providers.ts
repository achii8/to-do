import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://achii8:beyonce123@a1.xsw32.mongodb.net/travel-assistant-db?retryWrites=true&w=majority'),
  },
];