import app from './app.js';
import { connectDatabase } from './config/database.js';
import { env } from './config/env.js';

const PORT = env.PORT;

const startServer = async (): Promise<void> => {
  try {
    // Connect Database
    await connectDatabase();

    // Start Express Server
    app.listen(PORT, () => {
      console.log('=======================================');
      console.log('🚀 CampusConnect Backend Started');
      console.log(`🌍 Environment : ${env.NODE_ENV}`);
      console.log(`🔗 Server      : http://localhost:${PORT}`);
      console.log('=======================================');
    });
  } catch (error) {
    console.error('Failed to start server');
    console.error(error);
    process.exit(1);
  }
};

startServer();
