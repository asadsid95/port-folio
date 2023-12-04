const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Title of the Blog",
      validation: (Rule: any) =>
        Rule.max(20).warning("Shorter titles are usually better"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content of the blog post",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          title: "In blog Image",
          name: "inblogimage",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default blog;
