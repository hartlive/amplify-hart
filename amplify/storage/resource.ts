import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hart-eu',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read', 'write']),
      allow.entity('identity').to(['read', 'write'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write'])
    ]
  })
});