export enum ResourceType {
  VirtualMachine = 'virtual-machine',
  Container = 'container',
  ObjectStorage = 'object-storage',
}

export enum ResourceSource {
  AWS = 'aws',
  Google = 'google',
}

export interface ResourceFilter {
  resourceTypes?: ResourceType | ResourceType[],
  resourceSources?: ResourceSource | ResourceSource[],
  locations?: string | string[],
  projects?: string | string[],
  tags?: string | string[],
}
