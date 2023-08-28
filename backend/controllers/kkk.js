
const YourModel = require('../models/YourModel');

async function getDocumentsWithExtraField() {
  try {
    const documents = await YourModel.find();

    // Add the extraField to each document
    const documentsWithExtraField = documents.map(document => {
      return {
        ...document._doc,
        extraField: 'Some value'
      };
    });

    return documentsWithExtraField;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting documents with extra field');
  }
}
