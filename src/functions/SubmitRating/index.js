module.exports = async function (context, req) {
  try {
    // Get rating from request body
    const rating = req.body && req.body.rating;
    if (!rating || rating < 1 || rating > 5) {
      context.res = {
        status: 400,
        body: 'Please provide a valid rating (1-5)',
      };
      return;
    }

    // Connect to Table Storage using connection string from environment
    const { TableClient } = require('@azure/data-tables');
    const connectionString = process.env['StorageConnectionString'];
    const tableClient = TableClient.fromConnectionString(
      connectionString,
      'Ratings'
    );

    // Create a unique RowKey (e.g., timestamp)
    const timestamp = new Date().toISOString();
    const entity = {
      partitionKey: 'Ratings',
      rowKey: timestamp,
      rating: rating,
      submittedAt: timestamp,
    };

    // Save to Table Storage
    await tableClient.createEntity(entity);

    context.res = {
      status: 200,
      body: 'Rating submitted successfully',
    };
  } catch (error) {
    context.log.error('Error saving rating:', error);
    context.res = {
      status: 500,
      body: 'Error saving rating',
    };
  }
};
