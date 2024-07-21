import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  clientId: "244b0297-8071-4fb7-8656-d2c322a1c641",
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,
  token: "bf6760a0e4252782b2eacc731d0ffb90f4f8a47e",

  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: { router: () => `/` },
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true },
          { name: "body", label: "Body", type: "rich-text" },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  { name: "message", label: "Message", type: "rich-text" },
                  {
                    name: "links",
                    label: "Links",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "link", label: "Link", type: "string" },
                      { name: "label", label: "Label", type: "string" },
                      { name: "style", label: "Style", type: "string", options: ["primary", "secondary"] }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
