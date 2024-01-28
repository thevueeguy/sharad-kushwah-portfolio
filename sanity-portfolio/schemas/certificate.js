export default {
    name: "certificate",
    title: "Certificate",
    type: "document",
    fields: [
      {
        name: "title",
        title: "title",
        description:"Title of the certificate",
        type: "string",
      },
      {
        name: "certificate",
        title: "Certificate",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "summary",
        title: "Summary",
        type: "string",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      }
    ],
  };
  