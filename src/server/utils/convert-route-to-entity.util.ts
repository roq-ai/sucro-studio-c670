const mapping: Record<string, string> = {
  collaborators: 'collaborator',
  feedbacks: 'feedback',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
