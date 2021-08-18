interface Image {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}

interface ResourceList {
  returned: number
  items: ResourceSummary[];
}

interface ResourceSummary {
  resourceURI: string;
  name: string;
}

export { Image, ResourceList, Url };
