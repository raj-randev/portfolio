const awsmobile = {
    aws: {
      ...
      // Other AWS configuration settings
    },
    aws_content_delivery: {
      s3: {
        contentDisposition: 'auto', // You can set other headers as needed
        contentEncoding: 'auto',
        contentLanguage: 'auto',
        contentType: {
          'image/*': 'auto', // Example for images
          'video/*': 'auto', // Example for videos
          'application/octet-stream': 'auto', // Example for binary files like GLB
          // Add more entries as needed
        },
      },
    },
  };
  
  export default awsmobile;