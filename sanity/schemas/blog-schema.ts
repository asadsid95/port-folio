const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Title of the Blog",
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
        { type: "image", title: "In blog Image", name: "inblogimage" },
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
