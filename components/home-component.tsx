"use client";

import { PageQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function HomeComponent(props: { data: PageQuery; variables: { relativePath: string }; query: string }) {
  const data = useTina(props);
  return (
    <div>
      <h1 data-tina-field={tinaField(props.data.page, "title")}>{data.data.page.title}</h1>
      <TinaMarkdown content={data.data.page.body} />
    </div>
  );
}
