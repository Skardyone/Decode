import sanityClient, { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN!;

export const client = createClient({
    projectId,
    token,
    dataset,
    useCdn:true
})